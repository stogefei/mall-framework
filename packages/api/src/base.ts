import fetch, { BAxiosRequestConfig, globalConfig } from "./fetch";
import {
  AdminRoleVo,
  AdvancedDataSourceVo,
  AppGroupVo,
  AppPackageVo,
  AppPerGroupSortVo,
  AppPerGroupVo,
  BatchDeptInsertVo,
  BatchListSchemaParamVo,
  BatchListSheetDataVo,
  BatchMoveUserDeptVo,
  BatchSaveAdminRolePermissionVo,
  BatchTagVo,
  BatchUpdateBizObjectVo,
  BizBusLogSearchVo,
  BizDataSourceVo,
  BizFormCommentVo,
  BizFormTemplateVo,
  BizFormVo,
  BizMenuVo,
  BizMethodInvokeVo,
  BizObjectIdVo,
  BizObjectIdsVo,
  BizObjectQueryVo,
  BizObjectSubmitVo,
  BizPropertyFormulaVo,
  BizPropertySortVo,
  BizPropertyVo,
  BizRuleInvokeVo,
  BizRuleLogSearchVo,
  BizRuleRenameVo,
  BizRuleVo,
  BizSchemaEventVo,
  BizSchemaGroupVo,
  BizSchemaVo,
  BizServiceCategoryVo,
  BizServiceMethodCodeVo,
  BizServiceMethodVo,
  BizServiceVo,
  BizViewCloneVo,
  BizViewCodeVo,
  BizViewSortNameVo,
  BizViewSortVo,
  BizViewVisibleVo,
  BizViewVo,
  CalculateVo,
  ChangeOwnerVo,
  ChartVo,
  CodeVo,
  DashboardVo,
  DataSourceVo,
  DepartmentVo,
  DeptManagerUpdateVo,
  DeptUserIdsVO,
  EsbInvokeVo,
  EsbServiceVo,
  ExportVo,
  ExternalSubmitVo,
  FlagVo,
  FormCloneVo,
  FormCodesVo,
  FormDataDeleteVo,
  FormRemindVo,
  IDVo,
  IdIndexVo,
  IdNameVo,
  ImportVo,
  InstanceCancelVo,
  InstanceNodeActivatelVo,
  InstanceNodeAdjustParticipantVo,
  InstanceNodeCancelVo,
  InstanceUrgeVo,
  ListTemplateDataQueryVo,
  LoadFormDataParamVo,
  LoadFormSheetDataParamVo,
  LoadWorkflowFormDataParamVo,
  LoginLogSearchVo,
  MethodInvokeParamVo,
  ModelFunRenameVo,
  ModelFunSortVo,
  MoveChartVo,
  NameVo,
  OcrRecognizeParamVo,
  OlapQueryVo,
  OpenApiBizObjectBatchSubmitVo,
  OpenApiBizObjectSubmitVo,
  OpenApiDeptGetRequestVo,
  OpenApiDeptQueryRequestVo,
  OpenApiLoadWorkItemFormDataParamVo,
  OpenApiSearchWorkItemVo,
  OpenApiStartWorkflowVo,
  OpenApiTagGetRequestVo,
  OpenApiTagGroupGetRequestVo,
  OpenApiTagGroupQueryRequestVo,
  OpenApiTagQueryRequestVo,
  OpenApiUserGetRequestVo,
  OpenApiUserQueryRequestVo,
  OpenApiWorkItemSubmitVo,
  OrgAscriptionCheckVo,
  OrgSyncRecordQueryVo,
  OrganizationPushConfigVo,
  OrganizationVo,
  PageQueryVo,
  PortalUserUpdateVo,
  PredictParticipantVo,
  QueryUnitTreeVo,
  QueryUserVo,
  QuickLinkFunVo,
  ResBodyAdminRolePermissionRangeVo,
  ResBodyAdminRoleVo,
  ResBodyAdvancedDataSourceVo,
  ResBodyAppGroupVo,
  ResBodyAppPackageVo,
  ResBodyAppPerGroupVo,
  ResBodyAppPermissionSettingVo,
  ResBodyBizDataSourceVo,
  ResBodyBizFormCommentVo,
  ResBodyBizFormTemplateVo,
  ResBodyBizFormVo,
  ResBodyBizMenuVo,
  ResBodyBizPropertyVo,
  ResBodyBizRulePropertyVo,
  ResBodyBizRuleVo,
  ResBodyBizSchemaEventVo,
  ResBodyBizSchemaGroupVo,
  ResBodyBizSchemaVo,
  ResBodyBizServiceCategoryVo,
  ResBodyBizServiceMethodVo,
  ResBodyBizServiceVo,
  ResBodyBizViewVo,
  ResBodyChartVo,
  ResBodyDashboardVo,
  ResBodyDataSourceListVo,
  ResBodyDepartmentVo,
  ResBodyDingtalkJsapiSignature,
  ResBodyDocumentFileVo,
  ResBodyEsbServiceVo,
  ResBodyExportProgressVo,
  ResBodyFigureVo,
  ResBodyFormDataVo,
  ResBodyFormRemindVo,
  ResBodyGenKeyResultVo,
  ResBodyImportProgressVo,
  ResBodyInstanceTrackVo,
  ResBodyListTemplateDataVo,
  ResBodyListAdvancedDataSourceVo,
  ResBodyListAppGroupVo,
  ResBodyListAppPackageVo,
  ResBodyListAppPerGroupVo,
  ResBodyListBizDataSourceVo,
  ResBodyListBizFormCommentVo,
  ResBodyListBizFormTemplateVo,
  ResBodyListBizFormVo,
  ResBodyListBizPropertyFormulaVo,
  ResBodyListBizPropertyVo,
  ResBodyListBizRulePropertyVo,
  ResBodyListBizRuleVo,
  ResBodyListBizSchemaEventVo,
  ResBodyListBizSchemaVo,
  ResBodyListBizServiceCategoryVo,
  ResBodyListBizServiceMethodVo,
  ResBodyListBizServiceVo,
  ResBodyListBizViewVo,
  ResBodyListCalculateResultVo,
  ResBodyListDepartmentVo,
  ResBodyListEsbGroupVo,
  ResBodyListEsbServiceDefineVo,
  ResBodyListFunTreeVo,
  ResBodyListIdNameVo,
  ResBodyListInstanceActivityVo,
  ResBodyList,
  ResBodyListMessageVo,
  ResBodyListOcrConfig,
  ResBodyListOpenApiDeptResponseVo,
  ResBodyListOpenApiTagGroupResponseVo,
  ResBodyListOpenApiTagResponseVo,
  ResBodyListOpenApiUserResponseVo,
  ResBodyListOrganizationPushConfigVo,
  ResBodyListOrganizationVo,
  ResBodyListQuickLinkVo,
  ResBodyListSchemaPermissionVo,
  ResBodyListSchemaPropertyPermissionVo,
  ResBodyListSecurityClientVo,
  ResBodyListSupportOrgConfigVO,
  ResBodyListSystemDictConfigVo,
  ResBodyListSystemDictGroupVo,
  ResBodyListTagGroupVo,
  ResBodyListTagTreeVo,
  ResBodyListTreeNode,
  ResBodyListUnitTreeVo,
  ResBodyListUnitVo,
  ResBodyListUserCommonsVo,
  ResBodyListUserVo,
  ResBodyListValidateErrorMessageVo,
  ResBodyListWorkItemVo,
  ResBodyListWorkflowDelegateVo,
  ResBodyListWorkflowDeploymentVo,
  ResBodyListWorkflowHeaderVo,
  ResBodyListWorkflowNodeParticipantVo,
  ResBodyListobject,
  ResBodyListstring,
  ResBody,
  ResBodyOpenApiDeptResponseVo,
  ResBodyOpenApiTagGroupResponseVo,
  ResBodyOpenApiTagResponseVo,
  ResBodyOpenApiUserResponseVo,
  ResBodyOrganizationChartVo,
  ResBodyOrganizationVo,
  ResBodyPageVOAdminVo,
  ResBodyPageVOBizBusLogVo,
  ResBodyPageVOBizRuleLogVo,
  ResBodyPageVOBizTemporaryVo,
  ResBodyPageVOInstanceLogVo,
  ResBodyPageVOLoginLogVo,
  ResBodyPageVO,
  ResBodyPageVOMessageVo,
  ResBodyPageVOOrgSyncRecordVo,
  ResBodyPageVOSysJobVo,
  ResBodyPageVOTagUnitVo,
  ResBodyPageVOUserVo,
  ResBodyPageVOWorkItemVo,
  ResBodyPageVOWorkflowInstanceVo,
  ResBodyRemovePropertyVo,
  ResBodySchemaPermissionVo,
  ResBodySecurityClientVo,
  ResBodySummaryByAppQueryVo,
  ResBodySummaryByOrgResultVo,
  ResBodySysJobVo,
  ResBodySystemDictVo,
  ResBodySystemInfoVo,
  ResBodySystemLogInfoVo,
  ResBodyTagGroupVo,
  ResBodyTagVo,
  ResBodyUnitGroupVo,
  ResBodyUnitTreeSearchVo,
  ResBodyUser,
  ResBodyUserVo,
  ResBodyViewCorrelationFormVo,
  ResBodyVoid,
  ResBodyWorkflowDraftVo,
  ResBodyWorkflowFormDataVo,
  ResBodyWorkflowHeaderVo,
  ResBodyWorkflowInstanceVo,
  ResBodyWorkflowNodeParticipantVo,
  ResBodyWxJsapiSignature,
  ResBodyboolean,
  ResBodyobject,
  ResBodystring,
  ResetUserPwdVo,
  RuntimePredictParticipantVo,
  SaveAdminRolePermissionVo,
  SaveAdminVo,
  SaveSchemaPermissionVo,
  SaveWorkflowTemplateVo,
  SchedulerConfVo,
  SchemaCloneVo,
  SchemaPropertyCodeVo,
  SchemaTitleVo,
  SearchJobVo,
  SearchWorkItemVo,
  SearchWorkflowInstanceVo,
  SecurityClientVo,
  ShortLink,
  SignFileVo,
  StartWorkflowVo,
  SyncOrgVo,
  SysJobVo,
  SystemDictSortVo,
  SystemDictVo,
  TagGroupVo,
  TagUnitIdsVo,
  TagUnitOuScopeVo,
  TagUnitReqVo,
  TagUpdateVo,
  TreeDataQueryVo,
  UniqueValidateVo,
  UnitVo,
  UpdateDashboardConfigVo,
  UpdatePasswordVo,
  UpdateUserRemarkVo,
  UrlVo,
  UserTransferVo,
  UserVo,
  WorkItemAddParticipantVo,
  WorkItemAssistVo,
  WorkItemBatchSubmitVo,
  WorkItemCirculateVo,
  WorkItemRejectVo,
  WorkItemRetrieveVo,
  WorkItemSubmitVo,
  WorkItemTransferVo,
  WorkflowCloneVo,
  WorkflowDelegateVo,
  WorkflowExprValidVo,
  WorkflowHeaderVo,
  WorkflowSchemaCodeVo,
} from "./module";

/**
 *管理员管理接口
 */
export class AdminController {
  /**
   * 新增系统管理员URL
   */
  addSysAdminUrl() {
    return `${globalConfig.baseURL}/admin/permission/admin/addSysAdmin`;
  }

  /**
   * 新增系统管理员
   * @param saveAdminVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  addSysAdmin(
    saveAdminVo: SaveAdminVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/permission/admin/addSysAdmin",
        method: "post",
        modelFunName: "adminController.addSysAdmin",
        data: saveAdminVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 分页获取系统管理员URL
   */
  getSysAdminsByPageUrl() {
    return `${globalConfig.baseURL}/admin/permission/admin/getSysAdminsByPage`;
  }

  /**
   * 分页获取系统管理员
   * @param pageSize
   * @param pageNum
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyPageVOAdminVo>
   */
  getSysAdminsByPage(
    pageSize: number,
    pageNum: number,
    keyword?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOAdminVo> {
    const req = Object.assign(
      {
        url: "/admin/permission/admin/getSysAdminsByPage",
        method: "get",
        modelFunName: "adminController.getSysAdminsByPage",
        data: {
          pageSize,
          pageNum,
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyPageVOAdminVo>(req);
  }

  /**
   * 删除系统管理员URL
   */
  removeSysAdminUrl() {
    return `${globalConfig.baseURL}/admin/permission/admin/removeSysAdmin`;
  }

  /**
   * 删除系统管理员
   * @param userIds
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  removeSysAdmin(
    userIds: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/permission/admin/removeSysAdmin",
        method: "post",
        modelFunName: "adminController.removeSysAdmin",
        data: userIds,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *管理组接口
 */
export class AdminRoleController {
  /**
   * 批量授予管理组权限URL
   */
  batchGrantPermissionsUrl() {
    return `${globalConfig.baseURL}/admin/permission/adminRole/batchGrantPermissions`;
  }

  /**
   * 批量授予管理组权限
   * @param batchSaveAdminRolePermissionVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  batchGrantPermissions(
    batchSaveAdminRolePermissionVo: BatchSaveAdminRolePermissionVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/permission/adminRole/batchGrantPermissions",
        method: "post",
        modelFunName: "adminRoleController.batchGrantPermissions",
        data: batchSaveAdminRolePermissionVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取管理员角色架构图树URL
   */
  chartTreeUrl() {
    return `${globalConfig.baseURL}/admin/permission/adminRole/chartTree`;
  }

  /**
   * 获取管理员角色架构图树

   * @param requestConfig
   * @returns Promise<ResBodyAdminRoleVo>
   */
  chartTree(requestConfig?: BAxiosRequestConfig): Promise<ResBodyAdminRoleVo> {
    const req = Object.assign(
      {
        url: "/admin/permission/adminRole/chartTree",
        method: "get",
        modelFunName: "adminRoleController.chartTree",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyAdminRoleVo>(req);
  }

  /**
   * 新增管理组URL
   */
  createAdminRoleUrl() {
    return `${globalConfig.baseURL}/admin/permission/adminRole/createAdminRole`;
  }

  /**
   * 新增管理组
   * @param adminRoleVo
   * @param requestConfig
   * @returns Promise<ResBodyAdminRoleVo>
   */
  createAdminRole(
    adminRoleVo: AdminRoleVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAdminRoleVo> {
    const req = Object.assign(
      {
        url: "/admin/permission/adminRole/createAdminRole",
        method: "post",
        modelFunName: "adminRoleController.createAdminRole",
        data: adminRoleVo,
      },
      requestConfig
    );
    return fetch<ResBodyAdminRoleVo>(req);
  }

  /**
   * 删除管理组URL
   */
  deleteAdminRoleUrl() {
    return `${globalConfig.baseURL}/admin/permission/adminRole/deleteAdminRole`;
  }

  /**
   * 删除管理组
   * @param roleIds
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  deleteAdminRole(
    roleIds: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/permission/adminRole/deleteAdminRole",
        method: "post",
        modelFunName: "adminRoleController.deleteAdminRole",
        data: roleIds,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取角色可授予的权限范围URL
   */
  getPermissionRangeUrl() {
    return `${globalConfig.baseURL}/admin/permission/adminRole/getPermissionRange`;
  }

  /**
   * 获取角色可授予的权限范围
   * @param roleId
   * @param requestConfig
   * @returns Promise<ResBodyAdminRolePermissionRangeVo>
   */
  getPermissionRange(
    roleId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAdminRolePermissionRangeVo> {
    const req = Object.assign(
      {
        url: "/admin/permission/adminRole/getPermissionRange",
        method: "get",
        modelFunName: "adminRoleController.getPermissionRange",
        data: {
          roleId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyAdminRolePermissionRangeVo>(req);
  }

  /**
   * 获取角色详情，包含直接子级URL
   */
  getRoleInfoUrl() {
    return `${globalConfig.baseURL}/admin/permission/adminRole/getRoleInfo`;
  }

  /**
   * 获取角色详情，包含直接子级
   * @param roleType
   * @param roleId
   * @param requestConfig
   * @returns Promise<ResBodyAdminRoleVo>
   */
  getRoleInfo(
    roleType: string,
    roleId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAdminRoleVo> {
    const req = Object.assign(
      {
        url: "/admin/permission/adminRole/getRoleInfo",
        method: "get",
        modelFunName: "adminRoleController.getRoleInfo",
        data: {
          roleType,
          roleId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyAdminRoleVo>(req);
  }

  /**
   * 授予管理组权限URL
   */
  grantPermissionsUrl() {
    return `${globalConfig.baseURL}/admin/permission/adminRole/grantPermissions`;
  }

  /**
   * 授予管理组权限
   * @param saveAdminRolePermissionVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  grantPermissions(
    saveAdminRolePermissionVo: SaveAdminRolePermissionVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/permission/adminRole/grantPermissions",
        method: "post",
        modelFunName: "adminRoleController.grantPermissions",
        data: saveAdminRolePermissionVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改管理组URL
   */
  updateAdminRoleUrl() {
    return `${globalConfig.baseURL}/admin/permission/adminRole/updateAdminRole`;
  }

  /**
   * 修改管理组
   * @param adminRoleVo
   * @param requestConfig
   * @returns Promise<ResBodyAdminRoleVo>
   */
  updateAdminRole(
    adminRoleVo: AdminRoleVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAdminRoleVo> {
    const req = Object.assign(
      {
        url: "/admin/permission/adminRole/updateAdminRole",
        method: "post",
        modelFunName: "adminRoleController.updateAdminRole",
        data: adminRoleVo,
      },
      requestConfig
    );
    return fetch<ResBodyAdminRoleVo>(req);
  }
}
/**
 *后台管理组织单元树接口
 */
export class AdminUnitTreeController {
  /**
   * 根据父级id获取子级部门列表URL
   */
  getchildrenListUrl() {
    return `${globalConfig.baseURL}/admin/org/unit/tree/getchildrenList`;
  }

  /**
   * 根据父级id获取子级部门列表
   * @param queryUnitTreeVo
   * @param requestConfig
   * @returns Promise<ResBodyListUnitTreeVo>
   */
  getchildrenList(
    queryUnitTreeVo: QueryUnitTreeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListUnitTreeVo> {
    const req = Object.assign(
      {
        url: "/admin/org/unit/tree/getchildrenList",
        method: "post",
        modelFunName: "adminUnitTreeController.getchildrenList",
        data: queryUnitTreeVo,
      },
      requestConfig
    );
    return fetch<ResBodyListUnitTreeVo>(req);
  }

  /**
   * 搜索人员、部门URL
   */
  searchUrl() {
    return `${globalConfig.baseURL}/admin/org/unit/tree/search`;
  }

  /**
   * 搜索人员、部门
   * @param queryUnitTreeVo
   * @param requestConfig
   * @returns Promise<ResBodyUnitTreeSearchVo>
   */
  search(
    queryUnitTreeVo: QueryUnitTreeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUnitTreeSearchVo> {
    const req = Object.assign(
      {
        url: "/admin/org/unit/tree/search",
        method: "post",
        modelFunName: "adminUnitTreeController.search",
        data: queryUnitTreeVo,
      },
      requestConfig
    );
    return fetch<ResBodyUnitTreeSearchVo>(req);
  }
}
/**
 *报表高级数据源接口
 */
export class AdvancedDataSourceController {
  /**
   * 创建数据源URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/report/advanced/ds/create`;
  }

  /**
   * 创建数据源
   * @param advancedDataSourceVo
   * @param requestConfig
   * @returns Promise<ResBodyAdvancedDataSourceVo>
   */
  create(
    advancedDataSourceVo: AdvancedDataSourceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAdvancedDataSourceVo> {
    const req = Object.assign(
      {
        url: "/admin/report/advanced/ds/create",
        method: "post",
        modelFunName: "advancedDataSourceController.create",
        data: advancedDataSourceVo,
      },
      requestConfig
    );
    return fetch<ResBodyAdvancedDataSourceVo>(req);
  }

  /**
   * 修改数据源URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/admin/report/advanced/ds/delete`;
  }

  /**
   * 修改数据源
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/report/advanced/ds/delete",
        method: "post",
        modelFunName: "advancedDataSourceController.delete",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取数据源详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/report/advanced/ds/get`;
  }

  /**
   * 获取数据源详情
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyAdvancedDataSourceVo>
   */
  get(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAdvancedDataSourceVo> {
    const req = Object.assign(
      {
        url: "/admin/report/advanced/ds/get",
        method: "get",
        modelFunName: "advancedDataSourceController.get",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyAdvancedDataSourceVo>(req);
  }

  /**
   * 获取数据源列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/report/advanced/ds/list`;
  }

  /**
   * 获取数据源列表

   * @param requestConfig
   * @returns Promise<ResBodyListAdvancedDataSourceVo>
   */
  list(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListAdvancedDataSourceVo> {
    const req = Object.assign(
      {
        url: "/admin/report/advanced/ds/list",
        method: "get",
        modelFunName: "advancedDataSourceController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListAdvancedDataSourceVo>(req);
  }

  /**
   * 测试运行URL
   */
  testRunUrl() {
    return `${globalConfig.baseURL}/admin/report/advanced/ds/testRun`;
  }

  /**
   * 测试运行
   * @param advancedDataSourceVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  testRun(
    advancedDataSourceVo: AdvancedDataSourceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/admin/report/advanced/ds/testRun",
        method: "post",
        modelFunName: "advancedDataSourceController.testRun",
        data: advancedDataSourceVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }

  /**
   * 修改数据源URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/report/advanced/ds/update`;
  }

  /**
   * 修改数据源
   * @param advancedDataSourceVo
   * @param requestConfig
   * @returns Promise<ResBodyAdvancedDataSourceVo>
   */
  update(
    advancedDataSourceVo: AdvancedDataSourceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAdvancedDataSourceVo> {
    const req = Object.assign(
      {
        url: "/admin/report/advanced/ds/update",
        method: "post",
        modelFunName: "advancedDataSourceController.update",
        data: advancedDataSourceVo,
      },
      requestConfig
    );
    return fetch<ResBodyAdvancedDataSourceVo>(req);
  }
}
/**
 *应用接口
 */
export class AppController {
  /**
   * 获取仪表盘详情URL
   */
  getDashboardInfoUrl() {
    return `${globalConfig.baseURL}/portal/app/getDashboardInfo`;
  }

  /**
   * 获取仪表盘详情
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyDashboardVo>
   */
  getDashboardInfo(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDashboardVo> {
    const req = Object.assign(
      {
        url: "/portal/app/getDashboardInfo",
        method: "get",
        modelFunName: "appController.getDashboardInfo",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDashboardVo>(req);
  }

  /**
   * 获取自定义菜单详情URL
   */
  getMenuInfoUrl() {
    return `${globalConfig.baseURL}/portal/app/getMenuInfo`;
  }

  /**
   * 获取自定义菜单详情
   * @param menuCode
   * @param requestConfig
   * @returns Promise<ResBodyBizMenuVo>
   */
  getMenuInfo(
    menuCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizMenuVo> {
    const req = Object.assign(
      {
        url: "/portal/app/getMenuInfo",
        method: "get",
        modelFunName: "appController.getMenuInfo",
        data: {
          menuCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizMenuVo>(req);
  }

  /**
   * 获取模型详情URL
   */
  getSchemaInfoUrl() {
    return `${globalConfig.baseURL}/portal/app/getSchemaInfo`;
  }

  /**
   * 获取模型详情
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaVo>
   */
  getSchemaInfo(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/portal/app/getSchemaInfo",
        method: "get",
        modelFunName: "appController.getSchemaInfo",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaVo>(req);
  }

  /**
   * 获取应用详情URL
   */
  infoUrl() {
    return `${globalConfig.baseURL}/portal/app/info`;
  }

  /**
   * 获取应用详情
   * @param appCode
   * @param requestConfig
   * @returns Promise<ResBodyAppPackageVo>
   */
  info(
    appCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppPackageVo> {
    const req = Object.assign(
      {
        url: "/portal/app/info",
        method: "get",
        modelFunName: "appController.info",
        data: {
          appCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyAppPackageVo>(req);
  }

  /**
   * 获取启用的应用列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/portal/app/list`;
  }

  /**
   * 获取启用的应用列表

   * @param requestConfig
   * @returns Promise<ResBodyListAppPackageVo>
   */
  list(requestConfig?: BAxiosRequestConfig): Promise<ResBodyListAppPackageVo> {
    const req = Object.assign(
      {
        url: "/portal/app/list",
        method: "post",
        modelFunName: "appController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListAppPackageVo>(req);
  }

  /**
   * 分组方式获取启用的应用列表URL
   */
  listGroupByUrl() {
    return `${globalConfig.baseURL}/portal/app/listGroupBy`;
  }

  /**
   * 分组方式获取启用的应用列表

   * @param requestConfig
   * @returns Promise<ResBodyListFunTreeVo>
   */
  listGroupBy(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListFunTreeVo> {
    const req = Object.assign(
      {
        url: "/portal/app/listGroupBy",
        method: "post",
        modelFunName: "appController.listGroupBy",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListFunTreeVo>(req);
  }

  /**
   * 搜索模型URL
   */
  searchSchemasUrl() {
    return `${globalConfig.baseURL}/portal/app/searchSchemas`;
  }

  /**
   * 搜索模型
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyListBizSchemaVo>
   */
  searchSchemas(
    keyword: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/portal/app/searchSchemas",
        method: "get",
        modelFunName: "appController.searchSchemas",
        data: {
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizSchemaVo>(req);
  }
}
/**
 *应用管理接口
 */
export class AppPackageController {
  /**
   * 创建应用URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/model/app/create`;
  }

  /**
   * 创建应用
   * @param appPackageVo
   * @param requestConfig
   * @returns Promise<ResBodyAppPackageVo>
   */
  create(
    appPackageVo: AppPackageVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppPackageVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/create",
        method: "post",
        modelFunName: "appPackageController.create",
        data: appPackageVo,
      },
      requestConfig
    );
    return fetch<ResBodyAppPackageVo>(req);
  }

  /**
   * 根据应用编码获取应用详情URL
   */
  getByCodeUrl() {
    return `${globalConfig.baseURL}/admin/model/app/getByCode`;
  }

  /**
   * 根据应用编码获取应用详情
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyAppPackageVo>
   */
  getByCode(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppPackageVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/getByCode",
        method: "get",
        modelFunName: "appPackageController.getByCode",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyAppPackageVo>(req);
  }

  /**
   * 新增应用分组URL
   */
  groupAddUrl() {
    return `${globalConfig.baseURL}/admin/model/app/groupAdd`;
  }

  /**
   * 新增应用分组
   * @param nameVo
   * @param requestConfig
   * @returns Promise<ResBodyAppGroupVo>
   */
  groupAdd(
    nameVo: NameVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/groupAdd",
        method: "post",
        modelFunName: "appPackageController.groupAdd",
        data: nameVo,
      },
      requestConfig
    );
    return fetch<ResBodyAppGroupVo>(req);
  }

  /**
   * 获取应用分组列表URL
   */
  groupListUrl() {
    return `${globalConfig.baseURL}/admin/model/app/groupList`;
  }

  /**
   * 获取应用分组列表

   * @param requestConfig
   * @returns Promise<ResBodyListAppGroupVo>
   */
  groupList(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListAppGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/groupList",
        method: "post",
        modelFunName: "appPackageController.groupList",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListAppGroupVo>(req);
  }

  /**
   * 删除应用分组URL
   */
  groupRemoveUrl() {
    return `${globalConfig.baseURL}/admin/model/app/groupRemove`;
  }

  /**
   * 删除应用分组
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  groupRemove(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/app/groupRemove",
        method: "post",
        modelFunName: "appPackageController.groupRemove",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 分组排序URL
   */
  groupSortUrl() {
    return `${globalConfig.baseURL}/admin/model/app/groupSort`;
  }

  /**
   * 分组排序
   * @param idIndexVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  groupSort(
    idIndexVo: IdIndexVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/app/groupSort",
        method: "post",
        modelFunName: "appPackageController.groupSort",
        data: idIndexVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改应用分组名称URL
   */
  groupUpdateUrl() {
    return `${globalConfig.baseURL}/admin/model/app/groupUpdate`;
  }

  /**
   * 修改应用分组名称
   * @param appGroupVo
   * @param requestConfig
   * @returns Promise<ResBodyAppGroupVo>
   */
  groupUpdate(
    appGroupVo: AppGroupVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/groupUpdate",
        method: "post",
        modelFunName: "appPackageController.groupUpdate",
        data: appGroupVo,
      },
      requestConfig
    );
    return fetch<ResBodyAppGroupVo>(req);
  }

  /**
   * 获取应用列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/model/app/list`;
  }

  /**
   * 获取应用列表

   * @param requestConfig
   * @returns Promise<ResBodyListAppPackageVo>
   */
  list(requestConfig?: BAxiosRequestConfig): Promise<ResBodyListAppPackageVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/list",
        method: "post",
        modelFunName: "appPackageController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListAppPackageVo>(req);
  }

  /**
   * 获取启用的应用列表URL
   */
  listEnableUrl() {
    return `${globalConfig.baseURL}/admin/model/app/listEnable`;
  }

  /**
   * 获取启用的应用列表

   * @param requestConfig
   * @returns Promise<ResBodyListAppPackageVo>
   */
  listEnable(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListAppPackageVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/listEnable",
        method: "post",
        modelFunName: "appPackageController.listEnable",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListAppPackageVo>(req);
  }

  /**
   * 分组方式获取应用列表URL
   */
  listGroupByUrl() {
    return `${globalConfig.baseURL}/admin/model/app/listGroupBy`;
  }

  /**
   * 分组方式获取应用列表
   * @param flagVo
   * @param requestConfig
   * @returns Promise<ResBodyListFunTreeVo>
   */
  listGroupBy(
    flagVo: FlagVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListFunTreeVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/listGroupBy",
        method: "post",
        modelFunName: "appPackageController.listGroupBy",
        data: flagVo,
      },
      requestConfig
    );
    return fetch<ResBodyListFunTreeVo>(req);
  }

  /**
   * 获取用户拥有的应用列表URL
   */
  listOwnUrl() {
    return `${globalConfig.baseURL}/admin/model/app/listOwn`;
  }

  /**
   * 获取用户拥有的应用列表
   * @param userId
   * @param requestConfig
   * @returns Promise<ResBodyListAppPackageVo>
   */
  listOwn(
    userId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListAppPackageVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/listOwn",
        method: "get",
        modelFunName: "appPackageController.listOwn",
        data: {
          userId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListAppPackageVo>(req);
  }

  /**
   * 编辑应用URL
   */
  modifyUrl() {
    return `${globalConfig.baseURL}/admin/model/app/modify`;
  }

  /**
   * 编辑应用
   * @param appPackageVo
   * @param requestConfig
   * @returns Promise<ResBodyAppPackageVo>
   */
  modify(
    appPackageVo: AppPackageVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppPackageVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/modify",
        method: "post",
        modelFunName: "appPackageController.modify",
        data: appPackageVo,
      },
      requestConfig
    );
    return fetch<ResBodyAppPackageVo>(req);
  }

  /**
   * 删除应用URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/model/app/remove`;
  }

  /**
   * 删除应用
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/app/remove",
        method: "post",
        modelFunName: "appPackageController.remove",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *应用权限管理接口
 */
export class AppPermissionController {
  /**
   * 创建权限组URL
   */
  createGroupUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/createGroup`;
  }

  /**
   * 创建权限组
   * @param appPerGroupVo
   * @param requestConfig
   * @returns Promise<ResBodyAppPerGroupVo>
   */
  createGroup(
    appPerGroupVo: AppPerGroupVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppPerGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/createGroup",
        method: "post",
        modelFunName: "appPermissionController.createGroup",
        data: appPerGroupVo,
      },
      requestConfig
    );
    return fetch<ResBodyAppPerGroupVo>(req);
  }

  /**
   * 获取权限组的下指定模型权限URL
   */
  getSchemaPermissionUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/getSchemaPermission`;
  }

  /**
   * 获取权限组的下指定模型权限
   * @param schemaCode
   * @param perGroupId
   * @param requestConfig
   * @returns Promise<ResBodySchemaPermissionVo>
   */
  getSchemaPermission(
    schemaCode: string,
    perGroupId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySchemaPermissionVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/getSchemaPermission",
        method: "get",
        modelFunName: "appPermissionController.getSchemaPermission",
        data: {
          schemaCode,
          perGroupId,
        },
      },
      requestConfig
    );
    return fetch<ResBodySchemaPermissionVo>(req);
  }

  /**
   * 获取应用权限组列表URL
   */
  listGroupsUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/listGroups`;
  }

  /**
   * 获取应用权限组列表
   * @param appCode
   * @param requestConfig
   * @returns Promise<ResBodyListAppPerGroupVo>
   */
  listGroups(
    appCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListAppPerGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/listGroups",
        method: "get",
        modelFunName: "appPermissionController.listGroups",
        data: {
          appCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListAppPerGroupVo>(req);
  }

  /**
   * 获取权限组的模型权限列表URL
   */
  listSchemaPermissionUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/listSchemaPermission`;
  }

  /**
   * 获取权限组的模型权限列表
   * @param perGroupId
   * @param requestConfig
   * @returns Promise<ResBodyListSchemaPermissionVo>
   */
  listSchemaPermission(
    perGroupId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSchemaPermissionVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/listSchemaPermission",
        method: "get",
        modelFunName: "appPermissionController.listSchemaPermission",
        data: {
          perGroupId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListSchemaPermissionVo>(req);
  }

  /**
   * 获取指定模型的数据项权限资源URL
   */
  propertyResourceUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/propertyResource`;
  }

  /**
   * 获取指定模型的数据项权限资源
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListSchemaPropertyPermissionVo>
   */
  propertyResource(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSchemaPropertyPermissionVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/propertyResource",
        method: "get",
        modelFunName: "appPermissionController.propertyResource",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListSchemaPropertyPermissionVo>(req);
  }

  /**
   * 删除权限组URL
   */
  removeGroupsUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/removeGroups`;
  }

  /**
   * 删除权限组
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  removeGroups(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/removeGroups",
        method: "post",
        modelFunName: "appPermissionController.removeGroups",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 重命名URL
   */
  renameUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/rename`;
  }

  /**
   * 重命名
   * @param renameVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  rename(
    renameVo: IdNameVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/rename",
        method: "post",
        modelFunName: "appPermissionController.rename",
        data: renameVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取应用下模型权限资源URL
   */
  resourceUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/resource`;
  }

  /**
   * 获取应用下模型权限资源
   * @param appCode
   * @param requestConfig
   * @returns Promise<ResBodyAppPermissionSettingVo>
   */
  resource(
    appCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppPermissionSettingVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/resource",
        method: "get",
        modelFunName: "appPermissionController.resource",
        data: {
          appCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyAppPermissionSettingVo>(req);
  }

  /**
   * 保存权限组的模型权限URL
   */
  saveSchemaPermissionsUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/saveSchemaPermissions`;
  }

  /**
   * 保存权限组的模型权限
   * @param saveSchemaPermissionVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  saveSchemaPermissions(
    saveSchemaPermissionVo: SaveSchemaPermissionVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/saveSchemaPermissions",
        method: "post",
        modelFunName: "appPermissionController.saveSchemaPermissions",
        data: saveSchemaPermissionVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 排序URL
   */
  sortUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/sort`;
  }

  /**
   * 排序
   * @param sortVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  sort(
    sortVo: AppPerGroupSortVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/sort",
        method: "post",
        modelFunName: "appPermissionController.sort",
        data: sortVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改权限组URL
   */
  updateGroupUrl() {
    return `${globalConfig.baseURL}/admin/model/app/permission/updateGroup`;
  }

  /**
   * 修改权限组
   * @param appPerGroupVo
   * @param requestConfig
   * @returns Promise<ResBodyAppPerGroupVo>
   */
  updateGroup(
    appPerGroupVo: AppPerGroupVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyAppPerGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/model/app/permission/updateGroup",
        method: "post",
        modelFunName: "appPermissionController.updateGroup",
        data: appPerGroupVo,
      },
      requestConfig
    );
    return fetch<ResBodyAppPerGroupVo>(req);
  }
}
/**
 *应用视图接口
 */
export class AppViewController {
  /**
   * 获取视图详情，根据客户端类型返回视图配置URL
   */
  getViewInfoUrl() {
    return `${globalConfig.baseURL}/portal/view/getViewInfo`;
  }

  /**
   * 获取视图详情，根据客户端类型返回视图配置
   * @param bizViewCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyBizViewVo>
   */
  getViewInfo(
    bizViewCodeVo: BizViewCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizViewVo> {
    const req = Object.assign(
      {
        url: "/portal/view/getViewInfo",
        method: "post",
        modelFunName: "appViewController.getViewInfo",
        data: bizViewCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizViewVo>(req);
  }

  /**
   * 获取视图列表，只返回基础信息，不返回配置URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/portal/view/list`;
  }

  /**
   * 获取视图列表，只返回基础信息，不返回配置
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizViewVo>
   */
  list(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizViewVo> {
    const req = Object.assign(
      {
        url: "/portal/view/list",
        method: "get",
        modelFunName: "appViewController.list",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizViewVo>(req);
  }

  /**
   * 获取树形条件区域数据URL
   */
  listTreeCriteriaUrl() {
    return `${globalConfig.baseURL}/portal/view/listTreeCriteria`;
  }

  /**
   * 获取树形条件区域数据
   * @param bizObjectQueryVo
   * @param requestConfig
   * @returns Promise<ResBodyListTreeNode>
   */
  listTreeCriteria(
    bizObjectQueryVo: BizObjectQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListTreeNode> {
    const req = Object.assign(
      {
        url: "/portal/view/listTreeCriteria",
        method: "post",
        modelFunName: "appViewController.listTreeCriteria",
        data: bizObjectQueryVo,
      },
      requestConfig
    );
    return fetch<ResBodyListTreeNode>(req);
  }

  /**
   * 获取树形结构数据URL
   */
  listTreeDataUrl() {
    return `${globalConfig.baseURL}/portal/view/listTreeData`;
  }

  /**
   * 获取树形结构数据
   * @param treeDataQueryVo
   * @param requestConfig
   * @returns Promise<ResBodyListTreeNode>
   */
  listTreeData(
    treeDataQueryVo: TreeDataQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListTreeNode> {
    const req = Object.assign(
      {
        url: "/portal/view/listTreeData",
        method: "post",
        modelFunName: "appViewController.listTreeData",
        data: treeDataQueryVo,
      },
      requestConfig
    );
    return fetch<ResBodyListTreeNode>(req);
  }

  /**
   * 查询视图数据URL
   */
  listViewDataUrl() {
    return `${globalConfig.baseURL}/portal/view/listViewData`;
  }

  /**
   * 查询视图数据
   * @param bizObjectQueryVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVO>
   */
  listViewData(
    bizObjectQueryVo: BizObjectQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVO> {
    const req = Object.assign(
      {
        url: "/portal/view/listViewData",
        method: "post",
        modelFunName: "appViewController.listViewData",
        data: bizObjectQueryVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVO>(req);
  }
}
/**
 *业务集成数据源接口
 */
export class BizDataSourceController {
  /**
   * 新建数据源URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/datasource/create`;
  }

  /**
   * 新建数据源
   * @param bizDataSourceVo
   * @param requestConfig
   * @returns Promise<ResBodyBizDataSourceVo>
   */
  create(
    bizDataSourceVo: BizDataSourceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizDataSourceVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/datasource/create",
        method: "post",
        modelFunName: "bizDataSourceController.create",
        data: bizDataSourceVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizDataSourceVo>(req);
  }

  /**
   * 根据关键字获取数据源列表URL
   */
  getListUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/datasource/getList`;
  }

  /**
   * 根据关键字获取数据源列表
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyListBizDataSourceVo>
   */
  getList(
    keyword?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizDataSourceVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/datasource/getList",
        method: "get",
        modelFunName: "bizDataSourceController.getList",
        data: {
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizDataSourceVo>(req);
  }

  /**
   * 删除数据源URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/datasource/remove`;
  }

  /**
   * 删除数据源
   * @param codes
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    codes: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/datasource/remove",
        method: "post",
        modelFunName: "bizDataSourceController.remove",
        data: codes,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改数据源URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/datasource/update`;
  }

  /**
   * 修改数据源
   * @param bizDataSourceVo
   * @param requestConfig
   * @returns Promise<ResBodyBizDataSourceVo>
   */
  update(
    bizDataSourceVo: BizDataSourceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizDataSourceVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/datasource/update",
        method: "post",
        modelFunName: "bizDataSourceController.update",
        data: bizDataSourceVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizDataSourceVo>(req);
  }
}
/**
 *自定义菜单接口
 */
export class BizMenuController {
  /**
   * 创建自定义菜单URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/model/menu/create`;
  }

  /**
   * 创建自定义菜单
   * @param bizMenuVo
   * @param requestConfig
   * @returns Promise<ResBodyBizMenuVo>
   */
  create(
    bizMenuVo: BizMenuVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizMenuVo> {
    const req = Object.assign(
      {
        url: "/admin/model/menu/create",
        method: "post",
        modelFunName: "bizMenuController.create",
        data: bizMenuVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizMenuVo>(req);
  }

  /**
   * 获取自定义菜单详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/model/menu/get`;
  }

  /**
   * 获取自定义菜单详情
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyBizMenuVo>
   */
  get(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizMenuVo> {
    const req = Object.assign(
      {
        url: "/admin/model/menu/get",
        method: "get",
        modelFunName: "bizMenuController.get",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizMenuVo>(req);
  }

  /**
   * 修改自定义菜单URL
   */
  modifyUrl() {
    return `${globalConfig.baseURL}/admin/model/menu/modify`;
  }

  /**
   * 修改自定义菜单
   * @param bizMenuVo
   * @param requestConfig
   * @returns Promise<ResBodyBizMenuVo>
   */
  modify(
    bizMenuVo: BizMenuVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizMenuVo> {
    const req = Object.assign(
      {
        url: "/admin/model/menu/modify",
        method: "post",
        modelFunName: "bizMenuController.modify",
        data: bizMenuVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizMenuVo>(req);
  }

  /**
   * 删除自定义菜单URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/model/menu/remove`;
  }

  /**
   * 删除自定义菜单
   * @param codeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    codeVo: CodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/menu/remove",
        method: "post",
        modelFunName: "bizMenuController.remove",
        data: codeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *业务对象数据接口
 */
export class BizObjectController {
  /**
   * 批量查询查询子表数据URL
   */
  batchListSheetDatasUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/batchListSheetDatas`;
  }

  /**
   * 批量查询查询子表数据
   * @param batchListSheetDataVo
   * @param requestConfig
   * @returns Promise<ResBody>
   */
  batchListSheetDatas(
    batchListSheetDataVo: BatchListSheetDataVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBody> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/batchListSheetDatas",
        method: "post",
        modelFunName: "bizObjectController.batchListSheetDatas",
        data: batchListSheetDataVo,
      },
      requestConfig
    );
    return fetch<ResBody>(req);
  }

  /**
   * 批量修改数据URL
   */
  batchUpdateUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/batchUpdate`;
  }

  /**
   * 批量修改数据
   * @param batchUpdateBizObjectVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  batchUpdate(
    batchUpdateBizObjectVo: BatchUpdateBizObjectVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/batchUpdate",
        method: "post",
        modelFunName: "bizObjectController.batchUpdate",
        data: batchUpdateBizObjectVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 查询数据URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/get`;
  }

  /**
   * 查询数据
   * @param bizObjectIdVo
   * @param requestConfig
   * @returns Promise<ResBody>
   */
  get(
    bizObjectIdVo: BizObjectIdVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBody> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/get",
        method: "post",
        modelFunName: "bizObjectController.get",
        data: bizObjectIdVo,
      },
      requestConfig
    );
    return fetch<ResBody>(req);
  }

  /**
   * 批量查询数据URL
   */
  getListUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/getList`;
  }

  /**
   * 批量查询数据
   * @param bizObjectIdsVo
   * @param requestConfig
   * @returns Promise<ResBodyList>
   */
  getList(
    bizObjectIdsVo: BizObjectIdsVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyList> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/getList",
        method: "post",
        modelFunName: "bizObjectController.getList",
        data: bizObjectIdsVo,
      },
      requestConfig
    );
    return fetch<ResBodyList>(req);
  }

  /**
   * 保存数据URL
   */
  insertUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/insert`;
  }

  /**
   * 保存数据
   * @param bizObjectSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  insert(
    bizObjectSubmitVo: BizObjectSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/insert",
        method: "post",
        modelFunName: "bizObjectController.insert",
        data: bizObjectSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 查询数据项列表信息URL
   */
  listPropertyUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/listProperty`;
  }

  /**
   * 查询数据项列表信息
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizPropertyVo>
   */
  listProperty(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/listProperty",
        method: "get",
        modelFunName: "bizObjectController.listProperty",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizPropertyVo>(req);
  }

  /**
   * 查询子表数据URL
   */
  listSheetDatasUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/listSheetDatas`;
  }

  /**
   * 查询子表数据
   * @param sheetCode
   * @param schemaCode
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyList>
   */
  listSheetDatas(
    sheetCode: string,
    schemaCode: string,
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyList> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/listSheetDatas",
        method: "get",
        modelFunName: "bizObjectController.listSheetDatas",
        data: {
          sheetCode,
          schemaCode,
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyList>(req);
  }

  /**
   * 批量查询打印数据URL
   */
  listTemplateDataUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/listTemplateData`;
  }

  /**
   * 批量查询打印数据
   * @param queryVo
   * @param requestConfig
   * @returns Promise<ResBodyListTemplateDataVo>
   */
  listTemplateData(
    queryVo: ListTemplateDataQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListTemplateDataVo> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/listTemplateData",
        method: "post",
        modelFunName: "bizObjectController.listTemplateData",
        data: queryVo,
      },
      requestConfig
    );
    return fetch<ResBodyListTemplateDataVo>(req);
  }

  /**
   * 删除数据URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/remove`;
  }

  /**
   * 删除数据
   * @param bizObjectIdsVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    bizObjectIdsVo: BizObjectIdsVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/remove",
        method: "post",
        modelFunName: "bizObjectController.remove",
        data: bizObjectIdsVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 暂存数据URL
   */
  temporaryUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/temporary`;
  }

  /**
   * 暂存数据
   * @param bizObjectSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  temporary(
    bizObjectSubmitVo: BizObjectSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/temporary",
        method: "post",
        modelFunName: "bizObjectController.temporary",
        data: bizObjectSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 短文本唯一性校验URL
   */
  uniqueValidateUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/uniqueValidate`;
  }

  /**
   * 短文本唯一性校验
   * @param textUniqueValidateVo
   * @param requestConfig
   * @returns Promise<ResBodyboolean>
   */
  uniqueValidate(
    textUniqueValidateVo: UniqueValidateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyboolean> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/uniqueValidate",
        method: "post",
        modelFunName: "bizObjectController.uniqueValidate",
        data: textUniqueValidateVo,
      },
      requestConfig
    );
    return fetch<ResBodyboolean>(req);
  }

  /**
   * 修改数据URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/update`;
  }

  /**
   * 修改数据
   * @param bizObjectSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  update(
    bizObjectSubmitVo: BizObjectSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/update",
        method: "post",
        modelFunName: "bizObjectController.update",
        data: bizObjectSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改指定字段数据URL
   */
  updateSelectiveUrl() {
    return `${globalConfig.baseURL}/portal/bizObject/updateSelective`;
  }

  /**
   * 修改指定字段数据
   * @param bizObjectSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  updateSelective(
    bizObjectSubmitVo: BizObjectSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/bizObject/updateSelective",
        method: "post",
        modelFunName: "bizObjectController.updateSelective",
        data: bizObjectSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *openapi:业务数据接口
 */
export class BizObjectOpenApi {
  /**
   * 批量新增数据URL
   */
  batchInsertUrl() {
    return `${globalConfig.baseURL}/openapi/bizObject/batchInsert`;
  }

  /**
   * 批量新增数据
   * @param bizObjectSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  batchInsert(
    bizObjectSubmitVo: OpenApiBizObjectBatchSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/bizObject/batchInsert",
        method: "post",
        modelFunName: "bizObjectOpenApi.batchInsert",
        data: bizObjectSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 查询数据URL
   */
  loadUrl() {
    return `${globalConfig.baseURL}/openapi/bizObject/load`;
  }

  /**
   * 查询数据
   * @param bizObjectIdVo
   * @param requestConfig
   * @returns Promise<ResBody>
   */
  load(
    bizObjectIdVo: BizObjectIdVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBody> {
    const req = Object.assign(
      {
        url: "/openapi/bizObject/load",
        method: "post",
        modelFunName: "bizObjectOpenApi.load",
        data: bizObjectIdVo,
      },
      requestConfig
    );
    return fetch<ResBody>(req);
  }

  /**
   * 批量查询数据URL
   */
  loadListUrl() {
    return `${globalConfig.baseURL}/openapi/bizObject/loadList`;
  }

  /**
   * 批量查询数据
   * @param bizObjectIdsVo
   * @param requestConfig
   * @returns Promise<ResBodyListobject>
   */
  loadList(
    bizObjectIdsVo: BizObjectIdsVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListobject> {
    const req = Object.assign(
      {
        url: "/openapi/bizObject/loadList",
        method: "post",
        modelFunName: "bizObjectOpenApi.loadList",
        data: bizObjectIdsVo,
      },
      requestConfig
    );
    return fetch<ResBodyListobject>(req);
  }

  /**
   * 分页查询数据URL
   */
  pageListUrl() {
    return `${globalConfig.baseURL}/openapi/bizObject/pageList`;
  }

  /**
   * 分页查询数据
   * @param bizObjectQueryVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVO>
   */
  pageList(
    bizObjectQueryVo: BizObjectQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVO> {
    const req = Object.assign(
      {
        url: "/openapi/bizObject/pageList",
        method: "post",
        modelFunName: "bizObjectOpenApi.pageList",
        data: bizObjectQueryVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVO>(req);
  }

  /**
   * 当数据关联了流程，会同步删除流程实例URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/openapi/bizObject/remove`;
  }

  /**
   * 当数据关联了流程，会同步删除流程实例
   * @param bizObjectIdsVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    bizObjectIdsVo: BizObjectIdsVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/bizObject/remove",
        method: "post",
        modelFunName: "bizObjectOpenApi.remove",
        data: bizObjectIdsVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存数据URL
   */
  saveUrl() {
    return `${globalConfig.baseURL}/openapi/bizObject/save`;
  }

  /**
   * 保存数据
   * @param bizObjectSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  save(
    bizObjectSubmitVo: OpenApiBizObjectSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/openapi/bizObject/save",
        method: "post",
        modelFunName: "bizObjectOpenApi.save",
        data: bizObjectSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }
}
/**
 *模型数据项管理接口
 */
export class BizPropertyController {
  /**
   * 批量获取模型已发布的数据项列表URL
   */
  batchListPublishUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/batchListPublish`;
  }

  /**
   * 批量获取模型已发布的数据项列表
   * @param batchListSchemaParamVo
   * @param requestConfig
   * @returns Promise<ResBody>
   */
  batchListPublish(
    batchListSchemaParamVo: BatchListSchemaParamVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBody> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/batchListPublish",
        method: "post",
        modelFunName: "bizPropertyController.batchListPublish",
        data: batchListSchemaParamVo,
      },
      requestConfig
    );
    return fetch<ResBody>(req);
  }

  /**
   * 根据流程编码批量获取已发布的数据项列表URL
   */
  batchListPublishByWorkflowCodesUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/batchListPublishByWorkflowCodes`;
  }

  /**
   * 根据流程编码批量获取已发布的数据项列表
   * @param batchListSchemaParamVo
   * @param requestConfig
   * @returns Promise<ResBody>
   */
  batchListPublishByWorkflowCodes(
    batchListSchemaParamVo: BatchListSchemaParamVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBody> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/batchListPublishByWorkflowCodes",
        method: "post",
        modelFunName: "bizPropertyController.batchListPublishByWorkflowCodes",
        data: batchListSchemaParamVo,
      },
      requestConfig
    );
    return fetch<ResBody>(req);
  }

  /**
   * 确认删除数据项URL
   */
  confirmRemoveUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/confirmRemove`;
  }

  /**
   * 确认删除数据项
   * @param schemaPropertyCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  confirmRemove(
    schemaPropertyCodeVo: SchemaPropertyCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/confirmRemove",
        method: "post",
        modelFunName: "bizPropertyController.confirmRemove",
        data: schemaPropertyCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 创建数据项URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/create`;
  }

  /**
   * 创建数据项
   * @param bizPropertyVo
   * @param requestConfig
   * @returns Promise<ResBodyBizPropertyVo>
   */
  create(
    bizPropertyVo: BizPropertyVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/create",
        method: "post",
        modelFunName: "bizPropertyController.create",
        data: bizPropertyVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizPropertyVo>(req);
  }

  /**
   * 获取数据项详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/get`;
  }

  /**
   * 获取数据项详情
   * @param schemaPropertyCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyBizPropertyVo>
   */
  get(
    schemaPropertyCodeVo: SchemaPropertyCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/get",
        method: "post",
        modelFunName: "bizPropertyController.get",
        data: schemaPropertyCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizPropertyVo>(req);
  }

  /**
   * 获取数据项详情URL
   */
  getByIdUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/getById`;
  }

  /**
   * 获取数据项详情
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyBizPropertyVo>
   */
  getById(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/getById",
        method: "post",
        modelFunName: "bizPropertyController.getById",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizPropertyVo>(req);
  }

  /**
   * 获取已发布的数据项列表URL
   */
  getPublishListUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/getPublishList`;
  }

  /**
   * 获取已发布的数据项列表
   * @param schemaCode
   * @param loadSelfObject
   * @param loadSysProperty
   * @param requestConfig
   * @returns Promise<ResBodyListBizPropertyVo>
   */
  getPublishList(
    schemaCode: string,
    loadSelfObject?: boolean,
    loadSysProperty?: boolean,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/getPublishList",
        method: "get",
        modelFunName: "bizPropertyController.getPublishList",
        data: {
          schemaCode,
          loadSelfObject,
          loadSysProperty,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizPropertyVo>(req);
  }

  /**
   * 根据流程编码获取已发布的数据项列表URL
   */
  getPublishListByWorkflowCodeUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/getPublishListByWorkflowCode`;
  }

  /**
   * 根据流程编码获取已发布的数据项列表
   * @param workflowCode
   * @param loadSelfObject
   * @param loadSysProperty
   * @param requestConfig
   * @returns Promise<ResBodyListBizPropertyVo>
   */
  getPublishListByWorkflowCode(
    workflowCode: string,
    loadSelfObject?: boolean,
    loadSysProperty?: boolean,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/getPublishListByWorkflowCode",
        method: "get",
        modelFunName: "bizPropertyController.getPublishListByWorkflowCode",
        data: {
          workflowCode,
          loadSelfObject,
          loadSysProperty,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizPropertyVo>(req);
  }

  /**
   * 获取数据项列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/list`;
  }

  /**
   * 获取数据项列表
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizPropertyVo>
   */
  list(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/list",
        method: "get",
        modelFunName: "bizPropertyController.list",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizPropertyVo>(req);
  }

  /**
   * 修改数据项URL
   */
  modifyUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/modify`;
  }

  /**
   * 修改数据项
   * @param bizPropertyVo
   * @param requestConfig
   * @returns Promise<ResBodyBizPropertyVo>
   */
  modify(
    bizPropertyVo: BizPropertyVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/modify",
        method: "post",
        modelFunName: "bizPropertyController.modify",
        data: bizPropertyVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizPropertyVo>(req);
  }

  /**
   * 删除数据项URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/remove`;
  }

  /**
   * 删除数据项
   * @param schemaPropertyCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyRemovePropertyVo>
   */
  remove(
    schemaPropertyCodeVo: SchemaPropertyCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyRemovePropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/remove",
        method: "post",
        modelFunName: "bizPropertyController.remove",
        data: schemaPropertyCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyRemovePropertyVo>(req);
  }

  /**
   * 数据项排序URL
   */
  sortUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/property/sort`;
  }

  /**
   * 数据项排序
   * @param bizPropertySortVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  sort(
    bizPropertySortVo: BizPropertySortVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/property/sort",
        method: "post",
        modelFunName: "bizPropertyController.sort",
        data: bizPropertySortVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *计算规则接口
 */
export class BizPropertyFormulaController {
  /**
   * 新建计算规则URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/formula/create`;
  }

  /**
   * 新建计算规则
   * @param bizPropertyFormulaVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  create(
    bizPropertyFormulaVo: BizPropertyFormulaVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/formula/create",
        method: "post",
        modelFunName: "bizPropertyFormulaController.create",
        data: bizPropertyFormulaVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取计算规则列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/formula/list`;
  }

  /**
   * 获取计算规则列表
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizPropertyFormulaVo>
   */
  list(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizPropertyFormulaVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/formula/list",
        method: "get",
        modelFunName: "bizPropertyFormulaController.list",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizPropertyFormulaVo>(req);
  }

  /**
   * 删除计算规则URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/formula/remove`;
  }

  /**
   * 删除计算规则
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/formula/remove",
        method: "post",
        modelFunName: "bizPropertyFormulaController.remove",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 编辑计算规则URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/formula/update`;
  }

  /**
   * 编辑计算规则
   * @param bizPropertyFormulaVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  update(
    bizPropertyFormulaVo: BizPropertyFormulaVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/formula/update",
        method: "post",
        modelFunName: "bizPropertyFormulaController.update",
        data: bizPropertyFormulaVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *业务规则接口
 */
export class BizRuleController {
  /**
   * 克隆业务规则URL
   */
  cloneUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/clone`;
  }

  /**
   * 克隆业务规则
   * @param idNameVo
   * @param requestConfig
   * @returns Promise<ResBodyBizRuleVo>
   */
  clone(
    idNameVo: IdNameVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizRuleVo> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/clone",
        method: "post",
        modelFunName: "bizRuleController.clone",
        data: idNameVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizRuleVo>(req);
  }

  /**
   * 新增规则URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/create`;
  }

  /**
   * 新增规则
   * @param bizRuleVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  create(
    bizRuleVo: BizRuleVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/create",
        method: "post",
        modelFunName: "bizRuleController.create",
        data: bizRuleVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 删除规则URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/delete`;
  }

  /**
   * 删除规则
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/delete",
        method: "post",
        modelFunName: "bizRuleController.delete",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取规则详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/get`;
  }

  /**
   * 获取规则详情
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyBizRuleVo>
   */
  get(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizRuleVo> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/get",
        method: "get",
        modelFunName: "bizRuleController.get",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizRuleVo>(req);
  }

  /**
   * 查询所有规则列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/list`;
  }

  /**
   * 查询所有规则列表

   * @param requestConfig
   * @returns Promise<ResBodyListBizRuleVo>
   */
  list(requestConfig?: BAxiosRequestConfig): Promise<ResBodyListBizRuleVo> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/list",
        method: "post",
        modelFunName: "bizRuleController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListBizRuleVo>(req);
  }

  /**
   * 获取规则属性URL
   */
  getPropertyUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/property/get`;
  }

  /**
   * 获取规则属性
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyBizRulePropertyVo>
   */
  getProperty(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizRulePropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/property/get",
        method: "get",
        modelFunName: "bizRuleController.getProperty",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizRulePropertyVo>(req);
  }

  /**
   * 批量获取规则属性URL
   */
  listPropertyUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/property/list`;
  }

  /**
   * 批量获取规则属性
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyListBizRulePropertyVo>
   */
  listProperty(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizRulePropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/property/list",
        method: "post",
        modelFunName: "bizRuleController.listProperty",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyListBizRulePropertyVo>(req);
  }

  /**
   * 根据模型编码获取规则列表URL
   */
  queryBySchemaCodeUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/queryBySchemaCode`;
  }

  /**
   * 根据模型编码获取规则列表
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizRuleVo>
   */
  queryBySchemaCode(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizRuleVo> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/queryBySchemaCode",
        method: "get",
        modelFunName: "bizRuleController.queryBySchemaCode",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizRuleVo>(req);
  }

  /**
   * 规则重命名URL
   */
  renameUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/rename`;
  }

  /**
   * 规则重命名
   * @param renameVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  rename(
    renameVo: BizRuleRenameVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/rename",
        method: "post",
        modelFunName: "bizRuleController.rename",
        data: renameVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改规则URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/model/biz/rule/update`;
  }

  /**
   * 修改规则
   * @param bizRuleVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  update(
    bizRuleVo: BizRuleVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/biz/rule/update",
        method: "post",
        modelFunName: "bizRuleController.update",
        data: bizRuleVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *模型接口
 */
export class BizSchemaController {
  /**
   * 复制模型URL
   */
  cloneUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/clone`;
  }

  /**
   * 复制模型
   * @param cloneVo
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaVo>
   */
  clone(
    cloneVo: SchemaCloneVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/clone",
        method: "post",
        modelFunName: "bizSchemaController.clone",
        data: cloneVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaVo>(req);
  }

  /**
   * 创建模型分组URL
   */
  createGroupUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/createGroup`;
  }

  /**
   * 创建模型分组
   * @param bizSchemaGroupVo
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaGroupVo>
   */
  createGroup(
    bizSchemaGroupVo: BizSchemaGroupVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/createGroup",
        method: "post",
        modelFunName: "bizSchemaController.createGroup",
        data: bizSchemaGroupVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaGroupVo>(req);
  }

  /**
   * 创建模型URL
   */
  createSchemaUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/createSchema`;
  }

  /**
   * 创建模型
   * @param bizSchemaVo
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaVo>
   */
  createSchema(
    bizSchemaVo: BizSchemaVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/createSchema",
        method: "post",
        modelFunName: "bizSchemaController.createSchema",
        data: bizSchemaVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaVo>(req);
  }

  /**
   * 获取使用关联表单关联了指定模型的模型URL
   */
  getCorrlationFormSchemaUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/getCorrlationFormSchema`;
  }

  /**
   * 获取使用关联表单关联了指定模型的模型
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizSchemaVo>
   */
  getCorrlationFormSchema(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/getCorrlationFormSchema",
        method: "get",
        modelFunName: "bizSchemaController.getCorrlationFormSchema",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizSchemaVo>(req);
  }

  /**
   * 获取模型列表URL
   */
  getModelListUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/getModelList`;
  }

  /**
   * 获取模型列表
   * @param appCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizSchemaVo>
   */
  getModelList(
    appCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/getModelList",
        method: "get",
        modelFunName: "bizSchemaController.getModelList",
        data: {
          appCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizSchemaVo>(req);
  }

  /**
   * 获取模型树URL
   */
  getModelTreeUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/getModelTree`;
  }

  /**
   * 获取模型树
   * @param appCode
   * @param requestConfig
   * @returns Promise<ResBodyListFunTreeVo>
   */
  getModelTree(
    appCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListFunTreeVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/getModelTree",
        method: "get",
        modelFunName: "bizSchemaController.getModelTree",
        data: {
          appCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListFunTreeVo>(req);
  }

  /**
   * 获取模型详情URL
   */
  getSchemaInfoUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/getSchemaInfo`;
  }

  /**
   * 获取模型详情
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaVo>
   */
  getSchemaInfo(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/getSchemaInfo",
        method: "get",
        modelFunName: "bizSchemaController.getSchemaInfo",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaVo>(req);
  }

  /**
   * 获取已发布的模型元数据，包含数据项URL
   */
  getSchemaMetadataUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/getSchemaMetadata`;
  }

  /**
   * 获取已发布的模型元数据，包含数据项
   * @param schemaCode
   * @param loadSelfObject
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaVo>
   */
  getSchemaMetadata(
    schemaCode: string,
    loadSelfObject?: boolean,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/getSchemaMetadata",
        method: "get",
        modelFunName: "bizSchemaController.getSchemaMetadata",
        data: {
          schemaCode,
          loadSelfObject,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaVo>(req);
  }

  /**
   * 锁定模型URL
   */
  lockUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/lock`;
  }

  /**
   * 锁定模型
   * @param codeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  lock(
    codeVo: CodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/lock",
        method: "post",
        modelFunName: "bizSchemaController.lock",
        data: codeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改模型分组URL
   */
  modifyGroupUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/modifyGroup`;
  }

  /**
   * 修改模型分组
   * @param bizSchemaGroupVo
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaGroupVo>
   */
  modifyGroup(
    bizSchemaGroupVo: BizSchemaGroupVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/modifyGroup",
        method: "post",
        modelFunName: "bizSchemaController.modifyGroup",
        data: bizSchemaGroupVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaGroupVo>(req);
  }

  /**
   * 修改模型URL
   */
  modifySchemaUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/modifySchema`;
  }

  /**
   * 修改模型
   * @param bizSchemaVo
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaVo>
   */
  modifySchema(
    bizSchemaVo: BizSchemaVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/modifySchema",
        method: "post",
        modelFunName: "bizSchemaController.modifySchema",
        data: bizSchemaVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaVo>(req);
  }

  /**
   * 发布模型题URL
   */
  publishUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/publish`;
  }

  /**
   * 发布模型题
   * @param codes
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  publish(
    codes: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/publish",
        method: "post",
        modelFunName: "bizSchemaController.publish",
        data: codes,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除模型分组URL
   */
  removeGroupUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/removeGroup`;
  }

  /**
   * 删除模型分组
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  removeGroup(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/removeGroup",
        method: "post",
        modelFunName: "bizSchemaController.removeGroup",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除模型URL
   */
  removeSchemaUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/removeSchema`;
  }

  /**
   * 删除模型
   * @param codes
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  removeSchema(
    codes: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/removeSchema",
        method: "post",
        modelFunName: "bizSchemaController.removeSchema",
        data: codes,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存模型标题URL
   */
  saveTitleUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/saveTitle`;
  }

  /**
   * 保存模型标题
   * @param schemaTitleVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  saveTitle(
    schemaTitleVo: SchemaTitleVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/saveTitle",
        method: "post",
        modelFunName: "bizSchemaController.saveTitle",
        data: schemaTitleVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 解锁模型URL
   */
  unlockUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/unlock`;
  }

  /**
   * 解锁模型
   * @param codeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  unlock(
    codeVo: CodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/unlock",
        method: "post",
        modelFunName: "bizSchemaController.unlock",
        data: codeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *模型事件接口
 */
export class BizSchemaEventController {
  /**
   * 新增事件URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/event/create`;
  }

  /**
   * 新增事件
   * @param bizSchemaEventVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  create(
    bizSchemaEventVo: BizSchemaEventVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/event/create",
        method: "post",
        modelFunName: "bizSchemaEventController.create",
        data: bizSchemaEventVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 删除事件URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/event/delete`;
  }

  /**
   * 删除事件
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/event/delete",
        method: "get",
        modelFunName: "bizSchemaEventController.delete",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取事件详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/event/get`;
  }

  /**
   * 获取事件详情
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyBizSchemaEventVo>
   */
  get(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizSchemaEventVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/event/get",
        method: "get",
        modelFunName: "bizSchemaEventController.get",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizSchemaEventVo>(req);
  }

  /**
   * 查询所有事件列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/event/list`;
  }

  /**
   * 查询所有事件列表

   * @param requestConfig
   * @returns Promise<ResBodyListBizSchemaEventVo>
   */
  list(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizSchemaEventVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/event/list",
        method: "post",
        modelFunName: "bizSchemaEventController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListBizSchemaEventVo>(req);
  }

  /**
   * 根据模型编码获取事件列表URL
   */
  queryBySchemaCodeUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/event/queryBySchemaCode`;
  }

  /**
   * 根据模型编码获取事件列表
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizSchemaEventVo>
   */
  queryBySchemaCode(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizSchemaEventVo> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/event/queryBySchemaCode",
        method: "get",
        modelFunName: "bizSchemaEventController.queryBySchemaCode",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizSchemaEventVo>(req);
  }

  /**
   * 修改事件URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/model/schema/event/update`;
  }

  /**
   * 修改事件
   * @param bizSchemaEventVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  update(
    bizSchemaEventVo: BizSchemaEventVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/schema/event/update",
        method: "post",
        modelFunName: "bizSchemaEventController.update",
        data: bizSchemaEventVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *业务服务调用接口
 */
export class BizServerInvokeController {
  /**
   * 调用业务集成方法URL
   */
  bizBusUrl() {
    return `${globalConfig.baseURL}/portal/server/invoke/bizBus`;
  }

  /**
   * 调用业务集成方法
   * @param invokeVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  bizBus(
    invokeVo: BizMethodInvokeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/portal/server/invoke/bizBus",
        method: "post",
        modelFunName: "bizServerInvokeController.bizBus",
        data: invokeVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }

  /**
   * 调用业务规则URL
   */
  bizRuleUrl() {
    return `${globalConfig.baseURL}/portal/server/invoke/bizRule`;
  }

  /**
   * 调用业务规则
   * @param invokeVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  bizRule(
    invokeVo: BizRuleInvokeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/portal/server/invoke/bizRule",
        method: "post",
        modelFunName: "bizServerInvokeController.bizRule",
        data: invokeVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }
}
/**
 *业务服务目录接口
 */
export class BizServiceCategroyController {
  /**
   * 新建目录URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/categroy/create`;
  }

  /**
   * 新建目录
   * @param bizServiceCategoryVo
   * @param requestConfig
   * @returns Promise<ResBodyBizServiceCategoryVo>
   */
  create(
    bizServiceCategoryVo: BizServiceCategoryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizServiceCategoryVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/categroy/create",
        method: "post",
        modelFunName: "bizServiceCategroyController.create",
        data: bizServiceCategoryVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizServiceCategoryVo>(req);
  }

  /**
   * 根据关键字获取目录列表URL
   */
  getListUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/categroy/getList`;
  }

  /**
   * 根据关键字获取目录列表
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyListBizServiceCategoryVo>
   */
  getList(
    keyword?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizServiceCategoryVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/categroy/getList",
        method: "get",
        modelFunName: "bizServiceCategroyController.getList",
        data: {
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizServiceCategoryVo>(req);
  }

  /**
   * 删除目录URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/categroy/remove`;
  }

  /**
   * 删除目录
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/categroy/remove",
        method: "post",
        modelFunName: "bizServiceCategroyController.remove",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改目录URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/categroy/update`;
  }

  /**
   * 修改目录
   * @param bizServiceCategoryVo
   * @param requestConfig
   * @returns Promise<ResBodyBizServiceCategoryVo>
   */
  update(
    bizServiceCategoryVo: BizServiceCategoryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizServiceCategoryVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/categroy/update",
        method: "post",
        modelFunName: "bizServiceCategroyController.update",
        data: bizServiceCategoryVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizServiceCategoryVo>(req);
  }
}
/**
 *业务服务接口
 */
export class BizServiceController {
  /**
   * 新建业务服务URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/create`;
  }

  /**
   * 新建业务服务
   * @param bizServiceVo
   * @param requestConfig
   * @returns Promise<ResBodyBizServiceVo>
   */
  create(
    bizServiceVo: BizServiceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizServiceVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/create",
        method: "post",
        modelFunName: "bizServiceController.create",
        data: bizServiceVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizServiceVo>(req);
  }

  /**
   * 根据关键字获取业务服务列表URL
   */
  getListUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/getList`;
  }

  /**
   * 根据关键字获取业务服务列表
   * @param categroyId
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyListBizServiceVo>
   */
  getList(
    categroyId: string,
    keyword?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizServiceVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/getList",
        method: "get",
        modelFunName: "bizServiceController.getList",
        data: {
          categroyId,
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizServiceVo>(req);
  }

  /**
   * 获取所有业务服务分组URL
   */
  groupListUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/groupList`;
  }

  /**
   * 获取所有业务服务分组

   * @param requestConfig
   * @returns Promise<ResBodyListIdNameVo>
   */
  groupList(requestConfig?: BAxiosRequestConfig): Promise<ResBodyListIdNameVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/groupList",
        method: "get",
        modelFunName: "bizServiceController.groupList",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListIdNameVo>(req);
  }

  /**
   * 获取所有业务服务URL
   */
  listAllUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/listAll`;
  }

  /**
   * 获取所有业务服务

   * @param requestConfig
   * @returns Promise<ResBodyListBizServiceVo>
   */
  listAll(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizServiceVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/listAll",
        method: "get",
        modelFunName: "bizServiceController.listAll",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListBizServiceVo>(req);
  }

  /**
   * 获取所有业务服务URL
   */
  listServiceTreeUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/listServiceTree`;
  }

  /**
   * 获取所有业务服务

   * @param requestConfig
   * @returns Promise<ResBodyListBizServiceCategoryVo>
   */
  listServiceTree(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizServiceCategoryVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/listServiceTree",
        method: "get",
        modelFunName: "bizServiceController.listServiceTree",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListBizServiceCategoryVo>(req);
  }

  /**
   * 删除业务服务URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/remove`;
  }

  /**
   * 删除业务服务
   * @param codes
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    codes: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/remove",
        method: "post",
        modelFunName: "bizServiceController.remove",
        data: codes,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改业务服务URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/update`;
  }

  /**
   * 修改业务服务
   * @param bizServiceVo
   * @param requestConfig
   * @returns Promise<ResBodyBizServiceVo>
   */
  update(
    bizServiceVo: BizServiceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizServiceVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/update",
        method: "post",
        modelFunName: "bizServiceController.update",
        data: bizServiceVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizServiceVo>(req);
  }
}
/**
 *业务服务方法接口
 */
export class BizServiceMethodController {
  /**
   * 新建业务方法URL
   */
  BizServiceMethodVoUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/method/BizServiceMethodVo`;
  }

  /**
   * 新建业务方法
   * @param bizServiceMethodVo
   * @param requestConfig
   * @returns Promise<ResBodyBizServiceMethodVo>
   */
  BizServiceMethodVo(
    bizServiceMethodVo: BizServiceMethodVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizServiceMethodVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/method/BizServiceMethodVo",
        method: "post",
        modelFunName: "bizServiceMethodController.BizServiceMethodVo",
        data: bizServiceMethodVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizServiceMethodVo>(req);
  }

  /**
   * 批量获取业务方法URL
   */
  batchListUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/method/batchList`;
  }

  /**
   * 批量获取业务方法
   * @param methodCodeVos
   * @param requestConfig
   * @returns Promise<ResBodyListBizServiceMethodVo>
   */
  batchList(
    methodCodeVos: BizServiceMethodCodeVo[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizServiceMethodVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/method/batchList",
        method: "post",
        modelFunName: "bizServiceMethodController.batchList",
        data: methodCodeVos,
      },
      requestConfig
    );
    return fetch<ResBodyListBizServiceMethodVo>(req);
  }

  /**
   * 获取指定业务方法URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/method/get`;
  }

  /**
   * 获取指定业务方法
   * @param serviceCode
   * @param methodCode
   * @param requestConfig
   * @returns Promise<ResBodyBizServiceMethodVo>
   */
  get(
    serviceCode: string,
    methodCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizServiceMethodVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/method/get",
        method: "get",
        modelFunName: "bizServiceMethodController.get",
        data: {
          serviceCode,
          methodCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizServiceMethodVo>(req);
  }

  /**
   * 获取业务方法列表URL
   */
  getListUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/method/getList`;
  }

  /**
   * 获取业务方法列表
   * @param serviceCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizServiceMethodVo>
   */
  getList(
    serviceCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizServiceMethodVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/method/getList",
        method: "get",
        modelFunName: "bizServiceMethodController.getList",
        data: {
          serviceCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizServiceMethodVo>(req);
  }

  /**
   * 删除业务方法URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/method/remove`;
  }

  /**
   * 删除业务方法
   * @param bizServiceMethodCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    bizServiceMethodCodeVo: BizServiceMethodCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/method/remove",
        method: "post",
        modelFunName: "bizServiceMethodController.remove",
        data: bizServiceMethodCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 测试连接URL
   */
  testConnectUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/method/testConnect`;
  }

  /**
   * 测试连接
   * @param invokeParam
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  testConnect(
    invokeParam: MethodInvokeParamVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/method/testConnect",
        method: "post",
        modelFunName: "bizServiceMethodController.testConnect",
        data: invokeParam,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }

  /**
   * 修改业务方法URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/bizbus/service/method/update`;
  }

  /**
   * 修改业务方法
   * @param bizServiceMethodVo
   * @param requestConfig
   * @returns Promise<ResBodyBizServiceMethodVo>
   */
  update(
    bizServiceMethodVo: BizServiceMethodVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizServiceMethodVo> {
    const req = Object.assign(
      {
        url: "/admin/bizbus/service/method/update",
        method: "post",
        modelFunName: "bizServiceMethodController.update",
        data: bizServiceMethodVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizServiceMethodVo>(req);
  }
}
/**
 *视图接口
 */
export class BizViewController {
  /**
   * 复制URL
   */
  cloneUrl() {
    return `${globalConfig.baseURL}/admin/model/view/clone`;
  }

  /**
   * 复制
   * @param cloneVo
   * @param requestConfig
   * @returns Promise<ResBodyBizViewVo>
   */
  clone(
    cloneVo: BizViewCloneVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizViewVo> {
    const req = Object.assign(
      {
        url: "/admin/model/view/clone",
        method: "post",
        modelFunName: "bizViewController.clone",
        data: cloneVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizViewVo>(req);
  }

  /**
   * 创建视图URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/model/view/create`;
  }

  /**
   * 创建视图
   * @param bizViewVo
   * @param requestConfig
   * @returns Promise<ResBodyBizViewVo>
   */
  create(
    bizViewVo: BizViewVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizViewVo> {
    const req = Object.assign(
      {
        url: "/admin/model/view/create",
        method: "post",
        modelFunName: "bizViewController.create",
        data: bizViewVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizViewVo>(req);
  }

  /**
   * 获取视图详情，根据客户端类型返回视图配置URL
   */
  getViewInfoUrl() {
    return `${globalConfig.baseURL}/admin/model/view/getViewInfo`;
  }

  /**
   * 获取视图详情，根据客户端类型返回视图配置
   * @param bizViewCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyBizViewVo>
   */
  getViewInfo(
    bizViewCodeVo: BizViewCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizViewVo> {
    const req = Object.assign(
      {
        url: "/admin/model/view/getViewInfo",
        method: "post",
        modelFunName: "bizViewController.getViewInfo",
        data: bizViewCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizViewVo>(req);
  }

  /**
   * 获取视图列表，只返回基础信息，不返回配置URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/model/view/list`;
  }

  /**
   * 获取视图列表，只返回基础信息，不返回配置
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizViewVo>
   */
  list(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizViewVo> {
    const req = Object.assign(
      {
        url: "/admin/model/view/list",
        method: "get",
        modelFunName: "bizViewController.list",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizViewVo>(req);
  }

  /**
   * 发布视图URL
   */
  publishUrl() {
    return `${globalConfig.baseURL}/admin/model/view/publish`;
  }

  /**
   * 发布视图
   * @param bizViewVo
   * @param requestConfig
   * @returns Promise<ResBodyBizViewVo>
   */
  publish(
    bizViewVo: BizViewVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizViewVo> {
    const req = Object.assign(
      {
        url: "/admin/model/view/publish",
        method: "post",
        modelFunName: "bizViewController.publish",
        data: bizViewVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizViewVo>(req);
  }

  /**
   * 删除视图URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/model/view/remove`;
  }

  /**
   * 删除视图
   * @param bizViewCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    bizViewCodeVo: BizViewCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/view/remove",
        method: "post",
        modelFunName: "bizViewController.remove",
        data: bizViewCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 重命名URL
   */
  renameUrl() {
    return `${globalConfig.baseURL}/admin/model/view/rename`;
  }

  /**
   * 重命名
   * @param renameVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  rename(
    renameVo: BizViewSortNameVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/view/rename",
        method: "post",
        modelFunName: "bizViewController.rename",
        data: renameVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 排序URL
   */
  sortUrl() {
    return `${globalConfig.baseURL}/admin/model/view/sort`;
  }

  /**
   * 排序
   * @param sortVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  sort(
    sortVo: BizViewSortVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/view/sort",
        method: "post",
        modelFunName: "bizViewController.sort",
        data: sortVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改可见端URL
   */
  updateVisibleUrl() {
    return `${globalConfig.baseURL}/admin/model/view/updateVisible`;
  }

  /**
   * 修改可见端
   * @param bizViewVisibleVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  updateVisible(
    bizViewVisibleVo: BizViewVisibleVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/view/updateVisible",
        method: "post",
        modelFunName: "bizViewController.updateVisible",
        data: bizViewVisibleVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *图表接口
 */
export class ChartController {
  /**
   * 创建图表URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/report/chart/create`;
  }

  /**
   * 创建图表
   * @param chartVo
   * @param requestConfig
   * @returns Promise<ResBodyChartVo>
   */
  create(
    chartVo: ChartVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyChartVo> {
    const req = Object.assign(
      {
        url: "/admin/report/chart/create",
        method: "post",
        modelFunName: "chartController.create",
        data: chartVo,
      },
      requestConfig
    );
    return fetch<ResBodyChartVo>(req);
  }

  /**
   * 编辑图表URL
   */
  modifyUrl() {
    return `${globalConfig.baseURL}/admin/report/chart/modify`;
  }

  /**
   * 编辑图表
   * @param chartVo
   * @param requestConfig
   * @returns Promise<ResBodyChartVo>
   */
  modify(
    chartVo: ChartVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyChartVo> {
    const req = Object.assign(
      {
        url: "/admin/report/chart/modify",
        method: "post",
        modelFunName: "chartController.modify",
        data: chartVo,
      },
      requestConfig
    );
    return fetch<ResBodyChartVo>(req);
  }

  /**
   * testURL
   */
  testUrl() {
    return `${globalConfig.baseURL}/admin/report/chart/test`;
  }

  /**
   * test

   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  test(requestConfig?: BAxiosRequestConfig): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/report/chart/test",
        method: "post",
        modelFunName: "chartController.test",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *仪表盘接口
 */
export class DashboardController {
  /**
   * 创建仪表盘URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/report/dashboard/create`;
  }

  /**
   * 创建仪表盘
   * @param dashboardVo
   * @param requestConfig
   * @returns Promise<ResBodyDashboardVo>
   */
  create(
    dashboardVo: DashboardVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDashboardVo> {
    const req = Object.assign(
      {
        url: "/admin/report/dashboard/create",
        method: "post",
        modelFunName: "dashboardController.create",
        data: dashboardVo,
      },
      requestConfig
    );
    return fetch<ResBodyDashboardVo>(req);
  }

  /**
   * 删除仪表盘URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/admin/report/dashboard/delete`;
  }

  /**
   * 删除仪表盘
   * @param codeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    codeVo: CodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/report/dashboard/delete",
        method: "post",
        modelFunName: "dashboardController.delete",
        data: codeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取仪表盘URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/report/dashboard/get`;
  }

  /**
   * 获取仪表盘
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyDashboardVo>
   */
  get(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDashboardVo> {
    const req = Object.assign(
      {
        url: "/admin/report/dashboard/get",
        method: "get",
        modelFunName: "dashboardController.get",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDashboardVo>(req);
  }

  /**
   * 修改仪表盘URL
   */
  modifyUrl() {
    return `${globalConfig.baseURL}/admin/report/dashboard/modify`;
  }

  /**
   * 修改仪表盘
   * @param dashboardVo
   * @param requestConfig
   * @returns Promise<ResBodyDashboardVo>
   */
  modify(
    dashboardVo: DashboardVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDashboardVo> {
    const req = Object.assign(
      {
        url: "/admin/report/dashboard/modify",
        method: "post",
        modelFunName: "dashboardController.modify",
        data: dashboardVo,
      },
      requestConfig
    );
    return fetch<ResBodyDashboardVo>(req);
  }

  /**
   * 移动图表URL
   */
  moveChartUrl() {
    return `${globalConfig.baseURL}/admin/report/dashboard/moveChart`;
  }

  /**
   * 移动图表
   * @param moveChartVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  moveChart(
    moveChartVo: MoveChartVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/report/dashboard/moveChart",
        method: "post",
        modelFunName: "dashboardController.moveChart",
        data: moveChartVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 发布仪表盘URL
   */
  publishUrl() {
    return `${globalConfig.baseURL}/admin/report/dashboard/publish`;
  }

  /**
   * 发布仪表盘
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  publish(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/report/dashboard/publish",
        method: "post",
        modelFunName: "dashboardController.publish",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存全局过滤URL
   */
  saveFiltersUrl() {
    return `${globalConfig.baseURL}/admin/report/dashboard/saveFilters`;
  }

  /**
   * 保存全局过滤
   * @param dashboardConfigVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  saveFilters(
    dashboardConfigVo: UpdateDashboardConfigVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/report/dashboard/saveFilters",
        method: "post",
        modelFunName: "dashboardController.saveFilters",
        data: dashboardConfigVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存全局配置URL
   */
  saveGlobalUrl() {
    return `${globalConfig.baseURL}/admin/report/dashboard/saveGlobal`;
  }

  /**
   * 保存全局配置
   * @param dashboardConfigVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  saveGlobal(
    dashboardConfigVo: UpdateDashboardConfigVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/report/dashboard/saveGlobal",
        method: "post",
        modelFunName: "dashboardController.saveGlobal",
        data: dashboardConfigVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *部门管理接口
 */
export class DepartmentController {
  /**
   * 批量新增部门URL
   */
  batchSaveDeptUrl() {
    return `${globalConfig.baseURL}/admin/org/dept/batchSaveDept`;
  }

  /**
   * 批量新增部门
   * @param batchDeptInsertVo
   * @param requestConfig
   * @returns Promise<ResBodyListDepartmentVo>
   */
  batchSaveDept(
    batchDeptInsertVo: BatchDeptInsertVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListDepartmentVo> {
    const req = Object.assign(
      {
        url: "/admin/org/dept/batchSaveDept",
        method: "post",
        modelFunName: "departmentController.batchSaveDept",
        data: batchDeptInsertVo,
      },
      requestConfig
    );
    return fetch<ResBodyListDepartmentVo>(req);
  }

  /**
   * 获取部门详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/org/dept/get`;
  }

  /**
   * 获取部门详情
   * @param deptId
   * @param requestConfig
   * @returns Promise<ResBodyDepartmentVo>
   */
  get(
    deptId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDepartmentVo> {
    const req = Object.assign(
      {
        url: "/admin/org/dept/get",
        method: "get",
        modelFunName: "departmentController.get",
        data: {
          deptId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDepartmentVo>(req);
  }

  /**
   * 获取完整组织树URL
   */
  getAllDeptTreeUrl() {
    return `${globalConfig.baseURL}/admin/org/dept/getAllDeptTree`;
  }

  /**
   * 获取完整组织树
   * @param parentId
   * @param requestConfig
   * @returns Promise<ResBodyOrganizationChartVo>
   */
  getAllDeptTree(
    parentId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyOrganizationChartVo> {
    const req = Object.assign(
      {
        url: "/admin/org/dept/getAllDeptTree",
        method: "get",
        modelFunName: "departmentController.getAllDeptTree",
        data: {
          parentId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyOrganizationChartVo>(req);
  }

  /**
   * 根据父级id获取子级部门列表URL
   */
  listChildUnitUrl() {
    return `${globalConfig.baseURL}/admin/org/dept/listChildUnit`;
  }

  /**
   * 根据父级id获取子级部门列表
   * @param parentId
   * @param requestConfig
   * @returns Promise<ResBodyUnitGroupVo>
   */
  listChildUnit(
    parentId?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUnitGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/org/dept/listChildUnit",
        method: "get",
        modelFunName: "departmentController.listChildUnit",
        data: {
          parentId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyUnitGroupVo>(req);
  }

  /**
   * 移除部门URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/org/dept/remove`;
  }

  /**
   * 移除部门
   * @param deptIds
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    deptIds: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/dept/remove",
        method: "post",
        modelFunName: "departmentController.remove",
        data: deptIds,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 移除用户URL
   */
  removeUserUrl() {
    return `${globalConfig.baseURL}/admin/org/dept/removeUser`;
  }

  /**
   * 移除用户
   * @param deptUserIdsVO
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  removeUser(
    deptUserIdsVO: DeptUserIdsVO,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/dept/removeUser",
        method: "post",
        modelFunName: "departmentController.removeUser",
        data: deptUserIdsVO,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存部门URL
   */
  saveUrl() {
    return `${globalConfig.baseURL}/admin/org/dept/save`;
  }

  /**
   * 保存部门
   * @param departmentVo
   * @param requestConfig
   * @returns Promise<ResBodyDepartmentVo>
   */
  save(
    departmentVo: DepartmentVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDepartmentVo> {
    const req = Object.assign(
      {
        url: "/admin/org/dept/save",
        method: "post",
        modelFunName: "departmentController.save",
        data: departmentVo,
      },
      requestConfig
    );
    return fetch<ResBodyDepartmentVo>(req);
  }

  /**
   * 根据关键字搜索组织URL
   */
  searchUrl() {
    return `${globalConfig.baseURL}/admin/org/dept/search`;
  }

  /**
   * 根据关键字搜索组织
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyListDepartmentVo>
   */
  search(
    keyword: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListDepartmentVo> {
    const req = Object.assign(
      {
        url: "/admin/org/dept/search",
        method: "get",
        modelFunName: "departmentController.search",
        data: {
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListDepartmentVo>(req);
  }
}
/**
 *文件管理接口
 */
export class DocumentFileController {
  /**
   * 删除文件URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/document/delete`;
  }

  /**
   * 删除文件
   * @param documentIds
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    documentIds: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/document/delete",
        method: "post",
        modelFunName: "documentFileController.delete",
        data: documentIds,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除临时文件URL
   */
  deleteTempUrl() {
    return `${globalConfig.baseURL}/document/deleteTemp`;
  }

  /**
   * 删除临时文件
   * @param documentIds
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  deleteTemp(
    documentIds: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/document/deleteTemp",
        method: "post",
        modelFunName: "documentFileController.deleteTemp",
        data: documentIds,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 下载文件URL
   */
  fileUrl() {
    return `${globalConfig.baseURL}/document/download/file`;
  }

  /**
   * 下载文件
   * @param documentId
   * @param requestConfig
   * @returns Promise<any>
   */
  file(documentId: string, requestConfig?: BAxiosRequestConfig): Promise<any> {
    const req = Object.assign(
      {
        url: "/document/download/file",
        method: "get",
        modelFunName: "documentFileController.file",
        data: {
          documentId,
        },
      },
      requestConfig
    );
    return fetch<any>(req);
  }

  /**
   * 下载临时文件URL
   */
  temporaryUrl() {
    return `${globalConfig.baseURL}/document/download/temporary`;
  }

  /**
   * 下载临时文件
   * @param documentId
   * @param requestConfig
   * @returns Promise<any>
   */
  temporary(
    documentId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<any> {
    const req = Object.assign(
      {
        url: "/document/download/temporary",
        method: "get",
        modelFunName: "documentFileController.temporary",
        data: {
          documentId,
        },
      },
      requestConfig
    );
    return fetch<any>(req);
  }

  /**
   * 上传文件URL
   */
  fileUploadUrl() {
    return `${globalConfig.baseURL}/document/upload/file`;
  }

  /**
   * 上传文件
   * @param file
   * @param requestConfig
   * @returns Promise<ResBodyDocumentFileVo>
   */
  fileUpload(
    file: File,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDocumentFileVo> {
    const req = Object.assign(
      {
        url: "/document/upload/file",
        method: "formdata",
        modelFunName: "documentFileController.fileUpload",
        data: {
          file,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDocumentFileVo>(req);
  }

  /**
   * 上传图片URL
   */
  imageUrl() {
    return `${globalConfig.baseURL}/document/upload/image`;
  }

  /**
   * 上传图片
   * @param file
   * @param requestConfig
   * @returns Promise<ResBodyDocumentFileVo>
   */
  image(
    file: File,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDocumentFileVo> {
    const req = Object.assign(
      {
        url: "/document/upload/image",
        method: "formdata",
        modelFunName: "documentFileController.image",
        data: {
          file,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDocumentFileVo>(req);
  }

  /**
   * 富文本上传文件URL
   */
  richtextUrl() {
    return `${globalConfig.baseURL}/document/upload/richtext`;
  }

  /**
   * 富文本上传文件
   * @param file
   * @param requestConfig
   * @returns Promise<ResBodyDocumentFileVo>
   */
  richtext(
    file: File,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDocumentFileVo> {
    const req = Object.assign(
      {
        url: "/document/upload/richtext",
        method: "formdata",
        modelFunName: "documentFileController.richtext",
        data: {
          file,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDocumentFileVo>(req);
  }

  /**
   * 上传临时文件URL
   */
  temporaryUploadUrl() {
    return `${globalConfig.baseURL}/document/upload/temporary`;
  }

  /**
   * 上传临时文件
   * @param file
   * @param requestConfig
   * @returns Promise<ResBodyDocumentFileVo>
   */
  temporaryUpload(
    file: File,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDocumentFileVo> {
    const req = Object.assign(
      {
        url: "/document/upload/temporary",
        method: "formdata",
        modelFunName: "documentFileController.temporaryUpload",
        data: {
          file,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDocumentFileVo>(req);
  }

  /**
   * 上传iconURL
   */
  uploadIconUrl() {
    return `${globalConfig.baseURL}/document/uploadIcon`;
  }

  /**
   * 上传icon
   * @param file
   * @param requestConfig
   * @returns Promise<ResBodyDocumentFileVo>
   */
  uploadIcon(
    file: File,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDocumentFileVo> {
    const req = Object.assign(
      {
        url: "/document/uploadIcon",
        method: "formdata",
        modelFunName: "documentFileController.uploadIcon",
        data: {
          file,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDocumentFileVo>(req);
  }

  /**
   * 预览iconURL
   */
  iconUrl() {
    return `${globalConfig.baseURL}/document/view/icon`;
  }

  /**
   * 预览icon
   * @param documentId
   * @param requestConfig
   * @returns Promise<any>
   */
  icon(documentId: string, requestConfig?: BAxiosRequestConfig): Promise<any> {
    const req = Object.assign(
      {
        url: "/document/view/icon",
        method: "get",
        modelFunName: "documentFileController.icon",
        data: {
          documentId,
        },
      },
      requestConfig
    );
    return fetch<any>(req);
  }

  /**
   * 预览图片URL
   */
  imageViewUrl() {
    return `${globalConfig.baseURL}/document/view/image`;
  }

  /**
   * 预览图片
   * @param documentId
   * @param requestConfig
   * @returns Promise<any>
   */
  imageView(
    documentId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<any> {
    const req = Object.assign(
      {
        url: "/document/view/image",
        method: "get",
        modelFunName: "documentFileController.imageView",
        data: {
          documentId,
        },
      },
      requestConfig
    );
    return fetch<any>(req);
  }

  /**
   * 预览缩略图URL
   */
  thumbnailUrl() {
    return `${globalConfig.baseURL}/document/view/thumbnail`;
  }

  /**
   * 预览缩略图
   * @param documentId
   * @param requestConfig
   * @returns Promise<any>
   */
  thumbnail(
    documentId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<any> {
    const req = Object.assign(
      {
        url: "/document/view/thumbnail",
        method: "get",
        modelFunName: "documentFileController.thumbnail",
        data: {
          documentId,
        },
      },
      requestConfig
    );
    return fetch<any>(req);
  }
}
/**
 *openapi:文件管理接口
 */
export class DocumentFileOpenApi {
  /**
   * 下载文件URL
   */
  fileUrl() {
    return `${globalConfig.baseURL}/openapi/download/file`;
  }

  /**
   * 下载文件
   * @param documentId
   * @param requestConfig
   * @returns Promise<any>
   */
  file(documentId: string, requestConfig?: BAxiosRequestConfig): Promise<any> {
    const req = Object.assign(
      {
        url: "/openapi/download/file",
        method: "get",
        modelFunName: "documentFileOpenApi.file",
        data: {
          documentId,
        },
      },
      requestConfig
    );
    return fetch<any>(req);
  }

  /**
   * 上传文件URL
   */
  fileUploadUrl() {
    return `${globalConfig.baseURL}/openapi/upload/file`;
  }

  /**
   * 上传文件
   * @param file
   * @param requestConfig
   * @returns Promise<ResBodyDocumentFileVo>
   */
  fileUpload(
    file: File,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDocumentFileVo> {
    const req = Object.assign(
      {
        url: "/openapi/upload/file",
        method: "formdata",
        modelFunName: "documentFileOpenApi.fileUpload",
        data: {
          file,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDocumentFileVo>(req);
  }

  /**
   * 上传图片URL
   */
  imageUrl() {
    return `${globalConfig.baseURL}/openapi/upload/image`;
  }

  /**
   * 上传图片
   * @param file
   * @param requestConfig
   * @returns Promise<ResBodyDocumentFileVo>
   */
  image(
    file: File,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDocumentFileVo> {
    const req = Object.assign(
      {
        url: "/openapi/upload/image",
        method: "formdata",
        modelFunName: "documentFileOpenApi.image",
        data: {
          file,
        },
      },
      requestConfig
    );
    return fetch<ResBodyDocumentFileVo>(req);
  }
}
/**
 *openapi:esb运行时接口
 */
export class EsbRuntimeOpenApi {
  /**
   * 调用esb接口URL
   */
  invokeUrl() {
    return `${globalConfig.baseURL}/openapi/esb/invoke`;
  }

  /**
   * 调用esb接口
   * @param esbInvokeVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  invoke(
    esbInvokeVo: EsbInvokeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/openapi/esb/invoke",
        method: "post",
        modelFunName: "esbRuntimeOpenApi.invoke",
        data: esbInvokeVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }
}
/**
 *ESB服务接口
 */
export class EsbServiceController {
  /**
   * 批量获取esb服务的输入输出参数URL
   */
  batchListDefinesUrl() {
    return `${globalConfig.baseURL}/admin/esb/batchListDefines`;
  }

  /**
   * 批量获取esb服务的输入输出参数
   * @param codes
   * @param requestConfig
   * @returns Promise<ResBodyListEsbServiceDefineVo>
   */
  batchListDefines(
    codes: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListEsbServiceDefineVo> {
    const req = Object.assign(
      {
        url: "/admin/esb/batchListDefines",
        method: "post",
        modelFunName: "esbServiceController.batchListDefines",
        data: codes,
      },
      requestConfig
    );
    return fetch<ResBodyListEsbServiceDefineVo>(req);
  }

  /**
   * 新建esb服务URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/esb/create`;
  }

  /**
   * 新建esb服务
   * @param esbServiceVo
   * @param requestConfig
   * @returns Promise<ResBodyEsbServiceVo>
   */
  create(
    esbServiceVo: EsbServiceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyEsbServiceVo> {
    const req = Object.assign(
      {
        url: "/admin/esb/create",
        method: "post",
        modelFunName: "esbServiceController.create",
        data: esbServiceVo,
      },
      requestConfig
    );
    return fetch<ResBodyEsbServiceVo>(req);
  }

  /**
   * 获取esb服务详情URL
   */
  getByCodeUrl() {
    return `${globalConfig.baseURL}/admin/esb/getByCode`;
  }

  /**
   * 获取esb服务详情
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyEsbServiceVo>
   */
  getByCode(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyEsbServiceVo> {
    const req = Object.assign(
      {
        url: "/admin/esb/getByCode",
        method: "get",
        modelFunName: "esbServiceController.getByCode",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyEsbServiceVo>(req);
  }

  /**
   * 获取esb服务详情URL
   */
  getByIdUrl() {
    return `${globalConfig.baseURL}/admin/esb/getById`;
  }

  /**
   * 获取esb服务详情
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyEsbServiceVo>
   */
  getById(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyEsbServiceVo> {
    const req = Object.assign(
      {
        url: "/admin/esb/getById",
        method: "get",
        modelFunName: "esbServiceController.getById",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyEsbServiceVo>(req);
  }

  /**
   * 删除分组URL
   */
  groupDeleteUrl() {
    return `${globalConfig.baseURL}/admin/esb/groupDelete`;
  }

  /**
   * 删除分组
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  groupDelete(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/esb/groupDelete",
        method: "post",
        modelFunName: "esbServiceController.groupDelete",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 分组重命名URL
   */
  groupRenameUrl() {
    return `${globalConfig.baseURL}/admin/esb/groupRename`;
  }

  /**
   * 分组重命名
   * @param idNameVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  groupRename(
    idNameVo: IdNameVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/esb/groupRename",
        method: "post",
        modelFunName: "esbServiceController.groupRename",
        data: idNameVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取指定应用有访问权限的esb服务列表URL
   */
  listByAclAppUrl() {
    return `${globalConfig.baseURL}/admin/esb/listByAclApp`;
  }

  /**
   * 获取指定应用有访问权限的esb服务列表
   * @param appCode
   * @param requestConfig
   * @returns Promise<ResBodyListEsbGroupVo>
   */
  listByAclApp(
    appCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListEsbGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/esb/listByAclApp",
        method: "get",
        modelFunName: "esbServiceController.listByAclApp",
        data: {
          appCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListEsbGroupVo>(req);
  }

  /**
   * 分组获取esb服务列表URL
   */
  listGroupByUrl() {
    return `${globalConfig.baseURL}/admin/esb/listGroupBy`;
  }

  /**
   * 分组获取esb服务列表

   * @param requestConfig
   * @returns Promise<ResBodyListEsbGroupVo>
   */
  listGroupBy(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListEsbGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/esb/listGroupBy",
        method: "post",
        modelFunName: "esbServiceController.listGroupBy",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListEsbGroupVo>(req);
  }

  /**
   * 删除esb服务URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/esb/remove`;
  }

  /**
   * 删除esb服务
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/esb/remove",
        method: "post",
        modelFunName: "esbServiceController.remove",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改esb服务URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/esb/update`;
  }

  /**
   * 修改esb服务
   * @param esbServiceVo
   * @param requestConfig
   * @returns Promise<ResBodyEsbServiceVo>
   */
  update(
    esbServiceVo: EsbServiceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyEsbServiceVo> {
    const req = Object.assign(
      {
        url: "/admin/esb/update",
        method: "post",
        modelFunName: "esbServiceController.update",
        data: esbServiceVo,
      },
      requestConfig
    );
    return fetch<ResBodyEsbServiceVo>(req);
  }
}
/**
 *Excel导入导出接口
 */
export class ExcelController {
  /**
   * 下载excel导入模版URL
   */
  downloadTemplateUrl() {
    return `${globalConfig.baseURL}/excel/downloadTemplate`;
  }

  /**
   * 下载excel导入模版
   * @param importVo
   * @param requestConfig
   * @returns Promise<any>
   */
  downloadTemplate(
    importVo?: ImportVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<any> {
    const req = Object.assign(
      {
        url: "/excel/downloadTemplate",
        method: "post",
        modelFunName: "excelController.downloadTemplate",
        data: importVo,
      },
      requestConfig
    );
    return fetch<any>(req);
  }

  /**
   * excel导出URL
   */
  excelExportUrl() {
    return `${globalConfig.baseURL}/excel/excelExport`;
  }

  /**
   * excel导出
   * @param exportVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  excelExport(
    exportVo: ExportVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/excel/excelExport",
        method: "post",
        modelFunName: "excelController.excelExport",
        data: exportVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 查询导出进度URL
   */
  getExportProgressUrl() {
    return `${globalConfig.baseURL}/excel/getExportProgress`;
  }

  /**
   * 查询导出进度
   * @param taskId
   * @param requestConfig
   * @returns Promise<ResBodyExportProgressVo>
   */
  getExportProgress(
    taskId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyExportProgressVo> {
    const req = Object.assign(
      {
        url: "/excel/getExportProgress",
        method: "get",
        modelFunName: "excelController.getExportProgress",
        data: {
          taskId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyExportProgressVo>(req);
  }

  /**
   * 查询导入进度URL
   */
  getImportProgressUrl() {
    return `${globalConfig.baseURL}/excel/getImportProgress`;
  }

  /**
   * 查询导入进度
   * @param taskId
   * @param requestConfig
   * @returns Promise<ResBodyImportProgressVo>
   */
  getImportProgress(
    taskId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyImportProgressVo> {
    const req = Object.assign(
      {
        url: "/excel/getImportProgress",
        method: "get",
        modelFunName: "excelController.getImportProgress",
        data: {
          taskId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyImportProgressVo>(req);
  }

  /**
   * excel导入URL
   */
  importUrl() {
    return `${globalConfig.baseURL}/excel/import`;
  }

  /**
   * excel导入
   * @param importVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  import(
    importVo: ImportVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/excel/import",
        method: "post",
        modelFunName: "excelController.import",
        data: importVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }
}
/**
 *外链接口
 */
export class ExternalController {
  /**
   * 加载表单URL
   */
  loadUrl() {
    return `${globalConfig.baseURL}/portal/runtime/external/load`;
  }

  /**
   * 加载表单
   * @param shortCode
   * @param requestConfig
   * @returns Promise<ResBodyFormDataVo>
   */
  load(
    shortCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyFormDataVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/external/load",
        method: "get",
        modelFunName: "externalController.load",
        data: {
          shortCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyFormDataVo>(req);
  }

  /**
   * 发起流程URL
   */
  startWorkflowUrl() {
    return `${globalConfig.baseURL}/portal/runtime/external/startWorkflow`;
  }

  /**
   * 发起流程
   * @param externalSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  startWorkflow(
    externalSubmitVo: ExternalSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/portal/runtime/external/startWorkflow",
        method: "post",
        modelFunName: "externalController.startWorkflow",
        data: externalSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 提交表单URL
   */
  submitUrl() {
    return `${globalConfig.baseURL}/portal/runtime/external/submit`;
  }

  /**
   * 提交表单
   * @param externalSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  submit(
    externalSubmitVo: ExternalSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/portal/runtime/external/submit",
        method: "post",
        modelFunName: "externalController.submit",
        data: externalSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }
}
/**
 *表单评论接口
 */
export class FormCommentController {
  /**
   * 添加评论URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/portal/form/comment/create`;
  }

  /**
   * 添加评论
   * @param bizFormCommentVo
   * @param requestConfig
   * @returns Promise<ResBodyBizFormCommentVo>
   */
  create(
    bizFormCommentVo: BizFormCommentVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormCommentVo> {
    const req = Object.assign(
      {
        url: "/portal/form/comment/create",
        method: "post",
        modelFunName: "formCommentController.create",
        data: bizFormCommentVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizFormCommentVo>(req);
  }

  /**
   * 评论删除URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/portal/form/comment/delete`;
  }

  /**
   * 评论删除
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/form/comment/delete",
        method: "get",
        modelFunName: "formCommentController.delete",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 根据表单id查询所属评论列表URL
   */
  findByBizObjectIdUrl() {
    return `${globalConfig.baseURL}/portal/form/comment/findByBizObjectId`;
  }

  /**
   * 根据表单id查询所属评论列表
   * @param bizObjectId
   * @param requestConfig
   * @returns Promise<ResBodyListBizFormCommentVo>
   */
  findByBizObjectId(
    bizObjectId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizFormCommentVo> {
    const req = Object.assign(
      {
        url: "/portal/form/comment/findByBizObjectId",
        method: "get",
        modelFunName: "formCommentController.findByBizObjectId",
        data: {
          bizObjectId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizFormCommentVo>(req);
  }
}
/**
 *表单管理接口
 */
export class FormDesignController {
  /**
   * 复制表单URL
   */
  cloneUrl() {
    return `${globalConfig.baseURL}/admin/form/clone`;
  }

  /**
   * 复制表单
   * @param formCloneVo
   * @param requestConfig
   * @returns Promise<ResBodyBizFormVo>
   */
  clone(
    formCloneVo: FormCloneVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormVo> {
    const req = Object.assign(
      {
        url: "/admin/form/clone",
        method: "post",
        modelFunName: "formDesignController.clone",
        data: formCloneVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizFormVo>(req);
  }

  /**
   * 新建表单URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/form/create`;
  }

  /**
   * 新建表单
   * @param bizFormVo
   * @param requestConfig
   * @returns Promise<ResBodyBizFormVo>
   */
  create(
    bizFormVo: BizFormVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormVo> {
    const req = Object.assign(
      {
        url: "/admin/form/create",
        method: "post",
        modelFunName: "formDesignController.create",
        data: bizFormVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizFormVo>(req);
  }

  /**
   * 获取表单-不加载表单设计URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/form/get`;
  }

  /**
   * 获取表单-不加载表单设计
   * @param schemaCode
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyBizFormVo>
   */
  get(
    schemaCode: string,
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormVo> {
    const req = Object.assign(
      {
        url: "/admin/form/get",
        method: "get",
        modelFunName: "formDesignController.get",
        data: {
          schemaCode,
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizFormVo>(req);
  }

  /**
   * 获取表单详情-加载表单设计URL
   */
  getInfoUrl() {
    return `${globalConfig.baseURL}/admin/form/getInfo`;
  }

  /**
   * 获取表单详情-加载表单设计
   * @param schemaCode
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyBizFormVo>
   */
  getInfo(
    schemaCode: string,
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormVo> {
    const req = Object.assign(
      {
        url: "/admin/form/getInfo",
        method: "get",
        modelFunName: "formDesignController.getInfo",
        data: {
          schemaCode,
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizFormVo>(req);
  }

  /**
   * 获取表单列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/form/list`;
  }

  /**
   * 获取表单列表
   * @param schemaCode
   * @param published
   * @param requestConfig
   * @returns Promise<ResBodyListBizFormVo>
   */
  list(
    schemaCode: string,
    published?: boolean,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizFormVo> {
    const req = Object.assign(
      {
        url: "/admin/form/list",
        method: "get",
        modelFunName: "formDesignController.list",
        data: {
          schemaCode,
          published,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizFormVo>(req);
  }

  /**
   * 修改表单URL
   */
  modifyUrl() {
    return `${globalConfig.baseURL}/admin/form/modify`;
  }

  /**
   * 修改表单
   * @param bizFormVo
   * @param requestConfig
   * @returns Promise<ResBodyBizFormVo>
   */
  modify(
    bizFormVo: BizFormVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormVo> {
    const req = Object.assign(
      {
        url: "/admin/form/modify",
        method: "post",
        modelFunName: "formDesignController.modify",
        data: bizFormVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizFormVo>(req);
  }

  /**
   * 发布表单URL
   */
  publishUrl() {
    return `${globalConfig.baseURL}/admin/form/publish`;
  }

  /**
   * 发布表单
   * @param bizFormVo
   * @param requestConfig
   * @returns Promise<ResBodyBizFormVo>
   */
  publish(
    bizFormVo: BizFormVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormVo> {
    const req = Object.assign(
      {
        url: "/admin/form/publish",
        method: "post",
        modelFunName: "formDesignController.publish",
        data: bizFormVo,
      },
      requestConfig
    );
    return fetch<ResBodyBizFormVo>(req);
  }

  /**
   * 删除表单URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/form/remove`;
  }

  /**
   * 删除表单
   * @param formCodesVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    formCodesVo: FormCodesVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/form/remove",
        method: "post",
        modelFunName: "formDesignController.remove",
        data: formCodesVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *表单运行时接口
 */
export class FormRuntimeController {
  /**
   * 公式计算URL
   */
  calculateUrl() {
    return `${globalConfig.baseURL}/portal/runtime/form/calculate`;
  }

  /**
   * 公式计算
   * @param calculateList
   * @param requestConfig
   * @returns Promise<ResBodyListCalculateResultVo>
   */
  calculate(
    calculateList: CalculateVo[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListCalculateResultVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/form/calculate",
        method: "post",
        modelFunName: "formRuntimeController.calculate",
        data: calculateList,
      },
      requestConfig
    );
    return fetch<ResBodyListCalculateResultVo>(req);
  }

  /**
   * 删除数据URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/portal/runtime/form/delete`;
  }

  /**
   * 删除数据
   * @param formDataDeleteVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    formDataDeleteVo: FormDataDeleteVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/form/delete",
        method: "post",
        modelFunName: "formRuntimeController.delete",
        data: formDataDeleteVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 加载业务表单数据URL
   */
  loadBizDataUrl() {
    return `${globalConfig.baseURL}/portal/runtime/form/loadBizData`;
  }

  /**
   * 加载业务表单数据
   * @param loadFormDataParamVo
   * @param requestConfig
   * @returns Promise<ResBodyFormDataVo>
   */
  loadBizData(
    loadFormDataParamVo: LoadFormDataParamVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyFormDataVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/form/loadBizData",
        method: "post",
        modelFunName: "formRuntimeController.loadBizData",
        data: loadFormDataParamVo,
      },
      requestConfig
    );
    return fetch<ResBodyFormDataVo>(req);
  }

  /**
   * 根据表单评论加载表单数据URL
   */
  loadDataByCommentIdUrl() {
    return `${globalConfig.baseURL}/portal/runtime/form/loadDataByCommentId`;
  }

  /**
   * 根据表单评论加载表单数据
   * @param commentId
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowFormDataVo>
   */
  loadDataByCommentId(
    commentId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowFormDataVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/form/loadDataByCommentId",
        method: "get",
        modelFunName: "formRuntimeController.loadDataByCommentId",
        data: {
          commentId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowFormDataVo>(req);
  }

  /**
   * 加载表单子表数据URL
   */
  loadSheetDatasUrl() {
    return `${globalConfig.baseURL}/portal/runtime/form/loadSheetDatas`;
  }

  /**
   * 加载表单子表数据
   * @param loadFormSheetDataParamVo
   * @param requestConfig
   * @returns Promise<ResBodyList>
   */
  loadSheetDatas(
    loadFormSheetDataParamVo: LoadFormSheetDataParamVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyList> {
    const req = Object.assign(
      {
        url: "/portal/runtime/form/loadSheetDatas",
        method: "post",
        modelFunName: "formRuntimeController.loadSheetDatas",
        data: loadFormSheetDataParamVo,
      },
      requestConfig
    );
    return fetch<ResBodyList>(req);
  }

  /**
   * 加载流程表单数据URL
   */
  loadWorkflowDataUrl() {
    return `${globalConfig.baseURL}/portal/runtime/form/loadWorkflowData`;
  }

  /**
   * 加载流程表单数据
   * @param loadWorkflowFormDataParamVo
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowFormDataVo>
   */
  loadWorkflowData(
    loadWorkflowFormDataParamVo: LoadWorkflowFormDataParamVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowFormDataVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/form/loadWorkflowData",
        method: "post",
        modelFunName: "formRuntimeController.loadWorkflowData",
        data: loadWorkflowFormDataParamVo,
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowFormDataVo>(req);
  }

  /**
   * 表单提醒设置URL
   */
  remindUrl() {
    return `${globalConfig.baseURL}/portal/runtime/form/remind`;
  }

  /**
   * 表单提醒设置
   * @param formRemindVo
   * @param requestConfig
   * @returns Promise<ResBodyFormRemindVo>
   */
  remind(
    formRemindVo: FormRemindVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyFormRemindVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/form/remind",
        method: "post",
        modelFunName: "formRuntimeController.remind",
        data: formRemindVo,
      },
      requestConfig
    );
    return fetch<ResBodyFormRemindVo>(req);
  }

  /**
   * 预览关联表单URL
   */
  viewCorrelationFormUrl() {
    return `${globalConfig.baseURL}/portal/runtime/form/viewCorrelationForm`;
  }

  /**
   * 预览关联表单
   * @param schemaCode
   * @param bizObjectId
   * @param requestConfig
   * @returns Promise<ResBodyViewCorrelationFormVo>
   */
  viewCorrelationForm(
    schemaCode: string,
    bizObjectId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyViewCorrelationFormVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/form/viewCorrelationForm",
        method: "get",
        modelFunName: "formRuntimeController.viewCorrelationForm",
        data: {
          schemaCode,
          bizObjectId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyViewCorrelationFormVo>(req);
  }
}
/**
 *openapi:表单运行时接口
 */
export class FormRuntimeOpenApi {
  /**
   * 公式计算URL
   */
  calculateUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/form/calculate`;
  }

  /**
   * 公式计算
   * @param calculateList
   * @param requestConfig
   * @returns Promise<ResBodyListCalculateResultVo>
   */
  calculate(
    calculateList: CalculateVo[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListCalculateResultVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/form/calculate",
        method: "post",
        modelFunName: "formRuntimeOpenApi.calculate",
        data: calculateList,
      },
      requestConfig
    );
    return fetch<ResBodyListCalculateResultVo>(req);
  }

  /**
   * 加载任务表单数据URL
   */
  loadWorkItemFormDataUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/form/loadWorkItemFormData`;
  }

  /**
   * 加载任务表单数据
   * @param loadWorkItemFormDataParamVo
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowFormDataVo>
   */
  loadWorkItemFormData(
    loadWorkItemFormDataParamVo: OpenApiLoadWorkItemFormDataParamVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowFormDataVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/form/loadWorkItemFormData",
        method: "post",
        modelFunName: "formRuntimeOpenApi.loadWorkItemFormData",
        data: loadWorkItemFormDataParamVo,
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowFormDataVo>(req);
  }

  /**
   * 发起流程URL
   */
  startWorkflowUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/form/startWorkflow`;
  }

  /**
   * 发起流程
   * @param startWorkflowVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  startWorkflow(
    startWorkflowVo: OpenApiStartWorkflowVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/form/startWorkflow",
        method: "post",
        modelFunName: "formRuntimeOpenApi.startWorkflow",
        data: startWorkflowVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }
}
/**
 *表单模板接口
 */
export class FormTemplateController {
  /**
   * 新建模板URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/form/template/create`;
  }

  /**
   * 新建模板
   * @param bizFormTemplateVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  create(
    bizFormTemplateVo: BizFormTemplateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/form/template/create",
        method: "post",
        modelFunName: "formTemplateController.create",
        data: bizFormTemplateVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 模板删除URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/admin/form/template/delete`;
  }

  /**
   * 模板删除
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/form/template/delete",
        method: "get",
        modelFunName: "formTemplateController.delete",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 根据模型编码查询模板列表URL
   */
  findBySchemaCodeUrl() {
    return `${globalConfig.baseURL}/admin/form/template/findBySchemaCode`;
  }

  /**
   * 根据模型编码查询模板列表
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizFormTemplateVo>
   */
  findBySchemaCode(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizFormTemplateVo> {
    const req = Object.assign(
      {
        url: "/admin/form/template/findBySchemaCode",
        method: "get",
        modelFunName: "formTemplateController.findBySchemaCode",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizFormTemplateVo>(req);
  }

  /**
   * 获取模板详情URL
   */
  getByCodeUrl() {
    return `${globalConfig.baseURL}/admin/form/template/getByCode`;
  }

  /**
   * 获取模板详情
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyBizFormTemplateVo>
   */
  getByCode(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormTemplateVo> {
    const req = Object.assign(
      {
        url: "/admin/form/template/getByCode",
        method: "get",
        modelFunName: "formTemplateController.getByCode",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizFormTemplateVo>(req);
  }

  /**
   * 修改模板URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/form/template/update`;
  }

  /**
   * 修改模板
   * @param bizFormTemplateVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  update(
    bizFormTemplateVo: BizFormTemplateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/form/template/update",
        method: "post",
        modelFunName: "formTemplateController.update",
        data: bizFormTemplateVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *id生成器接口
 */
export class IdGeneratorController {
  /**
   * 生成id，一次生成100个URL
   */
  generateIdsUrl() {
    return `${globalConfig.baseURL}/system/sys/idGenerator/generateIds`;
  }

  /**
   * 生成id，一次生成100个

   * @param requestConfig
   * @returns Promise<ResBodyListstring>
   */
  generateIds(requestConfig?: BAxiosRequestConfig): Promise<ResBodyListstring> {
    const req = Object.assign(
      {
        url: "/system/sys/idGenerator/generateIds",
        method: "get",
        modelFunName: "idGeneratorController.generateIds",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListstring>(req);
  }
}
/**
 *流程运行时接口
 */
export class InstanceRuntimeController {
  /**
   * 视图删除流程URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/delete`;
  }

  /**
   * 视图删除流程
   * @param instanceIds
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    instanceIds: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/delete",
        method: "post",
        modelFunName: "instanceRuntimeController.delete",
        data: instanceIds,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 提交流程为草稿URL
   */
  draftUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/draft`;
  }

  /**
   * 提交流程为草稿
   * @param startWorkflowVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  draft(
    startWorkflowVo: StartWorkflowVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/draft",
        method: "post",
        modelFunName: "instanceRuntimeController.draft",
        data: startWorkflowVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 获取当前用户流程发起部门列表URL
   */
  getOriginatorDepartmentsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/getOriginatorDepartments`;
  }

  /**
   * 获取当前用户流程发起部门列表
   * @param workflowCode
   * @param requestConfig
   * @returns Promise<ResBodyListUnitVo>
   */
  getOriginatorDepartments(
    workflowCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListUnitVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/getOriginatorDepartments",
        method: "get",
        modelFunName: "instanceRuntimeController.getOriginatorDepartments",
        data: {
          workflowCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListUnitVo>(req);
  }

  /**
   * 获取流程操作日志URL
   */
  logsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/logs`;
  }

  /**
   * 获取流程操作日志
   * @param pageSize
   * @param pageNum
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyPageVOInstanceLogVo>
   */
  logs(
    pageSize: number,
    pageNum: number,
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOInstanceLogVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/logs",
        method: "get",
        modelFunName: "instanceRuntimeController.logs",
        data: {
          pageSize,
          pageNum,
          instanceId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyPageVOInstanceLogVo>(req);
  }

  /**
   * 发起流程URL
   */
  startWorkflowUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/startWorkflow`;
  }

  /**
   * 发起流程
   * @param startWorkflowVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  startWorkflow(
    startWorkflowVo: StartWorkflowVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/startWorkflow",
        method: "post",
        modelFunName: "instanceRuntimeController.startWorkflow",
        data: startWorkflowVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 管理员激活节点URL
   */
  superActivateNodeUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/superActivateNode`;
  }

  /**
   * 管理员激活节点
   * @param instanceNodeActivatelVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  superActivateNode(
    instanceNodeActivatelVo: InstanceNodeActivatelVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/superActivateNode",
        method: "post",
        modelFunName: "instanceRuntimeController.superActivateNode",
        data: instanceNodeActivatelVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 管理员调整参与者URL
   */
  superAdjustNodeParticipantUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/superAdjustNodeParticipant`;
  }

  /**
   * 管理员调整参与者
   * @param adjustParticipantVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  superAdjustNodeParticipant(
    adjustParticipantVo: InstanceNodeAdjustParticipantVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/superAdjustNodeParticipant",
        method: "post",
        modelFunName: "instanceRuntimeController.superAdjustNodeParticipant",
        data: adjustParticipantVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 管理员取消节点URL
   */
  superCancelNodeUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/superCancelNode`;
  }

  /**
   * 管理员取消节点
   * @param instanceNodeCancelVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  superCancelNode(
    instanceNodeCancelVo: InstanceNodeCancelVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/superCancelNode",
        method: "post",
        modelFunName: "instanceRuntimeController.superCancelNode",
        data: instanceNodeCancelVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 管理员修改拥有者URL
   */
  superChangeOwnerUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/superChangeOwner`;
  }

  /**
   * 管理员修改拥有者
   * @param changeOwnerVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  superChangeOwner(
    changeOwnerVo: ChangeOwnerVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/superChangeOwner",
        method: "post",
        modelFunName: "instanceRuntimeController.superChangeOwner",
        data: changeOwnerVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 管理员结束流程URL
   */
  superCloseUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/superClose`;
  }

  /**
   * 管理员结束流程
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  superClose(
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/superClose",
        method: "post",
        modelFunName: "instanceRuntimeController.superClose",
        data: instanceId,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 管理员删除流程URL
   */
  superDeleteInstanceUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/superDeleteInstance`;
  }

  /**
   * 管理员删除流程
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  superDeleteInstance(
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/superDeleteInstance",
        method: "post",
        modelFunName: "instanceRuntimeController.superDeleteInstance",
        data: instanceId,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 管理员作废流程URL
   */
  superInvalidUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/superInvalid`;
  }

  /**
   * 管理员作废流程
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  superInvalid(
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/superInvalid",
        method: "post",
        modelFunName: "instanceRuntimeController.superInvalid",
        data: instanceId,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 暂存流程URL
   */
  temporaryUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/temporary`;
  }

  /**
   * 暂存流程
   * @param startWorkflowVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  temporary(
    startWorkflowVo: StartWorkflowVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/temporary",
        method: "post",
        modelFunName: "instanceRuntimeController.temporary",
        data: startWorkflowVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 删除暂存流程URL
   */
  deleteTemporaryUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/temporary/delete`;
  }

  /**
   * 删除暂存流程
   * @param instanceIds
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  deleteTemporary(
    instanceIds: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/temporary/delete",
        method: "post",
        modelFunName: "instanceRuntimeController.deleteTemporary",
        data: instanceIds,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取流程实例跟踪轨迹信息URL
   */
  tracksUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/tracks`;
  }

  /**
   * 获取流程实例跟踪轨迹信息
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyInstanceTrackVo>
   */
  tracks(
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyInstanceTrackVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/tracks",
        method: "get",
        modelFunName: "instanceRuntimeController.tracks",
        data: {
          instanceId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyInstanceTrackVo>(req);
  }

  /**
   * undefinedURL
   */
  urgeUrl() {
    return `${globalConfig.baseURL}/portal/runtime/instance/urge`;
  }

  /**
   * undefined
   * @param instanceUrgeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  urge(
    instanceUrgeVo: InstanceUrgeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/instance/urge",
        method: "post",
        modelFunName: "instanceRuntimeController.urge",
        data: instanceUrgeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *openapi:流程实例接口
 */
export class InstanceRuntimeOpenApi {
  /**
   * 激活节点URL
   */
  activateNodeUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/activateNode`;
  }

  /**
   * 激活节点
   * @param instanceNodeActivatelVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  activateNode(
    instanceNodeActivatelVo: InstanceNodeActivatelVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/activateNode",
        method: "post",
        modelFunName: "instanceRuntimeOpenApi.activateNode",
        data: instanceNodeActivatelVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 调整参与者URL
   */
  adjustNodeParticipantUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/adjustNodeParticipant`;
  }

  /**
   * 调整参与者
   * @param adjustParticipantVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  adjustNodeParticipant(
    adjustParticipantVo: InstanceNodeAdjustParticipantVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/adjustNodeParticipant",
        method: "post",
        modelFunName: "instanceRuntimeOpenApi.adjustNodeParticipant",
        data: adjustParticipantVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 根据流程实例id获取审批记录列表URL
   */
  approvalsUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/approvals`;
  }

  /**
   * 根据流程实例id获取审批记录列表
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyListInstanceActivityVo>
   */
  approvals(
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListInstanceActivityVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/approvals",
        method: "get",
        modelFunName: "instanceRuntimeOpenApi.approvals",
        data: {
          instanceId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListInstanceActivityVo>(req);
  }

  /**
   * 取消节点URL
   */
  cancelNodeUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/cancelNode`;
  }

  /**
   * 取消节点
   * @param instanceNodeCancelVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  cancelNode(
    instanceNodeCancelVo: InstanceNodeCancelVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/cancelNode",
        method: "post",
        modelFunName: "instanceRuntimeOpenApi.cancelNode",
        data: instanceNodeCancelVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改拥有者URL
   */
  changeOwnerUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/changeOwner`;
  }

  /**
   * 修改拥有者
   * @param changeOwnerVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  changeOwner(
    changeOwnerVo: ChangeOwnerVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/changeOwner",
        method: "post",
        modelFunName: "instanceRuntimeOpenApi.changeOwner",
        data: changeOwnerVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 结束流程URL
   */
  closeUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/close`;
  }

  /**
   * 结束流程
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  close(idVo: IDVo, requestConfig?: BAxiosRequestConfig): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/close",
        method: "post",
        modelFunName: "instanceRuntimeOpenApi.close",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除流程实例URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/delete`;
  }

  /**
   * 删除流程实例
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/delete",
        method: "post",
        modelFunName: "instanceRuntimeOpenApi.delete",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 查询流程实例信息URL
   */
  getInfoUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/getInfo`;
  }

  /**
   * 查询流程实例信息
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowInstanceVo>
   */
  getInfo(
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowInstanceVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/getInfo",
        method: "get",
        modelFunName: "instanceRuntimeOpenApi.getInfo",
        data: {
          instanceId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowInstanceVo>(req);
  }

  /**
   * 获取流程实例运行时变量URL
   */
  getVariablesUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/getVariables`;
  }

  /**
   * 获取流程实例运行时变量
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBody>
   */
  getVariables(
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBody> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/getVariables",
        method: "get",
        modelFunName: "instanceRuntimeOpenApi.getVariables",
        data: {
          instanceId,
        },
      },
      requestConfig
    );
    return fetch<ResBody>(req);
  }

  /**
   * 根据流程实例id获取流程当前待办任务列表URL
   */
  getWorkItemsUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/getWorkItems`;
  }

  /**
   * 根据流程实例id获取流程当前待办任务列表
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyListWorkItemVo>
   */
  getWorkItems(
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListWorkItemVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/getWorkItems",
        method: "get",
        modelFunName: "instanceRuntimeOpenApi.getWorkItems",
        data: {
          instanceId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListWorkItemVo>(req);
  }

  /**
   * 获取流程操作日志URL
   */
  logsUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/logs`;
  }

  /**
   * 获取流程操作日志
   * @param pageSize
   * @param pageNum
   * @param instanceId
   * @param requestConfig
   * @returns Promise<ResBodyPageVOInstanceLogVo>
   */
  logs(
    pageSize: number,
    pageNum: number,
    instanceId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOInstanceLogVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/logs",
        method: "get",
        modelFunName: "instanceRuntimeOpenApi.logs",
        data: {
          pageSize,
          pageNum,
          instanceId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyPageVOInstanceLogVo>(req);
  }

  /**
   * undefinedURL
   */
  urgeUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/instance/urge`;
  }

  /**
   * undefined
   * @param instanceUrgeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  urge(
    instanceUrgeVo: InstanceUrgeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/instance/urge",
        method: "post",
        modelFunName: "instanceRuntimeOpenApi.urge",
        data: instanceUrgeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *js签名接口
 */
export class JsSignController {
  /**
   * 钉钉js签名URL
   */
  dingtalkUrl() {
    return `${globalConfig.baseURL}/portal/js/sign/dingtalk`;
  }

  /**
   * 钉钉js签名
   * @param urlVo
   * @param requestConfig
   * @returns Promise<ResBodyDingtalkJsapiSignature>
   */
  dingtalk(
    urlVo: UrlVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyDingtalkJsapiSignature> {
    const req = Object.assign(
      {
        url: "/portal/js/sign/dingtalk",
        method: "post",
        modelFunName: "jsSignController.dingtalk",
        data: urlVo,
      },
      requestConfig
    );
    return fetch<ResBodyDingtalkJsapiSignature>(req);
  }

  /**
   * 微信js签名URL
   */
  wechatUrl() {
    return `${globalConfig.baseURL}/portal/js/sign/wechat`;
  }

  /**
   * 微信js签名
   * @param urlVo
   * @param requestConfig
   * @returns Promise<ResBodyWxJsapiSignature>
   */
  wechat(
    urlVo: UrlVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWxJsapiSignature> {
    const req = Object.assign(
      {
        url: "/portal/js/sign/wechat",
        method: "post",
        modelFunName: "jsSignController.wechat",
        data: urlVo,
      },
      requestConfig
    );
    return fetch<ResBodyWxJsapiSignature>(req);
  }
}
/**
 *用户登录
 */
export class LoginController {
  /**
   * 获取加密公钥URL
   */
  genRsaKeyUrl() {
    return `${globalConfig.baseURL}/auth/genRsaKey`;
  }

  /**
   * 获取加密公钥

   * @param requestConfig
   * @returns Promise<ResBodyGenKeyResultVo>
   */
  genRsaKey(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyGenKeyResultVo> {
    const req = Object.assign(
      {
        url: "/auth/genRsaKey",
        method: "get",
        modelFunName: "loginController.genRsaKey",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyGenKeyResultVo>(req);
  }

  /**
   * 获取登陆组织列表URL
   */
  getOrgListUrl() {
    return `${globalConfig.baseURL}/auth/getOrgList`;
  }

  /**
   * 获取登陆组织列表

   * @param requestConfig
   * @returns Promise<ResBodyListOrganizationVo>
   */
  getOrgList(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListOrganizationVo> {
    const req = Object.assign(
      {
        url: "/auth/getOrgList",
        method: "get",
        modelFunName: "loginController.getOrgList",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListOrganizationVo>(req);
  }
}
/**
 *消息接口
 */
export class MessageController {
  /**
   * 清除全部已读URL
   */
  cleadAllReadUrl() {
    return `${globalConfig.baseURL}/portal/message/cleadAllRead`;
  }

  /**
   * 清除全部已读

   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  cleadAllRead(requestConfig?: BAxiosRequestConfig): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/message/cleadAllRead",
        method: "post",
        modelFunName: "messageController.cleadAllRead",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 分页获取消息URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/portal/message/list`;
  }

  /**
   * 分页获取消息
   * @param pageSize
   * @param pageNum
   * @param read
   * @param requestConfig
   * @returns Promise<ResBodyPageVOMessageVo>
   */
  list(
    pageSize: number,
    pageNum: number,
    read?: boolean,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOMessageVo> {
    const req = Object.assign(
      {
        url: "/portal/message/list",
        method: "get",
        modelFunName: "messageController.list",
        data: {
          pageSize,
          pageNum,
          read,
        },
      },
      requestConfig
    );
    return fetch<ResBodyPageVOMessageVo>(req);
  }

  /**
   * 获取未读消息，返回前20条URL
   */
  listUnreadLimitUrl() {
    return `${globalConfig.baseURL}/portal/message/listUnreadLimit`;
  }

  /**
   * 获取未读消息，返回前20条

   * @param requestConfig
   * @returns Promise<ResBodyListMessageVo>
   */
  listUnreadLimit(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListMessageVo> {
    const req = Object.assign(
      {
        url: "/portal/message/listUnreadLimit",
        method: "get",
        modelFunName: "messageController.listUnreadLimit",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListMessageVo>(req);
  }

  /**
   * 读消息URL
   */
  readUrl() {
    return `${globalConfig.baseURL}/portal/message/read`;
  }

  /**
   * 读消息
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  read(idVo: IDVo, requestConfig?: BAxiosRequestConfig): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/message/read",
        method: "post",
        modelFunName: "messageController.read",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 全部读URL
   */
  readAllUrl() {
    return `${globalConfig.baseURL}/portal/message/readAll`;
  }

  /**
   * 全部读

   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  readAll(requestConfig?: BAxiosRequestConfig): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/message/readAll",
        method: "post",
        modelFunName: "messageController.readAll",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *模型功能树接口
 */
export class ModelFunTreeController {
  /**
   * 重命名URL
   */
  renameUrl() {
    return `${globalConfig.baseURL}/admin/model/fun/rename`;
  }

  /**
   * 重命名
   * @param renameVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  rename(
    renameVo: ModelFunRenameVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/fun/rename",
        method: "post",
        modelFunName: "modelFunTreeController.rename",
        data: renameVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 排序URL
   */
  sortUrl() {
    return `${globalConfig.baseURL}/admin/model/fun/sort`;
  }

  /**
   * 排序
   * @param modelFunSortVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  sort(
    modelFunSortVo: ModelFunSortVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/fun/sort",
        method: "post",
        modelFunName: "modelFunTreeController.sort",
        data: modelFunSortVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取应用模型功能树URL
   */
  treeUrl() {
    return `${globalConfig.baseURL}/admin/model/fun/tree`;
  }

  /**
   * 获取应用模型功能树
   * @param funType
   * @param requestConfig
   * @returns Promise<ResBodyListFunTreeVo>
   */
  tree(
    funType: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListFunTreeVo> {
    const req = Object.assign(
      {
        url: "/admin/model/fun/tree",
        method: "get",
        modelFunName: "modelFunTreeController.tree",
        data: {
          funType,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListFunTreeVo>(req);
  }
}
/**
 *第三方组织同步推送接口
 */
export class NotifyController {
  /**
   * 增量回调消息通知URL
   */
  notifyUrl() {
    return `${globalConfig.baseURL}/third/notify/{channel}`;
  }

  /**
   * 增量回调消息通知
   * @param channel
   * @param body
   * @param requestConfig
   * @returns Promise<any>
   */
  notify(
    channel: string,
    body?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<any> {
    const req = Object.assign(
      {
        url: "/third/notify/{channel}",
        method: "resetful",
        modelFunName: "notifyController.notify",
        data: {
          channel,
          body,
        },
      },
      requestConfig
    );
    return fetch<any>(req);
  }
}
/**
 *ocr配置接口
 */
export class OcrConfigController {
  /**
   * 获取ocr配置URL
   */
  getConfigsUrl() {
    return `${globalConfig.baseURL}/admin/ocr/getConfigs`;
  }

  /**
   * 获取ocr配置

   * @param requestConfig
   * @returns Promise<ResBodyListOcrConfig>
   */
  getConfigs(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListOcrConfig> {
    const req = Object.assign(
      {
        url: "/admin/ocr/getConfigs",
        method: "get",
        modelFunName: "ocrConfigController.getConfigs",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListOcrConfig>(req);
  }
}
/**
 *ocr识别接口
 */
export class OcrController {
  /**
   * 识别URL
   */
  recognizeUrl() {
    return `${globalConfig.baseURL}/portal/ocr/recognize`;
  }

  /**
   * 识别
   * @param paramVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  recognize(
    paramVo: OcrRecognizeParamVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/portal/ocr/recognize",
        method: "post",
        modelFunName: "ocrController.recognize",
        data: paramVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }
}
/**
 *报表数据分析接口
 */
export class OlapController {
  /**
   * 查询数据URL
   */
  queryUrl() {
    return `${globalConfig.baseURL}/admin/report/olap/query`;
  }

  /**
   * 查询数据
   * @param olapQueryVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  query(
    olapQueryVo: OlapQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/admin/report/olap/query",
        method: "post",
        modelFunName: "olapController.query",
        data: olapQueryVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }
}
/**
 *报表数据分析运行时接口
 */
export class OlapRuntimeController {
  /**
   * 查询数据URL
   */
  queryUrl() {
    return `${globalConfig.baseURL}/portal/report/olap/query`;
  }

  /**
   * 查询数据
   * @param olapQueryVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  query(
    olapQueryVo: OlapQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/portal/report/olap/query",
        method: "post",
        modelFunName: "olapRuntimeController.query",
        data: olapQueryVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }
}
/**
 *组织接口
 */
export class OrganizationController {
  /**
   * 组织同步结果获取URL
   */
  genSyncResultUrl() {
    return `${globalConfig.baseURL}/admin/org/config/genSyncResult`;
  }

  /**
   * 组织同步结果获取
   * @param taskId
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  genSyncResult(
    taskId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/admin/org/config/genSyncResult",
        method: "get",
        modelFunName: "organizationController.genSyncResult",
        data: {
          taskId,
        },
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 获取组织详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/org/config/get`;
  }

  /**
   * 获取组织详情
   * @param orgId
   * @param requestConfig
   * @returns Promise<ResBodyOrganizationVo>
   */
  get(
    orgId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyOrganizationVo> {
    const req = Object.assign(
      {
        url: "/admin/org/config/get",
        method: "get",
        modelFunName: "organizationController.get",
        data: {
          orgId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyOrganizationVo>(req);
  }

  /**
   * 获取组织列表URL
   */
  getListUrl() {
    return `${globalConfig.baseURL}/admin/org/config/getList`;
  }

  /**
   * 获取组织列表

   * @param requestConfig
   * @returns Promise<ResBodyListOrganizationVo>
   */
  getList(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListOrganizationVo> {
    const req = Object.assign(
      {
        url: "/admin/org/config/getList",
        method: "get",
        modelFunName: "organizationController.getList",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListOrganizationVo>(req);
  }

  /**
   * 获取支持的组织列表URL
   */
  getSupportConfigUrl() {
    return `${globalConfig.baseURL}/admin/org/config/getSupportConfig`;
  }

  /**
   * 获取支持的组织列表

   * @param requestConfig
   * @returns Promise<ResBodyListSupportOrgConfigVO>
   */
  getSupportConfig(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSupportOrgConfigVO> {
    const req = Object.assign(
      {
        url: "/admin/org/config/getSupportConfig",
        method: "get",
        modelFunName: "organizationController.getSupportConfig",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListSupportOrgConfigVO>(req);
  }

  /**
   * 组织同步记录查询URL
   */
  recordUrl() {
    return `${globalConfig.baseURL}/admin/org/config/query/record`;
  }

  /**
   * 组织同步记录查询
   * @param queryParams
   * @param requestConfig
   * @returns Promise<ResBodyPageVOOrgSyncRecordVo>
   */
  record(
    queryParams: OrgSyncRecordQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOOrgSyncRecordVo> {
    const req = Object.assign(
      {
        url: "/admin/org/config/query/record",
        method: "post",
        modelFunName: "organizationController.record",
        data: queryParams,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOOrgSyncRecordVo>(req);
  }

  /**
   * 删除组织URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/org/config/remove`;
  }

  /**
   * 删除组织
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/config/remove",
        method: "post",
        modelFunName: "organizationController.remove",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存组织URL
   */
  saveUrl() {
    return `${globalConfig.baseURL}/admin/org/config/save`;
  }

  /**
   * 保存组织
   * @param organizationVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  save(
    organizationVo: OrganizationVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/config/save",
        method: "post",
        modelFunName: "organizationController.save",
        data: organizationVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 同步组织URL
   */
  syncOrgsUrl() {
    return `${globalConfig.baseURL}/admin/org/config/syncOrgs`;
  }

  /**
   * 同步组织
   * @param syncOrgVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  syncOrgs(
    syncOrgVo: SyncOrgVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/admin/org/config/syncOrgs",
        method: "post",
        modelFunName: "organizationController.syncOrgs",
        data: syncOrgVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }
}
/**
 *openapi:组织接口
 */
export class OrganizationOpenApi {
  /**
   * 部门详情查询URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/openapi/organization/dept/get`;
  }

  /**
   * 部门详情查询
   * @param requestVo
   * @param requestConfig
   * @returns Promise<ResBodyOpenApiDeptResponseVo>
   */
  get(
    requestVo: OpenApiDeptGetRequestVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyOpenApiDeptResponseVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/dept/get",
        method: "post",
        modelFunName: "organizationOpenApi.get",
        data: requestVo,
      },
      requestConfig
    );
    return fetch<ResBodyOpenApiDeptResponseVo>(req);
  }

  /**
   * 部门列表查询URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/openapi/organization/dept/list`;
  }

  /**
   * 部门列表查询
   * @param requestVo
   * @param requestConfig
   * @returns Promise<ResBodyListOpenApiDeptResponseVo>
   */
  list(
    requestVo: OpenApiDeptQueryRequestVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListOpenApiDeptResponseVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/dept/list",
        method: "post",
        modelFunName: "organizationOpenApi.list",
        data: requestVo,
      },
      requestConfig
    );
    return fetch<ResBodyListOpenApiDeptResponseVo>(req);
  }

  /**
   * 标签详情查询URL
   */
  getTagUrl() {
    return `${globalConfig.baseURL}/openapi/organization/tag/get`;
  }

  /**
   * 标签详情查询
   * @param requestVo
   * @param requestConfig
   * @returns Promise<ResBodyOpenApiTagResponseVo>
   */
  getTag(
    requestVo: OpenApiTagGetRequestVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyOpenApiTagResponseVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/tag/get",
        method: "post",
        modelFunName: "organizationOpenApi.getTag",
        data: requestVo,
      },
      requestConfig
    );
    return fetch<ResBodyOpenApiTagResponseVo>(req);
  }

  /**
   * 标签列表查询URL
   */
  listTagUrl() {
    return `${globalConfig.baseURL}/openapi/organization/tag/list`;
  }

  /**
   * 标签列表查询
   * @param requestVo
   * @param requestConfig
   * @returns Promise<ResBodyListOpenApiTagResponseVo>
   */
  listTag(
    requestVo: OpenApiTagQueryRequestVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListOpenApiTagResponseVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/tag/list",
        method: "post",
        modelFunName: "organizationOpenApi.listTag",
        data: requestVo,
      },
      requestConfig
    );
    return fetch<ResBodyListOpenApiTagResponseVo>(req);
  }

  /**
   * 标签组详情查询URL
   */
  getTagGroupUrl() {
    return `${globalConfig.baseURL}/openapi/organization/tagGroup/get`;
  }

  /**
   * 标签组详情查询
   * @param requestVo
   * @param requestConfig
   * @returns Promise<ResBodyOpenApiTagGroupResponseVo>
   */
  getTagGroup(
    requestVo: OpenApiTagGroupGetRequestVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyOpenApiTagGroupResponseVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/tagGroup/get",
        method: "post",
        modelFunName: "organizationOpenApi.getTagGroup",
        data: requestVo,
      },
      requestConfig
    );
    return fetch<ResBodyOpenApiTagGroupResponseVo>(req);
  }

  /**
   * 标签组列表查询URL
   */
  listTagGroupUrl() {
    return `${globalConfig.baseURL}/openapi/organization/tagGroup/list`;
  }

  /**
   * 标签组列表查询
   * @param requestVo
   * @param requestConfig
   * @returns Promise<ResBodyListOpenApiTagGroupResponseVo>
   */
  listTagGroup(
    requestVo: OpenApiTagGroupQueryRequestVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListOpenApiTagGroupResponseVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/tagGroup/list",
        method: "post",
        modelFunName: "organizationOpenApi.listTagGroup",
        data: requestVo,
      },
      requestConfig
    );
    return fetch<ResBodyListOpenApiTagGroupResponseVo>(req);
  }

  /**
   * 用户详情查询URL
   */
  getUserUrl() {
    return `${globalConfig.baseURL}/openapi/organization/user/get`;
  }

  /**
   * 用户详情查询
   * @param requestVo
   * @param requestConfig
   * @returns Promise<ResBodyOpenApiUserResponseVo>
   */
  getUser(
    requestVo: OpenApiUserGetRequestVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyOpenApiUserResponseVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/user/get",
        method: "post",
        modelFunName: "organizationOpenApi.getUser",
        data: requestVo,
      },
      requestConfig
    );
    return fetch<ResBodyOpenApiUserResponseVo>(req);
  }

  /**
   * 根据用户账号获取用户详情URL
   */
  getByCodeUrl() {
    return `${globalConfig.baseURL}/openapi/organization/user/getByCode`;
  }

  /**
   * 根据用户账号获取用户详情
   * @param userCode
   * @param orgId
   * @param requestConfig
   * @returns Promise<ResBodyUserVo>
   */
  getByCode(
    userCode: string,
    orgId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUserVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/user/getByCode",
        method: "get",
        modelFunName: "organizationOpenApi.getByCode",
        data: {
          userCode,
          orgId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyUserVo>(req);
  }

  /**
   * 用户列表查询URL
   */
  listUserUrl() {
    return `${globalConfig.baseURL}/openapi/organization/user/list`;
  }

  /**
   * 用户列表查询
   * @param requestVo
   * @param requestConfig
   * @returns Promise<ResBodyListOpenApiUserResponseVo>
   */
  listUser(
    requestVo: OpenApiUserQueryRequestVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListOpenApiUserResponseVo> {
    const req = Object.assign(
      {
        url: "/openapi/organization/user/list",
        method: "post",
        modelFunName: "organizationOpenApi.listUser",
        data: requestVo,
      },
      requestConfig
    );
    return fetch<ResBodyListOpenApiUserResponseVo>(req);
  }
}
/**
 *组织推送接口
 */
export class OrganizationPushController {
  /**
   * 获取组织列表URL
   */
  getListUrl() {
    return `${globalConfig.baseURL}/admin/org/push/config/getList`;
  }

  /**
   * 获取组织列表

   * @param requestConfig
   * @returns Promise<ResBodyListOrganizationPushConfigVo>
   */
  getList(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListOrganizationPushConfigVo> {
    const req = Object.assign(
      {
        url: "/admin/org/push/config/getList",
        method: "get",
        modelFunName: "organizationPushController.getList",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListOrganizationPushConfigVo>(req);
  }

  /**
   * 获取支持的组织列表URL
   */
  getPushConfigSupportListUrl() {
    return `${globalConfig.baseURL}/admin/org/push/config/getPushConfigSupportList`;
  }

  /**
   * 获取支持的组织列表

   * @param requestConfig
   * @returns Promise<ResBodyListSupportOrgConfigVO>
   */
  getPushConfigSupportList(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSupportOrgConfigVO> {
    const req = Object.assign(
      {
        url: "/admin/org/push/config/getPushConfigSupportList",
        method: "get",
        modelFunName: "organizationPushController.getPushConfigSupportList",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListSupportOrgConfigVO>(req);
  }

  /**
   * 删除组织监听配置URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/org/push/config/remove`;
  }

  /**
   * 删除组织监听配置
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/push/config/remove",
        method: "post",
        modelFunName: "organizationPushController.remove",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存组织URL
   */
  saveUrl() {
    return `${globalConfig.baseURL}/admin/org/push/config/save`;
  }

  /**
   * 保存组织
   * @param organizationPushConfigVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  save(
    organizationPushConfigVo: OrganizationPushConfigVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/push/config/save",
        method: "post",
        modelFunName: "organizationPushController.save",
        data: organizationPushConfigVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *权限统计接口
 */
export class PermissionSummaryController {
  /**
   * 按应用统计拥有该应用权限的用户等URL
   */
  summaryByAppUrl() {
    return `${globalConfig.baseURL}/admin/permission/summary/summaryByApp`;
  }

  /**
   * 按应用统计拥有该应用权限的用户等
   * @param codeVo
   * @param requestConfig
   * @returns Promise<ResBodySummaryByAppQueryVo>
   */
  summaryByApp(
    codeVo: CodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySummaryByAppQueryVo> {
    const req = Object.assign(
      {
        url: "/admin/permission/summary/summaryByApp",
        method: "post",
        modelFunName: "permissionSummaryController.summaryByApp",
        data: codeVo,
      },
      requestConfig
    );
    return fetch<ResBodySummaryByAppQueryVo>(req);
  }

  /**
   * 按组织统计用户拥有的权限URL
   */
  summaryByOrgUrl() {
    return `${globalConfig.baseURL}/admin/permission/summary/summaryByOrg`;
  }

  /**
   * 按组织统计用户拥有的权限
   * @param unitVo
   * @param requestConfig
   * @returns Promise<ResBodySummaryByOrgResultVo>
   */
  summaryByOrg(
    unitVo: UnitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySummaryByOrgResultVo> {
    const req = Object.assign(
      {
        url: "/admin/permission/summary/summaryByOrg",
        method: "post",
        modelFunName: "permissionSummaryController.summaryByOrg",
        data: unitVo,
      },
      requestConfig
    );
    return fetch<ResBodySummaryByOrgResultVo>(req);
  }
}
/**
 *表单模板接口
 */
export class PortalFormTemplateController {
  /**
   * 根据模型编码查询模板列表URL
   */
  findBySchemaCodeUrl() {
    return `${globalConfig.baseURL}/portal/form/template/findBySchemaCode`;
  }

  /**
   * 根据模型编码查询模板列表
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListBizFormTemplateVo>
   */
  findBySchemaCode(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizFormTemplateVo> {
    const req = Object.assign(
      {
        url: "/portal/form/template/findBySchemaCode",
        method: "get",
        modelFunName: "portalFormTemplateController.findBySchemaCode",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListBizFormTemplateVo>(req);
  }

  /**
   * 获取模板详情URL
   */
  getByCodeUrl() {
    return `${globalConfig.baseURL}/portal/form/template/getByCode`;
  }

  /**
   * 获取模板详情
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyBizFormTemplateVo>
   */
  getByCode(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyBizFormTemplateVo> {
    const req = Object.assign(
      {
        url: "/portal/form/template/getByCode",
        method: "get",
        modelFunName: "portalFormTemplateController.getByCode",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyBizFormTemplateVo>(req);
  }
}
/**
 *模型功能树接口
 */
export class PortalModelFunTreeController {
  /**
   * 获取应用模型功能树URL
   */
  treeUrl() {
    return `${globalConfig.baseURL}/portal/model/fun/tree`;
  }

  /**
   * 获取应用模型功能树
   * @param funType
   * @param requestConfig
   * @returns Promise<ResBodyListFunTreeVo>
   */
  tree(
    funType?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListFunTreeVo> {
    const req = Object.assign(
      {
        url: "/portal/model/fun/tree",
        method: "get",
        modelFunName: "portalModelFunTreeController.tree",
        data: {
          funType,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListFunTreeVo>(req);
  }
}
/**
 *运行态-字典管理-查询字典数据项
 */
export class PortalSysDictController {
  /**
   * 查询字典选项URL
   */
  getOptionsByCodeUrl() {
    return `${globalConfig.baseURL}/portal/system/dict/getOptionsByCode`;
  }

  /**
   * 查询字典选项
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyListSystemDictConfigVo>
   */
  getOptionsByCode(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSystemDictConfigVo> {
    const req = Object.assign(
      {
        url: "/portal/system/dict/getOptionsByCode",
        method: "get",
        modelFunName: "portalSysDictController.getOptionsByCode",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListSystemDictConfigVo>(req);
  }
}
/**
 *组织单元接口
 */
export class PortalUnitController {
  /**
   * 组织属于、拥有校验URL
   */
  belongToCheckUrl() {
    return `${globalConfig.baseURL}/portal/unit/belongToCheck`;
  }

  /**
   * 组织属于、拥有校验
   * @param orgAscriptionCheckVo
   * @param requestConfig
   * @returns Promise<ResBodyboolean>
   */
  belongToCheck(
    orgAscriptionCheckVo: OrgAscriptionCheckVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyboolean> {
    const req = Object.assign(
      {
        url: "/portal/unit/belongToCheck",
        method: "post",
        modelFunName: "portalUnitController.belongToCheck",
        data: orgAscriptionCheckVo,
      },
      requestConfig
    );
    return fetch<ResBodyboolean>(req);
  }

  /**
   * 获取当前登陆用户信息URL
   */
  getCurUserInfoUrl() {
    return `${globalConfig.baseURL}/portal/unit/getCurUserInfo`;
  }

  /**
   * 获取当前登陆用户信息

   * @param requestConfig
   * @returns Promise<ResBodyUserVo>
   */
  getCurUserInfo(requestConfig?: BAxiosRequestConfig): Promise<ResBodyUserVo> {
    const req = Object.assign(
      {
        url: "/portal/unit/getCurUserInfo",
        method: "get",
        modelFunName: "portalUnitController.getCurUserInfo",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyUserVo>(req);
  }

  /**
   * 获取用户信息URL
   */
  getUserInfoUrl() {
    return `${globalConfig.baseURL}/portal/unit/getUserInfo`;
  }

  /**
   * 获取用户信息
   * @param userId
   * @param requestConfig
   * @returns Promise<ResBodyUserVo>
   */
  getUserInfo(
    userId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUserVo> {
    const req = Object.assign(
      {
        url: "/portal/unit/getUserInfo",
        method: "get",
        modelFunName: "portalUnitController.getUserInfo",
        data: {
          userId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyUserVo>(req);
  }

  /**
   * 查询用户映射信息URL
   */
  getUserMappingInfoUrl() {
    return `${globalConfig.baseURL}/portal/unit/getUserMappingInfo`;
  }

  /**
   * 查询用户映射信息
   * @param userId
   * @param requestConfig
   * @returns Promise<ResBodyUser>
   */
  getUserMappingInfo(
    userId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUser> {
    const req = Object.assign(
      {
        url: "/portal/unit/getUserMappingInfo",
        method: "get",
        modelFunName: "portalUnitController.getUserMappingInfo",
        data: {
          userId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyUser>(req);
  }

  /**
   * 修改当前登陆用户头像URL
   */
  updateAvatarUrl() {
    return `${globalConfig.baseURL}/portal/unit/updateAvatar`;
  }

  /**
   * 修改当前登陆用户头像
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  updateAvatar(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/unit/updateAvatar",
        method: "post",
        modelFunName: "portalUnitController.updateAvatar",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改密码URL
   */
  updatePwdUrl() {
    return `${globalConfig.baseURL}/portal/unit/updatePwd`;
  }

  /**
   * 修改密码
   * @param updatePasswordVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  updatePwd(
    updatePasswordVo: UpdatePasswordVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/unit/updatePwd",
        method: "post",
        modelFunName: "portalUnitController.updatePwd",
        data: updatePasswordVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *组织单元树接口
 */
export class PortalUnitTreeController {
  /**
   * 根据父级id获取子级部门列表URL
   */
  getchildrenListUrl() {
    return `${globalConfig.baseURL}/portal/unit/tree/getchildrenList`;
  }

  /**
   * 根据父级id获取子级部门列表
   * @param queryUnitTreeVo
   * @param requestConfig
   * @returns Promise<ResBodyListUnitTreeVo>
   */
  getchildrenList(
    queryUnitTreeVo: QueryUnitTreeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListUnitTreeVo> {
    const req = Object.assign(
      {
        url: "/portal/unit/tree/getchildrenList",
        method: "post",
        modelFunName: "portalUnitTreeController.getchildrenList",
        data: queryUnitTreeVo,
      },
      requestConfig
    );
    return fetch<ResBodyListUnitTreeVo>(req);
  }

  /**
   * 搜索人员、部门URL
   */
  searchUrl() {
    return `${globalConfig.baseURL}/portal/unit/tree/search`;
  }

  /**
   * 搜索人员、部门
   * @param queryUnitTreeVo
   * @param requestConfig
   * @returns Promise<ResBodyUnitTreeSearchVo>
   */
  search(
    queryUnitTreeVo: QueryUnitTreeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUnitTreeSearchVo> {
    const req = Object.assign(
      {
        url: "/portal/unit/tree/search",
        method: "post",
        modelFunName: "portalUnitTreeController.search",
        data: queryUnitTreeVo,
      },
      requestConfig
    );
    return fetch<ResBodyUnitTreeSearchVo>(req);
  }

  /**
   * 搜索人员URL
   */
  searchUserUrl() {
    return `${globalConfig.baseURL}/portal/unit/tree/user/search`;
  }

  /**
   * 搜索人员
   * @param queryUserVo
   * @param requestConfig
   * @returns Promise<ResBodyUnitTreeSearchVo>
   */
  searchUser(
    queryUserVo: QueryUserVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUnitTreeSearchVo> {
    const req = Object.assign(
      {
        url: "/portal/unit/tree/user/search",
        method: "post",
        modelFunName: "portalUnitTreeController.searchUser",
        data: queryUserVo,
      },
      requestConfig
    );
    return fetch<ResBodyUnitTreeSearchVo>(req);
  }
}
/**
 *用户业务相关接口
 */
export class PortalUserBizController {
  /**
   * 新增常用审批附件URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/portal/user/biz/common/create`;
  }

  /**
   * 新增常用审批附件
   * @param signFileVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  create(
    signFileVo: SignFileVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/user/biz/common/create",
        method: "post",
        modelFunName: "portalUserBizController.create",
        data: signFileVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除常用审批附件URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/portal/user/biz/common/delete`;
  }

  /**
   * 删除常用审批附件
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/user/biz/common/delete",
        method: "post",
        modelFunName: "portalUserBizController.delete",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除常用审批附件URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/portal/user/biz/common/list`;
  }

  /**
   * 删除常用审批附件

   * @param requestConfig
   * @returns Promise<ResBodyListUserCommonsVo>
   */
  list(requestConfig?: BAxiosRequestConfig): Promise<ResBodyListUserCommonsVo> {
    const req = Object.assign(
      {
        url: "/portal/user/biz/common/list",
        method: "get",
        modelFunName: "portalUserBizController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListUserCommonsVo>(req);
  }

  /**
   * 修改用户信息URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/portal/user/biz/update`;
  }

  /**
   * 修改用户信息
   * @param userVo
   * @param requestConfig
   * @returns Promise<ResBodyUserVo>
   */
  update(
    userVo: PortalUserUpdateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUserVo> {
    const req = Object.assign(
      {
        url: "/portal/user/biz/update",
        method: "post",
        modelFunName: "portalUserBizController.update",
        data: userVo,
      },
      requestConfig
    );
    return fetch<ResBodyUserVo>(req);
  }
}
/**
 *快捷链接接口
 */
export class QuickLinkController {
  /**
   * 新增快捷链接URL
   */
  addUrl() {
    return `${globalConfig.baseURL}/portal/workbench/quicklink/add`;
  }

  /**
   * 新增快捷链接
   * @param quickLinkFunVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  add(
    quickLinkFunVo: QuickLinkFunVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/workbench/quicklink/add",
        method: "post",
        modelFunName: "quickLinkController.add",
        data: quickLinkFunVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除快捷链接URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/portal/workbench/quicklink/delete`;
  }

  /**
   * 删除快捷链接
   * @param quickLinkFunVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    quickLinkFunVo: QuickLinkFunVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/workbench/quicklink/delete",
        method: "post",
        modelFunName: "quickLinkController.delete",
        data: quickLinkFunVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取当前用户设置的快捷链接URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/portal/workbench/quicklink/list`;
  }

  /**
   * 获取当前用户设置的快捷链接

   * @param requestConfig
   * @returns Promise<ResBodyListQuickLinkVo>
   */
  list(requestConfig?: BAxiosRequestConfig): Promise<ResBodyListQuickLinkVo> {
    const req = Object.assign(
      {
        url: "/portal/workbench/quicklink/list",
        method: "get",
        modelFunName: "quickLinkController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListQuickLinkVo>(req);
  }

  /**
   * 保存快捷链接URL
   */
  saveUrl() {
    return `${globalConfig.baseURL}/portal/workbench/quicklink/save`;
  }

  /**
   * 保存快捷链接
   * @param quickLinkFuns
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  save(
    quickLinkFuns: QuickLinkFunVo[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/workbench/quicklink/save",
        method: "post",
        modelFunName: "quickLinkController.save",
        data: quickLinkFuns,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *报表数据源接口
 */
export class ReportDataSourceController {
  /**
   * 获取数据源列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/report/ds/list`;
  }

  /**
   * 获取数据源列表

   * @param requestConfig
   * @returns Promise<ResBodyDataSourceListVo>
   */
  list(requestConfig?: BAxiosRequestConfig): Promise<ResBodyDataSourceListVo> {
    const req = Object.assign(
      {
        url: "/admin/report/ds/list",
        method: "get",
        modelFunName: "reportDataSourceController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyDataSourceListVo>(req);
  }

  /**
   * 获取数据源字段列表URL
   */
  propertysUrl() {
    return `${globalConfig.baseURL}/admin/report/ds/propertys`;
  }

  /**
   * 获取数据源字段列表
   * @param dataSourceVo
   * @param requestConfig
   * @returns Promise<ResBodyListBizPropertyVo>
   */
  propertys(
    dataSourceVo: DataSourceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListBizPropertyVo> {
    const req = Object.assign(
      {
        url: "/admin/report/ds/propertys",
        method: "post",
        modelFunName: "reportDataSourceController.propertys",
        data: dataSourceVo,
      },
      requestConfig
    );
    return fetch<ResBodyListBizPropertyVo>(req);
  }
}
/**
 *Scheduler Controller
 */
export class SchedulerController {
  /**
   * 新建任务URL
   */
  addUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/add`;
  }

  /**
   * 新建任务
   * @param sysJobVo
   * @param requestConfig
   * @returns Promise<ResBodySysJobVo>
   */
  add(
    sysJobVo: SysJobVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySysJobVo> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/add",
        method: "post",
        modelFunName: "schedulerController.add",
        data: sysJobVo,
      },
      requestConfig
    );
    return fetch<ResBodySysJobVo>(req);
  }

  /**
   * 获取任务详情URL
   */
  getInfoUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/getInfo`;
  }

  /**
   * 获取任务详情
   * @param jobId
   * @param requestConfig
   * @returns Promise<ResBodySysJobVo>
   */
  getInfo(
    jobId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySysJobVo> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/getInfo",
        method: "get",
        modelFunName: "schedulerController.getInfo",
        data: {
          jobId,
        },
      },
      requestConfig
    );
    return fetch<ResBodySysJobVo>(req);
  }

  /**
   * 获取任务列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/list`;
  }

  /**
   * 获取任务列表
   * @param searchJobVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOSysJobVo>
   */
  list(
    searchJobVo: SearchJobVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOSysJobVo> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/list",
        method: "post",
        modelFunName: "schedulerController.list",
        data: searchJobVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOSysJobVo>(req);
  }

  /**
   * 获取下一次执行时间URL
   */
  nextTriggerTimeUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/nextTriggerTime`;
  }

  /**
   * 获取下一次执行时间
   * @param schedulerConfVo
   * @param requestConfig
   * @returns Promise<ResBodyListstring>
   */
  nextTriggerTime(
    schedulerConfVo: SchedulerConfVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListstring> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/nextTriggerTime",
        method: "post",
        modelFunName: "schedulerController.nextTriggerTime",
        data: schedulerConfVo,
      },
      requestConfig
    );
    return fetch<ResBodyListstring>(req);
  }

  /**
   * 删除任务URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/remove`;
  }

  /**
   * 删除任务
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/remove",
        method: "post",
        modelFunName: "schedulerController.remove",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 启动任务URL
   */
  startUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/start`;
  }

  /**
   * 启动任务
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  start(idVo: IDVo, requestConfig?: BAxiosRequestConfig): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/start",
        method: "post",
        modelFunName: "schedulerController.start",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 停止任务URL
   */
  stopUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/stop`;
  }

  /**
   * 停止任务
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  stop(idVo: IDVo, requestConfig?: BAxiosRequestConfig): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/stop",
        method: "post",
        modelFunName: "schedulerController.stop",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 触发一次执行URL
   */
  triggerUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/trigger`;
  }

  /**
   * 触发一次执行
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  trigger(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/trigger",
        method: "post",
        modelFunName: "schedulerController.trigger",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改任务URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/scheduler/update`;
  }

  /**
   * 修改任务
   * @param sysJobVo
   * @param requestConfig
   * @returns Promise<ResBodySysJobVo>
   */
  update(
    sysJobVo: SysJobVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySysJobVo> {
    const req = Object.assign(
      {
        url: "/admin/scheduler/update",
        method: "post",
        modelFunName: "schedulerController.update",
        data: sysJobVo,
      },
      requestConfig
    );
    return fetch<ResBodySysJobVo>(req);
  }
}
/**
 *认证客户端接口
 */
export class SecurityClientController {
  /**
   * 创建客户端URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/admin/system/security/create`;
  }

  /**
   * 创建客户端
   * @param securityClientVo
   * @param requestConfig
   * @returns Promise<ResBodySecurityClientVo>
   */
  create(
    securityClientVo: SecurityClientVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySecurityClientVo> {
    const req = Object.assign(
      {
        url: "/admin/system/security/create",
        method: "post",
        modelFunName: "securityClientController.create",
        data: securityClientVo,
      },
      requestConfig
    );
    return fetch<ResBodySecurityClientVo>(req);
  }

  /**
   * 获取客户端列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/system/security/list`;
  }

  /**
   * 获取客户端列表

   * @param requestConfig
   * @returns Promise<ResBodyListSecurityClientVo>
   */
  list(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSecurityClientVo> {
    const req = Object.assign(
      {
        url: "/admin/system/security/list",
        method: "get",
        modelFunName: "securityClientController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListSecurityClientVo>(req);
  }

  /**
   * 删除客户端URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/system/security/remove`;
  }

  /**
   * 删除客户端
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/system/security/remove",
        method: "post",
        modelFunName: "securityClientController.remove",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 重置客户端密钥URL
   */
  resetSecretUrl() {
    return `${globalConfig.baseURL}/admin/system/security/resetSecret`;
  }

  /**
   * 重置客户端密钥
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  resetSecret(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/admin/system/security/resetSecret",
        method: "post",
        modelFunName: "securityClientController.resetSecret",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 创建客户端URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/system/security/update`;
  }

  /**
   * 创建客户端
   * @param securityClientVo
   * @param requestConfig
   * @returns Promise<ResBodySecurityClientVo>
   */
  update(
    securityClientVo: SecurityClientVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySecurityClientVo> {
    const req = Object.assign(
      {
        url: "/admin/system/security/update",
        method: "post",
        modelFunName: "securityClientController.update",
        data: securityClientVo,
      },
      requestConfig
    );
    return fetch<ResBodySecurityClientVo>(req);
  }
}
/**
 *安全相关接口
 */
export class SecurityController {
  /**
   * 获取加密公钥URL
   */
  genRsaKeyUrl() {
    return `${globalConfig.baseURL}/system/sys/security/genRsaKey`;
  }

  /**
   * 获取加密公钥

   * @param requestConfig
   * @returns Promise<ResBodyGenKeyResultVo>
   */
  genRsaKey(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyGenKeyResultVo> {
    const req = Object.assign(
      {
        url: "/system/sys/security/genRsaKey",
        method: "get",
        modelFunName: "securityController.genRsaKey",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyGenKeyResultVo>(req);
  }
}
/**
 *短链接生成接口
 */
export class ShortLinkController {
  /**
   * 批量获取短链接URL
   */
  batchGetUrl() {
    return `${globalConfig.baseURL}/system/shortlink/batchGet`;
  }

  /**
   * 批量获取短链接
   * @param shortLinks
   * @param requestConfig
   * @returns Promise<ResBodyListstring>
   */
  batchGet(
    shortLinks: ShortLink[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListstring> {
    const req = Object.assign(
      {
        url: "/system/shortlink/batchGet",
        method: "post",
        modelFunName: "shortLinkController.batchGet",
        data: shortLinks,
      },
      requestConfig
    );
    return fetch<ResBodyListstring>(req);
  }

  /**
   * 获取短链接URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/system/shortlink/get`;
  }

  /**
   * 获取短链接
   * @param shortLink
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  get(
    shortLink: ShortLink,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/system/shortlink/get",
        method: "post",
        modelFunName: "shortLinkController.get",
        data: shortLink,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }
}
/**
 *系统管理-字典管理
 */
export class SysDictController {
  /**
   * 新增字典URL
   */
  addUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/add`;
  }

  /**
   * 新增字典
   * @param systemDictVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  add(
    systemDictVo: SystemDictVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/add",
        method: "post",
        modelFunName: "sysDictController.add",
        data: systemDictVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改字典状态URL
   */
  changeStatusUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/changeStatus`;
  }

  /**
   * 修改字典状态
   * @param status
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  changeStatus(
    status: boolean,
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/changeStatus",
        method: "get",
        modelFunName: "sysDictController.changeStatus",
        data: {
          status,
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 查询字典数据项列表URL
   */
  listByDictIdUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/config/listByDictId`;
  }

  /**
   * 查询字典数据项列表
   * @param dictId
   * @param status
   * @param requestConfig
   * @returns Promise<ResBodyListSystemDictConfigVo>
   */
  listByDictId(
    dictId: string,
    status?: boolean,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSystemDictConfigVo> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/config/listByDictId",
        method: "get",
        modelFunName: "sysDictController.listByDictId",
        data: {
          dictId,
          status,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListSystemDictConfigVo>(req);
  }

  /**
   * 删除URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/delete`;
  }

  /**
   * 删除
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/delete",
        method: "post",
        modelFunName: "sysDictController.delete",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除分组URL
   */
  deleteGroupUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/deleteGroup`;
  }

  /**
   * 删除分组
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  deleteGroup(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/deleteGroup",
        method: "post",
        modelFunName: "sysDictController.deleteGroup",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 查询字典详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/get`;
  }

  /**
   * 查询字典详情
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodySystemDictVo>
   */
  get(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySystemDictVo> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/get",
        method: "get",
        modelFunName: "sysDictController.get",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodySystemDictVo>(req);
  }

  /**
   * 根据编码查询字典选项URL
   */
  getOptionsByCodeUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/getOptionsByCode`;
  }

  /**
   * 根据编码查询字典选项
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodySystemDictVo>
   */
  getOptionsByCode(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySystemDictVo> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/getOptionsByCode",
        method: "get",
        modelFunName: "sysDictController.getOptionsByCode",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodySystemDictVo>(req);
  }

  /**
   * 获取分组列表URL
   */
  listAllGroupUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/listAllGroup`;
  }

  /**
   * 获取分组列表

   * @param requestConfig
   * @returns Promise<ResBodyListSystemDictGroupVo>
   */
  listAllGroup(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSystemDictGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/listAllGroup",
        method: "post",
        modelFunName: "sysDictController.listAllGroup",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListSystemDictGroupVo>(req);
  }

  /**
   * 分组获取数据字典列表URL
   */
  listGroupByUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/listGroupBy`;
  }

  /**
   * 分组获取数据字典列表

   * @param requestConfig
   * @returns Promise<ResBodyListSystemDictGroupVo>
   */
  listGroupBy(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListSystemDictGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/listGroupBy",
        method: "post",
        modelFunName: "sysDictController.listGroupBy",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListSystemDictGroupVo>(req);
  }

  /**
   * 字典排序URL
   */
  sortUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/sort`;
  }

  /**
   * 字典排序
   * @param systemDictSortVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  sort(
    systemDictSortVo: SystemDictSortVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/sort",
        method: "post",
        modelFunName: "sysDictController.sort",
        data: systemDictSortVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 分页查询数据字典列表URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/admin/system/dict/update`;
  }

  /**
   * 分页查询数据字典列表
   * @param systemDictVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  update(
    systemDictVo: SystemDictVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/system/dict/update",
        method: "post",
        modelFunName: "sysDictController.update",
        data: systemDictVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *系统管理
 */
export class SystemController {
  /**
   * 获取系统信息URL
   */
  getInfoUrl() {
    return `${globalConfig.baseURL}/admin/system/getInfo`;
  }

  /**
   * 获取系统信息

   * @param requestConfig
   * @returns Promise<ResBodySystemInfoVo>
   */
  getInfo(requestConfig?: BAxiosRequestConfig): Promise<ResBodySystemInfoVo> {
    const req = Object.assign(
      {
        url: "/admin/system/getInfo",
        method: "get",
        modelFunName: "systemController.getInfo",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodySystemInfoVo>(req);
  }
}
/**
 *系统日志接口
 */
export class SystemLogController {
  /**
   * 分页查询集成日志URL
   */
  listPageUrl() {
    return `${globalConfig.baseURL}/admin/system/log/bizbus/listPage`;
  }

  /**
   * 分页查询集成日志
   * @param bizBusLogSearchVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOBizBusLogVo>
   */
  listPage(
    bizBusLogSearchVo: BizBusLogSearchVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOBizBusLogVo> {
    const req = Object.assign(
      {
        url: "/admin/system/log/bizbus/listPage",
        method: "post",
        modelFunName: "systemLogController.listPage",
        data: bizBusLogSearchVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOBizBusLogVo>(req);
  }

  /**
   * 分页查询业务编排日志URL
   */
  listPageBizruleUrl() {
    return `${globalConfig.baseURL}/admin/system/log/bizrule/listPage`;
  }

  /**
   * 分页查询业务编排日志
   * @param bizRuleLogSearchVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOBizRuleLogVo>
   */
  listPageBizrule(
    bizRuleLogSearchVo: BizRuleLogSearchVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOBizRuleLogVo> {
    const req = Object.assign(
      {
        url: "/admin/system/log/bizrule/listPage",
        method: "post",
        modelFunName: "systemLogController.listPageBizrule",
        data: bizRuleLogSearchVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOBizRuleLogVo>(req);
  }

  /**
   * 查询日志详情URL
   */
  infoUrl() {
    return `${globalConfig.baseURL}/admin/system/log/info`;
  }

  /**
   * 查询日志详情
   * @param id
   * @param requestConfig
   * @returns Promise<ResBodySystemLogInfoVo>
   */
  info(
    id: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodySystemLogInfoVo> {
    const req = Object.assign(
      {
        url: "/admin/system/log/info",
        method: "get",
        modelFunName: "systemLogController.info",
        data: {
          id,
        },
      },
      requestConfig
    );
    return fetch<ResBodySystemLogInfoVo>(req);
  }

  /**
   * 分页查询登陆日志URL
   */
  listPageLoginUrl() {
    return `${globalConfig.baseURL}/admin/system/log/login/listPage`;
  }

  /**
   * 分页查询登陆日志
   * @param loginLogSearchVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOLoginLogVo>
   */
  listPageLogin(
    loginLogSearchVo: LoginLogSearchVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOLoginLogVo> {
    const req = Object.assign(
      {
        url: "/admin/system/log/login/listPage",
        method: "post",
        modelFunName: "systemLogController.listPageLogin",
        data: loginLogSearchVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOLoginLogVo>(req);
  }
}
/**
 *标签管理接口
 */
export class TagController {
  /**
   * 批量保存标签URL
   */
  batchSaveTagUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/batchSaveTag`;
  }

  /**
   * 批量保存标签
   * @param batchTagList
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  batchSaveTag(
    batchTagList: BatchTagVo[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/batchSaveTag",
        method: "post",
        modelFunName: "tagController.batchSaveTag",
        data: batchTagList,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取标签树URL
   */
  getTagTreeWithoutOrgUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/getTagTreeWithoutOrg`;
  }

  /**
   * 获取标签树
   * @param groupId
   * @param requestConfig
   * @returns Promise<ResBodyListTagTreeVo>
   */
  getTagTreeWithoutOrg(
    groupId?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListTagTreeVo> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/getTagTreeWithoutOrg",
        method: "get",
        modelFunName: "tagController.getTagTreeWithoutOrg",
        data: {
          groupId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListTagTreeVo>(req);
  }

  /**
   * 分页获取标签下的用户列表URL
   */
  getUserListByPageUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/getUserListByPage`;
  }

  /**
   * 分页获取标签下的用户列表
   * @param tagId
   * @param pageSize
   * @param pageNum
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyPageVOTagUnitVo>
   */
  getUserListByPage(
    tagId: string,
    pageSize: number,
    pageNum: number,
    keyword?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOTagUnitVo> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/getUserListByPage",
        method: "get",
        modelFunName: "tagController.getUserListByPage",
        data: {
          tagId,
          pageSize,
          pageNum,
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyPageVOTagUnitVo>(req);
  }

  /**
   * 获取所有自建的标签组URL
   */
  listGroupUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/listGroup`;
  }

  /**
   * 获取所有自建的标签组

   * @param requestConfig
   * @returns Promise<ResBodyListIdNameVo>
   */
  listGroup(requestConfig?: BAxiosRequestConfig): Promise<ResBodyListIdNameVo> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/listGroup",
        method: "get",
        modelFunName: "tagController.listGroup",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListIdNameVo>(req);
  }

  /**
   * 删除标签组URL
   */
  removeGroupUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/removeGroup`;
  }

  /**
   * 删除标签组
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  removeGroup(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/removeGroup",
        method: "post",
        modelFunName: "tagController.removeGroup",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除标签URL
   */
  removeTagUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/removeTag`;
  }

  /**
   * 删除标签
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  removeTag(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/removeTag",
        method: "post",
        modelFunName: "tagController.removeTag",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 移除标签组织URL
   */
  removeUnitsUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/removeUnits`;
  }

  /**
   * 移除标签组织
   * @param tagUnitIdsVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  removeUnits(
    tagUnitIdsVo: TagUnitIdsVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/removeUnits",
        method: "post",
        modelFunName: "tagController.removeUnits",
        data: tagUnitIdsVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存标签组URL
   */
  saveGroupUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/saveGroup`;
  }

  /**
   * 保存标签组
   * @param tagGroupVo
   * @param requestConfig
   * @returns Promise<ResBodyTagGroupVo>
   */
  saveGroup(
    tagGroupVo: TagGroupVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyTagGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/saveGroup",
        method: "post",
        modelFunName: "tagController.saveGroup",
        data: tagGroupVo,
      },
      requestConfig
    );
    return fetch<ResBodyTagGroupVo>(req);
  }

  /**
   * 保存标签用户信息URL
   */
  saveUserToTagUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/saveUserToTag`;
  }

  /**
   * 保存标签用户信息
   * @param tagUnitReqVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  saveUserToTag(
    tagUnitReqVo: TagUnitReqVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/saveUserToTag",
        method: "post",
        modelFunName: "tagController.saveUserToTag",
        data: tagUnitReqVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 根据关键字搜索标签组URL
   */
  searchTagGroupUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/searchTagGroup`;
  }

  /**
   * 根据关键字搜索标签组
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyListTagGroupVo>
   */
  searchTagGroup(
    keyword?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListTagGroupVo> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/searchTagGroup",
        method: "get",
        modelFunName: "tagController.searchTagGroup",
        data: {
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListTagGroupVo>(req);
  }

  /**
   * 保存标签URL
   */
  updateTagUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/updateTag`;
  }

  /**
   * 保存标签
   * @param tagUpdateVo
   * @param requestConfig
   * @returns Promise<ResBodyTagVo>
   */
  updateTag(
    tagUpdateVo: TagUpdateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyTagVo> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/updateTag",
        method: "post",
        modelFunName: "tagController.updateTag",
        data: tagUpdateVo,
      },
      requestConfig
    );
    return fetch<ResBodyTagVo>(req);
  }

  /**
   * 修改标签用户管理范围URL
   */
  updateTagUserOuScopesUrl() {
    return `${globalConfig.baseURL}/admin/org/tag/updateTagUserOuScopes`;
  }

  /**
   * 修改标签用户管理范围
   * @param tagUnitOuScopeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  updateTagUserOuScopes(
    tagUnitOuScopeVo: TagUnitOuScopeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/tag/updateTagUserOuScopes",
        method: "post",
        modelFunName: "tagController.updateTagUserOuScopes",
        data: tagUnitOuScopeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *暂存数据接口
 */
export class TemporaryController {
  /**
   * 清除用户暂存数据URL
   */
  clearUrl() {
    return `${globalConfig.baseURL}/portal/temporary/clear`;
  }

  /**
   * 清除用户暂存数据

   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  clear(requestConfig?: BAxiosRequestConfig): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/temporary/clear",
        method: "post",
        modelFunName: "temporaryController.clear",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除暂存数据URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/portal/temporary/delete`;
  }

  /**
   * 删除暂存数据
   * @param idVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    idVo: IDVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/temporary/delete",
        method: "post",
        modelFunName: "temporaryController.delete",
        data: idVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 分页获取用户暂存数据列表URL
   */
  pageListUrl() {
    return `${globalConfig.baseURL}/portal/temporary/pageList`;
  }

  /**
   * 分页获取用户暂存数据列表
   * @param pageQueryVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOBizTemporaryVo>
   */
  pageList(
    pageQueryVo: PageQueryVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOBizTemporaryVo> {
    const req = Object.assign(
      {
        url: "/portal/temporary/pageList",
        method: "post",
        modelFunName: "temporaryController.pageList",
        data: pageQueryVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOBizTemporaryVo>(req);
  }
}
/**
 *用户业务相关
 */
export class UserBizController {
  /**
   * 工作交接结果获取URL
   */
  genResultUrl() {
    return `${globalConfig.baseURL}/admin/org/user/biz/genResult`;
  }

  /**
   * 工作交接结果获取
   * @param taskId
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  genResult(
    taskId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/admin/org/user/biz/genResult",
        method: "get",
        modelFunName: "userBizController.genResult",
        data: {
          taskId,
        },
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * 查询指定用户代办任务URL
   */
  searchUserWorkItemsUrl() {
    return `${globalConfig.baseURL}/admin/org/user/biz/searchUserWorkItems`;
  }

  /**
   * 查询指定用户代办任务
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchUserWorkItems(
    searchWorkItemVo: SearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/admin/org/user/biz/searchUserWorkItems",
        method: "post",
        modelFunName: "userBizController.searchUserWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }

  /**
   * 工作交接URL
   */
  transferUrl() {
    return `${globalConfig.baseURL}/admin/org/user/biz/transfer`;
  }

  /**
   * 工作交接
   * @param userTransferVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  transfer(
    userTransferVo: UserTransferVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/admin/org/user/biz/transfer",
        method: "post",
        modelFunName: "userBizController.transfer",
        data: userTransferVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }
}
/**
 *用户管理接口
 */
export class UserController {
  /**
   * 批量转换用户部门URL
   */
  batchMoveUserDeptUrl() {
    return `${globalConfig.baseURL}/admin/org/user/batchMoveUserDept`;
  }

  /**
   * 批量转换用户部门
   * @param batchMoveUserDeptVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  batchMoveUserDept(
    batchMoveUserDeptVo: BatchMoveUserDeptVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/user/batchMoveUserDept",
        method: "post",
        modelFunName: "userController.batchMoveUserDept",
        data: batchMoveUserDeptVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 批量保存用户URL
   */
  batchSaveUrl() {
    return `${globalConfig.baseURL}/admin/org/user/batchSave`;
  }

  /**
   * 批量保存用户
   * @param userVoList
   * @param requestConfig
   * @returns Promise<ResBodyListUserVo>
   */
  batchSave(
    userVoList: UserVo[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListUserVo> {
    const req = Object.assign(
      {
        url: "/admin/org/user/batchSave",
        method: "post",
        modelFunName: "userController.batchSave",
        data: userVoList,
      },
      requestConfig
    );
    return fetch<ResBodyListUserVo>(req);
  }

  /**
   * 删除用户URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/admin/org/user/delete`;
  }

  /**
   * 删除用户
   * @param deptUserIdsVO
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    deptUserIdsVO: DeptUserIdsVO,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/user/delete",
        method: "post",
        modelFunName: "userController.delete",
        data: deptUserIdsVO,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 批量禁用用户URL
   */
  disableUrl() {
    return `${globalConfig.baseURL}/admin/org/user/disable`;
  }

  /**
   * 批量禁用用户
   * @param userIds
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  disable(
    userIds: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/user/disable",
        method: "post",
        modelFunName: "userController.disable",
        data: userIds,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取用户详情URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/org/user/get`;
  }

  /**
   * 获取用户详情
   * @param userId
   * @param requestConfig
   * @returns Promise<ResBodyUserVo>
   */
  get(
    userId: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUserVo> {
    const req = Object.assign(
      {
        url: "/admin/org/user/get",
        method: "get",
        modelFunName: "userController.get",
        data: {
          userId,
        },
      },
      requestConfig
    );
    return fetch<ResBodyUserVo>(req);
  }

  /**
   * 获取离职用户列表URL
   */
  listQuitUsersUrl() {
    return `${globalConfig.baseURL}/admin/org/user/listQuitUsers`;
  }

  /**
   * 获取离职用户列表
   * @param pageSize
   * @param pageNum
   * @param keyword
   * @param requestConfig
   * @returns Promise<ResBodyPageVOUserVo>
   */
  listQuitUsers(
    pageSize: number,
    pageNum: number,
    keyword?: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOUserVo> {
    const req = Object.assign(
      {
        url: "/admin/org/user/listQuitUsers",
        method: "get",
        modelFunName: "userController.listQuitUsers",
        data: {
          pageSize,
          pageNum,
          keyword,
        },
      },
      requestConfig
    );
    return fetch<ResBodyPageVOUserVo>(req);
  }

  /**
   * 重置用户密码URL
   */
  resetPwdUrl() {
    return `${globalConfig.baseURL}/admin/org/user/resetPwd`;
  }

  /**
   * 重置用户密码
   * @param resetUserPwdVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  resetPwd(
    resetUserPwdVo: ResetUserPwdVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/user/resetPwd",
        method: "post",
        modelFunName: "userController.resetPwd",
        data: resetUserPwdVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 批量恢复用户URL
   */
  restoreUrl() {
    return `${globalConfig.baseURL}/admin/org/user/restore`;
  }

  /**
   * 批量恢复用户
   * @param deptUserIdsVO
   * @param requestConfig
   * @returns Promise<ResBodyListUserVo>
   */
  restore(
    deptUserIdsVO: DeptUserIdsVO,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListUserVo> {
    const req = Object.assign(
      {
        url: "/admin/org/user/restore",
        method: "post",
        modelFunName: "userController.restore",
        data: deptUserIdsVO,
      },
      requestConfig
    );
    return fetch<ResBodyListUserVo>(req);
  }

  /**
   * 保存用户URL
   */
  saveUrl() {
    return `${globalConfig.baseURL}/admin/org/user/save`;
  }

  /**
   * 保存用户
   * @param userVO
   * @param requestConfig
   * @returns Promise<ResBodyUserVo>
   */
  save(
    userVO: UserVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUserVo> {
    const req = Object.assign(
      {
        url: "/admin/org/user/save",
        method: "post",
        modelFunName: "userController.save",
        data: userVO,
      },
      requestConfig
    );
    return fetch<ResBodyUserVo>(req);
  }

  /**
   * 设置用户为部门主管URL
   */
  setDeptManagerUrl() {
    return `${globalConfig.baseURL}/admin/org/user/setDeptManager`;
  }

  /**
   * 设置用户为部门主管
   * @param deptManagerUpdateVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  setDeptManager(
    deptManagerUpdateVo: DeptManagerUpdateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/org/user/setDeptManager",
        method: "post",
        modelFunName: "userController.setDeptManager",
        data: deptManagerUpdateVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 修改用户备注URL
   */
  updateQuitRemarkUrl() {
    return `${globalConfig.baseURL}/admin/org/user/updateQuitRemark`;
  }

  /**
   * 修改用户备注
   * @param updateUserRemarkVo
   * @param requestConfig
   * @returns Promise<ResBodyUserVo>
   */
  updateQuitRemark(
    updateUserRemarkVo: UpdateUserRemarkVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyUserVo> {
    const req = Object.assign(
      {
        url: "/admin/org/user/updateQuitRemark",
        method: "post",
        modelFunName: "userController.updateQuitRemark",
        data: updateUserRemarkVo,
      },
      requestConfig
    );
    return fetch<ResBodyUserVo>(req);
  }
}
/**
 *任务管理接口
 */
export class WorkItemRuntimeController {
  /**
   * undefinedURL
   */
  agreeUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/agree`;
  }

  /**
   * undefined
   * @param workItemSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  agree(
    workItemSubmitVo: WorkItemSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/agree",
        method: "post",
        modelFunName: "workItemRuntimeController.agree",
        data: workItemSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  apposttileUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/apposttile`;
  }

  /**
   * undefined
   * @param workItemApposttileVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  apposttile(
    workItemApposttileVo: WorkItemAddParticipantVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/apposttile",
        method: "post",
        modelFunName: "workItemRuntimeController.apposttile",
        data: workItemApposttileVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  assistUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/assist`;
  }

  /**
   * undefined
   * @param workItemAssistVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  assist(
    workItemAssistVo: WorkItemAssistVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/assist",
        method: "post",
        modelFunName: "workItemRuntimeController.assist",
        data: workItemAssistVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  assistSubmitUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/assistSubmit`;
  }

  /**
   * undefined
   * @param workItemSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  assistSubmit(
    workItemSubmitVo: WorkItemSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/assistSubmit",
        method: "post",
        modelFunName: "workItemRuntimeController.assistSubmit",
        data: workItemSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  batchAgreeUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/batchAgree`;
  }

  /**
   * undefined
   * @param batchSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  batchAgree(
    batchSubmitVo: WorkItemBatchSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/batchAgree",
        method: "post",
        modelFunName: "workItemRuntimeController.batchAgree",
        data: batchSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  circulateUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/circulate`;
  }

  /**
   * undefined
   * @param workItemCirculateVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  circulate(
    workItemCirculateVo: WorkItemCirculateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/circulate",
        method: "post",
        modelFunName: "workItemRuntimeController.circulate",
        data: workItemCirculateVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  closeUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/close`;
  }

  /**
   * undefined
   * @param instanceCancelVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  close(
    instanceCancelVo: InstanceCancelVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/close",
        method: "post",
        modelFunName: "workItemRuntimeController.close",
        data: instanceCancelVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  disagreeUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/disagree`;
  }

  /**
   * undefined
   * @param workItemSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  disagree(
    workItemSubmitVo: WorkItemSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/disagree",
        method: "post",
        modelFunName: "workItemRuntimeController.disagree",
        data: workItemSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  invalidUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/invalid`;
  }

  /**
   * undefined
   * @param instanceCancelVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  invalid(
    instanceCancelVo: InstanceCancelVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/invalid",
        method: "post",
        modelFunName: "workItemRuntimeController.invalid",
        data: instanceCancelVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 预测节点审批人URL
   */
  predictParticipantUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/predictParticipant`;
  }

  /**
   * 预测节点审批人
   * @param runtimePredictParticipantVo
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowNodeParticipantVo>
   */
  predictParticipant(
    runtimePredictParticipantVo: RuntimePredictParticipantVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowNodeParticipantVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/predictParticipant",
        method: "post",
        modelFunName: "workItemRuntimeController.predictParticipant",
        data: runtimePredictParticipantVo,
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowNodeParticipantVo>(req);
  }

  /**
   * undefinedURL
   */
  rejectUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/reject`;
  }

  /**
   * undefined
   * @param workItemRejectVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  reject(
    workItemRejectVo: WorkItemRejectVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/reject",
        method: "post",
        modelFunName: "workItemRuntimeController.reject",
        data: workItemRejectVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  retrieveUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/retrieve`;
  }

  /**
   * undefined
   * @param workItemRetrieveVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  retrieve(
    workItemRetrieveVo: WorkItemRetrieveVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/retrieve",
        method: "post",
        modelFunName: "workItemRuntimeController.retrieve",
        data: workItemRetrieveVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  submitUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/submit`;
  }

  /**
   * undefined
   * @param workItemSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  submit(
    workItemSubmitVo: WorkItemSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/submit",
        method: "post",
        modelFunName: "workItemRuntimeController.submit",
        data: workItemSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  temporaryUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/temporary`;
  }

  /**
   * undefined
   * @param workItemSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodystring>
   */
  temporary(
    workItemSubmitVo: WorkItemSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodystring> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/temporary",
        method: "post",
        modelFunName: "workItemRuntimeController.temporary",
        data: workItemSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodystring>(req);
  }

  /**
   * undefinedURL
   */
  transferUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workitem/transfer`;
  }

  /**
   * undefined
   * @param workItemTransferVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  transfer(
    workItemTransferVo: WorkItemTransferVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workitem/transfer",
        method: "post",
        modelFunName: "workItemRuntimeController.transfer",
        data: workItemTransferVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *openapi:任务管理接口
 */
export class WorkItemRuntimeOpenApi {
  /**
   * undefinedURL
   */
  agreeUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/agree`;
  }

  /**
   * undefined
   * @param workItemSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  agree(
    workItemSubmitVo: OpenApiWorkItemSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/agree",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.agree",
        data: workItemSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  apposttileUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/apposttile`;
  }

  /**
   * undefined
   * @param workItemApposttileVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  apposttile(
    workItemApposttileVo: WorkItemAddParticipantVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/apposttile",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.apposttile",
        data: workItemApposttileVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  assistUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/assist`;
  }

  /**
   * undefined
   * @param workItemAssistVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  assist(
    workItemAssistVo: WorkItemAssistVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/assist",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.assist",
        data: workItemAssistVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  circulateUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/circulate`;
  }

  /**
   * undefined
   * @param workItemCirculateVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  circulate(
    workItemCirculateVo: WorkItemCirculateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/circulate",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.circulate",
        data: workItemCirculateVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  closeUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/close`;
  }

  /**
   * undefined
   * @param instanceCancelVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  close(
    instanceCancelVo: InstanceCancelVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/close",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.close",
        data: instanceCancelVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  disagreeUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/disagree`;
  }

  /**
   * undefined
   * @param workItemSubmitVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  disagree(
    workItemSubmitVo: OpenApiWorkItemSubmitVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/disagree",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.disagree",
        data: workItemSubmitVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  invalidUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/invalid`;
  }

  /**
   * undefined
   * @param instanceCancelVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  invalid(
    instanceCancelVo: InstanceCancelVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/invalid",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.invalid",
        data: instanceCancelVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  rejectUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/reject`;
  }

  /**
   * undefined
   * @param workItemRejectVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  reject(
    workItemRejectVo: WorkItemRejectVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/reject",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.reject",
        data: workItemRejectVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  retrieveUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/retrieve`;
  }

  /**
   * undefined
   * @param workItemRetrieveVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  retrieve(
    workItemRetrieveVo: WorkItemRetrieveVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/retrieve",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.retrieve",
        data: workItemRetrieveVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * undefinedURL
   */
  transferUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workitem/transfer`;
  }

  /**
   * undefined
   * @param workItemTransferVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  transfer(
    workItemTransferVo: WorkItemTransferVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workitem/transfer",
        method: "post",
        modelFunName: "workItemRuntimeOpenApi.transfer",
        data: workItemTransferVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *工作台接口
 */
export class WorkbenchController {
  /**
   * 获取红数字URL
   */
  getFigureUrl() {
    return `${globalConfig.baseURL}/portal/workbench/getFigure`;
  }

  /**
   * 获取红数字

   * @param requestConfig
   * @returns Promise<ResBodyFigureVo>
   */
  getFigure(requestConfig?: BAxiosRequestConfig): Promise<ResBodyFigureVo> {
    const req = Object.assign(
      {
        url: "/portal/workbench/getFigure",
        method: "get",
        modelFunName: "workbenchController.getFigure",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyFigureVo>(req);
  }
}
/**
 *流程委托接口
 */
export class WorkflowDelegateController {
  /**
   * 新建委托URL
   */
  createUrl() {
    return `${globalConfig.baseURL}/portal/workflow/delegate/create`;
  }

  /**
   * 新建委托
   * @param createDelegateVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  create(
    createDelegateVo: WorkflowDelegateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/workflow/delegate/create",
        method: "post",
        modelFunName: "workflowDelegateController.create",
        data: createDelegateVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 删除委托URL
   */
  deleteUrl() {
    return `${globalConfig.baseURL}/portal/workflow/delegate/delete`;
  }

  /**
   * 删除委托
   * @param ids
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  delete(
    ids: string[],
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/workflow/delegate/delete",
        method: "post",
        modelFunName: "workflowDelegateController.delete",
        data: ids,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 获取当前用户委托列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/portal/workflow/delegate/list`;
  }

  /**
   * 获取当前用户委托列表

   * @param requestConfig
   * @returns Promise<ResBodyListWorkflowDelegateVo>
   */
  list(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListWorkflowDelegateVo> {
    const req = Object.assign(
      {
        url: "/portal/workflow/delegate/list",
        method: "post",
        modelFunName: "workflowDelegateController.list",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListWorkflowDelegateVo>(req);
  }

  /**
   * 修改委托URL
   */
  updateUrl() {
    return `${globalConfig.baseURL}/portal/workflow/delegate/update`;
  }

  /**
   * 修改委托
   * @param updateDelegateVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  update(
    updateDelegateVo: WorkflowDelegateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/portal/workflow/delegate/update",
        method: "post",
        modelFunName: "workflowDelegateController.update",
        data: updateDelegateVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }
}
/**
 *流程设计管理接口
 */
export class WorkflowDesignController {
  /**
   * 克隆流程URL
   */
  cloneUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/clone`;
  }

  /**
   * 克隆流程
   * @param workflowCloneVo
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowDraftVo>
   */
  clone(
    workflowCloneVo: WorkflowCloneVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowDraftVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/clone",
        method: "post",
        modelFunName: "workflowDesignController.clone",
        data: workflowCloneVo,
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowDraftVo>(req);
  }

  /**
   * 创建流程模版URL
   */
  createWorkflowUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/createWorkflow`;
  }

  /**
   * 创建流程模版
   * @param saveWorkflowTemplateVo
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowHeaderVo>
   */
  createWorkflow(
    saveWorkflowTemplateVo: SaveWorkflowTemplateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowHeaderVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/createWorkflow",
        method: "post",
        modelFunName: "workflowDesignController.createWorkflow",
        data: saveWorkflowTemplateVo,
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowHeaderVo>(req);
  }

  /**
   * 查询流程模版URL
   */
  getUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/get`;
  }

  /**
   * 查询流程模版
   * @param code
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowHeaderVo>
   */
  get(
    code: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowHeaderVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/get",
        method: "get",
        modelFunName: "workflowDesignController.get",
        data: {
          code,
        },
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowHeaderVo>(req);
  }

  /**
   * 获取历史发布流程模版URL
   */
  getHistoricPublishedListUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/getHistoricPublishedList`;
  }

  /**
   * 获取历史发布流程模版
   * @param workflowSchemaCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyListWorkflowDeploymentVo>
   */
  getHistoricPublishedList(
    workflowSchemaCodeVo: WorkflowSchemaCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListWorkflowDeploymentVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/getHistoricPublishedList",
        method: "post",
        modelFunName: "workflowDesignController.getHistoricPublishedList",
        data: workflowSchemaCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyListWorkflowDeploymentVo>(req);
  }

  /**
   * 查询流程模版草稿URL
   */
  getWorkflowDraftUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/getWorkflowDraft`;
  }

  /**
   * 查询流程模版草稿
   * @param workflowSchemaCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowDraftVo>
   */
  getWorkflowDraft(
    workflowSchemaCodeVo: WorkflowSchemaCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowDraftVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/getWorkflowDraft",
        method: "post",
        modelFunName: "workflowDesignController.getWorkflowDraft",
        data: workflowSchemaCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowDraftVo>(req);
  }

  /**
   * 查询指定版本号的流程模版URL
   */
  getWorkflowTemplateUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/getWorkflowTemplate`;
  }

  /**
   * 查询指定版本号的流程模版
   * @param workflowSchemaCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowDraftVo>
   */
  getWorkflowTemplate(
    workflowSchemaCodeVo: WorkflowSchemaCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowDraftVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/getWorkflowTemplate",
        method: "post",
        modelFunName: "workflowDesignController.getWorkflowTemplate",
        data: workflowSchemaCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowDraftVo>(req);
  }

  /**
   * 查询流程列表URL
   */
  listUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/list`;
  }

  /**
   * 查询流程列表
   * @param schemaCode
   * @param requestConfig
   * @returns Promise<ResBodyListWorkflowHeaderVo>
   */
  list(
    schemaCode: string,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListWorkflowHeaderVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/list",
        method: "get",
        modelFunName: "workflowDesignController.list",
        data: {
          schemaCode,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListWorkflowHeaderVo>(req);
  }

  /**
   * 发布流程模版URL
   */
  publishWorkflowTemplateUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/publishWorkflowTemplate`;
  }

  /**
   * 发布流程模版
   * @param saveWorkflowTemplateVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  publishWorkflowTemplate(
    saveWorkflowTemplateVo: SaveWorkflowTemplateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/publishWorkflowTemplate",
        method: "post",
        modelFunName: "workflowDesignController.publishWorkflowTemplate",
        data: saveWorkflowTemplateVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }

  /**
   * 删除流程模版URL
   */
  removeUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/remove`;
  }

  /**
   * 删除流程模版
   * @param workflowSchemaCodeVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  remove(
    workflowSchemaCodeVo: WorkflowSchemaCodeVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/remove",
        method: "post",
        modelFunName: "workflowDesignController.remove",
        data: workflowSchemaCodeVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 保存流程模版URL
   */
  saveWorkflowTemplateUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/saveWorkflowTemplate`;
  }

  /**
   * 保存流程模版
   * @param saveWorkflowTemplateVo
   * @param requestConfig
   * @returns Promise<ResBodyobject>
   */
  saveWorkflowTemplate(
    saveWorkflowTemplateVo: SaveWorkflowTemplateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyobject> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/saveWorkflowTemplate",
        method: "post",
        modelFunName: "workflowDesignController.saveWorkflowTemplate",
        data: saveWorkflowTemplateVo,
      },
      requestConfig
    );
    return fetch<ResBodyobject>(req);
  }

  /**
   * 修改流程模版头URL
   */
  updateWorkflowHeaderUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/updateWorkflowHeader`;
  }

  /**
   * 修改流程模版头
   * @param workflowHeaderVo
   * @param requestConfig
   * @returns Promise<ResBodyWorkflowHeaderVo>
   */
  updateWorkflowHeader(
    workflowHeaderVo: WorkflowHeaderVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyWorkflowHeaderVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/updateWorkflowHeader",
        method: "post",
        modelFunName: "workflowDesignController.updateWorkflowHeader",
        data: workflowHeaderVo,
      },
      requestConfig
    );
    return fetch<ResBodyWorkflowHeaderVo>(req);
  }

  /**
   * 校验参与者函数表达式URL
   */
  validateParticipantExprUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/validateParticipantExpr`;
  }

  /**
   * 校验参与者函数表达式
   * @param exprValidVo
   * @param requestConfig
   * @returns Promise<ResBodyVoid>
   */
  validateParticipantExpr(
    exprValidVo: WorkflowExprValidVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyVoid> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/validateParticipantExpr",
        method: "get",
        modelFunName: "workflowDesignController.validateParticipantExpr",
        data: exprValidVo,
      },
      requestConfig
    );
    return fetch<ResBodyVoid>(req);
  }

  /**
   * 校验流程模版URL
   */
  validateWorkflowTemplateUrl() {
    return `${globalConfig.baseURL}/admin/model/workflow/validateWorkflowTemplate`;
  }

  /**
   * 校验流程模版
   * @param saveWorkflowTemplateVo
   * @param requestConfig
   * @returns Promise<ResBodyListValidateErrorMessageVo>
   */
  validateWorkflowTemplate(
    saveWorkflowTemplateVo: SaveWorkflowTemplateVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListValidateErrorMessageVo> {
    const req = Object.assign(
      {
        url: "/admin/model/workflow/validateWorkflowTemplate",
        method: "post",
        modelFunName: "workflowDesignController.validateWorkflowTemplate",
        data: saveWorkflowTemplateVo,
      },
      requestConfig
    );
    return fetch<ResBodyListValidateErrorMessageVo>(req);
  }
}
/**
 *流程中心管理接口
 */
export class WorkflowRuntimeController {
  /**
   * 查询流程实例URL
   */
  listInstancesUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/listInstances`;
  }

  /**
   * 查询流程实例
   * @param searchWorkflowInstanceVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkflowInstanceVo>
   */
  listInstances(
    searchWorkflowInstanceVo: SearchWorkflowInstanceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkflowInstanceVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/listInstances",
        method: "post",
        modelFunName: "workflowRuntimeController.listInstances",
        data: searchWorkflowInstanceVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkflowInstanceVo>(req);
  }

  /**
   * 任务查询接口URL
   */
  listWorkItemsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/listWorkItems`;
  }

  /**
   * 任务查询接口
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  listWorkItems(
    searchWorkItemVo: SearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/listWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeController.listWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }

  /**
   * 查询可发起的流程URL
   */
  listWrokflowUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/listWrokflow`;
  }

  /**
   * 查询可发起的流程

   * @param requestConfig
   * @returns Promise<ResBodyListFunTreeVo>
   */
  listWrokflow(
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListFunTreeVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/listWrokflow",
        method: "get",
        modelFunName: "workflowRuntimeController.listWrokflow",
        data: {},
      },
      requestConfig
    );
    return fetch<ResBodyListFunTreeVo>(req);
  }

  /**
   * 获取我的所有已办任务列表（包含已阅）URL
   */
  searchAllHistoricWorkItemsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/searchAllHistoricWorkItems`;
  }

  /**
   * 获取我的所有已办任务列表（包含已阅）
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchAllHistoricWorkItems(
    searchWorkItemVo: SearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/searchAllHistoricWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeController.searchAllHistoricWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }

  /**
   * 获取我的所有代办任务列表（包含待阅）URL
   */
  searchAllWorkItemsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/searchAllWorkItems`;
  }

  /**
   * 获取我的所有代办任务列表（包含待阅）
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchAllWorkItems(
    searchWorkItemVo: SearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/searchAllWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeController.searchAllWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }

  /**
   * 获取可批量审批代办任务列表URL
   */
  searchBatchWorkItemsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/searchBatchWorkItems`;
  }

  /**
   * 获取可批量审批代办任务列表
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchBatchWorkItems(
    searchWorkItemVo: SearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/searchBatchWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeController.searchBatchWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }

  /**
   * 获取待阅任务列表URL
   */
  searchCirculateWorkItemsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/searchCirculateWorkItems`;
  }

  /**
   * 获取待阅任务列表
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchCirculateWorkItems(
    searchWorkItemVo: SearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/searchCirculateWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeController.searchCirculateWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }

  /**
   * 获取已办任务列表URL
   */
  searchHistoricWorkItemsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/searchHistoricWorkItems`;
  }

  /**
   * 获取已办任务列表
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchHistoricWorkItems(
    searchWorkItemVo: SearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/searchHistoricWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeController.searchHistoricWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }

  /**
   * 查询我的流程实例URL
   */
  searchMyInstancesUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/searchMyInstances`;
  }

  /**
   * 查询我的流程实例
   * @param searchWorkflowInstanceVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkflowInstanceVo>
   */
  searchMyInstances(
    searchWorkflowInstanceVo: SearchWorkflowInstanceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkflowInstanceVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/searchMyInstances",
        method: "post",
        modelFunName: "workflowRuntimeController.searchMyInstances",
        data: searchWorkflowInstanceVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkflowInstanceVo>(req);
  }

  /**
   * 获取代办任务列表URL
   */
  searchWorkItemsUrl() {
    return `${globalConfig.baseURL}/portal/runtime/workflow/searchWorkItems`;
  }

  /**
   * 获取代办任务列表
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchWorkItems(
    searchWorkItemVo: SearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/portal/runtime/workflow/searchWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeController.searchWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }
}
/**
 *openapi:流程中心接口
 */
export class WorkflowRuntimeOpenApi {
  /**
   * 查询流程实例URL
   */
  listInstancesUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workflow/listInstances`;
  }

  /**
   * 查询流程实例
   * @param searchWorkflowInstanceVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkflowInstanceVo>
   */
  listInstances(
    searchWorkflowInstanceVo: SearchWorkflowInstanceVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkflowInstanceVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workflow/listInstances",
        method: "post",
        modelFunName: "workflowRuntimeOpenApi.listInstances",
        data: searchWorkflowInstanceVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkflowInstanceVo>(req);
  }

  /**
   * 查询指定用户可发起的流程URL
   */
  listWrokflowUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workflow/listWrokflow`;
  }

  /**
   * 查询指定用户可发起的流程
   * @param userId
   * @param type
   * @param requestConfig
   * @returns Promise<ResBodyListFunTreeVo>
   */
  listWrokflow(
    userId: string,
    type: number,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListFunTreeVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workflow/listWrokflow",
        method: "get",
        modelFunName: "workflowRuntimeOpenApi.listWrokflow",
        data: {
          userId,
          type,
        },
      },
      requestConfig
    );
    return fetch<ResBodyListFunTreeVo>(req);
  }

  /**
   * 预测节点审批人URL
   */
  predictParticipantUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workflow/predictParticipant`;
  }

  /**
   * 预测节点审批人
   * @param predictParticipantVo
   * @param requestConfig
   * @returns Promise<ResBodyListWorkflowNodeParticipantVo>
   */
  predictParticipant(
    predictParticipantVo: PredictParticipantVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyListWorkflowNodeParticipantVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workflow/predictParticipant",
        method: "post",
        modelFunName: "workflowRuntimeOpenApi.predictParticipant",
        data: predictParticipantVo,
      },
      requestConfig
    );
    return fetch<ResBodyListWorkflowNodeParticipantVo>(req);
  }

  /**
   * 查询指定用户已办任务列表URL
   */
  searchUserFinishedWorkItemsUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workflow/searchUserFinishedWorkItems`;
  }

  /**
   * 查询指定用户已办任务列表
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchUserFinishedWorkItems(
    searchWorkItemVo: OpenApiSearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workflow/searchUserFinishedWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeOpenApi.searchUserFinishedWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }

  /**
   * 查询指定用户代办任务URL
   */
  searchUserWorkItemsUrl() {
    return `${globalConfig.baseURL}/openapi/runtime/workflow/searchUserWorkItems`;
  }

  /**
   * 查询指定用户代办任务
   * @param searchWorkItemVo
   * @param requestConfig
   * @returns Promise<ResBodyPageVOWorkItemVo>
   */
  searchUserWorkItems(
    searchWorkItemVo: OpenApiSearchWorkItemVo,
    requestConfig?: BAxiosRequestConfig
  ): Promise<ResBodyPageVOWorkItemVo> {
    const req = Object.assign(
      {
        url: "/openapi/runtime/workflow/searchUserWorkItems",
        method: "post",
        modelFunName: "workflowRuntimeOpenApi.searchUserWorkItems",
        data: searchWorkItemVo,
      },
      requestConfig
    );
    return fetch<ResBodyPageVOWorkItemVo>(req);
  }
}
export class BaseApi {
  adminController = new AdminController();

  adminRoleController = new AdminRoleController();

  adminUnitTreeController = new AdminUnitTreeController();

  advancedDataSourceController = new AdvancedDataSourceController();

  appController = new AppController();

  appPackageController = new AppPackageController();

  appPermissionController = new AppPermissionController();

  appViewController = new AppViewController();

  bizDataSourceController = new BizDataSourceController();

  bizMenuController = new BizMenuController();

  bizObjectController = new BizObjectController();

  bizObjectOpenApi = new BizObjectOpenApi();

  bizPropertyController = new BizPropertyController();

  bizPropertyFormulaController = new BizPropertyFormulaController();

  bizRuleController = new BizRuleController();

  bizSchemaController = new BizSchemaController();

  bizSchemaEventController = new BizSchemaEventController();

  bizServerInvokeController = new BizServerInvokeController();

  bizServiceCategroyController = new BizServiceCategroyController();

  bizServiceController = new BizServiceController();

  bizServiceMethodController = new BizServiceMethodController();

  bizViewController = new BizViewController();

  chartController = new ChartController();

  dashboardController = new DashboardController();

  departmentController = new DepartmentController();

  documentFileController = new DocumentFileController();

  documentFileOpenApi = new DocumentFileOpenApi();

  esbRuntimeOpenApi = new EsbRuntimeOpenApi();

  esbServiceController = new EsbServiceController();

  excelController = new ExcelController();

  externalController = new ExternalController();

  formCommentController = new FormCommentController();

  formDesignController = new FormDesignController();

  formRuntimeController = new FormRuntimeController();

  formRuntimeOpenApi = new FormRuntimeOpenApi();

  formTemplateController = new FormTemplateController();

  idGeneratorController = new IdGeneratorController();

  instanceRuntimeController = new InstanceRuntimeController();

  instanceRuntimeOpenApi = new InstanceRuntimeOpenApi();

  jsSignController = new JsSignController();

  loginController = new LoginController();

  messageController = new MessageController();

  modelFunTreeController = new ModelFunTreeController();

  notifyController = new NotifyController();

  ocrConfigController = new OcrConfigController();

  ocrController = new OcrController();

  olapController = new OlapController();

  olapRuntimeController = new OlapRuntimeController();

  organizationController = new OrganizationController();

  organizationOpenApi = new OrganizationOpenApi();

  organizationPushController = new OrganizationPushController();

  permissionSummaryController = new PermissionSummaryController();

  portalFormTemplateController = new PortalFormTemplateController();

  portalModelFunTreeController = new PortalModelFunTreeController();

  portalSysDictController = new PortalSysDictController();

  portalUnitController = new PortalUnitController();

  portalUnitTreeController = new PortalUnitTreeController();

  portalUserBizController = new PortalUserBizController();

  quickLinkController = new QuickLinkController();

  reportDataSourceController = new ReportDataSourceController();

  schedulerController = new SchedulerController();

  securityClientController = new SecurityClientController();

  securityController = new SecurityController();

  shortLinkController = new ShortLinkController();

  sysDictController = new SysDictController();

  systemController = new SystemController();

  systemLogController = new SystemLogController();

  tagController = new TagController();

  temporaryController = new TemporaryController();

  userBizController = new UserBizController();

  userController = new UserController();

  workItemRuntimeController = new WorkItemRuntimeController();

  workItemRuntimeOpenApi = new WorkItemRuntimeOpenApi();

  workbenchController = new WorkbenchController();

  workflowDelegateController = new WorkflowDelegateController();

  workflowDesignController = new WorkflowDesignController();

  workflowRuntimeController = new WorkflowRuntimeController();

  workflowRuntimeOpenApi = new WorkflowRuntimeOpenApi();
}
