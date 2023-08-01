import { defineComponent, reactive } from 'vue';
import {
  Button, Row, Col, Input, Divider,
} from 'ant-design-vue';
import { ShoppingCartOutlined } from '@ant-design/icons-vue';
import './style/index.less';
import { useRouter } from 'vue-router';
// eslint-disable-next-line import/extensions,@typescript-eslint/no-var-requires
const logo = require('@/assets/logo.png');
const prefixCls = 'bb-app-header';

export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    ARow: Row,
    ACol: Col,
    ADivider: Divider,
    AInputSearch: Input.Search,
    shoppingCartOutlined: ShoppingCartOutlined,
  },
  setup () {
    const router = useRouter();
    const values = reactive({ name: '' });
    const onChangeValue = (e) => {
      values.name = e.target.value;
    };
    const onSearch = () => {
      console.log(values.name, 'name---');
    };
    const goLogin = () => {
      router.push({ path: '/login' });
    };
    return () => {
      return (
        <div class={prefixCls}>
          <div class={prefixCls + '__top'}>
            <a-row justify="space-between" align="bottom">
              <a-col span={12}>
                <span>
                  {' '}
                  admin
                  <a>[退出]</a>
                </span>
              </a-col>
              <a-col span={12}>
                <div class={prefixCls + '__user-center'}>
                  <span onClick={goLogin}>登录</span>
                  <a-divider type="vertical" />
                  <span>注册</span>
                  <a-divider type="vertical" />
                  <span>用户中心</span>
                  <a-divider type="vertical" />
                  <span>我的购物车</span>
                  <a-divider type="vertical" />
                  <span>我的订单</span>
                </div>
              </a-col>
            </a-row>
          </div>
          <div class={prefixCls + '__search'}>
            <a-row justify={'center'}>
              <a-col span={6}>
                <div class={prefixCls + '__logo-box'}>
                  <span class={prefixCls + '__logo'}>
                    <img src={logo} alt="" />
                  </span>
                </div>
              </a-col>
              <a-col span={12}>
                <div>
                  <a-input-search
                    v-model={values.name}
                    placeholder="请搜索商品名称"
                    enter-button="搜索"
                    size="large"
                    onChange={onChangeValue}
                    onSearch={onSearch}
                  />
                </div>
              </a-col>
              <a-col span={6}>
                <div class={prefixCls + '__shopping-car'}>
                  <p>
                    <span class={prefixCls + '__shopping-car-icon'}>
                      <shopping-cart-outlined />
                    </span>
                    <span class={prefixCls + '__shopping-car-text'}>
                      我的购物车
                    </span>
                  </p>
                  <span class={prefixCls + '__shopping-count'}>1222</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      );
    };
  },
});
