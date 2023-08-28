import { defineComponent } from 'vue';
import {
  Button, Row, Col, Input, Divider, Carousel,
} from 'ant-design-vue';
import './style/index.less';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const img1 = require('../../assets/images/slide.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const img2 = require('../../assets/images/slide02.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const img3 = require('../../assets/images/slide03.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const img4 = require('../../assets/images/slide04.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const adv1 = require('../../assets/images/adv01.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const adv2 = require('../../assets/images/adv02.jpg');
const prefixCls = 'bb-app-banner';
export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    ARow: Row,
    ACol: Col,
    ADivider: Divider,
    ACarousel: Carousel,
    AInputSearch: Input.Search,
  },
  props: {
    categoryList: { type: Array, default: () => [] },
  },
  setup (props) {
    return () => {
      const { categoryList } = props;
      return (
        <div class={prefixCls}>
          <div class={prefixCls + '__menu-box'}>
            <ul class={prefixCls + '__menu'}>
              {categoryList.map((item: any, index) => {
                return (
                  <li>
                    <a class={'category' + index}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class={prefixCls + '__carousel'}>
            <a-carousel autoplay effect="fade" dotsClass={prefixCls + '__dots'}>
              <div>
                <img class={prefixCls + '__carousel-img'} src={img1} alt="" />
              </div>
              <div>
                <img class={prefixCls + '__carousel-img'} src={img2} alt="" />
              </div>
              <div>
                <img class={prefixCls + '__carousel-img'} src={img3} alt="" />
              </div>
              <div>
                <img class={prefixCls + '__carousel-img'} src={img4} alt="" />
              </div>
            </a-carousel>
          </div>
          <div class={prefixCls + '__adv'}>
            <span>
              <img src={adv1} alt="" />
            </span>
            <span>
              <img src={adv2} alt="" />
            </span>
          </div>
        </div>
      );
    };
  },
});
