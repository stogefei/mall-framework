import { defineComponent, Ref, ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ConfigProvider } from 'ant-design-vue';
import './styles/index.less';
const prefixCls = 'bb-layout';
export default defineComponent({
  name: prefixCls,
  components: {
    AConfigProvider: ConfigProvider,
  },
  setup () {
    const locale: Ref = ref(zhCN);
    return () => {
      return (
        <a-config-provider locale={locale.value}>
          <div id="app" class={prefixCls}>
            <router-view />
          </div>
        </a-config-provider>
      );
    };
  },
});
