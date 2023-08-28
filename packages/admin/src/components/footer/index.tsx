import { defineComponent } from 'vue';
import {
  Button, Row, Col, Input, Divider,
} from 'ant-design-vue';
import './style/index.less';
const prefixCls = 'bb-app-footer';

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
            <div class={prefixCls + '__link'}>
              <span>关于我们</span>
              <a-divider
                style={{ height: '13px', borderColor: '#999' }}
                type="vertical"
              />
              <span>联系我们</span>
              <a-divider
                style={{ height: '13px', borderColor: '#999' }}
                type="vertical"
              />
              <span>商家入驻</span>
              <a-divider
                style={{ height: '13px', borderColor: '#999' }}
                type="vertical"
              />
              <span>营销中心</span>
            </div>
            <p class={prefixCls + '__copy'}>
              CopyRight © 2016 北京天天生鲜信息技术有限公司 All Rights Reserved
            </p>
            <p>电话：010-****888 京ICP备*******8号</p>
          </div>
        </div>
      );
    };
  },
});
