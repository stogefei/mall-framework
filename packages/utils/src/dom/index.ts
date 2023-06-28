/**
 * 通过选择器获取element的父元素节点
 * @param el
 * @param selector
 */
function closest(el: HTMLElement, selector: string): HTMLElement | null {
  let matchesSelector = el.matches;

  if (!matchesSelector) {
    const tEl: any = el;
    matchesSelector =
      tEl.matchesSelector ||
      tEl.mozMatchesSelector ||
      tEl.msMatchesSelector ||
      tEl.oMatchesSelector ||
      tEl.webkitMatchesSelector ||
      function (s) {
        // @ts-ignore
        const matches = (this.document || this.ownerDocument).querySelectorAll(
          s,
        );
        let i: number = matches.length;
        // @ts-ignore
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }
  while (el) {
    if (matchesSelector.call(el, selector)) {
      break;
    }

    // eslint-disable-next-line no-param-reassign
    el = el.parentElement as HTMLElement;
  }
  return el;
}
/**
 * element全屏显示
 * @param el
 */

function fullscreen(el: HTMLElement) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
    // 兼容Firefox
    // @ts-ignore
  } else if (el.mozRequestFullScreen) {
    // @ts-ignore
    el.mozRequestFullScreen();
    // 兼容Chrome, Safari and Opera等
    // @ts-ignore
  } else if (el.webkitRequestFullScreen) {
    // @ts-ignore
    el.webkitRequestFullScreen();
    // 兼容IE/Edge
    // @ts-ignore
  } else if (el.msRequestFullscreen) {
    // @ts-ignore
    el.msRequestFullscreen();
  }
}
export { closest, fullscreen };
export default {
  closest,
  fullscreen,
};
