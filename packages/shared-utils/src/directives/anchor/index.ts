import { VNode, DirectiveBinding, ObjectDirective } from 'vue';
import { debounce } from 'lodash-es';
interface IAnchorParams {
  selector: string;
  cb?: (el: HTMLElement) => void;
  inited?: (anchor: Anchor) => void;
}

class Anchor {
  el: HTMLElement = null;

  params: IAnchorParams = null;

  selector: string = null;

  scrollTop = null;

  target: any = [];

  scrollBind = null;

  children: { [key: string]: HTMLElement } = {};

  current = null;

  scrollChild = null;

  cb: (el: HTMLElement) => void = null;

  inited: (anchor: any) => void = null;

  debounceGetTartget = null;

  loading = false;

  constructor(el: HTMLElement, params: IAnchorParams) {
    this.el = el;
    this.selector = params.selector;
    this.cb = params.cb;
    this.inited = params.inited;
    this.debounceGetTartget = debounce(this.getTarget, 50);
    this.scrollBind = this.onScroll.bind(this);
    this.init();
  }

  init() {
    this.el.style.position = 'relative';
    this.getTarget();
    this.el.addEventListener('scroll', this.scrollBind, false);
    this.onScroll();
    this.inited && this.inited({ scrollTo: this.scrollTo.bind(this) });
    const callback = (mutationsList, observer) => {
      this.loading = true;
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          this.debounceGetTartget();
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(this.el, { childList: true });
  }

  getTarget() {
    this.children = {};
    this.target = this.el.querySelectorAll(this.selector);
    this.target.forEach((child: HTMLElement) => {
      const top = child.offsetTop;
      this.children[top] = child;
    });
    this.loading = false;
  }

  scrollTo(el: HTMLElement) {
    if (this.loading) {
      setTimeout(() => {
        this.scrollTo(el);
      }, 50);
      return;
    }
    for (const top in this.children) {
      const child = this.children[top];
      if (el === child) {
        this.scrollChild = top;
        this.el.scrollTop = parseInt(top);
      }
    }
  }

  onScroll() {
    if (this.scrollChild) {
      this.scrollChild = null;
      return;
    }
    const tops = Object.keys(this.children);
    const idx = tops.find((top) => parseInt(top) >= this.el.scrollTop);

    if (idx && this.current !== this.children[idx]) {
      this.current = this.children[idx];
      this.cb && this.cb(this.current);
    }
  }

  destroy() {
    this.el.removeEventListener('scroll', this.scrollBind, false);
  }
}
/**
 * 通用拖拽指令
 */
const anchorDirective: ObjectDirective = {
  created(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {},
  updated(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {
    (el as any).__b__anchor__ = new Anchor(el, bind.value);
  },

  unmounted(el: HTMLElement) {
    const darg = (el as any).__b__anchor__ as Anchor;
    darg.destroy();
  },
};
export default anchorDirective;
