import { VNode, DirectiveBinding, ObjectDirective } from 'vue';
import { FormItemElementParams, FormValidateParams } from './types';
export class FormValidate {
  el: HTMLElement;

  params: FormValidateParams;

  itemList: FormItemElementParams[];

  errorMsg: string[];

  constructor(
    el: HTMLElement,
    itemList: FormItemElementParams[],
    params: FormValidateParams,
  ) {
    this.config({ el, itemList, params });
    el.classList.add('bb-validate-form');
  }

  config({ el, itemList, params }) {
    if (el) {
      this.el = el;
    }
    if (itemList) {
      this.itemList = itemList;
    }
    if (params) {
      this.params = params;
    }
  }

  async validate() {
    let res;
    let error = false;
    this.errorMsg = [];
    for (const idx in this.itemList) {
      const params = this.itemList[idx];

      if (!params.validate) {
        res = await params.validateRulesHandler(!error, true);
      } else if (params.lastMessage) {
        res = params.lastMessage;
      }
      if (res) {
        this.errorMsg.push(res);
        if (!error) {
          params.tooltip && params.tooltip.show(params.el, params.lastMessage);
          params.el.focus();
          error = true;
        }
        if (this.params.all === false) {
          break;
        }
      }
    }

    return {
      validate: !error,
      errorMsg: this.errorMsg.length && this.errorMsg[0],
    };
  }
}
/**
 * 通用的表单验证指令
 * 会在vm上注册一个formValidate 校验表单
 */
const formDirective: ObjectDirective = {
  created(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {
    const itemList: FormItemElementParams[] = ((el as any).formItemList = []);
    const formValidateParams = bind.value as FormValidateParams;

    if (formValidateParams) {
      const formValidate = new FormValidate(el, itemList, formValidateParams);
      (el as any).formValidate = formValidate;
      formValidateParams.inited && formValidateParams.inited(formValidate);
    }
  },
  beforeUpdate(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {},
  updated(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {},
  unmounted(el: HTMLElement) {
    if ((el as any).formValidate) {
      const tooltip = (el as any).formValidate.params.tooltip;
      tooltip && tooltip.remove();
    }
  },
};
export default formDirective;
