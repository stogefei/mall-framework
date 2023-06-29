interface IFormSubscribeActionOptions {
  action: string;
  form: any;
  options?: any;
  result?: any;
}
interface IFormSubscribeOptions {
  /**
   * 表单加载后事件
   */
  loaded?: (form: any) => void;
  /**
   *  执行表单事件前触发
   */
  actionBefore?: (params: IFormSubscribeActionOptions) => Promise<any>;
  /**
   *  执行表单事件执行后
   */
  actionAftre?: (params: IFormSubscribeActionOptions) => void;
  /**
   * 表单销毁后执行
   */

  destroy?: (form: any) => void;
}
interface IFormConfig {
  /**
   * 设计器控件工具栏
   */
  tools: any;
  /**
   * 表单组件实例
   */
  instances: any;
  /**
   * 表单组件属性
   */
  properties: any;
  /**
   * 移动端组件
   */
  mobile: any;
  /**
   * PC端组件
   */
  pc: any;
  /**
   * 表单订阅
   */
  subscribe: { [code: string]: IFormSubscribeOptions };
}
interface IViewConfig {
  /**
   * 移动端组件
   */
  mobile: any;
  /**
   * PC端组件
   */
  pc: any;
  /**
   * 视图订阅
   */
  subscribe: { [code: string]: IFormSubscribeOptions };
}
interface IFormCompoent {
  /**
   * 组件实例
   */
  instance: any;
  /**
   * 移动端组件
   */
  mobile: any;
  /**
   * PC端组件
   */
  pc: any;
}
export {
  IFormConfig, IFormCompoent, IFormSubscribeOptions, IViewConfig,
};
