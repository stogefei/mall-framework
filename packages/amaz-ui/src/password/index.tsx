import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { Input, Modal, FormModel } from 'ant-design-vue';
import { withInstall } from '../_utils';
import Icon from '../icon';
import { VNodeData } from 'vue';
import API, { ResBodyGenKeyResultVo, ResponseCode } from '@amaz/api';
import { Encryption } from '@amaz/utils';
import i18n from '@amaz/i18n';
const passwordPattern = /^[a-zA-Z0-9~!@#$%^&*()-=+]{5,20}$/;
export enum passwordType {
  UPDATE = 'UPDATE', // 更新密码
  RESET = 'RESET', // 重置密码
}
const prefixCls = 'bb-password';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon: Icon,
    AInput: Input.Password,
    AModal: Modal,
    AFormModel: FormModel,
    AFormModelItem: FormModel.Item,
  },
})
class BBPassword extends Vue {
  @Prop({ default: false }) value: boolean;

  @Prop({ default: 'UPDATE' }) type!: passwordType; // 修改密码/重置密码

  @Prop() userData!: any; // 用户信息

  visible: boolean = false;

  loading: boolean = false;

  @Watch('value')
  onValueChange (v: boolean) {
    this.visible = v;
    if (this.type === passwordType.RESET) {
      this.form.password = '@babai123456';
    } else {
      this.form.password = '';
    }
  }

  form: any = {
    oldPassword: '',
    newPassword: '',
    password: '',
  };

  formLayout: string = 'horizontal';

  labelCol: any = {
    xs: { span: 24 },
    sm: { span: 6 },
  };

  wrapperCol: any = {
    xs: { span: 24 },
    sm: { span: 18 },
  };

  // rsa加密
  async getRsaKey () {
    return await API.loginController.genRsaKey();
  }

  handleOk () {
    (this as any).$refs.ruleForm.validate((valid) => {
      if (valid) {
        this.loading = true;
        this.getRsaKey().then((resultRas: ResBodyGenKeyResultVo) => {
          if (resultRas.code === ResponseCode.SUCCESS) {
            const { genBatchId, publicKey } = resultRas.data;
            if (this.type === passwordType.UPDATE) {
              this.upDatePass(genBatchId, publicKey);
            } else {
              this.resetPass(genBatchId, publicKey);
            }
          }
        });
      }
    });
  }

  // 更新密码
  upDatePass (genBatchId, publicKey) {
    const oldPassword: any = Encryption.RsaEncryption(
      this.form.oldPassword,
      publicKey,
    );
    const newPassword: any = Encryption.RsaEncryption(
      this.form.newPassword,
      publicKey,
    );
    const params: any = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      batchId: genBatchId,
    };
    API.portalUnitController.updatePwd(params).then((res: any) => {
      if (res.code === ResponseCode.SUCCESS) {
        this.loading = false;
        this.$message.success(
          i18n.t('common.updateSuccess') as string,
          0.5,
          () => {
            this.loading = false;
            this.handleCancel();
          },
        );
      } else {
        this.loading = false;
      }
    });
  }

  // 重置密码
  resetPass (genBatchId, publicKey) {
    const password: any = Encryption.RsaEncryption(
      this.form.password,
      publicKey,
    );
    const params = {
      userId: this.userData.id,
      password: password,
      batchId: genBatchId,
    };
    API.userController.resetPwd(params).then((res: any) => {
      if (res.code === ResponseCode.SUCCESS) {
        (this as any).$message.success(
          `${i18n.t('admin.org.resetSuccess')}`,
          0.5,
          () => {
            this.loading = false;
            this.handleCancel();
          },
        );
      } else {
        (this as any).$message.error(`${i18n.t('admin.org.resetFailed')}`);
        this.loading = false;
      }
    });
  }

  handleCancel () {
    (this as any).$refs.ruleForm.resetFields();
    this.$emit('input', false);
  }

  // 密码校验
  passwordValidator (rule: any, value: any, callback: Function) {
    const password = this.form.password;
    if (!value) {
      callback(new Error(i18n.t('portal.pwdConfirm') as string));
    } else if (value !== password) {
      callback(new Error(i18n.t('portal.pwdError') as string));
    } else {
      callback();
    }
  }

  render () {
    const formProp: VNodeData = {
      props: {
        layout: this.formLayout,
        model: this.form,
        labelAlign: 'left',
      },
    };
    const userNameProp: VNodeData = {
      props: {
        label: i18n.t('admin.userName'),
        labelCol: this.labelCol,
        wrapperCol: this.wrapperCol,
      },
    };
    const userCodeProp: VNodeData = {
      props: {
        label: i18n.t('admin.account'),
        labelCol: this.labelCol,
        wrapperCol: this.wrapperCol,
      },
    };
    const oldPassProp: VNodeData = {
      props: {
        label: i18n.t('portal.oldPassword'),
        labelCol: this.labelCol,
        wrapperCol: this.wrapperCol,
        ref: 'oldPassword',
        prop: 'oldPassword',
      },
    };
    const passProp: VNodeData = {
      props: {
        label: i18n.t('portal.newPassword'),
        labelCol: this.labelCol,
        wrapperCol: this.wrapperCol,
        ref: 'password',
        prop: 'password',
      },
    };
    const newPassProp: VNodeData = {
      props: {
        label: i18n.t('portal.confirmPassword'),
        labelCol: this.labelCol,
        wrapperCol: this.wrapperCol,
        ref: 'newPassword',
        prop: 'newPassword',
      },
    };
    const rulesOld = [
      {
        required: true,
        message: i18n.t('portal.pwdErrorMsg'),
        pattern: passwordPattern,
        trigger: ['change', 'blur'],
      },
    ];
    const rulesPass = [
      {
        required: true,
        message: i18n.t('portal.pwdErrorMsg'),
        pattern: passwordPattern,
        trigger: ['change', 'blur'],
      },
    ];
    const rulesNewPass = [
      {
        required: true,
        message: i18n.t('portal.pwdErrorMsg'),
        pattern: passwordPattern,
        trigger: 'blur',
      },
      {
        trigger: ['change', 'blur'],
        validator: this.passwordValidator,
      },
    ];
    const modalProps: VNodeData = {
      props: {
        title:
          this.type === passwordType.UPDATE
            ? i18n.t('portal.changePassword')
            : i18n.t('admin.resetPassword'),
        width: 418,
        visible: this.visible,
        confirmLoading: this.loading,
        dis: this.loading,
        destroyOnClose: true,
      },
      on: {
        ok: this.handleOk,
        cancel: this.handleCancel,
      },
    };
    let Tag;
    if (this.type === passwordType.UPDATE) {
      Tag = (
        <a-form-model ref="ruleForm" {...formProp}>
          <a-form-model-item {...oldPassProp} rules={rulesOld}>
            <a-input
              placeholder={i18n.t('common.inputPlaceholderT', {
                text: i18n.t('common.oldPassword'),
              })}
              maxLength={32}
              v-model={this.form.oldPassword}
            />
          </a-form-model-item>
          <a-form-model-item {...passProp} rules={rulesPass}>
            <a-input
              placeholder={i18n.t('common.inputPlaceholderT', {
                text: i18n.t('common.newPassword'),
              })}
              maxLength={32}
              v-model={this.form.password}
            />
          </a-form-model-item>
          <a-form-model-item {...newPassProp} rules={rulesNewPass}>
            <a-input
              placeholder={i18n.t('common.inputPlaceholderT', {
                text: i18n.t('common.confirmPassword'),
              })}
              maxLength={32}
              v-model={this.form.newPassword}
            />
          </a-form-model-item>
        </a-form-model>
      );
    } else {
      Tag = (
        <a-form-model ref="ruleForm" {...formProp}>
          <a-form-model-item {...userNameProp}>
            {this.userData ? this.userData.name : ''}
          </a-form-model-item>
          <a-form-model-item {...userCodeProp}>
            {this.userData ? this.userData.code : ''}
          </a-form-model-item>
          <a-form-model-item {...passProp} rules={rulesPass}>
            <a-input
              placeholder={i18n.t('common.inputPlaceholderT', {
                text: i18n.t('common.newPassword'),
              })}
              maxLength={32}
              v-model={this.form.password}
            />
          </a-form-model-item>
        </a-form-model>
      );
    }
    return (
      <a-modal {...modalProps} class={prefixCls}>
        {Tag}
      </a-modal>
    );
  }
}

export default withInstall<BBPassword>(BBPassword);
