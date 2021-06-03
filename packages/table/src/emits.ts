import { VxeTableEmits } from '../../../types/all'

export default [
  'update:data',
  'keydown',
  'paste',
  'copy',
  'cut',
  'current-change',
  'radio-change',
  'checkbox-change',
  'checkbox-all',
  'checkbox-range-start',
  'checkbox-range-change',
  'checkbox-range-end',
  'cell-click',
  'cell-dblclick',
  'cell-menu',
  'cell-mouseenter',
  'cell-mouseleave',
  'header-cell-click',
  'header-cell-dblclick',
  'header-cell-menu',
  'footer-cell-click',
  'footer-cell-dblclick',
  'footer-cell-menu',
  'clear-merge',
  'sort-change',
  'clear-sort',
  'filter-change',
  'clear-filter',
  'resizable-change',
  'toggle-row-expand',
  'toggle-tree-expand',
  'menu-click',
  'edit-closed',
  'edit-actived',
  'edit-disabled',
  'valid-error',
  'scroll',
  'custom',

  'change-fnr', // 废弃

  'open-fnr',
  'fnr-change',
  'cell-area-copy',
  'cell-area-cut',
  'cell-area-paste',
  'cell-area-merge',
  'clear-cell-area-merge',
  'header-cell-area-selection',
  'cell-area-selection-start',
  'cell-area-selection-end',
  'cell-area-extension-start',
  'cell-area-extension-end'
] as VxeTableEmits