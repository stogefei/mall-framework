import { defineComponent, ref } from 'vue';
import {
  Button, Table, InputNumber, Layout,
} from 'ant-design-vue';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style/index.less';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const good12 = require('../../assets/images/goods/goods012.jpg');
const prefixCls = 'bb-shopping-car';
interface DataItem {
  key: number;
  name: string;
  unit: number;
  price: number;
  count: number;
  counts: number;
}
export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    BHeader: Header,
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    ALayoutFooter: Layout.Footer,
    ATable: Table,
    AInputNumber: InputNumber,
    BFooter: Footer,
  },
  setup () {
    const columns = [
      {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
        width: 300,
        customRender: ({
          text, record, index, column,
        }) => {
          return (
            <div class={prefixCls + '__name'}>
              <span class={prefixCls + '__name-img'}>
                <img src={good12} />
              </span>
              <p class={prefixCls + '__name-detail'}>
                <span>奇异果</span>
                <span>25.80元/500g</span>
              </p>
            </div>
          );
        },
      },
      {
        title: '商品单位',
        dataIndex: 'unit',
        key: 'unit',
      },
      {
        title: '商品价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '数量',
        dataIndex: 'count',
        key: 'count',
        customRender: ({
          text, record, index, column,
        }) => {
          // console.log({ text, record, index, column });
          return (
            <a-input-number v-model={text} addon-before="+" addon-after="-" />
          );
        },
      },
      {
        title: '小记',
        dataIndex: 'counts',
        key: 'counts',
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        customRender: ({
          text, record, index, column,
        }) => {
          return <a> 删除 </a>;
        },
      },
    ];
    const data: DataItem[] = [
      {
        key: 1,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 2,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 3,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 4,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 5,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 6,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 7,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 8,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 9,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 9,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
      {
        key: 10,
        name: 'John Brown sr.',
        unit: 60,
        price: 60,
        count: 60,
        counts: 60,
      },
    ];
    const rowSelection = ref({
      checkStrictly: false,
      onChange: (
        selectedRowKeys: Array<string | number>,
        selectedRows: DataItem[],
      ) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows,
        );
      },
      onSelect: (
        record: DataItem,
        selected: boolean,
        selectedRows: DataItem[],
      ) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (
        selected: boolean,
        selectedRows: DataItem[],
        changeRows: DataItem[],
      ) => {
        console.log(selected, selectedRows, changeRows);
      },
    });
    return () => {
      return (
        <div class={prefixCls}>
          <b-header />
          <div class={prefixCls + '__wrapper'}>
            <a-table
              columns={columns}
              dataSource={data}
              rowSelection={rowSelection.value}
              pagination={false}
              scroll={{ y: 500 }}
            />
            <div class={prefixCls + '__settlement'}>
              <div class={prefixCls + '__settlement-count'}>
                <p>
                  <span class={prefixCls + '__settlement-freight'}>
                    合计(不含运费)：
                  </span>
                  <span class={prefixCls + '__settlement-price'}>
                    ¥ <em>42.60</em>{' '}
                  </span>
                </p>
                <p class={prefixCls + '__settlement-cunts'}>
                  共计 <em>2</em>件商品
                </p>
              </div>
              <div class={prefixCls + '__settlement-pay'}>去结算</div>
            </div>
          </div>
          <b-footer />
        </div>
      );
    };
  },
});
