import { FormItemElementParams } from './types';
import { RuleHdandler } from '../../rules';

/**
 * 表单检查规则
 * @param params
 * @param show 是否显示tooltip
 * @param force 是否强制检查
 * @returns
 */
async function validateRulesHandler(
  params: FormItemElementParams,
  show = true,
  force = false,
) {
  const { el, rules, value, options, tooltip, formElement } = params;
  if (!tooltip) {
    params.tooltip = (formElement as any)?.formValidate.params.tooltip;
  }

  if (value === undefined && !force) return;
  let message;
  let rule;
  for (const index in rules) {
    rule = rules[index];
    const res = await RuleHdandler[rule.type](value, rule, options);
    if (!res) {
      message = rule.message;
      if (message instanceof Function) {
        message = await message(value, params);
      }
      break;
    }
    rule.validate = !!res;
  }
  params.validate = true;

  if (message) {
    el.classList.add('verification-error');
    show && params.tooltip && params.tooltip.show(el, message);
  } else {
    show && params.tooltip && params.tooltip.hide();
    el.classList.remove('verification-error');
  }

  params.lastMessage = message;
  params.callback && params.callback(value, !message, message);
  return message;
}
async function mouseover(e: FocusEvent) {
  const { el, tooltip, lastMessage } = this;

  if (lastMessage && tooltip) {
    tooltip.show(el, lastMessage);
  }
}
async function mouseout(e: Event) {
  const { tooltip } = this;
  tooltip && tooltip.hide();
}

export { validateRulesHandler, mouseover, mouseout };
export default {
  validateRulesHandler,
  focus,
  blur,
};
