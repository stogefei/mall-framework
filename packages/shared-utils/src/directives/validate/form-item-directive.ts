import { VNode, DirectiveBinding, ObjectDirective } from 'vue';
import { FormItemValidate, FormItemElementParams } from './types';
import { validateRulesHandler, mouseover, mouseout } from './utils';
import { Rule } from '../../rules';
import { Dom } from '@amaz/utils';

let dateTime = new Date().getTime();
export const checkQueue = ((window as any).checkQueue = {});
/**
 * 通用的验证指令
 */
const directive: ObjectDirective = {
  created(el: HTMLElement, bind: DirectiveBinding, vnode: any) {
    const options = bind.value as FormItemValidate;
    const context = vnode.context as any;
    const rules: Rule[] = options.rules;
    const elment = el as any;
    const parent = el.parentElement;

    const code = options.code || 'formItem' + dateTime++;
    const params: FormItemElementParams = {
      code,
      rules,
      el,
      parent,
      options,
      callback: options.callback,
      validate: false,
      value: context[options.key],
      lastMessage: undefined,
      vm: context,
      tooltip: options.tooltip,
      validateRulesHandler: async (show = true, force = false) => {
        params.value = context[options.key];
        return await validateRulesHandler(params, show, force);
      },
    };
    const formElement = Dom.closest(el, '.bb-validate-form') as any;
    if (formElement && formElement.formItemList instanceof Object) {
      const index = formElement.formItemList.push(params);
      params.index = index - 1;
      params.formElement = formElement;
    }
    checkQueue[params.code] = params;
    elment.verificationParams = params;
    elment.__item__validate__mouseover = mouseover.bind(params);
    elment.__item__validate__mouseout = mouseout.bind(params);

    el.addEventListener('mouseover', elment.__item__validate__mouseover, false);
    el.addEventListener('mouseout', elment.__item__validate__mouseout, false);

    context.$watch(
      options.key,
      async (val, oval) => {
        params.validateRulesHandler();
      },
      { deep: true },
    );
  },
  updated(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {
    const params = (el as any).verificationParams as FormItemElementParams;
    const options = bind.value as FormItemValidate;
    params.rules = options.rules;
    params.options = options;
  },
  unmounted(el: HTMLElement) {
    const elment = el as any;
    const params = elment.verificationParams;
    if (params) {
      if (params.formElement) {
        const index = params.formElement.formItemList.findIndex(
          (item) => item.code === params.code,
        );
        params.formElement.formItemList.splice(index, 1);
        delete checkQueue[params.code];
      }
      params.tooltip && params.tooltip.remove();
      params.el.removeEventListener(
        'mouseover',
        elment.__item__validate__mouseover,
        false,
      );
      params.el.removeEventListener(
        'mouseout',
        elment.__item__validate__mouseout,
        false,
      );
    }
  },
};
export default directive;
