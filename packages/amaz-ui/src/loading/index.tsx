import { Spin } from 'ant-design-vue';
import { withInstall } from '../_utils';
import { defineComponent } from 'vue';

const prefixCls = 'bb-loading';
export const LoadingProps = () => ({
  size: { default: 'small' || 'default' || 'large', String },
  tip: String,
});
const component = {
  name: prefixCls,
  components: {
    ASpin: Spin,
  },
  setup (props) {
    return () => {
      return (
        <div class={prefixCls}>
          <a-spin size={props.size} tip={props.tip}></a-spin>
        </div>
      );
    };
  },
};
const BBLoading = defineComponent(component);
export default withInstall(defineComponent(BBLoading));
