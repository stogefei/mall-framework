import { createApp, h } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { lowerFirst } from 'lodash-es';
import config from '../config';

export interface IBModelOptions {
  getPopupContainer?: () => HTMLElement;
  class?: string;
  style?: string;
}

class BModal<T = IBModelOptions> {
  Component = null;

  instance = null;

  delay = null;

  constructor (Component, delay: number = 300) {
    this.Component = Component;
    this.instance = null;
    this.delay = delay;
  }

  initInstance (params: any = {}) {
    const { getPopupContainer, class: className, style } = params;
    const self:any = this;
    let mountNode;
    let root = document.body;
    if (getPopupContainer) {
      root = getPopupContainer();
    }
    const on = {};
    const instanceProps = {};
    Object.keys(params).forEach((key) => {
      if (key.substring(0, 2) === 'on') {
        const eKey = lowerFirst(key.substring(2));
        on[eKey] = params[key];
      }
      instanceProps[key] = params[key];
    });
    if (mountNode) { // 确保只存在一个弹框
      document.body.removeChild(mountNode);
      mountNode = null;
    }
    mountNode = document.createElement('div', { is: 'self-modal' });
    const instance:any = createApp({
      router: config.router,
      store: config.store,
      beforeMount () {},
      mounted () {},
      methods: {},
      setup (props, { slots }) {
        const p = { ...props, ...instanceProps };
        const component = self.Component || slots.default();
        const modalProps = {
          ref: 'map',
          class: className,
          style,
          onHideModal: () => {
            self.hide();
          },
          ...p,
          ...on,
        };
        return () => {
          return h(
            ConfigProvider,
            {
              locale: zhCN,
            },
            {
              default: () => [
                h(component, modalProps, { default: () => {} }),
              ],
            },
          );
        };
      },
    });
    this.instance = instance.mount(mountNode);
    root.appendChild(this.instance.$el);
  }

  show (params: T) {
    this.initInstance(params);
  }

  hide () {
    console.log('fun hide');
  }
}
export default BModal;
