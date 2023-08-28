import { defineComponent, ref } from 'vue';
import { Button, Affix } from 'ant-design-vue';
import { VerticalAlignTopOutlined } from '@ant-design/icons-vue';
import './style/index.less';
import Header from '../components/header';
import Nav from '../components/nav';
import Banner from '../components/banner';
import ItemList from '../components/item-list';
import Footer from '../components/footer';
import { RequestController } from '@/request/requestController';
import { ResponseCode } from '@amaz/api/es';
const prefixCls = 'bb-mall-home';
export default defineComponent({
  name: prefixCls,
  components: {
    Affix: Affix,
    AButton: Button,
    BHeader: Header,
    BNav: Nav,
    Banner: Banner,
    ItemList,
    BFooter: Footer,
    VerticalAlignTopOutlined,
  },
  setup () {
    const categoryList = ref([]);
    RequestController.getCategoryList().then((result) => {
      console.log(result, 'result');
      if (result.code === ResponseCode.SUCCESS) {
        categoryList.value = result.data;
      }
    });
    return () => {
      return (
        <div class={prefixCls}>
          <b-header />
          <b-nav />
          <banner categoryList={categoryList.value} />
          {categoryList.value.map((item) => {
            return <item-list dataItem={item} />;
          })}
          <b-footer />
          <a-affix
            style={{ position: 'fixed', bottom: '100px', right: '50px' }}
            OffsetBottom={200}
          >
            <vertical-align-top-outlined
              style={{ fontSize: '32px', cursor: 'pointer' }}
            />
          </a-affix>
        </div>
      );
    };
  },
});
