import Core from '@amaz/core';

class ValidateTooltip {
  tooltip: HTMLDivElement;

  constructor () {
    this.init();
  }

  init () {
    this.tooltip = document.createElement('div');
    this.tooltip.classList.add('bb-tooltip');
    const context = document.createElement('div');
    context.classList.add('bb-tooltip-context');
    this.tooltip.appendChild(context);
  }

  show (el: HTMLElement, message: string) {
    this.tooltip.children.item(0).innerHTML = message;
    const rect = el.getBoundingClientRect();
    this.tooltip.style.top = rect.top - rect.height + 'px';
    this.tooltip.style.left = rect.left + 'px';
    this.tooltip.style.maxWidth = rect.width + 'px';
    if (!this.tooltip.parentElement) {
      document.body.appendChild(this.tooltip);
    }
    const tRect = this.tooltip.getBoundingClientRect();
    this.tooltip.style.top = rect.top - tRect.height - 10 + 'px';
    this.tooltip.classList.add('bb-tooltip-show');
  }

  hide () {
    this.tooltip.classList.remove('bb-tooltip-show');
    this.tooltip.removeAttribute('style');
  }

  remove () {
    if (this.tooltip.parentElement) {
      document.body.removeChild(this.tooltip);
    }
  }
}
const validateTooltip = new ValidateTooltip();
Core.compositeComponents.ValidateTooltip = validateTooltip;
export default validateTooltip;
