import { defineComponent } from 'vue';
import {
  Button, Row, Col, Input, Divider,
} from 'ant-design-vue';
import './style/index.less';
const prefixCls = 'bb-app-nav';

export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    ARow: Row,
    ACol: Col,
    ADivider: Divider,
    AInputSearch: Input.Search,
  },
  setup () {
    return () => {
      return (
        <div class={prefixCls}>
          <div class={prefixCls + '__wrapper'}>
            <p class={prefixCls + '__all'}>全部商品分类</p>
            <ul class={prefixCls + '__pages'}>
              <li class={prefixCls + '__page'}>首页</li>
              <span class={prefixCls + '__page-divider-box'}>
                <a-divider
                  type="vertical"
                  class={prefixCls + '__page-divider'}
                />
              </span>
              <li class={prefixCls + '__page'}>手机生鲜</li>
              <span class={prefixCls + '__page-divider-box'}>
                <a-divider
                  type="vertical"
                  class={prefixCls + '__page-divider'}
                />
              </span>
              <li class={prefixCls + '__page'}>抽奖</li>
            </ul>
          </div>
        </div>
      );
    };
  },
});
