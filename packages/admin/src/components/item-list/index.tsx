import { defineComponent } from 'vue';
import {
  Button, Row, Col, Image,
} from 'ant-design-vue';
import { DoubleRightOutlined } from '@ant-design/icons-vue';
import './style/index.less';
import { useRouter } from 'vue-router';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const banner01 = require('../../assets/images/banner01.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const goods003 = require('../../assets/images/goods/goods003.jpg');
const prefixCls = 'bb-item-list';

export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    ARow: Row,
    ACol: Col,
    AImage: Image,
    DoubleRightOutlined,
  },
  setup () {
    const router = useRouter();
    const goProList = () => {
      router.push({ path: '/list' });
    };
    return () => {
      return (
        <div class={prefixCls}>
          <div class={prefixCls + '__header'}>
            <div class={prefixCls + '__header-left'}>
              <h4>新鲜水果</h4>
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
              <a-col span={4}>
                <div class={prefixCls + '__item'}>
                  <span class={prefixCls + '__item-title'}>草莓</span>
                  <span class={prefixCls + '__item-img'}>
                    <a-image src={goods003} previewMask={false} />
                  </span>
                  <span class={prefixCls + '__item-price'}>¥ 9.9</span>
                </div>
              </a-col>
              <a-col span={4}>
                <div class={prefixCls + '__item'}>
                  <span class={prefixCls + '__item-title'}>草莓</span>
                  <span class={prefixCls + '__item-img'}>
                    <a-image src={goods003} previewMask={false} />
                  </span>
                  <span class={prefixCls + '__item-price'}>¥ 9.9</span>
                </div>
              </a-col>
              <a-col span={4}>
                <div class={prefixCls + '__item'}>
                  <span class={prefixCls + '__item-title'}>草莓</span>
                  <span class={prefixCls + '__item-img'}>
                    <a-image src={goods003} previewMask={false} />
                  </span>
                  <span class={prefixCls + '__item-price'}>¥ 9.9</span>
                </div>
              </a-col>
              <a-col span={4}>
                <div class={prefixCls + '__item'}>
                  <span class={prefixCls + '__item-title'}>草莓</span>
                  <span class={prefixCls + '__item-img'}>
                    <a-image src={goods003} previewMask={false} />
                  </span>
                  <span class={prefixCls + '__item-price'}>¥ 9.9</span>
                </div>
              </a-col>
              <a-col span={4}>
                <div class={prefixCls + '__item'}>
                  <span class={prefixCls + '__item-title'}>草莓</span>
                  <span class={prefixCls + '__item-img'}>
                    <a-image src={goods003} previewMask={false} />
                  </span>
                  <span class={prefixCls + '__item-price'}>¥ 9.9</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      );
    };
  },
});
