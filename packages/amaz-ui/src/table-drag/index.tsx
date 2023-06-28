import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import {
  Button, Icon, Table, ConfigProvider,
} from 'ant-design-vue';
import { debounce } from 'lodash-es';
import './style';
import VueDraggableResizable from 'vue-draggable-resizable';
import { withInstall } from '../_utils';
const prefixCls = 'bb-table';
// export interface localPaginationType {
//   current: number;
//   pageNumber: number;
//   pageSize: number;
//   showSizeChanger: boolean;
//   showQuickJumper: boolean;
//   pageSizeOptions: string[];
//   showTotal?: Function;
//   onChange?: Function;
//   onShowSizeChange?: Function;
// }
@Component({
  name: prefixCls,
  components: {
    AButton: Button,
    AIcon: Icon,
    ATable: Table,
    AConfigProvider: ConfigProvider,
    VueDraggableResizable,
  },
})
class BBTableDrag extends Vue {
  @Prop({ type: [String, Function], default: 'id', required: true }) rowKey:
    | string
    | Function;

  @Prop({ type: Function, default: undefined, required: true }) data: Function;

  @Prop({ type: Object, default: undefined, required: false })
  components: object;

  @Prop({ type: Number, default: 1, required: false }) pageNum: number;

  @Prop({ type: Number, default: 10, required: false }) pageSize: number;

  @Prop({ type: Boolean, default: true, required: false })
  showSizeChanger: boolean;

  @Prop({ type: String, default: 'default', required: false }) size: string;

  @Prop({ type: [Object, Boolean], default: null, required: false }) alert: any;

  @Prop({
    type: Object,
    default: () => {
      return {
        columnWidth: 50,
        selectedRowKeys: [],
        onChange: () => {},
        onSelect: () => {},
        type: 'checkbox',
      };
    },
    required: false,
  })
  rowSelection: any;

  @Prop({ type: Boolean, default: false, required: false })
  showAlertInfo: boolean;

  @Prop({ type: String, default: 'auto', required: false }) showPagination:
    | string
    | boolean;

  @Prop({ type: Boolean, default: false, required: false }) pageURI: boolean;

  @Prop({ type: Boolean, default: false, required: false }) bordered: boolean;

  @Prop({
    type: Array,
    default: () => {
      return ['10', '20', '30', '40'];
    },
    required: false,
  })
  pageSizeOptions: any;

  @Prop({
    type: Object,
    default: () => {
      return {
        scroll: { x: 0 || true, y: 0 },
      };
    },
    required: false,
  })
  scroll: object;

  @Prop({ default: [], required: true }) columns: any;

  @Prop({ type: Boolean, default: true, required: false })
  autoInitData: boolean; // 是否自动获取数据

  @(Prop!({ default: false, required: false })) pagination: any;

  needTotalList: any = [];

  selectedRows: any = [];

  selectedRowKeys: any = [];

  localLoading: boolean = false;

  localDataSource: any = [];

  // localPagination: any = Object.assign({}, this.$props.pagination);
  localPagination: any = {};

  debounceClick: any = null;

  @Watch('localPagination.current', { immediate: true })
  watchLocalPagination (val: any) {
    this.pageURI &&
      this.$router.push({
        ...this.$route,
        name: this.$route.name,
        params: Object.assign({}, this.$route.params, {
          pageNum: val,
        }),
      });
    // change pagination, reset total data
    this.needTotalList = this.initTotalList(this.columns);
    // console.log(this.rowSelection, 'this.rowSelection');
    this.selectedRowKeys = [];
    this.selectedRows = [];
  }

  @Watch('pageNum')
  watchPageNum (val: any) {
    if (this.localPagination.current !== val) {
      this.localPagination.current = val;
      this.loadData(this.localPagination);
    }
  }

  @Watch('pageSize')
  watchPageSize (val: any) {
    if (this.localPagination.pageSize !== val) {
      this.localPagination.pageSize = val;
      this.loadData(this.localPagination);
    }
  }

  @Watch('showSizeChanger')
  watchShowSizeChanger (val: any) {
    Object.assign(this.localPagination, {
      showSizeChanger: val,
    });
  }

  created () {
    let pageNum;
    if (this.$route?.params) {
      pageNum = this.$route?.params.pageNum;
    }
    const localPageNum =
      (this.pageURI && pageNum && parseInt(pageNum)) || this.pageNum;
    this.localPagination =
      (['auto', true].includes(this.showPagination) &&
        Object.assign({}, this.localPagination, {
          current: localPageNum,
          pageSize: this.pageSize,
          showSizeChanger: this.showSizeChanger,
          showQuickJumper: true,
          pageSizeOptions: this.pageSizeOptions,
          showTotal: (total) => {
            return i18n.t('admin.totalNumber', {
              content: total,
            });
          },
          onChange: (pageIndex, pageSize) => {
            this.localPagination.current = pageIndex;
            this.localPagination.pageNum = pageIndex;
            this.localPagination.pageSize = pageSize;
            this.$emit('paginationChange', { pageIndex, pageSize });
          },
          onShowSizeChange: (pageIndex, pageSize) => {
            this.localPagination.current = pageIndex;
            this.localPagination.pageNum = pageIndex;
            this.localPagination.pageSize = pageSize;
            this.$emit('paginationChange', { pageIndex, pageSize });
          },
        })) ||
      false;
    this.needTotalList = this.initTotalList(this.columns);
    if (this.autoInitData) {
      this.loadData();
    }
    this.debounceClick = debounce(this.handleEmitRowClick, 200);
  }

  drag (columns: any) {
    return {
      header: {
        cell: this.initDrag(columns),
      },
    };
  }

  /**
   * 表格列拖拽
   * @param { 表格columns } tbCols
   */
  initDrag (tbCols: any) {
    const draggingMap: any = {};
    tbCols.forEach((col: any) => {
      const k = col.dataIndex || col.key;
      draggingMap[k] = col.width;
    });
    const draggingState = Vue.observable(draggingMap);

    return (h, props, children) => {
      let thDom = null;
      const { key, ...restProps } = props;
      const col = this.columns.find((item) => {
        const k = item.dataIndex || item.key;
        return k === key;
      });
      if (col && !col.width) {
        return <th {...restProps}> {children} </th>;
      }
      // 排序字段不拖拽
      if (key !== 'selection-column') {
        const onDrag = (x) => {
          draggingState[key] = 0;
          col.width = Math.max(x, 1);
        };
        const onDragstop = () => {
          draggingState[key] = thDom ? thDom.getBoundingClientRect().width : 60;
        };
        return (
          <th
            {...restProps}
            v-ant-ref={(r) => {
              thDom = r;
            }}
            width={col ? col.width : 50}
            class="resize-table-th"
          >
            {children}
            <VueDraggableResizable
              key={col.key}
              class="table-draggable-handle"
              w={5}
              h={50}
              x={draggingState[key] || col.width}
              z={100}
              axis="x"
              draggable={true}
              resizable={true}
              onDragging={onDrag}
              onDragstop={onDragstop}
            />
          </th>
        );
      } else {
        return (
          <th
            {...restProps}
            width={col ? col.width : 50}
            v-ant-ref={(r) => {
              thDom = r;
            }}
          >
            {children}
          </th>
        );
      }
    };
  }

  /**
   * 表格重新加载方法
   * 如果参数为 true, 则强制刷新到第一页
   * @param Boolean bool
   */
  refresh (bool = false, pagination?: any, filters?: any, sorter?: any) {
    bool &&
      (this.localPagination = Object.assign(
        {},
        {
          current: 1,
          pageSize: this.pageSize,
        },
      ));
    this.loadData(pagination, filters, sorter);
  }

  /**
   * 加载数据方法
   * @param {Object} pagination 分页选项器
   * @param {Object} filters 过滤条件
   * @param {Object} sorter 排序条件
   */
  loadData (pagination?: any, filters?: any, sorter?: any) {
    // console.log(sorter, 'sorter');
    // console.log(this.columns, 'columns');
    this.columns.forEach((item) => {
      if (sorter && sorter.field === item.dataIndex) {
        item.sortOrder = sorter.order;
      } else if (sorter && sorter.field !== item.dataIndex) {
        item.sortOrder = null;
      }
    });
    this.localLoading = true;
    const parameter = Object.assign(
      {
        pageNum:
          (pagination && pagination.current) ||
          (this.showPagination && this.localPagination.current) ||
          this.pageNum,
        pageSize:
          (pagination && pagination.pageSize) ||
          (this.showPagination && this.localPagination.pageSize) ||
          this.pageSize,
      },
      (sorter &&
        sorter.field && {
        sortField: sorter.field,
      }) ||
        {},
      (sorter &&
        sorter.order && {
        sortOrder: sorter.order,
      }) ||
        {},
      {
        ...filters,
      },
    );
    const result = this.data(parameter);
    // 对接自己的通用数据接口需要修改下方代码中的 r.pageNum, r.totalCount, r.data
    if (
      (typeof result === 'object' || typeof result === 'function') &&
      typeof result.then === 'function'
    ) {
      result.then((r) => {
        this.localPagination =
          (this.showPagination &&
            Object.assign({}, this.localPagination, {
              current: r.pageNum, // 返回结果中的当前分页数
              total: r.totalCount, // 返回结果中的总记录数
              showSizeChanger: this.showSizeChanger,
              pageSize:
                (pagination && pagination.pageSize) ||
                this.localPagination.pageSize,
            })) ||
          false;
        // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
        if (
          r.data.length === 0 &&
          this.showPagination &&
          this.localPagination.current > 1
        ) {
          this.localPagination.current--;
          this.loadData();
          return;
        }

        // 这里用于判断接口是否有返回 r.totalCount 且 this.showPagination = true 且 pageNum 和 pageSize 存在 且 totalCount 小于等于 pageNum * pageSize 的大小
        // 当情况满足时，表示数据不满足分页大小，关闭 table 分页功能
        try {
          if (
            ['auto', true].includes(this.showPagination) &&
            r.totalCount <= r.pageNum * this.localPagination.pageSize
          ) {
            // this.localPagination.hideOnSinglePage = true;
          }
        } catch (e) {
          this.localPagination = false;
        }
        this.localDataSource = r.data; // 返回结果中的数组数据
        this.localLoading = false;
      });
    }
  }

  initTotalList (columns: any) {
    const totalList = [];
    columns &&
      columns instanceof Array &&
      columns.forEach((column) => {
        if (column.needTotal) {
          totalList.push({
            ...column,
            total: 0,
          });
        }
      });
    return totalList;
  }

  /**
   * 用于更新已选中的列表数据 total 统计
   * @param selectedRowKeys
   * @param selectedRows
   */
  updateSelect (selectedRowKeys: any, selectedRows: any) {
    this.selectedRows = selectedRows;
    this.selectedRowKeys = selectedRowKeys;
    const list = this.needTotalList;
    this.needTotalList = list.map((item) => {
      return {
        ...item,
        total: selectedRows.reduce((sum, val) => {
          const total = sum + parseInt(val, item.dataIndex);
          return isNaN(total) ? 0 : total;
        }, 0),
      };
    });
  }

  /**
   * 清空 table 已选中项
   */
  clearSelected () {
    if (this.rowSelection) {
      this.rowSelection.onChange([], []);
      this.updateSelect([], []);
    }
  }

  /**
   * 处理交给 table 使用者去处理 clear 事件时，内部选中统计同时调用
   * @param callback
   * @returns {*}
   */
  renderClear (callback) {
    if (this.selectedRowKeys.length <= 0) return null;
    return (
      <a
        onClick={() => {
          callback();
          this.clearSelected();
        }}
      >
        清空
      </a>
    );
  }

  renderAlert () {
    // 绘制统计列数据
    const needTotalItems = this.needTotalList.map((item) => {
      return (
        <span>
          {item.title}总计
          <a>
            {!item.customRender ? item.total : item.customRender(item.total)}
          </a>
        </span>
      );
    });

    // 绘制 清空 按钮
    const clearItem =
      typeof this.alert.clear === 'boolean' && this.alert.clear
        ? this.renderClear(this.clearSelected)
        : typeof this.alert.clear === 'function'
          ? this.renderClear(this.alert.clear)
          : null;

    // 绘制 alert 组件
    return (
      <a-alert showIcon={true}>
        <template slot="message">
          <span>
            已选择:
            <a>{this.selectedRows.length}</a>
          </span>
          {needTotalItems}
          {clearItem}
        </template>
      </a-alert>
    );
  }

  handleEmitRowClick (record: any, index: number) {
    this.$emit('rowClick', record, index);
  }

  rowHeaderClick (column: any[]) {
    return {
      on: {
        click: (event) => {
          // console.log(event, 'event');
          // console.log(column, 'column');
        }, // 点击表头行
      },
    };
  }

  handleClickRow (record: any, index: number) {
    return {
      on: {
        click: () => {
          this.debounceClick(record, index);
        },
      },
    };
  }

  render () {
    const props: any = {};
    const localKeys = Object.keys(this.$data);
    const showAlert =
      (typeof this.alert === 'object' &&
        this.alert !== null &&
        this.alert.show &&
        typeof this.rowSelection.selectedRowKeys !== 'undefined') ||
      this.alert;
    // console.log((Table as any).props.scroll, 'Table');
    Object.keys((Table as any).props).forEach((k) => {
      const localKey = `local${k.substring(0, 1).toUpperCase()}${k.substring(
        1,
      )}`;
      if (localKeys.includes(localKey)) {
        props[k] = this[localKey];
        return props[k];
      }
      if (k === 'rowSelection') {
        if (showAlert && this.rowSelection) {
          // 如果需要使用alert，则重新绑定 rowSelection 事件
          props[k] = {
            ...this.rowSelection,
            selectedRows: this.selectedRows,
            selectedRowKeys: this.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              this.updateSelect(selectedRowKeys, selectedRows);
              typeof this[k].onChange !== 'undefined' &&
                this[k].onChange(selectedRowKeys, selectedRows);
            },
          };
          return props[k];
        } else if (!this.rowSelection) {
          // 如果没打算开启 rowSelection 则清空默认的选择项
          props[k] = null;
          return props[k];
        }
      }
      this[k] && (props[k] = this[k]);
      return props[k];
    });
    const tableProps = {
      ...props,
      customRow: this.handleClickRow,
      components: this.drag(this.columns),
      customHeaderRow: this.rowHeaderClick,
    };

    // const customizeRenderEmpty = () => (
    //   <div class="table-custom-empty">
    //     <img src={EmptyImg} alt="" />
    //     <p>{i18n.t('admin.empty')}</p>
    //   </div>
    // );
    // console.log('tableProps', tableProps.dataSource);

    const table = (
      <a-table
        {...{
          props: tableProps,
          scopedSlots: { ...this.$scopedSlots },
        }}
        class={
          tableProps.dataSource && tableProps.dataSource.length > 0
            ? 'not-empty-table'
            : ''
        }
        onChange={this.loadData}
        onExpand={(expanded, record) => {
          this.$emit('expand', expanded, record);
        }}
      >
        {Object.keys(this.$slots).map((name) => (
          <template slot={name}>{this.$slots[name]}</template>
        ))}
      </a-table>
    );

    return (
      <div class="table-wrapper">
        {showAlert ? this.renderAlert() : null}
        {table}
      </div>
    );
  }
}
export default withInstall<BBTableDrag>(BBTableDrag);
