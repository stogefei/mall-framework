import API, {
  ResponseCode,
  UnitTreeVo,
  UnitTreeSearchVo,
  ResBodyListUnitTreeVo,
  ResBodyUnitTreeSearchVo,
  UnitVoType,
} from '@amaz/api';
export default new (class Service {
  //  获取部门/部门下级
  async getDepartmentsBy (departmentParams: any): Promise<{
    departments: any;
  }> {
    let res: ResBodyListUnitTreeVo;
    const params = {
      parentId: departmentParams.parentId,
      orgIds: departmentParams.orgIds,
      roots: departmentParams.roots,
      unitType: departmentParams.type,
    };
    // console.log(params, 'params--');
    // 如果admin端
    if (departmentParams.isAdminSys) {
      res = await API.adminUnitTreeController.getchildrenList(params);
    } else {
      res = await API.portalUnitTreeController.getchildrenList(params);
    }
    if (res.code === ResponseCode.SUCCESS) {
      const data: UnitTreeVo[] = res.data;
      const map = (d: any) => {
        d.type = d.unitType;
        return d;
      };
      const departments = data.map(map);
      return {
        departments,
      };
    } else {
      return {
        departments: [],
      };
    }
  }

  // 搜索部门或人员
  async search (params: any): Promise<{
    departments?: any;
    users?: any;
  }> {
    let res: ResBodyUnitTreeSearchVo;
    // 如果admin端
    if (params.isAdminSys) {
      res = await API.adminUnitTreeController.search({
        keyword: params.name,
        parentId: params.parentId,
        orgIds: params.orgIds,
        roots: params.roots,
        unitType: params.type,
      });
    } else {
      res = await API.portalUnitTreeController.search({
        keyword: params.name,
        parentId: params.parentId,
        orgIds: params.orgIds,
        roots: params.roots,
        unitType: params.type,
      });
    }
    if (res.code === ResponseCode.SUCCESS) {
      const data: UnitTreeSearchVo = res.data;
      let departments: any;
      let users: any;
      if (data && data.unitType && params.type === UnitVoType.DEPARTMENT) {
        departments = data.unitTrees.map((d: any) => {
          d.type = d.unitType;
          return d;
        });
      }
      // 如果没有传type 则是混选
      if ((data.unitTrees && params.type === UnitVoType.USER) || !params.type) {
        users = data.unitTrees.map((u: any) => {
          u.type = u.unitType;
          if (Array.isArray(u.departments)) {
            u.parentId = u.departments
              .filter((d: any) => d && d.id)
              .map((d: any) => d.id);
          }
          return u;
        });
      }
      return {
        departments,
        users,
      };
    } else {
      return {
        departments: [],
        users: [],
      };
    }
  }
})();
