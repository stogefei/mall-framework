export interface IDBField {
  key: string;
  options: IDBIndex;
}
export interface IDBTable {
  name: string;
  options: any;
  fields: Array<string | IDBField>;
  init?: (db: IDBDatabase) => void;
}
export interface IDBParams {
  dbName: string;
  version: number;
  tables: IDBTable[];
}
export class IDBHander {
  dbName = null;

  version = null;

  tables: IDBTable[] = [];

  db: IDBDatabase = null;

  constructor(params: IDBParams) {
    this.dbName = params.dbName;
    this.version = params.version;
    this.tables = params.tables;
  }

  /**
   * 打开数据库
   * @success 成功的回调，返回db，非必传
   * @error 失败的回调，返回错误信息，非必传
   * */
  open() {
    return new Promise<boolean>((resolve, reject) => {
      if (!window.indexedDB) {
        reject(new Error('当前浏览器不支持window.indexedDB'));
      } else {
        // window.indexedDB.deleteDatabase(this.dbName);
        const request = window.indexedDB.open(this.dbName, this.version);
        request.onerror = (e) => {
          reject((e.currentTarget as any).error.message);
        };
        request.onsuccess = (e) => {
          this.db = request.result;
          resolve(true);
        };
        request.onupgradeneeded = (e) => {
          const db = (e.target as any).result;
          if (this.tables && this.tables.length) {
            this.tables.forEach((table) => {
              const objectStore = db.createObjectStore(
                table.name,
                table.options,
              );
              table.fields.forEach((field) => {
                if (field instanceof Object) {
                  objectStore.createIndex(field.key, field.key, field.options);
                } else {
                  objectStore.createIndex(field, field, { unique: false });
                }
              });
            });
          }
        };
      }
    });
  }

  /**
   * @method 新增数据
   * @param tableName
   * @param data
   */
  async insert(tableName: string, data: any | any[]) {
    const store = await this.createTransaction(tableName);

    if (data instanceof Array) {
      data.forEach((item) => {
        store.put(item);
      });
    } else {
      store.put(data);
    }
  }

  /**
   * @method 查询某张表的所有数据
   * @param tableName
   * @returns
   */
  queryAll(tableName, sort?) {
    return new Promise<any[]>((resolve, reject) => {
      const store = this.createTransaction(tableName, 'readonly');
      const list = [];
      let index = 0;
      store.openCursor().onsuccess = (e: any) => {
        this.cursorSuccess(
          e,
          {
            handler: ({ currentValue }) => list.push(currentValue),
            condition: () => true,
            over: () => {
              if (sort) {
                this.sort(list, sort);
              }
              resolve(list);
            },
          },
          index++,
        );
      };
    });
  }

  /**
   * @method 查询某张表的所有数据
   * @param tableName
   * @returns
   */
  query({ tableName, condition, sort }: any) {
    return new Promise<any[]>((resolve, reject) => {
      const store = this.createTransaction(tableName, 'readonly');
      const list = [];
      let index = 0;
      store.openCursor().onsuccess = (e: any) => {
        this.cursorSuccess(
          e,
          {
            handler: ({ currentValue }) => list.push(currentValue),
            condition: condition || (() => true),
            over: () => {
              if (sort) {
                this.sort(list, sort);
              }
              resolve(list);
            },
          },
          index++,
        );
      };
    });
  }

  /**
   * @method 查询某张表的指定条数数据
   * @param tableName
   * @returns
   */
  limit({ tableName, start, end, sort, condition }: any) {
    const nCondition = condition || (() => true);
    return new Promise<any[]>((resolve, reject) => {
      if (start === undefined) {
        reject(new Error('limit index not undefined'));
      } else {
        const store = this.createTransaction(tableName, 'readonly');
        const list = [];
        let oIndex = 0;
        let startIndex = 0;
        let endIndex = 0;

        if (start && end === undefined) {
          endIndex = start;
        } else {
          startIndex = start;
          endIndex = end;
        }

        store.openCursor().onsuccess = (e: any) => {
          this.cursorSuccess(
            e,
            {
              handler: ({ currentValue }) => list.push(currentValue),
              condition: nCondition,
              over: () => {
                if (sort) {
                  this.sort(list, sort);
                }
                resolve(list.slice(startIndex, endIndex));
              },
            },
            oIndex++,
          );
        };
      }
    });
  }

  /**
   * @method 查询数据（主键值）
   * @param tableName
   * @param target
   */
  queryByPrimaryKey(tableName, target) {
    return new Promise((resolve, reject) => {
      const store = this.createTransaction(tableName, 'readonly');
      console.log(store);

      const requset = store.get(target);
      requset.onsuccess = (e: any) => {
        const result = e.target.result;
        resolve(result);
      };
      requset.onerror = (e) => {
        reject(e);
      };
    });
  }

  /**
   * @method 批量修改数据
   * @param tableName
   * @param condition
   */
  update(tableName, data: any | any[]) {
    return new Promise((resolve, reject) => {
      const store = this.createTransaction(tableName);
      const key = store.keyPath as string;
      if (data instanceof Array) {
        store.openCursor().onsuccess = (e: any) => {
          this.cursorSuccess(e, {
            handler: ({ currentValue, cursor }) => {
              const item = data.find(
                (oItem) => oItem[key] === currentValue[key],
              );
              if (item) {
                cursor.update(Object.assign(currentValue, item));
              }
            },
            condition: () => true,
            over: () => {
              resolve(true);
            },
          });
        };
      } else {
        const request = store.put(data);
        request.onsuccess = (e: any) => {
          const result = e.target.result;
          resolve(result);
        };
        request.onerror = (e) => {
          reject(e);
        };
      }
    });
  }

  /**
   * @method 删除数据
   * @param tableName
   * @param condition
   */
  delete(tableName, ids: string | string[]) {
    return new Promise((resolve, reject) => {
      const store = this.createTransaction(tableName);
      const key = store.keyPath as string;
      if (ids instanceof Array) {
        store.openCursor().onsuccess = (e: any) => {
          this.cursorSuccess(e, {
            handler: ({ currentValue, cursor }) => {
              const item = ids.includes(currentValue[key]);
              if (item) {
                cursor.delete();
              }
            },
            condition: () => true,
            over: () => {
              resolve(true);
            },
          });
        };
      } else {
        const request = store.delete(ids);
        request.onsuccess = (e: any) => {
          resolve(true);
        };
        request.onerror = (e) => {
          reject(e);
        };
      }
    });
  }

  /**
   * @method 数据结果排序
   * @param list
   * @param param1
   */
  sort(list: any[], { key, type = 'asc' }) {
    let res = [-1, 1];

    if (type === 'desc') {
      res = [1, -1, 0];
    }
    function compare(value1, value2) {
      if (value1[key] < value2[key]) {
        return res[0];
      } else if (value1[key] > value2[key]) {
        return res[1];
      } else {
        return 0;
      }
    }
    list.sort(compare);
  }

  /**
   * @method 开启事务
   * @param {String} 表名
   * @param {String} 事务权限
   * @return store
   * */
  createTransaction(tableName, mode = 'readwrite') {
    if (!this.db) {
      throw new Error('db is not open');
    }
    if (!tableName || !mode) {
      throw new Error('in createTransaction,tableName and mode is required');
    }
    const transaction = this.db.transaction(tableName, mode as any);
    return transaction.objectStore(tableName);
  }

  clearTable(tableName: string) {
    return new Promise((resolve, reject) => {
      const resqust = this.createTransaction(tableName, 'readwrite').clear();
      resqust.onsuccess = () => {
        resolve(true);
      };
      resqust.onerror = (e) => {
        reject(e);
      };
    });
  }

  cursorSuccess(e: any, { handler, over, condition }, index = 0) {
    const cursor: IDBCursorWithValue = e.target.result;
    if (cursor) {
      const currentValue = cursor.value;
      if (condition({ currentValue, index })) {
        handler({ cursor, currentValue, index });
      }
      cursor.continue();
    } else {
      over();
    }
  }

  /**
   * 删除数据库
   */
  deleteDB() {
    indexedDB.deleteDatabase(this.dbName);
  }

  /**
   * 关闭数据库
   */
  close() {
    this.db && this.db.close();
  }
}

export default IDBHander;
