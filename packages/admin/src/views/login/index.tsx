import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  Button,
  Input,
  Form,
  Divider,
  message,
  FormInstance,
} from 'ant-design-vue';
import API, { ResponseCode } from '@amaz/api';
import { UserUtils } from '@amaz/shared-utils';
import './styles/index.less';
const prefixCls = 'bb-login';
interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  name: prefixCls,
  components: {
    AButton: Button,
    AForm: Form,
    AFormItem: Form.Item,
    ADivider: Divider,
    AInput: Input,
    AInputPassword: Input.Password,
  },
  setup: function () {
    const router = useRouter();
    const formRef: any = ref<FormInstance>();
    const loading = ref(false);
    const formState = reactive<FormState>({
      username: 'zaf1',
      password: '12345678',
    });
    const path = 'apps/zaf/TKKPCX/model/form?code=biadoad';
    const handleLogin = async () => {
      try {
        // console.log(router, 'router');
        loading.value = true;
        const values = await formRef.value.validateFields();
        console.log('Success:', values);
        const res = await login(values.username, values.password);
        if (res.code === ResponseCode.SUCCESS) {
          const fromPath = localStorage.getItem('fromPath');
          console.log(fromPath, 'fromPath');
          // 不包含登录界面
          if (fromPath && !fromPath.includes('login')) {
            message.success('登录成功!', 1, () => {
              // window.location.replace(fromPath);
              router.replace({ path });
              loading.value = false;
            });
          } else {
            message.success('登录成功!', 1, () => {
              // router.replace({ name: 'Home' });
              router.replace({ path });
              loading.value = false;
            });
          }
        } else {
          loading.value = false;
        }
      } catch (errorInfo) {
        loading.value = false;
        console.log('Failed:', errorInfo);
      }
    };
    const login = async (name: string, pwd: string) => {
      const url = '/auth/login';
      const password: any = pwd;
      const params = {
        username: name,
        password: password,
        orgId: '600542686021156864',
      };
      const res: any = await API.request(url, 'POST', params);
      if (res.code === ResponseCode.SUCCESS) {
        await UserUtils.getUserInfo(res.data);
      }
      return res;
    };
    const formProps = {
      layout: 'vertical',
      model: formState,
      name: 'dynamic_rule',
      ref: formRef,
    };
    return () => {
      // 账户登录
      const AccountLoginTag = (
        <div class={prefixCls + '__wrapper'}>
          <div class={prefixCls + '__box'}>
            <h3 class={`${prefixCls}__header`}>账号登录</h3>
            <a-divider />
            <a-form {...formProps}>
              <a-form-item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入账号!' }]}
              >
                <a-input
                  v-model={formState.username}
                  placeholder="请输入密码"
                />
              </a-form-item>

              <a-form-item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <a-input-password
                  class={`${prefixCls}__pwd`}
                  v-model={formState.password}
                  placeholder="请输入密码"
                />
              </a-form-item>

              <a-form-item>
                <a-button
                  class={`${prefixCls}__btn`}
                  size="large"
                  block
                  type="primary"
                  onClick={handleLogin}
                  loading={loading.value}
                >
                  登录
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      );
      return <div class={prefixCls}>{AccountLoginTag}</div>;
    };
  },
});
