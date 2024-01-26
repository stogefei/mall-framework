import { defineComponent, PropType, ref } from 'vue';
import {
  Button, Row, Col, Image,
} from 'ant-design-vue';
import { DoubleRightOutlined } from '@ant-design/icons-vue';
import './style/index.less';
import { useRouter } from 'vue-router';
import API, { ResponseCode } from '@amaz/api';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const banner01 = require('../../assets/images/banner01.jpg');
const prefixCls = 'bb-item-list';
export interface DataItem {
  id: number;
  name: string;
}
export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    ARow: Row,
    ACol: Col,
    AImage: Image,
    DoubleRightOutlined,
  },
  props: {
    dataItem: { type: Object as PropType<DataItem>, required: true },
  },
  setup (props) {
    const list = ref([]);
    API.goodController
      .getGoodList({
        category__parent_category: props.dataItem.id,
      })
      .then((result) => {
        if (result.code === ResponseCode.SUCCESS) {
          console.log(result.data, 'result.data===');
          list.value = result.data.results.slice(0, 5);
        }
      });
    const router = useRouter();
    const goProList = () => {
      router.push({ path: '/list' });
    };
    const goDetail = (id) => {
      router.push({ path: `/detail/${id}` });
    };
    return () => {
      const { dataItem } = props;
      return (
        <div class={prefixCls}>
          <div class={prefixCls + '__header'}>
            <div class={prefixCls + '__header-left'}>
              <h4>{dataItem.name}</h4>
              <span>
                <a-divider
                  style={{ height: '16px', borderColor: '#999' }}
                  type="vertical"
                />
              </span>
              <span class={prefixCls + '__header-left-item'}>鲜芒</span>
              <span class={prefixCls + '__header-left-item'}>加州提子</span>
              <span class={prefixCls + '__header-left-item'}>亚马逊牛油果</span>
            </div>
            <span class={prefixCls + '__header-more'} onClick={goProList}>
              查看更多
              <double-right-outlined />
            </span>
          </div>
          <div class={prefixCls + '__wrapper'}>
            <a-row>
              <a-col span={4}>
                <img src={banner01} alt="" />
              </a-col>
              {list.value.map((item: any) => {
                return (
                  <a-col span={4}>
                    <div class={prefixCls + '__item'}>
                      <span
                        class={prefixCls + '__item-title'}
                        onClick={() => goDetail(item.id)}
                      >
                        {item.name}
                      </span>
                      <span class={prefixCls + '__item-img'}>
                        <a-image
                          src={item.goods_front_image}
                          previewMask={false}
                        />
                      </span>
                      <span
                        onClick={() => goDetail(item.id)}
                        class={prefixCls + '__item-price'}
                      >
                        ¥ {item.market_price}
                      </span>
                    </div>
                  </a-col>
                );
              })}
            </a-row>
          </div>
        </div>
      );
    };
  },
});
