/**
 * 是否开启bb_deubug模式
 */
(window as any).__BB_DEBUG__ = false;
// 模块开启
const modules = ((window as any).__BB_DEBUG_MODULES__ = {});
// 开启条件
const condition = ((window as any).__BB_DEBUG_CONDITION__ = (
  moduleId: string,
) => false);

function controller(moduleId: string, type: string, options) {
  modules[moduleId] = modules[moduleId] || false;

  if (
    (window as any).__BB_DEBUG__ ||
    modules[moduleId] ||
    condition(moduleId)
  ) {
    console[type](...options);
  }
}
/**
 * 错误 console
 * @param moduleId
 * @param options
 */
function error(moduleId: string, ...options) {
  controller(moduleId, 'error', options);
}
/**
 * 日志 console
 * @param moduleId
 * @param options
 */
function log(moduleId: string, ...options) {
  controller(moduleId, 'log', options);
}
/**
 * 警告 console
 * @param moduleId
 * @param options
 */
function warn(moduleId: string, ...options) {
  controller(moduleId, 'warn', options);
}
export { error, warn, log };
export default {
  error,
  warn,
  log,
};
