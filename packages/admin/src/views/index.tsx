import { defineComponent } from 'vue';
import { Button, Affix } from 'ant-design-vue';
import { VerticalAlignTopOutlined } from '@ant-design/icons-vue';
import './style/index.less';
import Header from '../components/header';
import Nav from '../components/nav';
import Banner from '../components/banner';
import Item from '../components/item-list';
import Footer from '../components/footer';
// import API, { ResponseCode } from '@amaz/api';
// import { UserUtils } from '@amaz/shared-utils';
// import { useRouter } from 'vue-router';
const prefixCls = 'bb-mall-home';
export default defineComponent({
  name: prefixCls,
  components: {
    Affix: Affix,
    AButton: Button,
    BHeader: Header,
    BNav: Nav,
    Banner: Banner,
    Item,
    BFooter: Footer,
    VerticalAlignTopOutlined,
  },
  setup () {
    // const router = useRouter();
    // const handleLogout = async () => {
    //   const url = '/auth/logout';
    //   const res: any = await API.request(url, 'DELETE');
    //   if (res.code === ResponseCode.SUCCESS) {
    //     // UserUtils.removeToken();
    //     message.success('退出成功', 1, () => {
    //       router.replace({ name: 'login' });
    //     });
    //   }
    // };
    // const handleClick = async ({ item, key, keyPath }: any) => {
    //   console.log(key);
    //   switch (key) {
    //     case 'logOut':
    //       handleLogout();
    //       break;
    //   }
    // };
    // const getPopupContainer = (node: any) => {
    //   if (node && node.parentNode) {
    //     return node.parentNode;
    //   }
    //   return node;
    // };
    // const selectedKeys = ref<string[]>(['1']);
    return () => {
      // const overlay = (
      //   <a-menu onClick={handleClick}>
      //     <a-menu-item key="update">
      //       <a href="javascript:void (0);">修改密码</a>
      //     </a-menu-item>
      //     <a-menu-divider />
      //     <a-menu-item key="logOut">
      //       <a href="javascript:void (0);">退出系统</a>
      //     </a-menu-item>
      //   </a-menu>
      // );
      return (
        <div class={prefixCls}>
          <b-header />
          <b-nav />
          <banner />
          <item />
          <item />
          <item />
          <item />
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
