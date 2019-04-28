import XEUtils from 'xe-utils'
import TableBody from './body'
import TableHeader from './header'
import Tools from '../../../src/tools'
import GlobalEvent from './event'
import VxeCheckbox from '../../checkbox'

/**
 * 渲染浮固定列
 */
function renderFixed (h, $table, fixedType) {
  let { tableData, tableColumn, collectColumn, isGroup, height, headerHeight, tableHeight, scrollYWidth, scrollXHeight, scrollRightToLeft, scrollLeftToRight, columnStore } = $table
  let customHeight = isNaN(height) ? 0 : parseFloat(height)
  let isRightFixed = fixedType === 'right'
  let style = {
    height: `${(customHeight || tableHeight) + headerHeight - scrollXHeight}px`,
    width: `${columnStore[`${fixedType}List`].reduce((previous, column) => previous + column.renderWidth, isRightFixed ? scrollYWidth + 1 : 0)}px`
  }
  return h('div', {
    class: [`vxe-table--fixed-${fixedType}-wrapper`, {
      'scrolling--middle': isRightFixed ? scrollRightToLeft : scrollLeftToRight
    }],
    style,
    ref: `fixedTable`
  }, [
    h('table-header', {
      props: {
        fixedType,
        tableData,
        tableColumn,
        collectColumn,
        isGroup
      },
      ref: `${fixedType}Header`
    }),
    h('table-body', {
      style: {
        top: `${headerHeight}px`
      },
      props: {
        fixedType,
        tableData,
        tableColumn,
        collectColumn,
        isGroup
      },
      ref: `${fixedType}Body`
    })
  ])
}

export default {
  name: 'VxeTable',
  props: {
    /** 基本属性 */
    // 数据
    data: Array,
    // 初始化绑定动态列
    customs: Array,
    // 表格的高度
    height: String,
    // 表格的最大高度
    maxHeight: String,
    // 是否带有斑马纹
    stripe: Boolean,
    // 是否带有纵向边框
    border: Boolean,
    // 表格的尺寸
    size: String,
    // 列的宽度是否自撑开
    fit: { type: Boolean, default: true },
    // 表格是否加载中
    loading: Boolean,
    // 是否显示表头
    showHeader: { type: Boolean, default: true },
    // 是否要高亮当前选中行
    highlightCurrentRow: Boolean,
    // 鼠标移到行是否要高亮显示
    highlightHoverRow: { type: Boolean, default: true },
    // 给行附加 className
    rowClassName: [String, Function],
    // 给单元格附加 className
    cellClassName: [String, Function],
    // 给表头的行附加 className
    headerRowClassName: [String, Function],
    // 给表头的单元格附加 className
    headerCellClassName: [String, Function],

    /** 高级属性 */
    // 行数据的 Key
    rowKey: [String, Number],
    // 列宽是否自动响应计算
    autoWidth: { type: Boolean, default: true },
    // 性能优化的配置项
    optimized: [Object, Boolean]
  },
  components: {
    TableBody,
    TableHeader,
    VxeCheckbox
  },
  provide () {
    return {
      $table: this
    }
  },
  data () {
    return {
      id: XEUtils.uniqueId(),
      // 完整列配置
      collectColumn: [],
      // 渲染的列
      tableColumn: [],
      // 渲染中的数据
      tableData: [],
      // 完整数据
      tableFullData: [],
      // 表格宽度
      tableWidth: 0,
      // 表格高度
      tableHeight: 0,
      // 表头高度
      headerHeight: 0,
      // 是否存在纵向滚动条
      overflowY: true,
      // 是否存在横向滚动条
      overflowX: false,
      // 纵向滚动条的宽度
      scrollYWidth: 0,
      // 横向滚动条的高度
      scrollXHeight: 0,
      // 左侧固定列是否向右滚动了
      scrollLeftToRight: false,
      // 右侧固定列是否向左滚动了
      scrollRightToLeft: false,
      // 是否全选
      isAllSelected: false,
      // 多选属性，有选中且非全选状态
      isIndeterminate: false,
      // 多选属性，已选中的列
      selection: [],
      // 单选属性
      selectRow: null,
      // 当前 hover 行
      hoverRow: null,
      // 当前选中的筛选列
      filterStore: {
        isAllSelected: false,
        isIndeterminate: false,
        style: null,
        options: [],
        column: null,
        multiple: false,
        visible: false
      },
      // 存放列相关的信息
      columnStore: {
        leftList: [],
        centerList: [],
        rightList: [],
        resizeList: [],
        pxList: [],
        pxMinList: [],
        scaleList: [],
        scaleMinList: [],
        autoList: []
      }
    }
  },
  computed: {
    // 优化的参数
    optimizeConfig () {
      let isAll = this.optimized === true
      return Object.assign({
        // 关闭所有显示效果
        animat: !isAll,
        // 如果设置了则不允许换行 ellipsis、title、tooltip
        overflow: isAll ? 'title' : null
      }, this.optimized)
    },
    // 是否使用了分组表头
    isGroup () {
      return this.collectColumn.some(column => column.children && column.children.length)
    },
    visibleColumn () {
      return this.tableColumn.filter(column => column.visible)
    }
  },
  watch: {
    data (value) {
      this.reload(value)
    },
    customs (value) {
      if (!this.isUpdateCustoms) {
        this.mergeCustomColumn(value)
      }
      this.isUpdateCustoms = false
    },
    tableColumn () {
      this.analyColumnWidth()
    },
    visibleColumn () {
      this.$nextTick(() => this.computeWidth())
    }
  },
  created () {
    GlobalEvent.on(this, 'click', this.handleGlobalClickEvent)
    GlobalEvent.on(this, 'blur', this.handleGlobalBlurEvent)
    this.reload(this.data).then(() => {
      this.tableColumn = Tools.getColumnList(this.collectColumn)
      if (this.customs) {
        this.mergeCustomColumn(this.customs)
      }
      this.refreshColumn()
      this.$nextTick(() => this.computeWidth(true))
    })
  },
  mounted () {
    document.body.appendChild(this.$refs.filterWrapper)
  },
  destroyed () {
    let filterWrapper = this.$refs.filterWrapper
    if (filterWrapper && filterWrapper.parentNode) {
      filterWrapper.parentNode.removeChild(filterWrapper)
    }
    GlobalEvent.off(this, 'click')
    GlobalEvent.off(this, 'blur')
  },
  render (h) {
    let { _e, tableData, tableColumn, collectColumn, isGroup, showHeader, border, stripe, highlightHoverRow, size, overflowX, scrollXHeight, optimizeConfig, columnStore, filterStore, confirmFilterEvent, resetFilterEvent, filterCheckAllEvent, filterOptionCheckEvent } = this
    let { leftList, rightList } = columnStore
    return h('div', {
      class: ['vxe-table', size ? `size--${size}` : '', {
        't--animat': optimizeConfig.animat,
        't--stripe': stripe,
        't--border': border,
        't--highlight': highlightHoverRow
      }]
    }, [
      /**
       * 隐藏列
       */
      h('div', {
        class: ['vxe-table-hidden-column'],
        ref: 'hideColumn'
      }, this.$slots.default),
      /**
       * 主头部
       */
      showHeader ? h('table-header', {
        ref: 'tableHeader',
        props: {
          tableData,
          tableColumn,
          collectColumn,
          isGroup
        }
      }) : _e(),
      /**
       * 主内容
       */
      h('table-body', {
        ref: 'tableBody',
        props: {
          tableData,
          tableColumn,
          collectColumn,
          isGroup
        }
      }),
      /**
       * 左侧固定列
       */
      leftList && leftList.length && overflowX ? renderFixed(h, this, 'left') : _e(),
      /**
       * 右侧固定列
       */
      rightList && rightList.length && overflowX ? renderFixed(h, this, 'right') : _e(),
      /**
       * 列宽线
       */
      h('div', {
        class: ['vxe-table--resize-bar'],
        style: {
          'padding-bottom': `${scrollXHeight}px`
        },
        ref: 'resizeBar'
      }),
      /**
       * 筛选容器
       */
      h('div', {
        class: ['vxe-table--filter-wrapper', {
          't--animat': optimizeConfig.animat,
          'filter--active': filterStore.visible
        }],
        style: filterStore.style,
        ref: 'filterWrapper'
      }, [
        h('ul', {
          class: ['vxe-table--filter-body']
        }, [
          h('li', {
            class: ['vxe-table--filter-option']
          }, [
            h('vxe-checkbox', {
              props: {
                value: filterStore.isAllSelected,
                indeterminate: filterStore.isIndeterminate
              },
              on: {
                change (value, evnt) {
                  filterCheckAllEvent(evnt, value)
                }
              }
            }, '全部')
          ])
        ].concat(filterStore.options.map((item, index) => {
          return h('li', {
            class: ['vxe-table--filter-option'],
            key: index
          }, [
            h('vxe-checkbox', {
              props: {
                value: item.checked
              },
              on: {
                change (value, evnt) {
                  filterOptionCheckEvent(evnt, value, item)
                }
              }
            }, item.label)
          ])
        }))),
        h('div', {
          class: ['vxe-table--filter-footer']
        }, [
          h('button', {
            class: {
              'is--disabled': !filterStore.isAllSelected && !filterStore.isIndeterminate
            },
            attrs: {
              disabled: !filterStore.isAllSelected && !filterStore.isIndeterminate
            },
            on: {
              click: confirmFilterEvent
            }
          }, '筛选'),
          h('button', {
            on: {
              click: resetFilterEvent
            }
          }, '重置')
        ])
      ])
    ])
  },
  methods: {
    clearSelection () {
      this.isAllSelected = false
      this.isIndeterminate = false
      this.selection = []
    },
    clearSelectRow () {
      this.selectRow = null
      this.hoverRow = null
    },
    clearSort () {
      this.tableColumn.forEach(column => {
        column.order = null
      })
      this.tableFullData = this.data || []
      this.tableData = this.tableFullData
    },
    clearFilter (force) {
      Object.assign(this.filterStore, {
        isAllSelected: false,
        isIndeterminate: false,
        style: null,
        options: [],
        column: null,
        multiple: false,
        visible: false
      })
    },
    reload (data) {
      this.clearSelection()
      this.clearSelectRow()
      this.clearSort()
      this.clearFilter()
      this.tableFullData = data || []
      this.tableData = this.tableFullData
      let rest = this.$nextTick()
      if (this.autoWidth) {
        return rest.then(this.computeWidth)
      }
      return rest
    },
    /**
     * 动态列处理
     */
    mergeCustomColumn (customColumns) {
      this.isUpdateCustoms = true
      this.tableColumn.map(column => {
        let item = customColumns.find(item => column.property && item.prop === column.property)
        column.visible = item ? !!item.visible : true
      })
      this.$emit('update:customs', this.tableColumn)
    },
    /**
     * 刷新列信息
     * 将固定的列左边、右边分别靠边
     * 如果使用了分组表头，固定列必须在左侧或者右侧
     */
    refreshColumn () {
      let isColspan
      let letIndex = 0
      let leftList = []
      let rightIndex = 0
      let centerList = []
      let rightList = []
      this.tableColumn.forEach((column, columnIndex) => {
        if (column.fixed === 'left') {
          if (!isColspan) {
            if (columnIndex - letIndex !== 0) {
              isColspan = true
            } else {
              letIndex++
            }
          }
          leftList.push(column)
        } else if (column.fixed === 'right') {
          if (!isColspan) {
            if (!rightIndex) {
              rightIndex = columnIndex
            }
            if (columnIndex - rightIndex !== 0) {
              isColspan = true
            } else {
              rightIndex++
            }
          }
          rightList.push(column)
        } else {
          centerList.push(column)
        }
      })
      this.tableColumn = leftList.concat(centerList).concat(rightList)
      Object.assign(this.columnStore, { leftList, centerList, rightList })
      if ((isColspan && this.isGroup) || (rightIndex && rightIndex !== this.tableColumn.length)) {
        throw new Error('[vxe-table] Fixed column must to the left and right sides.')
      }
    },
    /**
     * 指定列宽的列进行拆分
     */
    analyColumnWidth () {
      let resizeList = []
      let pxList = []
      let pxMinList = []
      let scaleList = []
      let scaleMinList = []
      let autoList = []
      this.tableColumn.forEach(column => {
        if (column.visible) {
          if (column.resizeWidth) {
            resizeList.push(column)
          } else if (Tools.isPx(column.width)) {
            pxList.push(column)
          } else if (Tools.isScale(column.width)) {
            scaleList.push(column)
          } else if (Tools.isPx(column.minWidth)) {
            pxMinList.push(column)
          } else if (Tools.isScale(column.minWidth)) {
            scaleMinList.push(column)
          } else {
            autoList.push(column)
          }
        }
      })
      Object.assign(this.columnStore, { resizeList, pxList, pxMinList, scaleList, scaleMinList, autoList })
    },
    /**
     * 计算单元格列宽，动态分配可用剩余空间
     * 支持 width=? width=?px width=?% min-width=? min-width=?px min-width=?%
     */
    computeWidth (refull) {
      let tableBody = this.$refs.tableBody
      let tableHeader = this.$refs.tableHeader
      if (tableBody) {
        let bodyElem = tableBody.$el
        let headerElem = tableHeader ? tableHeader.$el : null
        let bodyWidth = bodyElem.clientWidth
        let tableWidth = this.autoCellWidth(headerElem, bodyElem, bodyWidth)
        if (refull === true) {
          // 初始化时需要在列计算之后再执行优化运算，达到最优显示效果
          this.$nextTick(() => {
            bodyWidth = bodyElem.clientWidth
            if (bodyWidth !== tableWidth) {
              this.autoCellWidth(headerElem, bodyElem, bodyWidth)
            }
          })
        }
      }
    },
    // 列宽计算
    autoCellWidth (headerElem, bodyElem, bodyWidth) {
      let meanWidth
      let tableWidth = 0
      let minCellWidth = 40 // 列宽最少限制 40px
      let remainWidth = bodyWidth
      let { fit, columnStore } = this
      let { resizeList, pxMinList, pxList, scaleList, scaleMinList, autoList } = columnStore
      // 最小宽
      pxMinList.forEach(column => {
        let minWidth = parseInt(column.minWidth)
        tableWidth += minWidth
        column.renderWidth = minWidth
      })
      // 最小百分比
      meanWidth = remainWidth / 100
      scaleMinList.forEach(column => {
        let scaleWidth = Math.floor(parseInt(column.minWidth) * meanWidth)
        tableWidth += scaleWidth
        column.renderWidth = scaleWidth
      })
      // 固定百分比
      scaleList.forEach(column => {
        let scaleWidth = Math.floor(parseInt(column.width) * meanWidth)
        tableWidth += scaleWidth
        column.renderWidth = scaleWidth
      })
      // 固定宽
      pxList.forEach(column => {
        let width = parseInt(column.width)
        tableWidth += width
        column.renderWidth = width
      })
      // 调整了列宽
      resizeList.forEach(column => {
        let width = parseInt(column.resizeWidth)
        tableWidth += width
        column.renderWidth = width
      })
      remainWidth -= tableWidth
      meanWidth = remainWidth > 0 ? Math.max(Math.floor(remainWidth / (scaleMinList.length + pxMinList.length + autoList.length)), minCellWidth) : minCellWidth
      if (fit) {
        if (remainWidth > 0) {
          scaleMinList.concat(pxMinList).forEach(column => {
            tableWidth += meanWidth
            column.renderWidth += meanWidth
          })
        }
      } else {
        meanWidth = minCellWidth
      }
      // 自适应
      autoList.forEach((column, index) => {
        column.renderWidth = meanWidth
        tableWidth += meanWidth
        if (fit && index === autoList.length - 1) {
          // 如果所有列足够放的情况下，修补列之间的误差
          let odiffer = bodyWidth - tableWidth
          if (odiffer > 0) {
            column.renderWidth += odiffer
            tableWidth = bodyWidth
          }
        }
      })
      let tableHeight = bodyElem.offsetHeight
      this.scrollYWidth = bodyElem.offsetWidth - bodyWidth
      this.scrollXHeight = tableHeight - bodyElem.clientHeight - 1
      this.overflowY = this.scrollYWidth > 0
      this.overflowX = tableWidth > bodyWidth
      this.tableWidth = tableWidth
      this.tableHeight = tableHeight
      if (headerElem) {
        this.headerHeight = headerElem.offsetHeight
      }
      if (this.overflowX) {
        this.checkScrolling()
      }
      return tableWidth
    },
    /**
     * 处理固定列的显示状态
     */
    checkScrolling () {
      let { tableBody, leftBody, rightBody } = this.$refs
      let bodyElem = tableBody.$el
      if (leftBody) {
        this.scrollLeftToRight = bodyElem.scrollLeft > 0
      }
      if (rightBody) {
        this.scrollRightToLeft = bodyElem.clientWidth < bodyElem.scrollWidth - bodyElem.scrollLeft
      }
    },
    /**
     * 全局点击事件处理
     */
    handleGlobalClickEvent (evnt) {
      if (this.getEventTargetNode(evnt, this.$el, 'vxe-filter-wrapper').status) {
        // 如果点击了筛选按钮
      } else if (this.getEventTargetNode(evnt, this.$refs.filterWrapper).status) {
        // 如果点击筛选容器
      } else {
        this.clostFilter()
      }
    },
    /**
     * 窗口失焦事件
     */
    handleGlobalBlurEvent (evnt) {
      this.clostFilter()
    },
    /**
     * 检查触发源是否属于目标节点
     */
    getEventTargetNode (evnt, container, queryCls) {
      let targetElem
      let target = evnt.target
      while (target && target.nodeType && target !== document) {
        if (Tools.hasClass(target, queryCls)) {
          targetElem = target
        } else if (target === container) {
          return { status: queryCls ? !!targetElem : true, container, targetElem: targetElem }
        }
        target = target.parentNode
      }
      return { status: false }
    },
    /**
     * 多选，行选中事件
     */
    triggerCheckRowEvent (evnt, value, { row, column }) {
      let { $listeners, selection, tableData } = this
      let { property } = column
      if (property) {
        XEUtils.set(row, property, value)
        this.isAllSelected = tableData.every(item => XEUtils.get(item, property))
        this.isIndeterminate = !this.isAllSelected && tableData.some(item => XEUtils.get(item, property))
        if ($listeners['select-change']) {
          selection = tableData.filter(item => XEUtils.get(item, property))
        }
      } else {
        if (value) {
          selection.push(row)
        } else {
          XEUtils.remove(selection, item => item === row)
        }
        this.isAllSelected = tableData.length === selection.length
        this.isIndeterminate = !this.isAllSelected && selection.length
      }
      Tools.emitEvent(this, 'select-change', [row, selection, value])
    },
    /**
     * 多选，选中所有事件
     */
    triggerCheckAllEvent (evnt, value) {
      let column = this.tableColumn.find(column => column.type === 'selection')
      let property = column.property
      if (property) {
        this.tableData.forEach(item => {
          XEUtils.set(item, property, value)
        })
      }
      this.selection = value ? Array.from(this.tableData) : []
      this.isAllSelected = value
      this.isIndeterminate = false
      Tools.emitEvent(this, 'select-all', [this.selection, value])
    },
    /**
     * 单选，行选中事件
     */
    triggerRowEvent (evnt, { row }) {
      this.selectRow = row
      Tools.emitEvent(this, 'select-change', [row])
    },
    /**
     * 行 hover 事件
     */
    triggerHoverEvent (evnt, { row }) {
      this.hoverRow = row
    },
    /**
     * 列点击事件
     */
    triggerCellClickEvent (evnt, params) {
      if (this.highlightCurrentRow) {
        this.selectRow = params.row
      }
      Tools.emitEvent(this, 'cell-click', [params, evnt])
    },
    /**
     * 列双击点击事件
     */
    triggerCellDBLClickEvent (evnt, params) {
      Tools.emitEvent(this, 'cell-dblclick', [params, evnt])
    },
    /**
     * 排序事件
     */
    triggerSortEvent (evnt, column, params, order) {
      if (column.order !== order) {
        let prop = column.property
        let rest = XEUtils.sortBy(this.tableData, prop)
        this.tableColumn.forEach(column => {
          column.order = null
        })
        column.order = order
        this.tableData = order === 'desc' ? rest.reverse() : rest
        Tools.emitEvent(this, 'sort-change', [{ column, prop, order }])
      }
    },
    /**
     * 筛选事件
     */
    triggerFilterEvent (evnt, column, params) {
      let filterStore = this.filterStore
      if (filterStore.column === column && filterStore.visible) {
        filterStore.visible = false
      } else {
        let { top, left } = Tools.getOffset(evnt.target)
        if (!filterStore.column || filterStore.column !== column) {
          Object.assign(filterStore, {
            multiple: column.filterMultiple,
            options: column.filters,
            column: column
          })
        }
        Object.assign(filterStore, {
          style: {
            top: `${top + evnt.target.clientHeight + 6}px`,
            left: `${left}px`
          },
          visible: true,
          isAllSelected: filterStore.options.every(item => item.checked),
          isIndeterminate: !this.isAllSelected && filterStore.options.some(item => item.checked)
        })
        this.$nextTick(() => {
          filterStore.style = {
            top: `${top + evnt.target.clientHeight + 6}px`,
            left: `${left - this.$refs.filterWrapper.clientWidth / 2 + 10}px`
          }
        })
      }
    },
    // 全部筛选事件
    filterCheckAllEvent (evnt, value) {
      let filterStore = this.filterStore
      filterStore.options.forEach(item => {
        item.checked = value
      })
      filterStore.isAllSelected = value
      filterStore.isIndeterminate = false
    },
    // 筛选选项勾选事件
    filterOptionCheckEvent (evnt, value, item) {
      let filterStore = this.filterStore
      item.checked = value
      filterStore.isAllSelected = filterStore.options.every(item => item.checked)
      filterStore.isIndeterminate = !this.isAllSelected && filterStore.options.some(item => item.checked)
    },
    // 确认筛选
    confirmFilterEvent (evnt) {
      let { tableColumn, tableFullData } = this
      let { isAllSelected, isIndeterminate } = this.filterStore
      if (isAllSelected || isIndeterminate) {
        this.tableData = tableFullData.filter(row => {
          return tableColumn.every(column => {
            let { property, filters, filterMethod } = column
            if (filters && filters.length) {
              let valueList = []
              filters.forEach(item => {
                if (item.checked) {
                  valueList.push(item.value)
                }
              })
              if (valueList.length) {
                let a = filterMethod ? valueList.some(value => filterMethod({ value, row, column })) : valueList.indexOf(XEUtils.get(row, property)) > -1
                return a
              }
            }
            return true
          })
        })
        this.clostFilter()
      }
    },
    // 取消
    clostFilter (evnt) {
      this.filterStore.isAllSelected = false
      this.filterStore.isIndeterminate = false
      this.filterStore.visible = false
    },
    // 重置筛选
    resetFilterEvent (evnt) {
      this.filterStore.options.forEach(item => {
        item.checked = false
      })
      this.clostFilter()
    }
  }
}
