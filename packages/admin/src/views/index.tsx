import { defineComponent } from 'vue';
import { Button } from 'ant-design-vue';
// import API, { ResponseCode } from '@amaz/api';
// import { UserUtils } from '@amaz/shared-utils';
// import { useRouter } from 'vue-router';
const prefixCls = 'bb-home';
export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    // AMenu: Menu,
    // AMenuDivider: Menu.Divider,
    // AMenuItem: Menu.Item,
    // ALayout: Layout,
    // ALayoutHeader: LayoutHeader,
    // ALayoutContent: LayoutContent,
    // ADropdown: Dropdown,
    // ARow: Row,
    // ACol: Col,
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
        <div>
          <a-button type={'primary'}>test</a-button>
          test
        </div>
      );
    };
  },
});
