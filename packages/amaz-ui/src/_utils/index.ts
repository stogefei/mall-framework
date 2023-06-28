import Core from '@amaz/core';
import { StringUtils } from '@amaz/utils';
import type { App } from 'vue';
// () => Promise<Component<T>>
function withInstall <T> (comp: T) {
  const c:any = comp;
  let name = c.options?.name || c.name;
  name = StringUtils.lineToHump(name.replace(/^bb/, ''));
  if (!Core.compositeComponents[name]) {
    Core.compositeComponents[name] = comp;
  }
  // c.install = function (vue) {
  //   vue.component(name, comp);
  // };
  c.install = function (app: App) {
    app.component(name, comp);
  };
  // return () =>
  //   new Promise<Component<T>>((resolve, reject) => {
  //     const component = Core.compositeComponents[name];
  //     console.log(component, 'component');
  //     resolve(component);
  //   });
  // console.log(Core, 'Core');
  return Core.compositeComponents[name] || comp;
}
export {
  withInstall,
};
