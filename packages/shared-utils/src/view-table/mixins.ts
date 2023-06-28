// import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
// import API, {
//   BizViewQueryVoClientType,
//   BizViewVo,
//   ResponseCode,
// } from '@amaz/api';
//
// const prefixCls = 'bb-view-table-minxis';
// @Component({
//   name: prefixCls,
//   inheritAttrs: false,
// })
// class BBViewTableMixins extends Vue {
//   @Prop({ default: null }) schemaCode: string;
//
//   @Prop({ default: null }) viewCode: string;
//
//   @Prop({ default: null }) filters: any[];
//
//   current = null;
//
//   view: BizViewVo = null;
//
//   viewList: BizViewVo[] = null;
//
//   loading = false;
//
//   currentViewCode = null;
//
//   @Watch('code', { immediate: true })
//   async watchCode() {
//     this.loading = true;
//     // 如果没有viewCode就获取默认的列表
//     if (!this.viewCode) {
//       this.currentViewCode = this.schemaCode;
//     } else {
//       this.currentViewCode = this.viewCode;
//     }
//
//     const res = await API.appViewController.getViewInfo({
//       clientType: BizViewQueryVoClientType.PC,
//       code: this.currentViewCode,
//       schemaCode: this.schemaCode,
//     });
//     if (res.code === ResponseCode.SUCCESS) {
//       this.view = res.data;
//       this.$emit('inited', this.view);
//     }
//     this.loading = false;
//   }
//
//   get FilterFields() {
//     const filters = [];
//     if (this.view) {
//       this.view.conditions.forEach((item) => {
//         const field = this.view.propertys.find(
//           (ofield) =>
//             ofield.schemaCode === item.schemaCode &&
//             ofield.code === item.propertyCode,
//         );
//         filters.push(Object.assign({}, field, item));
//       });
//     }
//
//     return filters;
//   }
//
//   get filtersValues() {
//     const filterValues = [];
//     if (this.filters instanceof Array) {
//       filterValues.push(...this.filters);
//     }
//     return filterValues;
//   }
//
//   get sortValues() {
//     return null;
//   }
//
//   async load(page, pageSize = 10) {
//     if (!this.view) {
//       return;
//     }
//     const res = await API.appViewController.listData({
//       pageSize: pageSize,
//       pageNum: page,
//       viewCode: this.view.code,
//       schemaCode: this.view.schemaCode,
//       filters: this.filtersValues,
//       sorts: this.sortValues,
//     });
//     let data: any = {
//       res: false,
//     };
//     if (res.code === ResponseCode.SUCCESS) {
//       data = {
//         res: true,
//         data: res.data?.list,
//         pageNum: res.data.pageNum,
//         total: res.data?.total,
//       };
//     }
//
//     return data;
//   }
//
//   onLink({ item, index }) {
//     this.$emit('link', { item, index, view: this.view });
//   }
// }
// export default BBViewTableMixins;
