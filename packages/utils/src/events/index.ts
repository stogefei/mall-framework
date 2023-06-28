/**
 * 选择器转元素
 * @param selector
 */
function selectorToElement(selector: string | Element): Element | null {
  let ele: Element | null;
  if (typeof selector === 'string') {
    ele = document.querySelector(selector);
  } else {
    ele = selector;
  }
  return ele;
}
/**
 * 注册事件监听
 * @param selector
 * @param event
 * @param fn
 * @param options
 */
function on(
  selector: string | Element,
  event: any,
  fn: any,
  options?: boolean | any,
) {
  const ele = selectorToElement(selector);
  ele && ele.addEventListener(event, fn, options);
}

/**
 * 删除事件监听
 * @param selector
 * @param event
 * @param fn
 * @param options
 */
function off(selector: string | Element, event: any, fn: any, options?: any) {
  const ele = selectorToElement(selector);
  ele && ele.removeEventListener(event, fn, options);
}

/**
 * 触发事件
 * @param selector 触发元素
 * @param eventName 触发事件名称
 * @param options 自定义事件参数
 */
function dispatch(
  selector: string | Element,
  eventName: string,
  options?: any,
) {
  const ele = selectorToElement(selector);
  if (document.createEvent) {
    const event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    Object.assign(event, options);
    ele.dispatchEvent(event);
  } else if ((ele as any).createEventObject) {
    (ele as any).fireEvent(`on${eventName}`);
  }
}

export { on, off, dispatch };

export default {
  on,
  off,
  dispatch,
};
