/**
 * 本地缓存配置基础类
 * 处理站点所有的本地缓存和处理，基于indexDB
 */
export enum TableNames {
  APPSLIST = 'appsList',
}
const appList = {
  name: TableNames.APPSLIST,
  options: { keyPath: 'id' },
  fields: ['name', 'code', 'enabled', 'icon', 'lastTime'],
};

export default {
  dbName: 'bbServer',
  version: 1,
  tables: [appList],
  TableNames,
};
