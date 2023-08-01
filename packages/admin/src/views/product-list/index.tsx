import { defineComponent, reactive, ref } from 'vue';
import {
  Row, Col, Breadcrumb, Pagination,
} from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { ShoppingCartOutlined } from '@ant-design/icons-vue';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import './style/index.less';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const good01 = require('../../assets/images/goods/goods001.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const good02 = require('../../assets/images/goods/goods002.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const good03 = require('../../assets/images/goods/goods003.jpg');
const prefixCls = 'bb-product-list';

export default defineComponent({
  name: prefixCls,
  components: {
    ARow: Row,
    ACol: Col,
    BHeader: Header,
    BNav: Nav,
    APagination: Pagination,
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
    ShoppingCartOutlined,
    BFooter: Footer,
  },
  setup () {
    const activeIndex = ref(0);
    const current = reactive({
      value: 1,
    });
    const sortList = [
      {
        name: '默认',
        type: 'default',
      },
      {
        name: '价格',
        type: 'price',
      },
      {
        name: '人气',
        type: 'cunts',
      },
    ];
    const productList = Array.from({ length: 20 }, (v, i) => ({
      name: '大兴大棚草莓',
      src: good03,
      unit: '16.80/500g',
      price: '16.80',
    }));
    const router = useRouter();
    const goHome = () => {
      router.push({ path: '/' });
    };
    const goDetail = (id) => {
      router.push({ path: `/detail/${id}` });
    };
    return () => {
      return (
        <div class={prefixCls}>
          <div class={`${prefixCls}-header`}>
            <b-header />
            <b-nav />
          </div>
          <div class={prefixCls + '__box'}>
            <div class={prefixCls + '__breadcrumb'}>
              <a-breadcrumb>
                <a-breadcrumb-item>
                  <span
                    onClick={() => {
                      goHome();
                    }}
                    class={prefixCls + '__breadcrumb-title'}
                  >
                    全部分类
                  </span>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <span class={prefixCls + '__breadcrumb-title'}>新鲜水果</span>
                </a-breadcrumb-item>
              </a-breadcrumb>
            </div>
            <div class={prefixCls + '__wrapper'}>
              <div class={prefixCls + '__wrapper-left'}>
                <p class={prefixCls + '__title'}>新品推荐</p>
                <ul>
                  <li class={prefixCls + '__good-item'}>
                    <span class={prefixCls + '__good-img'}>
                      <img src={good01} alt="" />
                    </span>
                    <p class={prefixCls + '__good-title'}>进口柠檬</p>
                    <p class={prefixCls + '__good-price'}>¥ 3.90</p>
                  </li>
                  <li class={prefixCls + '__good-item'}>
                    <span class={prefixCls + '__good-img'}>
                      <img src={good02} alt="" />
                    </span>
                    <p class={prefixCls + '__good-title'}>进口柠檬</p>
                    <p class={prefixCls + '__good-price'}>¥ 3.90</p>
                  </li>
                </ul>
              </div>
              <div class={prefixCls + '__wrapper-right'}>
                <div class={prefixCls + '__sort-bar'}>
                  <ul>
                    {sortList.map((item, index) => {
                      return (
                        <li
                          onClick={() => {
                            activeIndex.value = index;
                          }}
                          class={
                            index === activeIndex.value
                              ? prefixCls + '__sort-bar-active'
                              : ''
                          }
                        >
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div class={prefixCls + '__items'}>
                  <a-row>
                    {productList.map((item, index) => {
                      return (
                        <a-col span={6} onClick={() => goDetail(index)}>
                          <span class={prefixCls + '_items-img'}>
                            <img src={item.src} alt="" />
                          </span>
                          <p class={prefixCls + '_items-title'}>{item.name}</p>
                          <p class={prefixCls + '_items-detail'}>
                            <span class={prefixCls + '_items-detail-left'}>
                              <span class={prefixCls + '_items-price'}>
                                ¥ {item.price}
                              </span>
                              <span class={prefixCls + '_items-unit'}>
                                {item.unit}
                              </span>
                            </span>
                            <span class={prefixCls + '_items-car'}>
                              <shopping-cart-outlined />
                            </span>
                          </p>
                        </a-col>
                      );
                    })}
                  </a-row>
                </div>
                <div class={prefixCls + '__pagination'}>
                  <a-pagination
                    v-model={current.value}
                    show-quick-jumper
                    total={500}
                    show-less-items
                  />
                </div>
              </div>
            </div>
          </div>
          <b-footer />
        </div>
      );
    };
  },
});
