import API, {
  ResponseCode,
  ResBodyListTagTreeVo,
  TagTreeVo,
} from '@amaz/api';
export default new (class Service {
  //  获取下级
  async getDepartmentsBy (departmentParams: any): Promise<{
    departments: any;
  }> {
    let res: ResBodyListTagTreeVo;
    const params = {
      parentId: departmentParams.parentId,
    };
    // 如果admin端
    if (departmentParams.isAdminSys) {
      res = await API.tagController.getTagTreeWithoutOrg(params.parentId);
    } else {
      res = await API.tagController.getTagTreeWithoutOrg(params.parentId);
    }
    if (res.code === ResponseCode.SUCCESS) {
      const data: TagTreeVo[] = res.data;
      const map = (d: any) => {
        d.type = d.nodeType;
        if (Array.isArray(d.children) && d.children.length > 0) {
          const childs = d.children.map((child) => {
            child.type = child.nodeType;
            return child;
          });
          d.children = childs;
        }
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
})();
