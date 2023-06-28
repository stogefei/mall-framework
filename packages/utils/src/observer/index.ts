class Observer {
  hanlders: { [key: string]: Function[] } = {};

  /**
   * 订阅函数
   * @param key
   * @param fun
   */
  subscribe(key: string, fun: Function) {
    if (!this.hanlders[key]) {
      this.hanlders[key] = [];
    }
    this.hanlders[key].push(fun);
  }

  /**
   * 取消订阅
   * @param key
   * @param fun
   */
  unSubscribe(key: string, fun: Function) {
    if (this.hanlders[key] && this.hanlders[key].length) {
      const index = this.hanlders[key].findIndex((item) => item === fun);
      if (index > -1) {
        this.hanlders[key].splice(index, 1);
      }
    }
  }

  /**
   * 取消所有订阅
   */
  unAllSubscribe() {
    this.hanlders = {};
  }

  /**
   * 是否存在对应key的监听
   * @param key
   * @returns
   */
  has(key: string) {
    return !!this.hanlders[key];
  }

  /**
   * 事件发布
   * @param args 第一个参数为key,后面的参数为函数的参数
   */
  publish(...args) {
    const key = args[0];
    const params = args.slice(1);
    if (this.hanlders[key]) {
      this.hanlders[key].forEach((fun) => {
        fun(...params);
      });
    }
  }
}
export default Observer;
