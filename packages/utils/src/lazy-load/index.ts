class LazyLoad {
  el: HTMLElement;

  options: any = {
    delay: 0,
    selector: '.lazyload',
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [0, 0],
    callback: null,
    delAfterListening: false,
  };

  timer: any = 0;

  observer!: IntersectionObserver;

  constructor(el: HTMLElement, options?: any) {
    this.el = el;
    this.options = Object.assign(this.options, options);
    this.init();
  }

  init() {
    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(
        this.handleObserver.bind(this),
        this.options,
      );
      const children = this.el.querySelectorAll(this.options.selector);
      children.forEach((el: HTMLElement) => {
        if (this.observer) {
          this.observer.observe(el);
        }
      });
    } else {
      const eleArr: any[] = [];
      const children = this.el.querySelectorAll(this.options.selector);
      children.forEach((el: HTMLElement) => {
        eleArr.push({
          isIntersecting: true,
          target: el,
        });
      });
      if (this.options.callback) {
        this.options.callback(eleArr);
      }
    }
  }

  /**
   * 处理observer
   * @param entries
   */
  handleObserver(entries: IntersectionObserverEntry[]) {
    const eleArr: IntersectionObserverEntry[] = [];
    entries.forEach((entry: IntersectionObserverEntry) => {
      eleArr.push(entry);
      if (this.options.delAfterListening) {
        this.observer.unobserve(entry.target);
      }
    });
    if (this.options.callback) {
      this.options.callback(eleArr);
    }
  }

  /**
   * 销毁对象
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
export default LazyLoad;
