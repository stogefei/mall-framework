import type { App } from 'vue';
// import Sider from './sider';
// import Label from './label';
// import Header from './header';
// import ManageTree from './manage-tree';
// import Upload from './upload';
// import Title from './title';
// import config from './config';
// import VirtualizedTable from './virtualized-table';
// import mapModal from './map-modal';
// import Location from './location';
// import DistPicker from './distpicker';
// import Combobox from './combobox';
// import Loading from './loading';
// import StaffSelector from './staff-selector'; // 选人控件
// import StaffTree from './staff-tree/index'; // 下拉选人控件
// import RoleTree from './role-tree'; // 角色选择控件
// import ValidateTooltip from './validate-tooltip';
// import Avatar from './avatar';
// import IconAvatar from './icon-avatar';
// import Icon from './icon';
// import IconList from './icon-list';
// import IconSelect from './icon-select';
// import IconUpload from './icon-upload';
// import IconEditor from './icon-editor';

// import EllipsisPanel from './ellipsis-panel';
// import Editor from './editor';
// import Panel from './panel';
// import DatePicker from './date-picker';
// import confirm from './confirm';
// import ModalHandler from './modal';
// import TableDrag from './table-drag'; // 表格组件
// import BBViewList from './view-list'; // 视图组件
// import FilterCard from './view-filter'; // 视图筛选条件卡片
// import ActionList from './view-action'; // 视图动作列表
// import FilterConditions from './filter-condition'; // 视图查询条件渲染
// import BBSelectModel from './select-model'; // 选择模型
// import Select from './select';
// import CorrelationFormSelect from './correlation-form-select';
// import SchemaSelect from './schema-select'; // 选择模型
// import Field from './field';
// import Form from './form';
// import JsonSchema from './json-schema';
// import Condition from './condition';
// import ConditionItem from './condition-item';
// import ViewTable from './view-table';
// import DataHeader from './data-header';
// import DataTitle from './data-title-editor';

// import Popconfirm from './popconfirm';
// import MenuTree from './menu-tree';
// import GridLayout from './grid-layout/index.vue';
// import GridItem from './grid-item/index.vue';
// import Qrcode from './qr-code';
// import ExternalLinkQrcode from './external-link-qrcode';
// import OptionSettings from './option-settings';
// import Password from './password';
// import VirtualizedList from './virtualized-list';
// import fixedConfirm from './fixed-confirm';
// import Button from './button';
// import Accordion from './accordion';
// import AccordionGroup from './accordion-group';
// import AccordionRow from './accordion-row';

// const components: any[] = [
//   // Sider,
//   // ManageTree,
//   Label,
//   // Header,
//   // Upload,
//   // VirtualizedTable,
//   // Location,
//   // DistPicker,
//   // Combobox,
//   // Loading,
//   // StaffSelector,
//   // StaffTree,
//   // RoleTree,
//   // TableDrag,
//   // ValidateTooltip,
//   // Avatar,
//   // IconAvatar,
//   // Icon,
//   // IconList,
//   // IconSelect,
//   // IconUpload,
//   // IconEditor,
//   // EllipsisPanel,
//   // Editor,
//   // Panel,
//   // BBViewList,
//   // FilterCard,
//   // ActionList,
//   // FilterConditions,
//   // Field,
//   // Form,
//   // JsonSchema,
//   // BBSelectModel,
//   // Select,
//   // CorrelationFormSelect,
//   // SchemaSelect,
//   // DatePicker,
//   // Title,
//   // ViewTable,
//   // Condition,
//   // ConditionItem,
//   // DataHeader,
//   // DataTitle,
//   // MenuTree,
//   // Popconfirm,
//   // GridLayout,
//   // GridItem,
//   // Qrcode,
//   // ExternalLinkQrcode,
//   // OptionSettings,
//   // VirtualizedList,
//   // Password,
//   Button,
//   // Accordion,
//   // AccordionGroup,
//   // AccordionRow,
// ];

import * as components from './components';
export * from './components';
const install = function (app: App) {
  Object.keys(components).forEach(key => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  install,
};
// export {
// Sider,
// ManageTree,
// Label,
// Header,
// Upload,
// VirtualizedTable,
// mapModal,
// Location,
// DistPicker,
// Combobox,
// Loading,
// StaffSelector,
// StaffTree,
// RoleTree,
// TableDrag,
// ValidateTooltip,
// Avatar,
// IconAvatar,
// Icon,
// IconList,
// IconSelect,
// IconUpload,
// IconEditor,
// confirm,
// ModalHandler,
// EllipsisPanel,
// Editor,
// Panel,
// BBViewList,
// FilterCard,
// ActionList,
// FilterConditions,
// Field,
// Form,
// JsonSchema,
// BBSelectModel,
// Select,
// CorrelationFormSelect,
// SchemaSelect,
// DatePicker,
// Title,
// ViewTable,
// config,
// Condition,
// ConditionItem,
// DataHeader,
// DataTitle,
// MenuTree,
// Popconfirm,
// GridLayout,
// GridItem,
// Qrcode,
// ExternalLinkQrcode,
// OptionSettings,
// VirtualizedList,
// fixedConfirm,
// Password,
// Button,
// Accordion,
// AccordionGroup,
// AccordionRow,
// };
