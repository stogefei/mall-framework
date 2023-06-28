import { VNode, DirectiveBinding, ObjectDirective } from 'vue';
// import 'default-passive-events';
enum TouchType {
  TAP = 'tap',
  SWIPE = 'swipe',
  SWIPELEFT = 'swipeleft',
  SWIPERIGHT = 'swiperight',
  SWIPEDOWN = 'swipedown',
  SWIPEUP = 'swipeup',
  LONGTAP = 'longtap',
}
class Touch {
  time = -1;

  el = null;

  vueMoves = true;

  vueLeave = true;

  longTouch = true;

  Touches = {
    x: 0,
    y: 0,
  };

  touchType = null;

  vueCallBack = null;

  binding = null;

  constructor(el, binding, type) {
    this.el = el;
    this.binding = binding;
    this.touchType = type;
    this.vueCallBack =
      typeof binding.value === 'object' ? binding.value.fn : binding.value;

    this.el.addEventListener(
      'touchstart',
      (e) => {
        this.start(e);
      },
      false,
    );

    this.el.addEventListener(
      'touchmove',
      (e) => {
        this.move(e);
      },
      false,
    );

    this.el.addEventListener(
      'touchend',
      (e) => {
        this.end(e);
      },
      false,
    );
  }

  start(e) {
    if (this.touchType === TouchType.LONGTAP) {
      e.preventDefault(); // 长按时阻止默认菜单，IOS还需要 -webkit-touch-callout: none; 来禁用默认菜单
    }
    this.vueMoves = true;
    this.vueLeave = true;
    this.longTouch = true;
    this.Touches = {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY,
    };
    this.time = window.setTimeout(() => {
      if (this.vueLeave && this.vueMoves) {
        this.touchType === 'longtap' && this.vueCallBack(e, this.binding.value);
        this.longTouch = false;
      }
    }, 1000);
  }

  end(e) {
    var disX = e.changedTouches[0].pageX - this.Touches.x;
    var disY = e.changedTouches[0].pageY - this.Touches.y;
    clearTimeout(this.time);
    if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {
      this.touchType === 'swipe' && this.vueCallBack(e, this.binding.value);
      if (Math.abs(disX) > Math.abs(disY)) {
        if (disX > 10) {
          this.touchType === 'swiperight' &&
            this.vueCallBack(e, this.binding.value);
        }
        if (disX < -10) {
          this.touchType === 'swipeleft' &&
            this.vueCallBack(e, this.binding.value);
        }
      } else {
        if (disY > 10) {
          this.touchType === 'swipedown' &&
            this.vueCallBack(e, this.binding.value);
        }
        if (disY < -10) {
          this.touchType === 'swipeup' &&
            this.vueCallBack(e, this.binding.value);
        }
      }
    } else {
      if (this.longTouch && this.vueMoves) {
        this.touchType === 'tap' && this.vueCallBack(e, this.binding.value);
        this.vueLeave = false;
      }
    }
  }

  move(e) {
    this.vueMoves = false;
  }
}

const TouchDirectives: { [key in TouchType]: ObjectDirective } = {
  tap: undefined,
  swipe: undefined,
  swipeleft: undefined,
  swiperight: undefined,
  swipedown: undefined,
  swipeup: undefined,
  longtap: undefined,
};
Object.values(TouchType).forEach((key) => {
  TouchDirectives[key] = {
    created: function (
      el: HTMLElement,
      binding: DirectiveBinding,
      vnode: VNode,
    ) {
      // eslint-disable-next-line no-new
      new Touch(el, binding, key);
    },
  };
});
export default TouchDirectives;
