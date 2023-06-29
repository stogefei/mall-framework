import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import config from './config';
import {
  IFormCompoent,
  IFormConfig,
  IConfig,
  IFormSubscribeOptions,
  IViewConfig,
} from './types';
export * from './types';

class Core {
  /**
   * 通用配置
   */
  config: IConfig = config;

  /**
   * 业务组件
   */
  compositeComponents: any = {};

  /**
   * 视图组件
   */

  viewComponents: any = {};

  /**
   * 表单模块
   */
  form: IFormConfig = {
    tools: {},
    instances: {},
    properties: {},
    mobile: {},
    pc: {},
    subscribe: {},
  };

  /**
   * 视图模块
   */
  view: IViewConfig = {
    mobile: {},
    pc: {},
    subscribe: {},
  };

  /**
   * 页面路由
   */
  // routerOptions: RouteRecordRaw;
  /**
   * 自定义路由规则
   * 返回false，将阻止vue route的跳转，可以通过next控制跳转
   */

  routerRule: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => boolean;

  /**
   * 注册适配器配置
   * @param key
   * @param value
   */
  _register (key, value) {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let assignValue = this;
    try {
      keys.forEach((oKey, index) => {
        assignValue[oKey] = assignValue[oKey] || {};
        if (keys.length - 1 === index) {
          assignValue[oKey] = value;
        } else {
          assignValue = assignValue[oKey];
        }
      });
      assignValue = value;
    } catch (e: any) {
      const msg: any = '注册适配层出现Error:' + e.message;
      throw Error(msg);
    }
  }

  /**
   * 注册复合组件
   * @param key
   * @param value
   */
  registerCompositeComponents (key, value) {
    this._register(`compositeComponents.${key}`, value);
  }

  /**
   * 注册表单模块组件
   * @param options
   */
  registerFormComponent (options: IFormCompoent) {
    this.form.instances[options.instance.TYPE] = options.instance;
    this.form.pc[options.instance.TYPE] = options.pc;
    this.form.mobile[options.instance.TYPE] = options.mobile;
  }

  /**
   * 注册表单事件
   * @param code
   * @param formOptions
   */
  formSubscribe (code: string, formOptions: IFormSubscribeOptions) {
    this.form.subscribe[code] = formOptions;
  }

  /**
   * todo 注册表单模块组件属性
   * @param options
   * 暂时不开放 下个版本开放
   */
  // registerFormCompoentProperties (properties) {
  //   if (properties instanceof Object) {
  //     this.form.properties = Object.assign(this.form.properties, properties);
  //   }
  // }
}
const core = new Core();
export default core;
