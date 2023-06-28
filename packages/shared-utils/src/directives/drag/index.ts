import { VNode, DirectiveBinding, ObjectDirective } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
class Drag {
  /// 目标元素
  el: HTMLElement;

  // 触发的元素
  trigger: HTMLElement;

  // 触发对象的css selector

  handler: string;

  // 吸顶配置

  ceiling = 0;

  // 移动开始的x坐标
  x = 0;

  // 移动开始的y坐标

  y = 0;

  mTop = 0;

  mLeft = 0;

  top = 0;

  left = 0;

  width = 0;

  height = 0;

  parentWidth = 0;

  parentHeight = 0;

  // 最小悬挂
  docked = 10;

  diffHeight = 0;

  diffWidth = 0;

  onMouseDownBind: any;

  onMouseMoveBind: any;

  onMouseUpBind: any;

  ro: ResizeObserver = null;

  constructor(el: HTMLElement, options?: any) {
    this.el = el;
    this.handler = options.handler;
    this.ceiling = options.ceiling || this.ceiling;

    this.onMouseDownBind = this.onMouseDown.bind(this);
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    this.onMouseUpBind = this.onMouseUp.bind(this);
    this.init();
  }

  init() {
    this.top = this.el.offsetTop;
    this.left = this.el.offsetLeft;
    this.width = this.el.offsetWidth;
    this.height = this.el.offsetHeight;
    this.parentWidth = this.el.offsetParent.clientWidth;
    this.parentHeight = this.el.offsetParent.clientHeight;
    this.ro = new ResizeObserver((entries, observer) => {
      /**
       * 这是为了兼容浏览器快速放大缩小时候，贴边不生效的时候做了一个贴边兼容，
       * 当上一次记录的父节点长宽与当前父节点长宽不等时候，需要继续diff值，来做贴边
       * 的差值，如果是负数就不做差值合计
       */
      this.diffHeight = this.el.offsetParent.clientHeight - this.parentHeight;
      this.diffHeight = this.diffHeight > 0 ? this.diffHeight : 0;
      this.diffWidth = this.el.offsetParent.clientWidth - this.parentWidth;
      this.diffWidth = this.diffWidth > 0 ? this.diffWidth : 0;
      this.width = this.el.offsetWidth;
      this.height = this.el.offsetHeight;
      this.parentWidth = this.el.offsetParent.clientWidth;
      this.parentHeight = this.el.offsetParent.clientHeight;
      this.setPosition();
      this.diffHeight = 0;
      this.diffWidth = 0;
    });

    this.ro.observe(this.el.parentElement);
    this.ro.observe(this.el);
    if (this.handler) {
      this.trigger = this.el.querySelector(this.handler) || this.el;
    } else {
      this.trigger = this.el;
    }

    this.trigger.addEventListener('mousedown', this.onMouseDownBind, false);
  }

  onMouseDown(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
    this.mLeft = this.left;
    this.mTop = this.top;
    this.width = this.el.offsetWidth;
    this.height = this.el.offsetHeight;
    this.parentWidth = this.el.offsetParent.clientWidth;
    this.parentHeight = this.el.offsetParent.clientHeight;
    document.addEventListener('mousemove', this.onMouseMoveBind, false);
    document.addEventListener('mouseup', this.onMouseUpBind, false);
  }

  onMouseMove(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.top = this.mTop + e.clientY - this.y;
    this.left = this.mLeft + e.clientX - this.x;
    this.setPosition();
  }

  setPosition() {
    if (this.top < this.ceiling + this.docked) {
      this.top = 0 + this.docked;
    } else if (
      this.top + this.diffHeight >
      this.parentHeight - this.height - this.ceiling - this.docked
    ) {
      this.top = this.parentHeight - this.height - this.docked;
    }

    if (this.left < this.ceiling + this.docked) {
      this.left = 0 + this.docked;
    } else if (
      this.left + this.diffWidth >
      this.parentWidth - this.width - this.ceiling - this.docked
    ) {
      this.left = this.parentWidth - this.width - this.docked;
    }

    this.el.style.top = this.top + 'px';
    this.el.style.left = this.left + 'px';
  }

  onMouseUp() {
    document.removeEventListener('mousemove', this.onMouseMoveBind, false);
    document.removeEventListener('mouseup', this.onMouseUpBind, false);
  }

  destroy() {
    this.trigger.removeEventListener('mousedown', this.onMouseDownBind, false);
    this.ro.disconnect();
  }
}

/**
 * 通用拖拽指令
 */
const dragDirective: ObjectDirective = {
  created(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {},
  beforeUpdate(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {
    (el as any).__b__drag__ = new Drag(el, bind.value);
  },
  updated(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {
    if ((el as any).__b__drag__) {
      (el as any).__b__drag__.destroy();
    }
    (el as any).__b__drag__ = new Drag(el, bind.value);
  },
  unmounted(el: HTMLElement) {
    const darg = (el as any).__b__drag__ as Drag;
    darg.destroy();
  },
};
export default dragDirective;
