import { defineComponent, ref } from 'vue';
import {
  Button,
  Row,
  Col,
  Breadcrumb,
  InputNumber,
  Image,
  Tabs,
} from 'ant-design-vue';
import { useRouter } from 'vue-router';
import './style/index.less';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const good01 = require('../../assets/images/goods_detail.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const good02 = require('../../assets/images/goods/goods002.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const good03 = require('../../assets/images/goods/goods003.jpg');
const prefixCls = 'bb-app-detail';

export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    ARow: Row,
    AInputNumber: InputNumber,
    ACol: Col,
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
    BHeader: Header,
    BNav: Nav,
    BFooter: Footer,
    AImage: Image,
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
  },
  setup () {
    const router = useRouter();
    const goHome = () => {
      router.push({ path: '/' });
    };
    const goDetail = () => {
      router.push({ path: '/list' });
    };
    const activeKey = ref('1');
    const changeTab = (key) => {
      activeKey.value = key;
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
                  <span
                    onClick={() => {
                      goDetail();
                    }}
                    class={prefixCls + '__breadcrumb-title'}
                  >
                    新鲜水果
                  </span>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <span class={prefixCls + '__breadcrumb-title'}>商品详情</span>
                </a-breadcrumb-item>
              </a-breadcrumb>
            </div>
            <div class={prefixCls + '__wrapper'}>
              <div class={prefixCls + '__info'}>
                <div class={prefixCls + '__info-img'}>
                  <a-image src={good01} previewMask={false} />
                </div>
                <div class={prefixCls + '__info-text'}>
                  <h4>大兴大棚草莓</h4>
                  <p class={prefixCls + '__info-dec'}>
                    草莓浆果柔软多汁，味美爽口，适合速冻保鲜贮藏。草莓速冻后，可以保持原有的色、香、味，既便于贮藏，又便于外销。
                  </p>
                  <div class={prefixCls + '__info-bar'}>
                    <span class={prefixCls + '__info-price'}>
                      ¥
                      <span class={prefixCls + '__info-price-text'}>
                        16.80{' '}
                      </span>
                    </span>
                    <span class={prefixCls + '__info-unit'}>单位：500g</span>
                  </div>
                  <div class={prefixCls + '__info-num'}>
                    <span class={prefixCls + '__info-label'}>数量:</span>
                    <a-input-number min={1} max={10} defaultValue={1} />
                  </div>
                  <div class={prefixCls + '__info-total'}>
                    <span class={prefixCls + '__info-label'}>总价:</span>
                    <span class={prefixCls + '__info-count'}>¥16.80</span>
                  </div>
                  <div>
                    <a-button size={'large'} class={prefixCls + '__info-buy'}>
                      立即购买
                    </a-button>
                    <a-button danger type="primary" size={'large'}>
                      加入购物车
                    </a-button>
                  </div>
                </div>
              </div>
            </div>
            <div class={prefixCls + '__wrap'}>
              <div class={prefixCls + '__wrap-left'}>
                <p class={prefixCls + '__title'}>新品推荐</p>
                <ul>
                  <li class={prefixCls + '__good-item'}>
                    <span class={prefixCls + '__good-img'}>
                      <img src={good02} alt="" />
                    </span>
                    <p class={prefixCls + '__good-title'}>进口柠檬</p>
                    <p class={prefixCls + '__good-price'}>¥ 3.90</p>
                  </li>
                  <li class={prefixCls + '__good-item'}>
                    <span class={prefixCls + '__good-img'}>
                      <img src={good03} alt="" />
                    </span>
                    <p class={prefixCls + '__good-title'}>进口柠檬</p>
                    <p class={prefixCls + '__good-price'}>¥ 3.90</p>
                  </li>
                </ul>
              </div>
              <div class={prefixCls + '__wrap-right'}>
                <a-tabs
                  v-model={activeKey.value}
                  onChange={changeTab}
                  type="card"
                >
                  <a-tab-pane key="1" tab="商品介绍">
                    商品详情： 草莓采摘园位于北京大兴区 庞各庄镇四各庄村
                    ，每年1月-6月面向北京以及周围城市提供新鲜草莓采摘和精品礼盒装草莓，草莓品种多样丰富，
                    个大香甜。所有草莓均严格按照有机标准培育，不使用任何化肥和农药。草莓在采摘期间免洗可以直接食用。欢迎喜欢草莓的市民前来采摘，也欢迎各大单位选购精品有机草莓礼盒，有机草莓礼盒是亲朋馈赠、福利送礼的最佳选择。
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="评论">
                    Content of Tab Pane 2
                  </a-tab-pane>
                </a-tabs>
              </div>
            </div>
          </div>
          <b-footer />
        </div>
      );
    };
  },
});
