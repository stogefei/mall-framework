import { debounce } from 'lodash-es';
import API, { ResBodyListFunTreeVo, ResponseCode } from '@amaz/api';
const query: any = {};

const queryFun = debounce(treeRequest, 200);
/**
 * 获取树列表
 * @param params
 * @param callback
 */
function getTreeList (mode: string, portal: boolean, callback: Function) {
  query[mode] = query[mode] || {};
  query[mode].list = query[mode].list || [];
  query[mode].list.push(callback);
  queryFun(mode, portal);
}

async function treeRequest (mode, portal) {
  const keys = Object.keys(query);
  for (let index = 0; index < keys.length; index++) {
    const key: string = keys[index];
    const list: Function[] = query[key]?.list;
    if (list?.length) {
      let request: Promise<ResBodyListFunTreeVo>;
      if (portal) {
        request = API.portalModelFunTreeController.tree(mode);
      } else {
        request = API.modelFunTreeController.tree(mode);
      }
      const res = await request;
      if (res.code === ResponseCode.SUCCESS) {
        while (list.length) {
          const callback = list.pop();
          callback(res.data);
        }
      }
    }
  }
}

export {
  getTreeList,
};
