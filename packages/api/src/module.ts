export enum ActivityCirculateVoActivityType {
  START = 'START',
  APPROVE = 'APPROVE',
  CIRCULATE = 'CIRCULATE',
  CONNECTION = 'CONNECTION',
  SYSTEM = 'SYSTEM',
  SUB_PROCESS = 'SUB_PROCESS',
  END = 'END',
  BRANCH = 'BRANCH',
}
export enum AdminRoleVoNodeType {
  USER = 'USER',
  ROLE = 'ROLE',
}
export enum AdminRoleVoParentType {
  USER = 'USER',
  ROLE = 'ROLE',
}
export enum AdminRoleVoRoleType {
  SUPER_ADMIN = 'SUPER_ADMIN',
  SYSTEM_ADMIN = 'SYSTEM_ADMIN',
  GENERAL_ADMIN = 'GENERAL_ADMIN',
}
export enum AppPerGroupVoGrantType {
  ORG = 'ORG',
  ROLE = 'ROLE',
}
export enum ApprovalLogVoActionType {
  SUBMIT = 'SUBMIT',
  AGREE = 'AGREE',
  DISAGREE = 'DISAGREE',
  REJECT = 'REJECT',
  REVOKE = 'REVOKE',
  TRANSFERRED = 'TRANSFERRED',
  ASSIST = 'ASSIST',
  APPOSTTILE = 'APPOSTTILE',
  CIRCULATE = 'CIRCULATE',
  READED = 'READED',
  CANCELED = 'CANCELED',
}
export enum ApprovalLogVoActivityType {
  START = 'START',
  APPROVE = 'APPROVE',
  CIRCULATE = 'CIRCULATE',
  CONNECTION = 'CONNECTION',
  SYSTEM = 'SYSTEM',
  SUB_PROCESS = 'SUB_PROCESS',
  END = 'END',
  BRANCH = 'BRANCH',
}
export enum BatchSaveAdminRolePermissionVoParentType {
  USER = 'USER',
  ROLE = 'ROLE',
}
export enum BizDataSourceVoType {
  MYSQL = 'MYSQL',
  ORACLE = 'ORACLE',
  SQLSERVER = 'SQLSERVER',
  DM = 'DM',
}
export enum BizFormVoModel {
  WEB = 'WEB',
  MOBILE = 'MOBILE',
  HYBRID = 'HYBRID',
}
export enum BizMenuVoType {
  BIZ_FORM = 'BIZ_FORM',
  WORKFLOW = 'WORKFLOW',
  VIEW = 'VIEW',
  LINK = 'LINK',
}
export enum BizObjectSortVoSortType {
  ASC = 'ASC',
  DESC = 'DESC',
  DEFAULT = 'DEFAULT',
}
export enum BizPropertyVoCorrelationPropertyWay {
  SELECT = 'SELECT',
  CREATE = 'CREATE',
}
export enum BizPropertyVoCorrelationType {
  MASTER_SLAVE = 'MASTER_SLAVE',
  UNION_RELATION = 'UNION_RELATION',
}
export enum BizPropertyVoPropertyType {
  ID = 'ID',
  NAME = 'NAME',
  CREATOR = 'CREATOR',
  CREATOR_DEPARTMENT = 'CREATOR_DEPARTMENT',
  CREATED_TIME = 'CREATED_TIME',
  MODIFIER = 'MODIFIER',
  MODIFIED_TIME = 'MODIFIED_TIME',
  OWNER = 'OWNER',
  OWNER_DEPARTMENT = 'OWNER_DEPARTMENT',
  SEQUENCE_NO = 'SEQUENCE_NO',
  SEQUENCE_STATUS = 'SEQUENCE_STATUS',
  SELF_OBJECT = 'SELF_OBJECT',
  INSTANCE_ID = 'INSTANCE_ID',
  TEXT = 'TEXT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  DROPDOWN = 'DROPDOWN',
  MULTI_DROPDOWN = 'MULTI_DROPDOWN',
  TEXTAREA = 'TEXTAREA',
  RICHTEXT = 'RICHTEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  LOGIC = 'LOGIC',
  STAFF_SELECTOR = 'STAFF_SELECTOR',
  STAFF_MULTI_SELECTOR = 'STAFF_MULTI_SELECTOR',
  DEPARTMENT_SELECTOR = 'DEPARTMENT_SELECTOR',
  DEPARTMENT_MULTI_SELECTOR = 'DEPARTMENT_MULTI_SELECTOR',
  STAFF_DEPARTMENT_SELECTOR = 'STAFF_DEPARTMENT_SELECTOR',
  ADDRESS = 'ADDRESS',
  LOCATION = 'LOCATION',
  ATTACHMENT = 'ATTACHMENT',
  IMAGE = 'IMAGE',
  SIGNATURE = 'SIGNATURE',
  CORRELATION_FORM = 'CORRELATION_FORM',
  CORRELATION_MULTI_FORM = 'CORRELATION_MULTI_FORM',
  SHEET = 'SHEET',
}
export enum BizSchemaEventVoBindType {
  BIZ_RULE = 'BIZ_RULE',
  BIZ_SERVICE = 'BIZ_SERVICE',
}
export enum BizSchemaEventVoEventType {
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  LOAD = 'LOAD',
  LIST = 'LIST',
}
export enum BizTemporaryVoTempType {
  BIZFORM = 'BIZFORM',
  WORKFLOW = 'WORKFLOW',
  WORKITEM = 'WORKITEM',
}
export enum CalculateVoPropertyType {
  ID = 'ID',
  NAME = 'NAME',
  CREATOR = 'CREATOR',
  CREATOR_DEPARTMENT = 'CREATOR_DEPARTMENT',
  CREATED_TIME = 'CREATED_TIME',
  MODIFIER = 'MODIFIER',
  MODIFIED_TIME = 'MODIFIED_TIME',
  OWNER = 'OWNER',
  OWNER_DEPARTMENT = 'OWNER_DEPARTMENT',
  SEQUENCE_NO = 'SEQUENCE_NO',
  SEQUENCE_STATUS = 'SEQUENCE_STATUS',
  SELF_OBJECT = 'SELF_OBJECT',
  INSTANCE_ID = 'INSTANCE_ID',
  TEXT = 'TEXT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  DROPDOWN = 'DROPDOWN',
  MULTI_DROPDOWN = 'MULTI_DROPDOWN',
  TEXTAREA = 'TEXTAREA',
  RICHTEXT = 'RICHTEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  LOGIC = 'LOGIC',
  STAFF_SELECTOR = 'STAFF_SELECTOR',
  STAFF_MULTI_SELECTOR = 'STAFF_MULTI_SELECTOR',
  DEPARTMENT_SELECTOR = 'DEPARTMENT_SELECTOR',
  DEPARTMENT_MULTI_SELECTOR = 'DEPARTMENT_MULTI_SELECTOR',
  STAFF_DEPARTMENT_SELECTOR = 'STAFF_DEPARTMENT_SELECTOR',
  ADDRESS = 'ADDRESS',
  LOCATION = 'LOCATION',
  ATTACHMENT = 'ATTACHMENT',
  IMAGE = 'IMAGE',
  SIGNATURE = 'SIGNATURE',
  CORRELATION_FORM = 'CORRELATION_FORM',
  CORRELATION_MULTI_FORM = 'CORRELATION_MULTI_FORM',
  SHEET = 'SHEET',
}
export enum ChartVoAuthorization {
  ALL = 'ALL',
  INHERIT = 'INHERIT',
}
export enum ConditionItemFormula {
  EQUAL = 'EQUAL',
  NOT_EQUAL = 'NOT_EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS',
  LOCATED = 'LOCATED',
  NOT_LOCATED = 'NOT_LOCATED',
  BETWEEN = 'BETWEEN',
  NOT_BETWEEN = 'NOT_BETWEEN',
  EMPTY = 'EMPTY',
  NOT_EMPTY = 'NOT_EMPTY',
  BELONG_TO = 'BELONG_TO',
  BELONG_TO_OR = 'BELONG_TO_OR',
  NOT_BELONG_TO = 'NOT_BELONG_TO',
  HAVA = 'HAVA',
  NOT_HAVA = 'NOT_HAVA',
  DYNAMIC = 'DYNAMIC',
}
export enum ConditionItemValueType {
  FIXED = 'FIXED',
  DYNAMIC = 'DYNAMIC',
  RELATIVE = 'RELATIVE',
}
export enum DataSourceTreeVoNodeType {
  GROUP = 'GROUP',
  DATA_SOURCE = 'DATA_SOURCE',
}
export enum DataSourceTreeVoType {
  MODEL = 'MODEL',
  ADVANCED = 'ADVANCED',
  SYSTEM = 'SYSTEM',
}
export enum DataSourceVoType {
  MODEL = 'MODEL',
  ADVANCED = 'ADVANCED',
  SYSTEM = 'SYSTEM',
}
export enum DepartmentVoType {
  ACTUAL = 'ACTUAL',
  QUOTE = 'QUOTE',
}
export enum DepartmentVoUnitType {
  USER = 'USER',
  DEPARTMENT = 'DEPARTMENT',
  ORGANIZATION = 'ORGANIZATION',
  TAG = 'TAG',
  TAG_GROUP = 'TAG_GROUP',
}
export enum DimensionPropertyVoDataType {
  ID = 'ID',
  NAME = 'NAME',
  CREATOR = 'CREATOR',
  CREATOR_DEPARTMENT = 'CREATOR_DEPARTMENT',
  CREATED_TIME = 'CREATED_TIME',
  MODIFIER = 'MODIFIER',
  MODIFIED_TIME = 'MODIFIED_TIME',
  OWNER = 'OWNER',
  OWNER_DEPARTMENT = 'OWNER_DEPARTMENT',
  SEQUENCE_NO = 'SEQUENCE_NO',
  SEQUENCE_STATUS = 'SEQUENCE_STATUS',
  SELF_OBJECT = 'SELF_OBJECT',
  INSTANCE_ID = 'INSTANCE_ID',
  TEXT = 'TEXT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  DROPDOWN = 'DROPDOWN',
  MULTI_DROPDOWN = 'MULTI_DROPDOWN',
  TEXTAREA = 'TEXTAREA',
  RICHTEXT = 'RICHTEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  LOGIC = 'LOGIC',
  STAFF_SELECTOR = 'STAFF_SELECTOR',
  STAFF_MULTI_SELECTOR = 'STAFF_MULTI_SELECTOR',
  DEPARTMENT_SELECTOR = 'DEPARTMENT_SELECTOR',
  DEPARTMENT_MULTI_SELECTOR = 'DEPARTMENT_MULTI_SELECTOR',
  STAFF_DEPARTMENT_SELECTOR = 'STAFF_DEPARTMENT_SELECTOR',
  ADDRESS = 'ADDRESS',
  LOCATION = 'LOCATION',
  ATTACHMENT = 'ATTACHMENT',
  IMAGE = 'IMAGE',
  SIGNATURE = 'SIGNATURE',
  CORRELATION_FORM = 'CORRELATION_FORM',
  CORRELATION_MULTI_FORM = 'CORRELATION_MULTI_FORM',
  SHEET = 'SHEET',
}
export enum DimensionPropertyVoType {
  TEXT = 'TEXT',
  DATE = 'DATE',
  NUMBER = 'NUMBER',
}
export enum EsbServiceVoExternalAppAclType {
  NONE = 'NONE',
  SOME = 'SOME',
  ALL = 'ALL',
}
export enum EsbServiceVoInternalAppAclType {
  NONE = 'NONE',
  SOME = 'SOME',
  ALL = 'ALL',
}
export enum EsbServiceVoWorkerType {
  BIZ_BUS = 'BIZ_BUS',
  BIZ_RULE = 'BIZ_RULE',
}
export enum ExportProgressVoStatus {
  ERROR = 'ERROR',
  PROGRESS = 'PROGRESS',
  TEMP = 'TEMP',
  DONE = 'DONE',
}
export enum ExportVoType {
  ORGANIZATION_USER_EXPORT = 'ORGANIZATION_USER_EXPORT',
  ORGANIZATION_DEPT_EXPORT = 'ORGANIZATION_DEPT_EXPORT',
  ORGANIZATION_DEPT_USER_EXPORT = 'ORGANIZATION_DEPT_USER_EXPORT',
  DASHBOARD_EXPORT = 'DASHBOARD_EXPORT',
  SCHEMA_EXPORT = 'SCHEMA_EXPORT',
  APP_EXPORT = 'APP_EXPORT',
  FORM_DATA_EXPORT = 'FORM_DATA_EXPORT',
  BIZ_BUS_SERVICE_EXPORT = 'BIZ_BUS_SERVICE_EXPORT',
  BIZ_BUS_DATASOURCE_EXPORT = 'BIZ_BUS_DATASOURCE_EXPORT',
  BIZ_BUS_REPORT_DS_EXPORT = 'BIZ_BUS_REPORT_DS_EXPORT',
  SYSTEM_DICT = 'SYSTEM_DICT',
}
export enum FormDataVoFormTypeEnum {
  BIZFORM = 'BIZFORM',
  WORKFLOW = 'WORKFLOW',
}
export enum FormDataVoStatus {
  VIEW = 'VIEW',
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}
export enum FormRemindVoFormType {
  BIZOBJECT = 'BIZOBJECT',
  WORKITEM = 'WORKITEM',
  INSTANCE = 'INSTANCE',
}
export enum FunTreeVoFunType {
  APP_GROUP = 'APP_GROUP',
  APP = 'APP',
  GROUP = 'GROUP',
  MODEL = 'MODEL',
  MENU = 'MENU',
  DASHBOARD = 'DASHBOARD',
  WORKFLOW = 'WORKFLOW',
  BIZ_RULE = 'BIZ_RULE',
}
export enum ImportProgressVoStatus {
  ERROR = 'ERROR',
  PROGRESS = 'PROGRESS',
  TEMP = 'TEMP',
  DONE = 'DONE',
}
export enum ImportVoType {
  ORGANIZATION_USER_IMPORT = 'ORGANIZATION_USER_IMPORT',
  ORGANIZATION_DEPT_IMPORT = 'ORGANIZATION_DEPT_IMPORT',
  ORGANIZATION_DEPT_USER_IMPORT = 'ORGANIZATION_DEPT_USER_IMPORT',
  DASHBOARD_IMPORT = 'DASHBOARD_IMPORT',
  SCHEMA_IMPORT = 'SCHEMA_IMPORT',
  SCHEMA_PROPERTY_IMPORT = 'SCHEMA_PROPERTY_IMPORT',
  APP_IMPORT = 'APP_IMPORT',
  FORM_DATA_IMPORT = 'FORM_DATA_IMPORT',
  BIZ_BUS_SERVICE_IMPORT = 'BIZ_BUS_SERVICE_IMPORT',
  BIZ_BUS_DATASOURCE_IMPORT = 'BIZ_BUS_DATASOURCE_IMPORT',
  BIZ_BUS_REPORT_DS_IMPORT = 'BIZ_BUS_REPORT_DS_IMPORT',
  SYSTEM_DICT = 'SYSTEM_DICT',
}
export enum InstanceActivityVoActivityStatus {
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  REJECTED = 'REJECTED',
  RETRIEVED = 'RETRIEVED',
  EXCEPTION = 'EXCEPTION',
}
export enum InstanceActivityVoActivityType {
  START = 'START',
  APPROVE = 'APPROVE',
  CIRCULATE = 'CIRCULATE',
  CONNECTION = 'CONNECTION',
  SYSTEM = 'SYSTEM',
  SUB_PROCESS = 'SUB_PROCESS',
  END = 'END',
  BRANCH = 'BRANCH',
}
export enum JsonSchemaOp {
  EQUAL = 'EQUAL',
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT',
  APPEND = 'APPEND',
}
export enum JsonSchemaValueType {
  FIXED = 'FIXED',
  DYNAMIC = 'DYNAMIC',
  EMPTY = 'EMPTY',
  NO_ASSIGNMENT = 'NO_ASSIGNMENT',
  RELATIVE = 'RELATIVE',
}
export enum LoadFormSheetDataParamVoFormType {
  BIZFORM = 'BIZFORM',
  WORKFLOW = 'WORKFLOW',
}
export enum LoginLogVoType {
  USERNAME = 'USERNAME',
  DINGTALK = 'DINGTALK',
  WECHAT = 'WECHAT',
}
export enum MetricPropertyVoAgg {
  SUM = 'SUM',
  AVG = 'AVG',
  MAX = 'MAX',
  MIN = 'MIN',
  COUNT = 'COUNT',
  COUNTDISTINCT = 'COUNTDISTINCT',
}
export enum MetricPropertyVoDataType {
  ID = 'ID',
  NAME = 'NAME',
  CREATOR = 'CREATOR',
  CREATOR_DEPARTMENT = 'CREATOR_DEPARTMENT',
  CREATED_TIME = 'CREATED_TIME',
  MODIFIER = 'MODIFIER',
  MODIFIED_TIME = 'MODIFIED_TIME',
  OWNER = 'OWNER',
  OWNER_DEPARTMENT = 'OWNER_DEPARTMENT',
  SEQUENCE_NO = 'SEQUENCE_NO',
  SEQUENCE_STATUS = 'SEQUENCE_STATUS',
  SELF_OBJECT = 'SELF_OBJECT',
  INSTANCE_ID = 'INSTANCE_ID',
  TEXT = 'TEXT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  DROPDOWN = 'DROPDOWN',
  MULTI_DROPDOWN = 'MULTI_DROPDOWN',
  TEXTAREA = 'TEXTAREA',
  RICHTEXT = 'RICHTEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  LOGIC = 'LOGIC',
  STAFF_SELECTOR = 'STAFF_SELECTOR',
  STAFF_MULTI_SELECTOR = 'STAFF_MULTI_SELECTOR',
  DEPARTMENT_SELECTOR = 'DEPARTMENT_SELECTOR',
  DEPARTMENT_MULTI_SELECTOR = 'DEPARTMENT_MULTI_SELECTOR',
  STAFF_DEPARTMENT_SELECTOR = 'STAFF_DEPARTMENT_SELECTOR',
  ADDRESS = 'ADDRESS',
  LOCATION = 'LOCATION',
  ATTACHMENT = 'ATTACHMENT',
  IMAGE = 'IMAGE',
  SIGNATURE = 'SIGNATURE',
  CORRELATION_FORM = 'CORRELATION_FORM',
  CORRELATION_MULTI_FORM = 'CORRELATION_MULTI_FORM',
  SHEET = 'SHEET',
}
export enum MetricPropertyVoType {
  TEXT = 'TEXT',
  DATE = 'DATE',
  NUMBER = 'NUMBER',
}
export enum ModelFunRenameVoType {
  APP_GROUP = 'APP_GROUP',
  APP = 'APP',
  GROUP = 'GROUP',
  MODEL = 'MODEL',
  MENU = 'MENU',
  DASHBOARD = 'DASHBOARD',
  WORKFLOW = 'WORKFLOW',
  BIZ_RULE = 'BIZ_RULE',
}
export enum ModelFunSortVoType {
  APP_GROUP = 'APP_GROUP',
  APP = 'APP',
  GROUP = 'GROUP',
  MODEL = 'MODEL',
  MENU = 'MENU',
  DASHBOARD = 'DASHBOARD',
  WORKFLOW = 'WORKFLOW',
  BIZ_RULE = 'BIZ_RULE',
}
export enum OlapQueryVoAuthorization {
  ALL = 'ALL',
  INHERIT = 'INHERIT',
}
export enum OlapQueryVoDataSourceType {
  MODEL = 'MODEL',
  ADVANCED = 'ADVANCED',
  SYSTEM = 'SYSTEM',
}
export enum OpenApiSearchWorkItemVoInstanceStatus {
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  EXCEPTION = 'EXCEPTION',
  TEMPORARY = 'TEMPORARY',
}
export enum OpenApiSearchWorkItemVoSearchWorkItemType {
  TASK = 'TASK',
  READ = 'READ',
}
export enum OpenApiSearchWorkItemVoStatus {
  PENDING = 'PENDING',
  AGREE = 'AGREE',
  DISAGREE = 'DISAGREE',
  REJECT = 'REJECT',
  TRANSFERRED = 'TRANSFERRED',
  REVOKE = 'REVOKE',
  CANCELED = 'CANCELED',
}
export enum OrgAscriptionCheckVoOp {
  EQUAL = 'EQUAL',
  NOT_EQUAL = 'NOT_EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS',
  LOCATED = 'LOCATED',
  NOT_LOCATED = 'NOT_LOCATED',
  BETWEEN = 'BETWEEN',
  NOT_BETWEEN = 'NOT_BETWEEN',
  EMPTY = 'EMPTY',
  NOT_EMPTY = 'NOT_EMPTY',
  BELONG_TO = 'BELONG_TO',
  BELONG_TO_OR = 'BELONG_TO_OR',
  NOT_BELONG_TO = 'NOT_BELONG_TO',
  HAVA = 'HAVA',
  NOT_HAVA = 'NOT_HAVA',
  DYNAMIC = 'DYNAMIC',
}
export enum OrgSyncRecordVoSyncType {
  FULL_SYNC = 'FULL_SYNC',
  INCREMENT_SYNC = 'INCREMENT_SYNC',
}
export enum OrganizationPushConfigVoListenEventList {
  ADD_DEPARTMENT = 'ADD_DEPARTMENT',
  UPDATE_DEPARTMENT = 'UPDATE_DEPARTMENT',
  DELETE_DEPARTMENT = 'DELETE_DEPARTMENT',
  ADD_USER = 'ADD_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
  ADD_TAG_GROUP = 'ADD_TAG_GROUP',
  UPDATE_TAG_GROUP = 'UPDATE_TAG_GROUP',
  DELETE_TAG_GROUP = 'DELETE_TAG_GROUP',
  ADD_TAG = 'ADD_TAG',
  UPDATE_TAG = 'UPDATE_TAG',
  DELETE_TAG = 'DELETE_TAG',
  TAG_ADD_USER = 'TAG_ADD_USER',
  TAG_REMOVE_USER = 'TAG_REMOVE_USER',
}
export enum ParticipantVoWorkItemType {
  NORMAL = 'NORMAL',
  TRANSFERRED = 'TRANSFERRED',
  ASSIST = 'ASSIST',
  APPOSTTILE = 'APPOSTTILE',
  CIRCULATE = 'CIRCULATE',
}
export enum PropertyOptionDataSourceType {
  CUSTOM = 'CUSTOM',
  DICT = 'DICT',
  BIZ_RULE = 'BIZ_RULE',
  BIZ_BUS = 'BIZ_BUS',
}
export enum PropertyOptionDictSortType {
  ASC = 'ASC',
  DESC = 'DESC',
  DEFAULT = 'DEFAULT',
}
export enum QuickLinkFunVoType {
  APP_GROUP = 'APP_GROUP',
  APP = 'APP',
  GROUP = 'GROUP',
  MODEL = 'MODEL',
  MENU = 'MENU',
  DASHBOARD = 'DASHBOARD',
  WORKFLOW = 'WORKFLOW',
  BIZ_RULE = 'BIZ_RULE',
}
export enum QuickLinkVoFunType {
  APP_GROUP = 'APP_GROUP',
  APP = 'APP',
  GROUP = 'GROUP',
  MODEL = 'MODEL',
  MENU = 'MENU',
  DASHBOARD = 'DASHBOARD',
  WORKFLOW = 'WORKFLOW',
  BIZ_RULE = 'BIZ_RULE',
}
export enum RelationTargetType {
  ID = 'ID',
  NAME = 'NAME',
  CREATOR = 'CREATOR',
  CREATOR_DEPARTMENT = 'CREATOR_DEPARTMENT',
  CREATED_TIME = 'CREATED_TIME',
  MODIFIER = 'MODIFIER',
  MODIFIED_TIME = 'MODIFIED_TIME',
  OWNER = 'OWNER',
  OWNER_DEPARTMENT = 'OWNER_DEPARTMENT',
  SEQUENCE_NO = 'SEQUENCE_NO',
  SEQUENCE_STATUS = 'SEQUENCE_STATUS',
  SELF_OBJECT = 'SELF_OBJECT',
  INSTANCE_ID = 'INSTANCE_ID',
  TEXT = 'TEXT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  DROPDOWN = 'DROPDOWN',
  MULTI_DROPDOWN = 'MULTI_DROPDOWN',
  TEXTAREA = 'TEXTAREA',
  RICHTEXT = 'RICHTEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  LOGIC = 'LOGIC',
  STAFF_SELECTOR = 'STAFF_SELECTOR',
  STAFF_MULTI_SELECTOR = 'STAFF_MULTI_SELECTOR',
  DEPARTMENT_SELECTOR = 'DEPARTMENT_SELECTOR',
  DEPARTMENT_MULTI_SELECTOR = 'DEPARTMENT_MULTI_SELECTOR',
  STAFF_DEPARTMENT_SELECTOR = 'STAFF_DEPARTMENT_SELECTOR',
  ADDRESS = 'ADDRESS',
  LOCATION = 'LOCATION',
  ATTACHMENT = 'ATTACHMENT',
  IMAGE = 'IMAGE',
  SIGNATURE = 'SIGNATURE',
  CORRELATION_FORM = 'CORRELATION_FORM',
  CORRELATION_MULTI_FORM = 'CORRELATION_MULTI_FORM',
  SHEET = 'SHEET',
}
export enum SaveWorkflowTemplateVoVisibleType {
  ALL = 'ALL',
  SOME = 'SOME',
}
export enum SchedulerConfVoScheduleType {
  NONE = 'NONE',
  CRON = 'CRON',
  FIX_RATE = 'FIX_RATE',
  FIX_TIME = 'FIX_TIME',
}
export enum SchemaDataPermissionResourceDefaultValue {
  ALL = 'ALL',
  SELF_ONLY = 'SELF_ONLY',
  THE_DEPARTMENT = 'THE_DEPARTMENT',
  SOME_DEPARTMENT = 'SOME_DEPARTMENT',
  CUSTOM = 'CUSTOM',
}
export enum SchemaDataPermissionVoType {
  ALL = 'ALL',
  SELF_ONLY = 'SELF_ONLY',
  THE_DEPARTMENT = 'THE_DEPARTMENT',
  SOME_DEPARTMENT = 'SOME_DEPARTMENT',
  CUSTOM = 'CUSTOM',
}
export enum SchemaPermissionResourceFunType {
  APP_GROUP = 'APP_GROUP',
  APP = 'APP',
  GROUP = 'GROUP',
  MODEL = 'MODEL',
  MENU = 'MENU',
  DASHBOARD = 'DASHBOARD',
  WORKFLOW = 'WORKFLOW',
  BIZ_RULE = 'BIZ_RULE',
}
export enum SearchJobVoTriggerStatus {
  RUNNING = 'RUNNING',
  STOP = 'STOP',
}
export enum SearchWorkItemVoInstanceStatus {
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  EXCEPTION = 'EXCEPTION',
  TEMPORARY = 'TEMPORARY',
}
export enum SearchWorkItemVoSearchWorkItemType {
  TASK = 'TASK',
  READ = 'READ',
}
export enum SearchWorkItemVoStatus {
  PENDING = 'PENDING',
  AGREE = 'AGREE',
  DISAGREE = 'DISAGREE',
  REJECT = 'REJECT',
  TRANSFERRED = 'TRANSFERRED',
  REVOKE = 'REVOKE',
  CANCELED = 'CANCELED',
}
export enum SearchWorkflowInstanceVoStatus {
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  EXCEPTION = 'EXCEPTION',
  TEMPORARY = 'TEMPORARY',
}
export enum ShortLinkType {
  BIZFORM = 'BIZFORM',
  WORKFLOW = 'WORKFLOW',
  BIZOBJECT = 'BIZOBJECT',
  INSTANCE = 'INSTANCE',
}
export enum SortPropertyVoDataType {
  ID = 'ID',
  NAME = 'NAME',
  CREATOR = 'CREATOR',
  CREATOR_DEPARTMENT = 'CREATOR_DEPARTMENT',
  CREATED_TIME = 'CREATED_TIME',
  MODIFIER = 'MODIFIER',
  MODIFIED_TIME = 'MODIFIED_TIME',
  OWNER = 'OWNER',
  OWNER_DEPARTMENT = 'OWNER_DEPARTMENT',
  SEQUENCE_NO = 'SEQUENCE_NO',
  SEQUENCE_STATUS = 'SEQUENCE_STATUS',
  SELF_OBJECT = 'SELF_OBJECT',
  INSTANCE_ID = 'INSTANCE_ID',
  TEXT = 'TEXT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  DROPDOWN = 'DROPDOWN',
  MULTI_DROPDOWN = 'MULTI_DROPDOWN',
  TEXTAREA = 'TEXTAREA',
  RICHTEXT = 'RICHTEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  LOGIC = 'LOGIC',
  STAFF_SELECTOR = 'STAFF_SELECTOR',
  STAFF_MULTI_SELECTOR = 'STAFF_MULTI_SELECTOR',
  DEPARTMENT_SELECTOR = 'DEPARTMENT_SELECTOR',
  DEPARTMENT_MULTI_SELECTOR = 'DEPARTMENT_MULTI_SELECTOR',
  STAFF_DEPARTMENT_SELECTOR = 'STAFF_DEPARTMENT_SELECTOR',
  ADDRESS = 'ADDRESS',
  LOCATION = 'LOCATION',
  ATTACHMENT = 'ATTACHMENT',
  IMAGE = 'IMAGE',
  SIGNATURE = 'SIGNATURE',
  CORRELATION_FORM = 'CORRELATION_FORM',
  CORRELATION_MULTI_FORM = 'CORRELATION_MULTI_FORM',
  SHEET = 'SHEET',
}
export enum SortPropertyVoOrder {
  ASC = 'ASC',
  DESC = 'DESC',
  DEFAULT = 'DEFAULT',
}
export enum SortPropertyVoType {
  TEXT = 'TEXT',
  DATE = 'DATE',
  NUMBER = 'NUMBER',
}
export enum SubInstanceLogVoStatus {
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  EXCEPTION = 'EXCEPTION',
  TEMPORARY = 'TEMPORARY',
}
export enum SysJobVoScheduleType {
  NONE = 'NONE',
  CRON = 'CRON',
  FIX_RATE = 'FIX_RATE',
  FIX_TIME = 'FIX_TIME',
}
export enum SysJobVoTriggerStatus {
  RUNNING = 'RUNNING',
  STOP = 'STOP',
}
export enum SystemDictVoType {
  KEY_VALUE = 'KEY_VALUE',
  TREE = 'TREE',
}
export enum TagGroupVoNodeType {
  ORG = 'ORG',
  GROUP = 'GROUP',
  TAG = 'TAG',
}
export enum TagTreeVoNodeType {
  ORG = 'ORG',
  GROUP = 'GROUP',
  TAG = 'TAG',
}
export enum UnitBoType {
  USER = 'USER',
  DEPARTMENT = 'DEPARTMENT',
  ORGANIZATION = 'ORGANIZATION',
  TAG = 'TAG',
  TAG_GROUP = 'TAG_GROUP',
}
export enum UnitTreeSearchVoUnitType {
  USER = 'USER',
  DEPARTMENT = 'DEPARTMENT',
  ORGANIZATION = 'ORGANIZATION',
  TAG = 'TAG',
  TAG_GROUP = 'TAG_GROUP',
}
export enum UnitTreeVoUnitType {
  USER = 'USER',
  DEPARTMENT = 'DEPARTMENT',
  ORGANIZATION = 'ORGANIZATION',
  TAG = 'TAG',
  TAG_GROUP = 'TAG_GROUP',
}
export enum UnitVoType {
  USER = 'USER',
  DEPARTMENT = 'DEPARTMENT',
  ORGANIZATION = 'ORGANIZATION',
  TAG = 'TAG',
  TAG_GROUP = 'TAG_GROUP',
}
export enum UserTransferVoTransferType {
  APP = 'APP',
  BIZ_DATA = 'BIZ_DATA',
  WORK_ITEM = 'WORK_ITEM',
}
export enum UserVoStatus {
  ENABLE = 'ENABLE',
  DISABLE = 'DISABLE',
}
export enum UserVoUnitType {
  USER = 'USER',
  DEPARTMENT = 'DEPARTMENT',
  ORGANIZATION = 'ORGANIZATION',
  TAG = 'TAG',
  TAG_GROUP = 'TAG_GROUP',
}
export enum ValidateErrorMessageVoErrorLevel {
  WARN = 'WARN',
  ERROR = 'ERROR',
}
export enum WorkItemVoInstanceStatus {
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  EXCEPTION = 'EXCEPTION',
  TEMPORARY = 'TEMPORARY',
}
export enum WorkItemVoResultStatus {
  AGREE = 'AGREE',
  DISAGREE = 'DISAGREE',
  REJECT = 'REJECT',
  TRANSFERRED = 'TRANSFERRED',
  CANCELED = 'CANCELED',
  REVOKE = 'REVOKE',
}
export enum WorkItemVoStatus {
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  REVOKE = 'REVOKE',
}
export enum WorkItemVoTimeoutStatus {
  TIMEOUT = 'TIMEOUT',
  WARNING = 'WARNING',
}
export enum WorkItemVoType {
  NORMAL = 'NORMAL',
  TRANSFERRED = 'TRANSFERRED',
  ASSIST = 'ASSIST',
  APPOSTTILE = 'APPOSTTILE',
  CIRCULATE = 'CIRCULATE',
}
export enum WorkflowDelegateVoType {
  ALL = 'ALL',
  SOME = 'SOME',
}
export enum WorkflowFormDataVoFormTypeEnum {
  BIZFORM = 'BIZFORM',
  WORKFLOW = 'WORKFLOW',
}
export enum WorkflowFormDataVoStatus {
  VIEW = 'VIEW',
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}
export enum WorkflowHeaderVoVisibleType {
  ALL = 'ALL',
  SOME = 'SOME',
}
export enum WorkflowInstanceVoStatus {
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  EXCEPTION = 'EXCEPTION',
  TEMPORARY = 'TEMPORARY',
}
/**
 *表单操作权限VO
 */
export interface ActionPermissionVo {
  /**
   * 管理员干预
   */
  adminIntervene?: boolean;
  /**
   * 同意
   */
  agree?: boolean;
  /**
   * 加签
   */
  apposttile?: boolean;
  /**
   * 协办
   */
  assist?: boolean;
  /**
   * 协办任务提交
   */
  assistSubmit?: boolean;
  /**
   * 传阅
   */
  circulated?: boolean;
  /**
   * 结束流程
   */
  close?: boolean;
  /**
   * 删除
   */
  delete?: boolean;
  /**
   * 清除暂存
   */
  deleteTemporary?: boolean;
  /**
   * 不同意
   */
  disagree?: boolean;
  /**
   * 编辑
   */
  edit?: boolean;
  /**
   * 外链发起流程
   */
  externalStartWorkflow?: boolean;
  /**
   * 外链提交
   */
  externalSubmit?: boolean;
  /**
   * 作废
   */
  invalid?: boolean;
  /**
   * 操作日志
   */
  operationLogs?: boolean;
  /**
   * 驳回
   */
  reject?: boolean;
  /**
   * 取回
   */
  retrieve?: boolean;
  /**
   * 发起流程
   */
  startWorkflow?: boolean;
  /**
   * 提交
   */
  submit?: boolean;
  /**
   * 暂存
   */
  temporary?: boolean;
  /**
   * 转办
   */
  transferred?: boolean;
  /**
   * 催办
   */
  urge?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *节点传阅VO
 */
export interface ActivityCirculateVo {
  /**
   * 节点编码
   */
  activityCode?: string;
  /**
   * 节点名称
   */
  activityName?: string;
  /**
   * 节点类型
   */
  activityType?: ActivityCirculateVoActivityType;
  /**
   * 传阅时间
   */
  circulateTime?: string;
  /**
   * 参与者
   */
  participant?: ParticipantVo;
  /**
   * 是否已阅
   */
  readed?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *节点VO
 */
export interface ActivityVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *管理员角色权限范围数据vo对象
 */
export interface AdminRolePermissionRangeVo {
  /**
   * 报表高级数据源管理范围
   */
  advancedDataSourceList?: CodeNameVo[];
  /**
   * 前台应用数据权限
   */
  appDatas?: AppDataPermissionVo[];
  /**
   * 数据源管理范围
   */
  bizDataSourceList?: CodeNameVo[];
  /**
   * 业务集成管理范围
   */
  bizServiceList?: CodeNameVo[];
  /**
   * 新建应用
   */
  createApp?: boolean;
  /**
   * 新增应用分组
   */
  createAppGroup?: boolean;
  /**
   * 新增集成服务目录
   */
  createBizServiceCategory?: boolean;
  /**
   * 新增角色权限角色
   */
  roleManage?: boolean;
  /**
   * 应用管辖范围
   */
  scopeApps?: CodeNameVo[];
  /**
   * 角色管理范围
   */
  scopeRoles?: TagTreeVo[];
  /**
   * 组织管辖范围
   */
  scopeUnits?: UnitVo[];
  /**
   * 数据字典管理范围
   */
  systemDictList?: CodeNameVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *管理组权限Vo对象
 */
export interface AdminRolePermissionVo {
  /**
   * 报表高级数据源管理范围
   */
  advancedDataSourceList?: string[];
  /**
   * 前台应用数据权限
   */
  appDataPermissions?: AppDataPermissionVo[];
  /**
   * 数据源管理范围
   */
  bizDataSourceList?: string[];
  /**
   * 业务集成管理范围
   */
  bizServiceList?: string[];
  /**
   * 新建应用
   */
  createApp?: boolean;
  /**
   * 新增应用分组
   */
  createAppGroup?: boolean;
  /**
   * 新增集成服务服务
   */
  createBizServiceCategory?: boolean;
  /**
   * 新增角色权限
   */
  roleManage?: boolean;
  /**
   * 应用管辖范围
   */
  scopeApps?: string[];
  /**
   * 角色管理范围
   */
  scopeRoles?: UnitVo[];
  /**
   * 组织管辖范围
   */
  scopeUnits?: UnitVo[];
  /**
   * 数据字典管理范围
   */
  systemDictList?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *管理组Vo对象
 */
export interface AdminRoleVo {
  /**
   * 授权时间
   */
  authTime?: string;
  /**
   * 授权人
   */
  authorizer?: UnitVo;
  /**
   * 是否能编辑，表示当前节点能不能修改或删除，默认可编辑
   */
  canEdit?: boolean;
  /**
   * 子级
   */
  children?: AdminRoleVo[];
  /**
   * 创建人
   */
  createdBy?: string;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 修改人
   */
  modifiedBy?: string;
  /**
   * 修改时间
   */
  modifiedTime?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 类型
   */
  nodeType?: AdminRoleVoNodeType;
  /**
   * 上级id
   */
  parentId?: string;
  /**
   * 上级类型
   */
  parentType?: AdminRoleVoParentType;
  /**
   * 角色设置的权限
   */
  permission?: AdminRolePermissionVo;
  /**
   * 子级角色可授予的权限范围
   */
  permissionRange?: AdminRolePermissionRangeVo;
  /**
   * 管理员角色类型
   */
  roleType?: AdminRoleVoRoleType;
  /**
   * 角色下的用户
   */
  users?: UnitVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *管理员Vo对象
 */
export interface AdminVo {
  /**
   * 部门全路径名称
   */
  departmentFullName?: string;
  /**
   * 所属部门id
   */
  departmentId?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 用户账号
   */
  userCode?: string;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 用户名称
   */
  userName?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *报表高级数据源vo
 */
export interface AdvancedDataSourceVo {
  /**
   * 集成数据源
   */
  busDs?: CodeNameVo;
  /**
   * 编码
   */
  code?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * sql语句
   */
  sqlConfig?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *应用数据权限VO对象
 */
export interface AppDataPermissionVo {
  /**
   * 应用编码
   */
  code?: string;
  /**
   * 应用名称
   */
  name?: string;
  /**
   * 组织管辖范围
   */
  units?: UnitVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *应用分组
 */
export interface AppGroupVo {
  /**
   * id
   */
  id?: string;
  /**
   * 分组名称
   */
  name?: string;
  /**
   * 排序下标
   */
  sortIndex?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *应用对象
 */
export interface AppPackageVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 启用状态
   */
  enabled?: boolean;
  /**
   * 分组名称
   */
  groupName?: string;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 主键
   */
  id?: string;
  /**
   * 应用模型菜单
   */
  modelFunTrees?: FunTreeVo[];
  /**
   * 名称
   */
  name?: string;
  /**
   * 分组id
   */
  parentId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *权限组排序对象
 */
export interface AppPerGroupSortVo {
  /**
   * 主键
   */
  id?: string;
  /**
   * 排序值
   */
  sortKey?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *权限组对象
 */
export interface AppPerGroupVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 授权类型
   */
  grantType?: AppPerGroupVoGrantType;
  /**
   * 主键
   */
  id?: string;
  /**
   * 权限组名称
   */
  name?: string;
  /**
   * 排序值
   */
  sortKey?: number;
  /**
   * 授权对象，组织/角色
   */
  subjects?: UnitVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *应用权限设置VO
 */
export interface AppPermissionSettingVo {
  /**
   * 权限组列表
   */
  perGroups?: AppPerGroupVo[];
  /**
   * 模型权限资源列表
   */
  schemaPermissionResources?: SchemaPermissionResource[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *审批日志VO
 */
export interface ApprovalLogVo {
  /**
   * 审批操作类型
   */
  actionType?: ApprovalLogVoActionType;
  /**
   * 节点编码
   */
  activityCode?: string;
  /**
   * 节点名称
   */
  activityName?: string;
  /**
   * 节点类型
   */
  activityType?: ApprovalLogVoActivityType;
  /**
   * 传阅的用户
   */
  circulateList?: ActivityCirculateVo[];
  /**
   * 审批意见
   */
  content?: string;
  /**
   * 耗时
   */
  duration?: number;
  /**
   * 完成时间
   */
  finishTime?: string;
  /**
   * 参与者
   */
  participant?: ParticipantVo;
  /**
   * 接收时间
   */
  receiveTime?: string;
  /**
   * 签名文件
   */
  signFileVo?: SignFileVo;
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 目标用户：转办、协办、传阅、加签用户
   */
  toParticipants?: ParticipantVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *批量新增部门vo
 */
export interface BatchDeptInsertVo {
  /**
   * 部门名称列表
   */
  nameList?: string[];
  /**
   * 上级部门id
   */
  parentId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *批量获取模型参数VO
 */
export interface BatchListSchemaParamVo {
  /**
   * 是否加载关联表单数据项
   */
  loadCorrelationFrom?: boolean;
  /**
   * 是否加载当前对象字段
   */
  loadSelfObject?: boolean;
  /**
   * 是否加载系统数据项
   */
  loadSysProperty?: boolean;
  /**
   * 模型编码
   */
  schemaCodes?: string[];
  /**
   * 流程编码
   */
  workflowCodes?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *批量获取子表数据参数vo
 */
export interface BatchListSheetDataVo {
  /**
   * 主表数据id集合
   */
  ids?: string[];
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 子表编码
   */
  sheetCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户批量转换部门
 */
export interface BatchMoveUserDeptVo {
  /**
   * 新部门id
   */
  newDeptId?: string;
  /**
   * 旧部门id
   */
  oldDeptId?: string;
  /**
   * 用户列表
   */
  userIdList?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *批量保存角色权限Vo对象
 */
export interface BatchSaveAdminRolePermissionVo {
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 父级类型
   */
  parentType?: BatchSaveAdminRolePermissionVoParentType;
  /**
   * 角色权限
   */
  rolePermissions?: SaveAdminRolePermissionVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *批量新增标签VO
 */
export interface BatchTagVo {
  /**
   * 标签组名称
   */
  groupName?: string;
  /**
   * 标签名称
   */
  tagName?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface BatchUpdateBizObjectVo {
  /**
   * id集合
   */
  ids?: string[];
  /**
   * 修改的数据项及值
   */
  paramsMap?: any;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *集成日志查询参数Vo
 */
export interface BizBusLogSearchVo {
  /**
   * 方法编码
   */
  methodCode?: string;
  /**
   * 分页页数
   */
  pageNum?: number;
  /**
   * 分页条数
   */
  pageSize?: number;
  /**
   * 服务编码
   */
  serviceCode?: string;
  /**
   * 是否成功
   */
  success?: boolean;
  /**
   * 操作时间
   */
  times?: string[];
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 用户ID
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务服务日志Vo
 */
export interface BizBusLogVo {
  /**
   * 耗时
   */
  duration?: number;
  /**
   * 日志id
   */
  id?: string;
  /**
   * 业务方法编码
   */
  methodCode?: string;
  /**
   * 业务方法名称
   */
  methodName?: string;
  /**
   * 业务服务编码
   */
  serviceCode?: string;
  /**
   * 业务服务名称
   */
  serviceName?: string;
  /**
   * 是否成功
   */
  success?: boolean;
  /**
   * 操作时间
   */
  time?: string;
  /**
   * 调用链路id
   */
  traceId?: string;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 用户名称
   */
  userName?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *数据源Vo对象
 */
export interface BizDataSourceVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 数据库类型
   */
  type?: BizDataSourceVoType;
  /**
   * 连接url
   */
  url?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *表单评论vo
 */
export interface BizFormCommentVo {
  /**
   * 创建人头像
   */
  avatar?: string;
  /**
   * 业务对象id
   */
  bizObjectId?: string;
  /**
   * undefined
   */
  childList?: BizFormCommentVo[];
  /**
   * 评论内容
   */
  content?: string;
  /**
   * 创建人
   */
  createdBy?: string;
  /**
   * 创建人名称
   */
  createdName?: string;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 附件id列表
   */
  documentIdList?: string[];
  /**
   * 表单编码
   */
  formCode?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * @用户id列表
   */
  receiveUserIdList?: string[];
  /**
   * @用户信息列表
   */
  receiveUserList?: UnitBo[];
  /**
   * 回复的评论id
   */
  replyCommentId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 源评论id
   */
  sourceCommentId?: string;
  /**
   * 代办任务id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *打印模板vo
 */
export interface BizFormTemplateVo {
  /**
   * 模板编码
   */
  code?: string;
  /**
   * 模板内容
   */
  content?: string;
  /**
   * 表单内容
   */
  formData?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 模板名称
   */
  name?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 画布配置
   */
  settings?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *表单对象
 */
export interface BizFormVo {
  /**
   * 新增的数据项
   */
  addPropertys?: BizPropertyVo[];
  /**
   * 编码
   */
  code?: string;
  /**
   * 表单设计json-草稿
   */
  draftJson?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 模式
   */
  model?: BizFormVoModel;
  /**
   * 名称
   */
  name?: string;
  /**
   * 发布状态
   */
  published?: boolean;
  /**
   * 表单设计json-已发布
   */
  publishedJson?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 模型名称
   */
  schemaName?: string;
  /**
   * 是否启用外链
   */
  shortLinkEnable?: boolean;
  /**
   * 修改的数据项
   */
  updatePropertys?: BizPropertyVo[];
  /**
   * 版本号
   */
  version?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *菜单vo
 */
export interface BizMenuVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 表单编码-类型为BIZ_FORM时有值
   */
  formCode?: string;
  /**
   * 分组id
   */
  groupId?: string;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 主键
   */
  id?: string;
  /**
   * 移动端链接-类型为LINK时有值
   */
  linkMobile?: string;
  /**
   * pc链接-类型为LINK时有值
   */
  linkPc?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 打开方式
   */
  openMode?: string;
  /**
   * 是否是快捷链接
   */
  quickLink?: boolean;
  /**
   * 模型编码-类型为BIZ_FORM或VIEW时有值
   */
  schemaCode?: string;
  /**
   * 菜单类型
   */
  type?: BizMenuVoType;
  /**
   * 表单编码-类型为VIEW时有值
   */
  viewCode?: string;
  /**
   * 移动端是否可见
   */
  visibleMobile?: boolean;
  /**
   * pc是否可见
   */
  visiblePc?: boolean;
  /**
   * 流程编码-类型为WORKFLOW时有值
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务方法调用vo
 */
export interface BizMethodInvokeVo {
  /**
   * 输入参数
   */
  input?: any;
  /**
   * 方法编码
   */
  methodCode?: string;
  /**
   * 业务服务编码
   */
  serviceCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务数据id对象Vo
 */
export interface BizObjectIdVo {
  /**
   * id
   */
  id?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务对象id集合对象
 */
export interface BizObjectIdsVo {
  /**
   * id集合
   */
  ids?: string[];
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务对象查询参数Vo
 */
export interface BizObjectQueryVo {
  /**
   * 查询条件
   */
  conditions?: ConditionItem[][];
  /**
   * 是否去重
   */
  distinct?: boolean;
  /**
   * 查询字段
   */
  fields?: string[];
  /**
   * 数据过滤
   */
  filters?: ConditionItem[][];
  /**
   * 数据限定
   */
  limitation?: ConditionItem[][];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页查询数量, 最大100
   */
  pageSize?: number;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 排序条件
   */
  sorts?: BizObjectSortVo[];
  /**
   * 树形区域筛选
   */
  treeCriterias?: ConditionItem[][];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *子表数据提交Vo对象
 */
export interface BizObjectSheetSubmitVo {
  /**
   * 所有的数据
   */
  datas?: any[];
  /**
   * 删除的数据id集合
   */
  deleteIds?: string[];
  /**
   * 插入的数据
   */
  insertDatas?: any[];
  /**
   * 子表编码
   */
  sheetCode?: string;
  /**
   * 更新的数据
   */
  updateDatas?: any[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务对象排序条件Vo
 */
export interface BizObjectSortVo {
  /**
   * 数据项编码
   */
  propertyCode?: string;
  /**
   * 排序方式
   */
  sortType?: BizObjectSortVoSortType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务对象提交对象Vo
 */
export interface BizObjectSubmitVo {
  /**
   * 主表数据
   */
  data?: any;
  /**
   * 主键
   */
  id?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 子表数据
   */
  sheetDatas?: BizObjectSheetSubmitVo[];
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *数据项计算规则Vo
 */
export interface BizPropertyFormulaVo {
  /**
   * 数据项编码
   */
  code?: string;
  /**
   * 计算规则表达式
   */
  expression?: Expression;
  /**
   * 计算公式
   */
  formula?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 数据项名称
   */
  name?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *数据项排序vo
 */
export interface BizPropertySortVo {
  /**
   * 数据项编码
   */
  code?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 排序索引
   */
  sortIndex?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *数据项Vo
 */
export interface BizPropertyVo {
  /**
   * 子表数据项
   */
  children?: BizPropertyVo[];
  /**
   * 编码
   */
  code?: string;
  /**
   * 关联表单关联的模型展示字段
   */
  correlationFormDisplayColumn?: string;
  /**
   * 关联表单关联的模型编码
   */
  correlationFormSchemaCode?: string;
  /**
   * 关联模型关联字段编码
   */
  correlationPropertyCode?: string;
  /**
   * 关联模型关联字段名称
   */
  correlationPropertyName?: string;
  /**
   * 关联模型关联字段的关联方式
   */
  correlationPropertyWay?: BizPropertyVoCorrelationPropertyWay;
  /**
   * 关联关系，关联类型为'UNION_RELATION'时有值
   */
  correlationRelations?: Relation[];
  /**
   * 关联模型所属应用名称（子表/关联表单）
   */
  correlationSchemaAppName?: string;
  /**
   * 关联模型编码
   */
  correlationSchemaCode?: string;
  /**
   * 关联模型名称（子表/关联表单）
   */
  correlationSchemaName?: string;
  /**
   * 关联类型，默认主从
   */
  correlationType?: BizPropertyVoCorrelationType;
  /**
   * 显示格式
   */
  format?: any;
  /**
   * 计算公式
   */
  formula?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 选项
   */
  option?: PropertyOption;
  /**
   * 父级数据项编码
   */
  parentCode?: string;
  /**
   * 是否创建索引
   */
  propertyIndex?: boolean;
  /**
   * 是否必填
   */
  propertyRequired?: boolean;
  /**
   * 数据项类型
   */
  propertyType?: BizPropertyVoPropertyType;
  /**
   * 是否已发布
   */
  published?: boolean;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 检索字段
   */
  searchProperty?: boolean;
  /**
   * 单据号规则
   */
  sequenceNoRule?: any;
  /**
   * 排序索引
   */
  sortIndex?: number;
  /**
   * 是否是系统字段
   */
  systemProperty?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务规则调用Vo
 */
export interface BizRuleInvokeVo {
  /**
   * 输入参数
   */
  input?: any;
  /**
   * 规则id
   */
  ruleId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务编排日志查询参数Vo
 */
export interface BizRuleLogSearchVo {
  /**
   * 分页页数
   */
  pageNum?: number;
  /**
   * 分页条数
   */
  pageSize?: number;
  /**
   * 规则id
   */
  ruleId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 是否成功
   */
  success?: boolean;
  /**
   * 操作时间
   */
  times?: string[];
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 用户ID
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务编排日志Vo
 */
export interface BizRuleLogVo {
  /**
   * 耗时
   */
  duration?: number;
  /**
   * 日志id
   */
  id?: string;
  /**
   * 业务编排id
   */
  ruleId?: string;
  /**
   * 业务编排名称
   */
  ruleName?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 模型名称
   */
  schemaName?: string;
  /**
   * 是否成功
   */
  success?: boolean;
  /**
   * 操作时间
   */
  time?: string;
  /**
   * 调用链路id
   */
  traceId?: string;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 用户名称
   */
  userName?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *规则属性vo
 */
export interface BizRulePropertyVo {
  /**
   * 主键
   */
  id?: string;
  /**
   * undefined
   */
  inputJsonSchema?: JsonSchema;
  /**
   * 名称
   */
  name?: string;
  /**
   * undefined
   */
  outputJsonSchema?: JsonSchema;
  /**
   * undefined
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务规则引用数据项vo
 */
export interface BizRuleQuotePropertyVo {
  /**
   * 动作id
   */
  actionId?: string;
  /**
   * 动作名称，不一定有值
   */
  actionName?: string;
  /**
   * 节点ID
   */
  nodeId?: string;
  /**
   * 节点名称
   */
  nodeName?: string;
  /**
   * 规则id
   */
  ruleId?: string;
  /**
   * 规则名称
   */
  ruleName?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 模型名称
   */
  schemaName?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务规则重命名Vo
 */
export interface BizRuleRenameVo {
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务规则Vo
 */
export interface BizRuleVo {
  /**
   * 创建人
   */
  createdBy?: string;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 创建人名称
   */
  creatorName?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 规则输入参数
   */
  input?: any;
  /**
   * 修改人
   */
  modifiedBy?: string;
  /**
   * 修改时间
   */
  modifiedTime?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 规则输出参数
   */
  output?: any;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 规则模板
   */
  template?: any;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型事件Vo
 */
export interface BizSchemaEventVo {
  /**
   * 绑定类型
   */
  bindType?: BizSchemaEventVoBindType;
  /**
   * 事件类型
   */
  eventType?: BizSchemaEventVoEventType;
  /**
   * 主键
   */
  id?: string;
  /**
   * 入参关系映射
   */
  inputJson?: string;
  /**
   * 输入参数模型编码
   */
  inputSchemaCode?: string;
  /**
   * 业务集成方法编码
   */
  methodCode?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 出参关系映射
   */
  outputJson?: string;
  /**
   * 输出参数模型编码
   */
  outputSchemaCode?: string;
  /**
   * 绑定业务规则id
   */
  ruleId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 业务集成服务编码
   */
  serviceCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型分组vo
 */
export interface BizSchemaGroupVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 子级
   */
  children?: BizSchemaGroupVo[];
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *数据模型
 */
export interface BizSchemaVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 分组id
   */
  groupId?: string;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 主键
   */
  id?: string;
  /**
   * 锁定状态
   */
  locked?: boolean;
  /**
   * 锁定人
   */
  lockedBy?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 数据项列表
   */
  propertys?: BizPropertyVo[];
  /**
   * 是否已发布
   */
  published?: boolean;
  /**
   * 是否是快捷链接
   */
  quickLink?: boolean;
  /**
   * 标题
   */
  title?: string;
  /**
   * 视图列表
   */
  views?: BizViewVo[];
  /**
   * 移动端可见
   */
  visibleMobile?: boolean;
  /**
   * pc可见
   */
  visiblePc?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface BizServerOption {
  /**
   * undefined
   */
  bizMethod?: CodeName;
  /**
   * undefined
   */
  bizRule?: IdName;
  /**
   * undefined
   */
  bizService?: CodeName;
  /**
   * undefined
   */
  input?: JsonSchema;
  /**
   * undefined
   */
  output?: JsonSchema;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务服务目录Vo对象
 */
export interface BizServiceCategoryVo {
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 目录下服务列表
   */
  serviceList?: BizServiceVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务服务方法编码Vo对象
 */
export interface BizServiceMethodCodeVo {
  /**
   * 方法编码
   */
  methodCode?: string;
  /**
   * 业务服务编码
   */
  serviceCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务方法Vo对象
 */
export interface BizServiceMethodVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 业务方法配置项
   */
  config?: any;
  /**
   * 输入参数
   */
  input?: JsonSchema;
  /**
   * 名称
   */
  name?: string;
  /**
   * 返回值
   */
  output?: JsonSchema;
  /**
   * 协议类型
   */
  protocolType?: string;
  /**
   * 服务编码
   */
  serviceCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务服务Vo对象
 */
export interface BizServiceVo {
  /**
   * 分组名称
   */
  categoryName?: string;
  /**
   * 分组id
   */
  categroyId?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 业务服务配置项
   */
  config?: any;
  /**
   * id
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 协议类型
   */
  protocolType?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *暂存数据VO
 */
export interface BizTemporaryVo {
  /**
   * 表单编码，业务数据暂存时有值
   */
  formCode?: string;
  /**
   * ID
   */
  id?: string;
  /**
   * 模型编码，业务数据暂存时有值
   */
  schemaCode?: string;
  /**
   * 类型
   */
  tempType?: BizTemporaryVoTempType;
  /**
   * 暂存时间
   */
  time?: string;
  /**
   * 数据标题
   */
  title?: string;
  /**
   * 待办id， 待办暂存时有值
   */
  workItemId?: string;
  /**
   * 流程编码， 流程暂存时有值
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *视图复制
 */
export interface BizViewCloneVo {
  /**
   * 视图编码
   */
  code?: string;
  /**
   * 新编码
   */
  newCode?: string;
  /**
   * 新名称
   */
  newName?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *视图编码vo对象
 */
export interface BizViewCodeVo {
  /**
   * 视图编码
   */
  code?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *视图名称VO对象
 */
export interface BizViewSortNameVo {
  /**
   * 视图编码
   */
  code?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *视图列表排序对象
 */
export interface BizViewSortVo {
  /**
   * 视图编码
   */
  code?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 排序值
   */
  sortKey?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *设置视图显示端vo对象
 */
export interface BizViewVisibleVo {
  /**
   * 视图编码
   */
  code?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 移动端可见
   */
  visibleMobile?: boolean;
  /**
   * pc可见
   */
  visiblePc?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *视图vo对象
 */
export interface BizViewVo {
  /**
   * 视图按钮
   */
  btns?: CodeNameVo[];
  /**
   * 视图编码
   */
  code?: string;
  /**
   * 展示字段
   */
  displayFields?: string[];
  /**
   * 全局js
   */
  globalJs?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 数据限定
   */
  limitation?: ConditionItem[][];
  /**
   * 移动布局
   */
  mobileLayout?: any;
  /**
   * 视图名称
   */
  name?: string;
  /**
   * pc布局
   */
  pcLayout?: any;
  /**
   * 数据项
   */
  propertys?: BizPropertyVo[];
  /**
   * 发布状态
   */
  published?: boolean;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 视图类型
   */
  type?: string;
  /**
   * 移动端可见
   */
  visibleMobile?: boolean;
  /**
   * pc可见
   */
  visiblePc?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *计算结果VO
 */
export interface CalculateResultVo {
  /**
   * 当计算出现异常时有值
   */
  errorMsg?: string;
  /**
   * 计算字段编码
   */
  propertyCode?: string;
  /**
   * 计算字段模型编码
   */
  schemaCode?: string;
  /**
   * 计算结果，批量计算时，该值是一个数组
   */
  value?: any;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *计算参数VO
 */
export interface CalculateVo {
  /**
   * 是否是批量计算
   */
  batchCalculate?: boolean;
  /**
   * 批量计算行数
   */
  calculateRowCount?: number;
  /**
   * 计算公式
   */
  formulaExp?: string;
  /**
   * 计算字段编码
   */
  propertyCode?: string;
  /**
   * 计算字段类型
   */
  propertyType?: CalculateVoPropertyType;
  /**
   * 计算字段模型编码
   */
  schemaCode?: string;
  /**
   * 计算变量
   */
  variables?: any;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *修改拥有者VO
 */
export interface ChangeOwnerVo {
  /**
   * 流程id
   */
  instanceId?: string;
  /**
   * 拥有者部门id
   */
  ownerDepartmentId?: string;
  /**
   * 拥有者id
   */
  ownerId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *图表vo
 */
export interface ChartVo {
  /**
   * 授权类型
   */
  authorization?: ChartVoAuthorization;
  /**
   * 数据源
   */
  dataSource?: DataSourceVo;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 配置项
   */
  opts?: any;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 图表定位
   */
  position?: any;
  /**
   * 图表类型
   */
  type?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface CodeName {
  /**
   * undefined
   */
  code?: string;
  /**
   * undefined
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *编码名称基础对象vo
 */
export interface CodeNameVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *编码基础对象vo
 */
export interface CodeVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface ConditionItem {
  /**
   * undefined
   */
  formula?: ConditionItemFormula;
  /**
   * undefined
   */
  source?: Property;
  /**
   * undefined
   */
  value?: any;
  /**
   * undefined
   */
  valueType?: ConditionItemValueType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface CustomOption {
  /**
   * undefined
   */
  key?: string;
  /**
   * undefined
   */
  text?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *仪表盘vo
 */
export interface DashboardVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 图表
   */
  cells?: ChartVo[];
  /**
   * 编码
   */
  code?: string;
  /**
   * 全局过滤
   */
  filters?: any;
  /**
   * 全局配置
   */
  global?: any;
  /**
   * 分组id
   */
  groupId?: string;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 主键
   */
  id?: string;
  /**
   * 最后修改时间
   */
  modifiedTime?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 定位
   */
  positions?: Position[];
  /**
   * 是否发布
   */
  published?: boolean;
  /**
   * 最后一次发布时间
   */
  publishedTime?: string;
  /**
   * 是否是快捷链接
   */
  quickLink?: boolean;
  /**
   * 是否移动端可见
   */
  visibleMobile?: boolean;
  /**
   * 是否PC可见
   */
  visiblePc?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *报表数据源列表vo
 */
export interface DataSourceListVo {
  /**
   * 模型数据源
   */
  modelDataSources?: DataSourceTreeVo[];
  /**
   * sql数据源
   */
  sqlDataSources?: DataSourceTreeVo[];
  /**
   * 系统数据源
   */
  systemDataSources?: DataSourceTreeVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *报表数据源树Vo
 */
export interface DataSourceTreeVo {
  /**
   * 子级
   */
  children?: DataSourceTreeVo[];
  /**
   * id
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 节点类型
   */
  nodeType?: DataSourceTreeVoNodeType;
  /**
   * 数据源类型
   */
  type?: DataSourceTreeVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *报表数据源vo
 */
export interface DataSourceVo {
  /**
   * 数据源id
   */
  id?: string;
  /**
   * 数据源名称
   */
  name?: string;
  /**
   * 数据源类型
   */
  type?: DataSourceVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *部门对象
 */
export interface DepartmentVo {
  /**
   * 子级
   */
  children?: DepartmentVo[];
  /**
   * 部门全路径名称
   */
  fullDeptName?: string;
  /**
   * 是否有子级
   */
  hasChildren?: boolean;
  /**
   * 主键
   */
  id?: string;
  /**
   * 部门主管
   */
  manager?: UserVo;
  /**
   * 部门主管id
   */
  managerId?: string;
  /**
   * 部门名称
   */
  name?: string;
  /**
   * 组织id
   */
  orgId?: string;
  /**
   * 组织信息
   */
  organization?: OrganizationVo;
  /**
   * 父级部门对象
   */
  parentDepartment?: DepartmentVo;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 是否是组织对应的部门
   */
  rootOrg?: boolean;
  /**
   * 部门类型：ACTUAL:实体部门，QUOTE:引用部门
   */
  type?: DepartmentVoType;
  /**
   * 组织类型
   */
  unitType?: DepartmentVoUnitType;
  /**
   * 用户数量
   */
  userCounts?: number;
  /**
   * 用户列表
   */
  userList?: UserVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *部门主管更新
 */
export interface DeptManagerUpdateVo {
  /**
   * 部门id
   */
  deptId?: string;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *部门用户id集合对象
 */
export interface DeptUserIdsVO {
  /**
   * 部门id
   */
  deptId?: string;
  /**
   * 用户id集合
   */
  userIds?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface DictOption {
  /**
   * undefined
   */
  code?: string;
  /**
   * undefined
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *报表纬度字段Vo
 */
export interface DimensionPropertyVo {
  /**
   * 别名
   */
  alias?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 数据项类型
   */
  dataType?: DimensionPropertyVoDataType;
  /**
   * 格式化
   */
  format?: any;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 字段类型
   */
  type?: DimensionPropertyVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface DingtalkJsapiSignature {
  /**
   * undefined
   */
  agentId?: string;
  /**
   * undefined
   */
  corpId?: string;
  /**
   * undefined
   */
  nonceStr?: string;
  /**
   * undefined
   */
  signature?: string;
  /**
   * undefined
   */
  timestamp?: number;
  /**
   * undefined
   */
  url?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *文件对象
 */
export interface DocumentFileVo {
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 创建人
   */
  createdBy?: string;
  /**
   * 过期时间
   */
  expireTime?: string;
  /**
   * 文件名称
   */
  fileName?: string;
  /**
   * 文件大小（单位字节）
   */
  fileSize?: number;
  /**
   * ID
   */
  id?: string;
  /**
   * 文件后缀名
   */
  suffix?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *ESB服务分组vo
 */
export interface EsbGroupVo {
  /**
   * 分组id
   */
  id?: string;
  /**
   * 分组名称
   */
  name?: string;
  /**
   * esb服务列表
   */
  serviceList?: EsbServiceVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *ESB调用参数vo
 */
export interface EsbInvokeVo {
  /**
   * 调用参数
   */
  args?: any;
  /**
   * esb服务编码
   */
  code?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *ESB服务定义vo
 */
export interface EsbServiceDefineVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 输入
   */
  input?: JsonSchema;
  /**
   * 名称
   */
  name?: string;
  /**
   * 输出
   */
  output?: JsonSchema;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *ESB服务vo
 */
export interface EsbServiceVo {
  /**
   * 业务规则
   */
  bizRule?: IdNameVo;
  /**
   * 业务服务
   */
  bizService?: CodeNameVo;
  /**
   * 业务服务方法
   */
  bizServiceMethod?: CodeNameVo;
  /**
   * 编码
   */
  code?: string;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 创建人
   */
  creator?: UnitVo;
  /**
   * 外部系统访问权限类型
   */
  externalAppAclType?: EsbServiceVoExternalAppAclType;
  /**
   * 指定外部系统应用访问权限
   */
  externalAppList?: CodeNameVo[];
  /**
   * 分组id
   */
  groupId?: string;
  /**
   * 分组名称
   */
  groupName?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 输入
   */
  input?: JsonSchema;
  /**
   * 系统内应用访问权限类型
   */
  internalAppAclType?: EsbServiceVoInternalAppAclType;
  /**
   * 指定应用访问权限
   */
  internalAppList?: CodeNameVo[];
  /**
   * 名称
   */
  name?: string;
  /**
   * 输出
   */
  output?: JsonSchema;
  /**
   * 运行模式
   */
  workerType?: EsbServiceVoWorkerType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *导出进度vo
 */
export interface ExportProgressVo {
  /**
   * 文档ID
   */
  documentId?: string;
  /**
   * 错误信息，当状态为ERROR时有值
   */
  errorMsg?: string;
  /**
   * PROGRESS 进行中 TEMP 暂存  DONE 已完成
   */
  status?: ExportProgressVoStatus;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *导出参数vo
 */
export interface ExportVo {
  /**
   * 参数
   */
  params?: any;
  /**
   * 导入导出类型
   */
  type?: ExportVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface Expression {
  /**
   * undefined
   */
  editorMark?: string;
  /**
   * undefined
   */
  editorText?: string;
  /**
   * undefined
   */
  formula?: string;
  /**
   * undefined
   */
  precision?: number;
  /**
   * undefined
   */
  targetType?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *外链提交对象Vo
 */
export interface ExternalSubmitVo {
  /**
   * 主表数据
   */
  data?: any;
  /**
   * 子表数据
   */
  sheetDatas?: BizObjectSheetSubmitVo[];
  /**
   * 外链短码
   */
  shortCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *红数字VO
 */
export interface FigureVo {
  /**
   * 待阅任务数量
   */
  circulateCount?: number;
  /**
   * 暂存数量
   */
  draftCount?: number;
  /**
   * 进行中的流程数量
   */
  runtimeInstanceCount?: number;
  /**
   * 发起流程数量
   */
  startInstanceCount?: number;
  /**
   * 未读消息数
   */
  unReadMessageCount?: number;
  /**
   * 待办任务数量
   */
  workItemCount?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *bool标志vo
 */
export interface FlagVo {
  /**
   * 是否标志
   */
  flag?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *表单复制
 */
export interface FormCloneVo {
  /**
   * 表单编码
   */
  code?: string;
  /**
   * 新编码
   */
  newCode?: string;
  /**
   * 新名称
   */
  newName?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *表单编码Vo对象
 */
export interface FormCodesVo {
  /**
   * 表单编码
   */
  codes?: string[];
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *表单数据删除参数VO
 */
export interface FormDataDeleteVo {
  /**
   * 业务数据id
   */
  bizObjectId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *表单数据VO
 */
export interface FormDataVo {
  /**
   * 操作权限
   */
  actionPermission?: ActionPermissionVo;
  /**
   * 表单配置
   */
  bizFormVo?: BizFormVo;
  /**
   * 业务对象数据
   */
  bizObjectData?: any;
  /**
   * 业务对象id
   */
  bizObjectId?: string;
  /**
   * 主模型
   */
  bizSchemaVo?: BizSchemaVo;
  /**
   * 是否允许评论
   */
  commentFlag?: boolean;
  /**
   * 数据项权限
   */
  dataPermissions?: any;
  /**
   * 表单评论列表
   */
  formCommentVoList?: BizFormCommentVo[];
  /**
   * 表单提醒
   */
  formRemind?: FormRemindVo;
  /**
   * 表单类型
   */
  formTypeEnum?: FormDataVoFormTypeEnum;
  /**
   * 主模型编码
   */
  schemaCode?: string;
  /**
   * 表单状态， 默认预览状态
   */
  status?: FormDataVoStatus;
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *表单提醒设置VO
 */
export interface FormRemindVo {
  /**
   * 业务数据id
   */
  bizObjectId?: string;
  /**
   * 提醒内容
   */
  content?: string;
  /**
   * 表单编码
   */
  formCode?: string;
  /**
   * 表单类型
   */
  formType?: FormRemindVoFormType;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 提醒时间
   */
  remindTime?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 提醒标题
   */
  title?: string;
  /**
   * 任务id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型功能树VO
 */
export interface FunTreeVo {
  /**
   * 子级
   */
  children?: FunTreeVo[];
  /**
   * 编码
   */
  code?: string;
  /**
   * 启用状态
   */
  enabled?: boolean;
  /**
   * 功能类型
   */
  funType?: FunTreeVoFunType;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 主键
   */
  id?: string;
  /**
   * id层级路径
   */
  idPath?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 发布状态
   */
  published?: boolean;
  /**
   * 是否是快捷链接
   */
  quickLink?: boolean;
  /**
   * 排序索引
   */
  sortIndex?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *获取rsa公钥
 */
export interface GenKeyResultVo {
  /**
   * 生成批次号
   */
  genBatchId?: string;
  /**
   * 公钥
   */
  publicKey?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *id基础对象vo
 */
export interface IDVo {
  /**
   * id
   */
  id?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface Icon {
  /**
   * undefined
   */
  color?: string;
  /**
   * undefined
   */
  iconKey?: string;
  /**
   * undefined
   */
  picId?: string;
  /**
   * undefined
   */
  type?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *id下标基础对象vo
 */
export interface IdIndexVo {
  /**
   * id
   */
  id?: string;
  /**
   * 下标
   */
  index?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface IdName {
  /**
   * undefined
   */
  id?: string;
  /**
   * undefined
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *id名称基础对象vo
 */
export interface IdNameVo {
  /**
   * id
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *导入进度vo
 */
export interface ImportProgressVo {
  /**
   * 文档ID
   */
  documentId?: string;
  /**
   * 错误信息，当状态为ERROR时有值
   */
  errorMsg?: string;
  /**
   * 失败条数
   */
  errorTotal?: number;
  /**
   * ERROR 失败 PROGRESS 进行中 TEMP 暂存  DONE 已完成
   */
  status?: ImportProgressVoStatus;
  /**
   * 成功条数
   */
  successTotal?: number;
  /**
   * 总条数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *导入参数vo
 */
export interface ImportVo {
  /**
   * 是否覆盖导入
   */
  cover?: boolean;
  /**
   * 文档id
   */
  documentId?: string;
  /**
   * 参数
   */
  params?: any;
  /**
   * 导入导出类型
   */
  type?: ImportVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程节点轨迹VO
 */
export interface InstanceActivityVo {
  /**
   * 进行中的审批人
   */
  activatedApprover?: ParticipantVo[];
  /**
   * 节点编码
   */
  activityCode?: string;
  /**
   * 节点名称
   */
  activityName?: string;
  /**
   * 节点状态
   */
  activityStatus?: InstanceActivityVoActivityStatus;
  /**
   * 节点类型
   */
  activityType?: InstanceActivityVoActivityType;
  /**
   * 审批日志
   */
  approvalLogList?: ApprovalLogVo[];
  /**
   * 传阅列表
   */
  circulateList?: ActivityCirculateVo[];
  /**
   * 节点耗时
   */
  duration?: number;
  /**
   * 节点完成时间
   */
  finishTime?: string;
  /**
   * 是否自动通过
   */
  skip?: boolean;
  /**
   * 节点开始时间
   */
  startTime?: string;
  /**
   * 子流程
   */
  subInstanceList?: SubInstanceLogVo[];
  /**
   * 未启动的审批人
   */
  suspendApprover?: ParticipantVo[];
  /**
   * 未完成的审批人
   */
  unfinishedApprover?: ParticipantVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程取消VO
 */
export interface InstanceCancelVo {
  /**
   * 流程id
   */
  instanceId?: string;
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程操作日志Vo
 */
export interface InstanceLogVo {
  /**
   * 耗时
   */
  duration?: number;
  /**
   * ip
   */
  ip?: string;
  /**
   * 操作行为
   */
  operation?: string;
  /**
   * 操作平台
   */
  platform?: string;
  /**
   * 操作时间
   */
  time?: string;
  /**
   * 操作人
   */
  user?: UnitVo;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *激活流程节点VO
 */
export interface InstanceNodeActivatelVo {
  /**
   * 流程id
   */
  instanceId?: string;
  /**
   * 节点id
   */
  nodeId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *调整节点参与者VO
 */
export interface InstanceNodeAdjustParticipantVo {
  /**
   * 流程id
   */
  instanceId?: string;
  /**
   * 节点id
   */
  nodeId?: string;
  /**
   * 参与者id
   */
  participants?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *取消流程节点VO
 */
export interface InstanceNodeCancelVo {
  /**
   * 流程id
   */
  instanceId?: string;
  /**
   * 节点id
   */
  nodeIds?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程跟踪VO
 */
export interface InstanceTrackVo {
  /**
   * 权限
   */
  actionPermission?: ActionPermissionVo;
  /**
   * 流程节点审批日志
   */
  approvalLogs?: InstanceActivityVo[];
  /**
   * 流程基本信息
   */
  instance?: WorkflowInstanceVo;
  /**
   * 流程节点审批日志-移动端
   */
  mobileApprovalLogs?: InstanceActivityVo[];
  /**
   * 运行时节点信息-节点名称、参与者
   */
  runtimeActivitys?: InstanceActivityVo[];
  /**
   * 版本号
   */
  version?: number;
  /**
   * 流程模版
   */
  workflowTemplate?: any;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程催办VO
 */
export interface InstanceUrgeVo {
  /**
   * 流程id
   */
  instanceId?: string;
  /**
   * 催办消息
   */
  msg?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface JsonSchema {
  /**
   * undefined
   */
  code?: string;
  /**
   * undefined
   */
  items?: JsonSchema;
  /**
   * undefined
   */
  name?: string;
  /**
   * undefined
   */
  op?: JsonSchemaOp;
  /**
   * undefined
   */
  propertys?: JsonSchema[];
  /**
   * undefined
   */
  schemaCode?: string;
  /**
   * undefined
   */
  type?: string;
  /**
   * undefined
   */
  value?: any;
  /**
   * undefined
   */
  valueType?: JsonSchemaValueType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *列表打印数据查询vo
 */
export interface ListTemplateDataQueryVo {
  /**
   * id集合
   */
  ids?: string[];
  /**
   * 是否加载审批日志
   */
  loadApprovalInfo?: boolean;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 子表编码列表
   */
  sheetCodeList?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *列表打印数据vo
 */
export interface ListTemplateDataVo {
  /**
   * 主表数据项列表
   */
  bizPropertyVoList?: BizPropertyVo[];
  /**
   * 主表数据
   */
  dataMapList?: any[];
  /**
   * 流程实例信息
   */
  instanceInfoMap?: any;
  /**
   * 审批日志数据
   */
  logMap?: any;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *加载表单数据参数对象VO
 */
export interface LoadFormDataParamVo {
  /**
   * 业务对象id
   */
  bizObjectId?: string;
  /**
   * 是否编辑
   */
  edit?: boolean;
  /**
   * 表单编码
   */
  formCode?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *加载表单子表数据参数对象VO
 */
export interface LoadFormSheetDataParamVo {
  /**
   * 业务对象数据
   */
  bizObjectData?: any;
  /**
   * 业务对象id
   */
  bizObjectId?: string;
  /**
   * 表单类型
   */
  formType?: LoadFormSheetDataParamVoFormType;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 子表编码，查询子表数据时使用
   */
  sheetCode?: string;
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *加载流程表单数据参数对象VO
 */
export interface LoadWorkflowFormDataParamVo {
  /**
   * 节点编码
   */
  activityCode?: string;
  /**
   * 是否编辑
   */
  edit?: boolean;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 子表编码，查询子表数据时使用
   */
  sheetCode?: string;
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 流程模版编码
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *登陆日志查询参数Vo
 */
export interface LoginLogSearchVo {
  /**
   * 分页页数
   */
  pageNum?: number;
  /**
   * 分页条数
   */
  pageSize?: number;
  /**
   * 操作时间
   */
  times?: string[];
  /**
   * 用户ID
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *登陆日志Vo
 */
export interface LoginLogVo {
  /**
   * 登陆ip
   */
  ip?: string;
  /**
   * 组织名称
   */
  orgName?: string;
  /**
   * 登陆平台
   */
  platform?: string;
  /**
   * 登陆时间
   */
  time?: string;
  /**
   * 登陆类型
   */
  type?: LoginLogVoType;
  /**
   * 登陆用户
   */
  userName?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *消息Vo
 */
export interface MessageVo {
  /**
   * 内容
   */
  content?: string;
  /**
   * 消息id
   */
  id?: string;
  /**
   * 链接配置
   */
  linkConfig?: any;
  /**
   * 链接类型
   */
  linkType?: string;
  /**
   * 是否已读
   */
  read?: boolean;
  /**
   * 接收时间
   */
  receiveTime?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务方法调用参数vo对象
 */
export interface MethodInvokeParamVo {
  /**
   * 参数
   */
  args?: any;
  /**
   * 业务方法编码
   */
  methodCode?: string;
  /**
   * 分页开始行
   */
  pageNum?: number;
  /**
   * 分页查询记录条数
   */
  pageSize?: number;
  /**
   * 业务服务编码
   */
  serviceCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *报表指标字段Vo
 */
export interface MetricPropertyVo {
  /**
   * 聚合函数
   */
  agg?: MetricPropertyVoAgg;
  /**
   * 别名
   */
  alias?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 数据项类型
   */
  dataType?: MetricPropertyVoDataType;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 字段类型
   */
  type?: MetricPropertyVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型功能重命令VO
 */
export interface ModelFunRenameVo {
  /**
   * id
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 类型
   */
  type?: ModelFunRenameVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型功能排序VO
 */
export interface ModelFunSortVo {
  /**
   * id
   */
  id?: string;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 排序索引
   */
  sortIndex?: number;
  /**
   * 类型
   */
  type?: ModelFunSortVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *移动图表参数vo
 */
export interface MoveChartVo {
  /**
   * 仪表盘id
   */
  id?: string;
  /**
   * 图表定位
   */
  positions?: Position[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *名称基础对象vo
 */
export interface NameVo {
  /**
   * 名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *ocr支持的类型配置Vo
 */
export interface OcrConfig {
  /**
   * 别名
   */
  alias?: string;
  /**
   * 返回的字段
   */
  propertys?: Property[];
  /**
   * ocr识别类型
   */
  type?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *ocr识别参数Vo
 */
export interface OcrRecognizeParamVo {
  /**
   * 识别文件id
   */
  documentId?: string;
  /**
   * 类型
   */
  type?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *OLAP过滤条件vo
 */
export interface OlapFilterVo {
  /**
   * undefined
   */
  dynamic?: ConditionItem[][];
  /**
   * undefined
   */
  source?: ConditionItem[][];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *OLAP数据分析查询vo
 */
export interface OlapQueryVo {
  /**
   * undefined
   */
  authorization?: OlapQueryVoAuthorization;
  /**
   * 图表id
   */
  chartId?: string;
  /**
   * 列维度
   */
  columnDimensions?: DimensionPropertyVo[];
  /**
   * 数据源id
   */
  dataSourceId?: string;
  /**
   * 数据源类型
   */
  dataSourceType?: OlapQueryVoDataSourceType;
  /**
   * 维度
   */
  dimensions?: DimensionPropertyVo[];
  /**
   * 过滤条件
   */
  filters?: OlapFilterVo;
  /**
   * 结果条数
   */
  limit?: number;
  /**
   * 指标
   */
  metrics?: MetricPropertyVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 行维度
   */
  rowDimensions?: DimensionPropertyVo[];
  /**
   * 排序
   */
  sorts?: SortPropertyVo[];
  /**
   * 图表类型
   */
  type?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务对象提交对象Vo
 */
export interface OpenApiBizObjectBatchSubmitVo {
  /**
   * 业务数据
   */
  datas?: any[];
  /**
   * 主键
   */
  id?: string;
  /**
   * 数据拥有者部门id，为空则取主部门id
   */
  ownerDeptId?: string;
  /**
   * 数据拥有者id
   */
  ownerId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务对象提交对象Vo
 */
export interface OpenApiBizObjectSubmitVo {
  /**
   * 业务数据
   */
  data?: any;
  /**
   * 主键
   */
  id?: string;
  /**
   * 数据拥有者部门id，为空则取主部门id
   */
  ownerDeptId?: string;
  /**
   * 数据拥有者id
   */
  ownerId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *部门详情查询请求vo
 */
export interface OpenApiDeptGetRequestVo {
  /**
   * 部门id
   */
  deptId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *部门列表查询请求vo
 */
export interface OpenApiDeptQueryRequestVo {
  /**
   * 是否查询子部门
   */
  fetchChild?: boolean;
  /**
   * 父部门Id
   */
  parentId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *部门响应vo
 */
export interface OpenApiDeptResponseVo {
  /**
   * 主键
   */
  id?: string;
  /**
   * 部门层级
   */
  level?: number;
  /**
   * 部门主管id
   */
  managerId?: string;
  /**
   * 部门名称
   */
  name?: string;
  /**
   * 组织id
   */
  orgId?: string;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *加载任务表单数据参数VO
 */
export interface OpenApiLoadWorkItemFormDataParamVo {
  /**
   * 任务拥有者id
   */
  userId?: string;
  /**
   * 任务id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *查询工作任务参数VO
 */
export interface OpenApiSearchWorkItemVo {
  /**
   * 节点名称
   */
  activityName?: string;
  /**
   * 审批时间
   */
  approvalTime?: string[];
  /**
   * 审批人
   */
  approver?: string;
  /**
   * 作废时间
   */
  cancelTime?: string[];
  /**
   * 流程实例名称
   */
  instanceName?: string;
  /**
   * 流程发起时间
   */
  instanceStartTime?: string[];
  /**
   * 流程实例状态
   */
  instanceStatus?: OpenApiSearchWorkItemVoInstanceStatus;
  /**
   * 发起人
   */
  originator?: UnitVo;
  /**
   * 分页页数
   */
  pageNum?: number;
  /**
   * 分页条数
   */
  pageSize?: number;
  /**
   * 接收时间
   */
  receiveTime?: string[];
  /**
   * 任务类型
   */
  searchWorkItemType?: OpenApiSearchWorkItemVoSearchWorkItemType;
  /**
   * 单据号
   */
  sequenceNo?: string;
  /**
   * 任务状态
   */
  status?: OpenApiSearchWorkItemVoStatus;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 流程定义编码
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *openapi接口发起流程VO
 */
export interface OpenApiStartWorkflowVo {
  /**
   * 表单数据
   */
  data?: any;
  /**
   * 指定发起人部门id，为空默认是发起人主部门
   */
  originatorDepartmentId?: string;
  /**
   * 发起人id
   */
  originatorId?: string;
  /**
   * 流程编码
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签详情查询请求vo
 */
export interface OpenApiTagGetRequestVo {
  /**
   * 标签Id
   */
  tagId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签组详情查询请求vo
 */
export interface OpenApiTagGroupGetRequestVo {
  /**
   * 标签组id
   */
  tagGroupId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签组列表查询请求vo
 */
export interface OpenApiTagGroupQueryRequestVo {
  /**
   * 组织id
   */
  orgId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签组响应vo
 */
export interface OpenApiTagGroupResponseVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 组织Id
   */
  orgId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签列表查询请求vo
 */
export interface OpenApiTagQueryRequestVo {
  /**
   * 组织id
   */
  orgId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签响应vo
 */
export interface OpenApiTagResponseVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 标签组ID
   */
  groupId?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 组织Id
   */
  orgId?: string;
  /**
   * 标签下用户列表
   */
  tagUnitList?: TagUnitVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户详情查询请求vo
 */
export interface OpenApiUserGetRequestVo {
  /**
   * 父部门Id
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户列表查询请求vo
 */
export interface OpenApiUserQueryRequestVo {
  /**
   * 部门Id
   */
  deptId?: string;
  /**
   * 是否查询子部门用户
   */
  fetchChild?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户响应vo
 */
export interface OpenApiUserResponseVo {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 用户账号
   */
  code?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 工号
   */
  employeeNo?: string;
  /**
   * 入职日期
   */
  entryDate?: string;
  /**
   * 性别
   */
  gender?: number;
  /**
   * 主键
   */
  id?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 是否是主管
   */
  isManager?: any;
  /**
   * 主部门id
   */
  mainDepartmentId?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 用户名称
   */
  name?: string;
  /**
   * 组织ID
   */
  orgId?: string;
  /**
   * 兼职部门Id
   */
  partTimeDepartmentIds?: string[];
  /**
   * 职位
   */
  position?: string;
  /**
   * 离职日期
   */
  quitDate?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 标签Id列表
   */
  tagIds?: string[];
  /**
   * 办公电话
   */
  telphone?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务提交VO
 */
export interface OpenApiWorkItemSubmitVo {
  /**
   * 审批意见
   */
  comment?: string;
  /**
   * 表单数据
   */
  data?: any;
  /**
   * 提交任务使用的部门id
   */
  departmentId?: string;
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织归属校验查询Vo对象
 */
export interface OrgAscriptionCheckVo {
  /**
   * 左：用户、部门id
   */
  lefts?: UnitVo[];
  /**
   * 操作符，只支持：属于、不属于、拥有、不拥有
   */
  op?: OrgAscriptionCheckVoOp;
  /**
   * 右：用户、部门id
   */
  rights?: UnitVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface OrgConfigParamsBo {
  /**
   * undefined
   */
  code?: string;
  /**
   * undefined
   */
  desc?: string;
  /**
   * undefined
   */
  name?: string;
  /**
   * undefined
   */
  required?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织记录查询VO
 */
export interface OrgSyncRecordQueryVo {
  /**
   * 处理时间区间
   */
  beginTime?: string;
  /**
   * 处理时间区间
   */
  endTime?: string;
  /**
   * 组织Id
   */
  orgId?: string;
  /**
   * 页码
   */
  pageNum?: number;
  /**
   * 页容量
   */
  pageSize?: number;
  /**
   * 状态
   */
  status?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织同步记录vo
 */
export interface OrgSyncRecordVo {
  /**
   * 错误信息
   */
  errorMsg?: string;
  /**
   * 增量事件类型
   */
  event?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 组织Id
   */
  orgId?: string;
  /**
   * 组织名称
   */
  orgName?: string;
  /**
   * 处理时间
   */
  processTime?: string;
  /**
   * 重试次数
   */
  retryTimes?: number;
  /**
   * 发送时间
   */
  sendTime?: string;
  /**
   * 执行结果 1:成功 0:失败
   */
  status?: boolean;
  /**
   * 参数
   */
  syncJson?: string;
  /**
   * 同步类型，fullSync:全量同步,incrementSync:增量同步
   */
  syncType?: OrgSyncRecordVoSyncType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织架构图vo
 */
export interface OrganizationChartVo {
  /**
   * 子级
   */
  children?: OrganizationChartVo[];
  /**
   * 部门id
   */
  id?: string;
  /**
   * 部门名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织推送监听配置
 */
export interface OrganizationPushConfigVo {
  /**
   * 主键
   */
  id?: string;
  /**
   * 监听组织变更事件
   */
  listenEventList?: OrganizationPushConfigVoListenEventList[];
  /**
   * 维护类型：SYS：自维护，DINGTALK:钉钉，WECHAT:微信
   */
  maintainType?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 组织Id
   */
  orgId?: string;
  /**
   * 组织集成配置
   */
  relatedConfig?: string;
  /**
   * 关联id
   */
  relatedId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织VO对象
 */
export interface OrganizationVo {
  /**
   * 简称
   */
  abbreviation?: string;
  /**
   * 对应的部门ID
   */
  departmentId?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 图标
   */
  logo?: string;
  /**
   * 维护类型：SYS：自维护，DINGTALK:钉钉，WECHAT:微信
   */
  maintainType?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 上级部门ID
   */
  parentDepartmentId?: string;
  /**
   * 上级部门名称
   */
  parentDepartmentName?: string;
  /**
   * 组织集成配置
   */
  relatedConfig?: string;
  /**
   * 关联id
   */
  relatedId?: string;
  /**
   * 组织状态: ENABLE:启用，DISABLE：禁用
   */
  status?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页查询参数对象VO
 */
export interface PageQueryVo {
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOAdminVo {
  /**
   * 查询数据
   */
  list?: AdminVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOBizBusLogVo {
  /**
   * 查询数据
   */
  list?: BizBusLogVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOBizRuleLogVo {
  /**
   * 查询数据
   */
  list?: BizRuleLogVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOBizTemporaryVo {
  /**
   * 查询数据
   */
  list?: BizTemporaryVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOInstanceLogVo {
  /**
   * 查询数据
   */
  list?: InstanceLogVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOLoginLogVo {
  /**
   * 查询数据
   */
  list?: LoginLogVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVO {
  /**
   * 查询数据
   */
  list?: any[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOMessageVo {
  /**
   * 查询数据
   */
  list?: MessageVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOOrgSyncRecordVo {
  /**
   * 查询数据
   */
  list?: OrgSyncRecordVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOSysJobVo {
  /**
   * 查询数据
   */
  list?: SysJobVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOTagUnitVo {
  /**
   * 查询数据
   */
  list?: TagUnitVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOUserVo {
  /**
   * 查询数据
   */
  list?: UserVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOWorkItemVo {
  /**
   * 查询数据
   */
  list?: WorkItemVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *分页对象
 */
export interface PageVOWorkflowInstanceVo {
  /**
   * 查询数据
   */
  list?: WorkflowInstanceVo[];
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 总记录数
   */
  total?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *参与者信息VO
 */
export interface ParticipantVo {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 部门名称
   */
  departmentName?: string;
  /**
   * 是否是委托任务
   */
  entrust?: boolean;
  /**
   * ID
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 来自谁-用户id，转办、协办、加签、委托任务有值
   */
  sourceUserId?: string;
  /**
   * 来自谁-用户名称，转办、协办、加签、委托任务有值
   */
  sourceUserName?: string;
  /**
   * 任务类型
   */
  workItemType?: ParticipantVoWorkItemType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface PortalAppDataPerm {
  /**
   * 管理员角色信息
   */
  adminRoleVo?: AdminRoleVo;
  /**
   * 前台数据权限对应的组织范围
   */
  unitList?: UnitVo[];
  /**
   * 有权限的用户
   */
  userList?: UnitVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface PortalUserUpdateVo {
  /**
   * 主键
   */
  id?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface Position {
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *预测参与者VO
 */
export interface PredictParticipantVo {
  /**
   * 表单数据
   */
  data?: any;
  /**
   * 发起人部门id
   */
  originatorDepartmentId?: string;
  /**
   * 发起人id
   */
  originatorId?: string;
  /**
   * 流程编码
   */
  workflowCode?: string;
  /**
   * 流程版本号
   */
  workflowVersion?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface Property {
  /**
   * undefined
   */
  code?: string;
  /**
   * undefined
   */
  name?: string;
  /**
   * undefined
   */
  schemaCode?: string;
  /**
   * undefined
   */
  schemaName?: string;
  /**
   * undefined
   */
  type?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface PropertyOption {
  /**
   * undefined
   */
  bizServerOption?: BizServerOption;
  /**
   * undefined
   */
  customOptions?: CustomOption[];
  /**
   * undefined
   */
  dataSourceType?: PropertyOptionDataSourceType;
  /**
   * undefined
   */
  dict?: DictOption;
  /**
   * undefined
   */
  dictSortType?: PropertyOptionDictSortType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface PropertyPermissionTrait {
  /**
   * undefined
   */
  editable?: boolean;
  /**
   * undefined
   */
  required?: boolean;
  /**
   * undefined
   */
  visible?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *查询组织树参数对象
 */
export interface QueryUnitTreeVo {
  /**
   * 搜索关键字
   */
  keyword?: string;
  /**
   * 组织id，查询指定组织，为空返回所有组织
   */
  orgIds?: string[];
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 根节点id
   */
  roots?: string[];
  /**
   * 组织树类型,DEPARTMENT:部门,USER:用户
   */
  unitType?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *查询用户
 */
export interface QueryUserVo {
  /**
   * 搜索关键字
   */
  keyword?: string;
  /**
   * 页码
   */
  pageIndex?: number;
  /**
   * 页容量
   */
  pageSize?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *快捷链接功能vo
 */
export interface QuickLinkFunVo {
  /**
   * 功能编码
   */
  code?: string;
  /**
   * 类型
   */
  type?: QuickLinkFunVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *快捷链接
 */
export interface QuickLinkVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 表单编码，当类型为数据模型时有值
   */
  formCode?: string;
  /**
   * 功能编码
   */
  funCode?: string;
  /**
   * 功能id
   */
  funId?: string;
  /**
   * 功能名称
   */
  funName?: string;
  /**
   * 功能类型
   */
  funType?: QuickLinkVoFunType;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface Relation {
  /**
   * undefined
   */
  selfCode?: string;
  /**
   * undefined
   */
  selfType?: string;
  /**
   * undefined
   */
  targetCode?: string;
  /**
   * undefined
   */
  targetType?: RelationTargetType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *删除数据项返回结果vo对象
 */
export interface RemovePropertyVo {
  /**
   * 删除失败原因-存在业务规则引用
   */
  bizRuleQuotes?: BizRuleQuotePropertyVo[];
  /**
   * 删除失败原因-存在数据条数
   */
  dataCount?: number;
  /**
   * 删除失败原因描述
   */
  desc?: string;
  /**
   * 是否成功删除
   */
  success?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyAdminRolePermissionRangeVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AdminRolePermissionRangeVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyAdminRoleVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AdminRoleVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyAdvancedDataSourceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AdvancedDataSourceVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyAppGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AppGroupVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyAppPackageVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AppPackageVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyAppPerGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AppPerGroupVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyAppPermissionSettingVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AppPermissionSettingVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizDataSourceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizDataSourceVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizFormCommentVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizFormCommentVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizFormTemplateVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizFormTemplateVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizFormVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizFormVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizMenuVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizMenuVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizPropertyVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizPropertyVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizRulePropertyVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizRulePropertyVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizRuleVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizRuleVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizSchemaEventVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizSchemaEventVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizSchemaGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizSchemaGroupVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizSchemaVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizSchemaVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizServiceCategoryVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizServiceCategoryVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizServiceMethodVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizServiceMethodVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizServiceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizServiceVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyBizViewVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizViewVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyChartVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: ChartVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyDashboardVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: DashboardVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyDataSourceListVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: DataSourceListVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyDepartmentVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: DepartmentVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyDingtalkJsapiSignature {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: DingtalkJsapiSignature;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyDocumentFileVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: DocumentFileVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyEsbServiceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: EsbServiceVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyExportProgressVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: ExportProgressVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyFigureVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: FigureVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyFormDataVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: FormDataVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyFormRemindVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: FormRemindVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyGenKeyResultVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: GenKeyResultVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyImportProgressVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: ImportProgressVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyInstanceTrackVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: InstanceTrackVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListTemplateDataVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: ListTemplateDataVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListAdvancedDataSourceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AdvancedDataSourceVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListAppGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AppGroupVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListAppPackageVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AppPackageVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListAppPerGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: AppPerGroupVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizDataSourceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizDataSourceVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizFormCommentVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizFormCommentVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizFormTemplateVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizFormTemplateVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizFormVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizFormVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizPropertyFormulaVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizPropertyFormulaVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizPropertyVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizPropertyVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizRulePropertyVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizRulePropertyVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizRuleVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizRuleVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizSchemaEventVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizSchemaEventVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizSchemaVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizSchemaVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizServiceCategoryVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizServiceCategoryVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizServiceMethodVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizServiceMethodVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizServiceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizServiceVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListBizViewVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: BizViewVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListCalculateResultVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: CalculateResultVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListDepartmentVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: DepartmentVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListEsbGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: EsbGroupVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListEsbServiceDefineVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: EsbServiceDefineVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListFunTreeVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: FunTreeVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListIdNameVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: IdNameVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListInstanceActivityVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: InstanceActivityVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyList {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: any[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListMessageVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: MessageVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListOcrConfig {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OcrConfig[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListOpenApiDeptResponseVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OpenApiDeptResponseVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListOpenApiTagGroupResponseVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OpenApiTagGroupResponseVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListOpenApiTagResponseVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OpenApiTagResponseVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListOpenApiUserResponseVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OpenApiUserResponseVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListOrganizationPushConfigVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OrganizationPushConfigVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListOrganizationVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OrganizationVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListQuickLinkVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: QuickLinkVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListSchemaPermissionVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SchemaPermissionVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListSchemaPropertyPermissionVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SchemaPropertyPermissionVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListSecurityClientVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SecurityClientVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListSupportOrgConfigVO {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SupportOrgConfigVO[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListSystemDictConfigVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SystemDictConfigVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListSystemDictGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SystemDictGroupVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListTagGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: TagGroupVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListTagTreeVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: TagTreeVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListTreeNode {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: TreeNode[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListUnitTreeVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: UnitTreeVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListUnitVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: UnitVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListUserCommonsVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: UserCommonsVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListUserVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: UserVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListValidateErrorMessageVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: ValidateErrorMessageVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListWorkItemVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkItemVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListWorkflowDelegateVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowDelegateVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListWorkflowDeploymentVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowDeploymentVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListWorkflowHeaderVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowHeaderVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListWorkflowNodeParticipantVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowNodeParticipantVo[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListobject {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: any[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyListstring {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: string[];
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBody {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: any;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyOpenApiDeptResponseVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OpenApiDeptResponseVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyOpenApiTagGroupResponseVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OpenApiTagGroupResponseVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyOpenApiTagResponseVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OpenApiTagResponseVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyOpenApiUserResponseVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OpenApiUserResponseVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyOrganizationChartVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OrganizationChartVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyOrganizationVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: OrganizationVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOAdminVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOAdminVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOBizBusLogVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOBizBusLogVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOBizRuleLogVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOBizRuleLogVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOBizTemporaryVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOBizTemporaryVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOInstanceLogVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOInstanceLogVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOLoginLogVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOLoginLogVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVO {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVO;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOMessageVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOMessageVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOOrgSyncRecordVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOOrgSyncRecordVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOSysJobVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOSysJobVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOTagUnitVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOTagUnitVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOUserVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOUserVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOWorkItemVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOWorkItemVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyPageVOWorkflowInstanceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: PageVOWorkflowInstanceVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyRemovePropertyVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: RemovePropertyVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodySchemaPermissionVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SchemaPermissionVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodySecurityClientVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SecurityClientVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodySummaryByAppQueryVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SummaryByAppQueryVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodySummaryByOrgResultVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SummaryByOrgResultVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodySysJobVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SysJobVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodySystemDictVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SystemDictVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodySystemInfoVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SystemInfoVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodySystemLogInfoVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: SystemLogInfoVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyTagGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: TagGroupVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyTagVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: TagVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyUnitGroupVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: UnitGroupVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyUnitTreeSearchVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: UnitTreeSearchVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyUser {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: UserMappingInfoVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyUserVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: UserVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyViewCorrelationFormVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: ViewCorrelationFormVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyVoid {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyWorkflowDraftVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowDraftVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyWorkflowFormDataVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowFormDataVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyWorkflowHeaderVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowHeaderVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyWorkflowInstanceVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowInstanceVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyWorkflowNodeParticipantVo {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WorkflowNodeParticipantVo;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyWxJsapiSignature {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: WxJsapiSignature;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyboolean {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: boolean;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodyobject {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: any;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *通用响应报文
 */
export interface ResBodystring {
  /**
   * 业务key
   */
  bizKey?: string;
  /**
   * 状态码: 成功：200
   */
  code?: number;
  /**
   * 数据
   */
  data?: string;
  /**
   * 错误信息
   */
  msg?: string;
  /**
   * 调用链id
   */
  traceId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *重置用户密码参数VO
 */
export interface ResetUserPwdVo {
  /**
   * 密钥生成批次id
   */
  batchId?: string;
  /**
   * 用户密码
   */
  password?: string;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *运行时预测参与者VO
 */
export interface RuntimePredictParticipantVo {
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 节点id
   */
  nodeId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *保存角色权限Vo对象
 */
export interface SaveAdminRolePermissionVo {
  /**
   * 角色id
   */
  id?: string;
  /**
   * 角色id
   */
  name?: string;
  /**
   * 角色权限
   */
  permission?: AdminRolePermissionVo;
  /**
   * 角色用户
   */
  users?: UnitVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *保存管理员VO
 */
export interface SaveAdminVo {
  /**
   * 用户ID
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *保存模型权限VO
 */
export interface SaveSchemaPermissionVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 权限组id
   */
  groupId?: string;
  /**
   * 模型权限
   */
  schemaPermissions?: SchemaPermissionVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *保存流程模版配置vo
 */
export interface SaveWorkflowTemplateVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 流程编码
   */
  code?: string;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 主键
   */
  id?: string;
  /**
   * 流程名称
   */
  name?: string;
  /**
   * 是否已发布
   */
  published?: boolean;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 外链短码
   */
  shortLinkCode?: string;
  /**
   * 是否启用外链
   */
  shortLinkEnable?: boolean;
  /**
   * 流程标题
   */
  title?: string;
  /**
   * 移动端是否可见
   */
  visibleMobile?: boolean;
  /**
   * pc是否可见
   */
  visiblePc?: boolean;
  /**
   * 可见类型：ALL：全部人员，ASSIGN：部分人员
   */
  visibleType?: SaveWorkflowTemplateVoVisibleType;
  /**
   * 流程模版
   */
  workflowTemplate?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *调度配置vo
 */
export interface SchedulerConfVo {
  /**
   * 调度配置
   */
  scheduleConf?: string;
  /**
   * 调度类型
   */
  scheduleType?: SchedulerConfVoScheduleType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *复制模型vo
 */
export interface SchemaCloneVo {
  /**
   * 分组id
   */
  groupId?: string;
  /**
   * 新编码
   */
  newCode?: string;
  /**
   * 新名称
   */
  newName?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型数据权限资源VO
 */
export interface SchemaDataPermissionResource {
  /**
   * 新增权限
   */
  create?: boolean;
  /**
   * 权限类型
   */
  defaultValue?: SchemaDataPermissionResourceDefaultValue;
  /**
   * 删除权限
   */
  delete?: boolean;
  /**
   * 权限资源
   */
  resources?: CodeNameVo[];
  /**
   * 修改权限
   */
  update?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型数据权限VO
 */
export interface SchemaDataPermissionVo {
  /**
   * 数据权限为自定义时：自定义条件
   */
  conditionWrap?: ConditionItem[][];
  /**
   * 新增权限
   */
  create?: boolean;
  /**
   * 删除权限
   */
  delete?: boolean;
  /**
   * 权限类型
   */
  type?: SchemaDataPermissionVoType;
  /**
   * 修改权限
   */
  update?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型权限资源VO
 */
export interface SchemaPermissionResource {
  /**
   * 数据权限
   */
  dataPermission?: SchemaDataPermissionResource;
  /**
   * 功能类型
   */
  funType?: SchemaPermissionResourceFunType;
  /**
   * 数据项权限
   */
  propertyPermissions?: SchemaPropertyPermissionVo[];
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 模型名称
   */
  schemaName?: string;
  /**
   * 视图权限
   */
  viewPermissions?: SchemaViewPermissionResourceVo[];
  /**
   * 可见权限
   */
  visible?: boolean;
  /**
   * 流程发起权限
   */
  workflowPermissions?: SchemaWorkflowPermission[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型权限VO
 */
export interface SchemaPermissionVo {
  /**
   * 数据权限
   */
  dataPermission?: SchemaDataPermissionVo;
  /**
   * 数据项权限
   */
  propertyPermissions?: SchemaPropertyPermissionVo[];
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 模型名称
   */
  schemaName?: string;
  /**
   * 按钮权限
   */
  viewActionPermissions?: string[];
  /**
   * 视图权限
   */
  viewPermissions?: SchemaViewPermissionVo[];
  /**
   * 可见权限
   */
  visible?: boolean;
  /**
   * 流程发起权限
   */
  workflowPermissions?: SchemaWorkflowPermission[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型数据项编码vo
 */
export interface SchemaPropertyCodeVo {
  /**
   * 数据项编码
   */
  propertyCode?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *数据项权限VO
 */
export interface SchemaPropertyPermissionVo {
  /**
   * 新增时权限
   */
  add?: PropertyPermissionTrait;
  /**
   * 编码
   */
  code?: string;
  /**
   * 编辑时权限
   */
  edit?: PropertyPermissionTrait;
  /**
   * 名称
   */
  name?: string;
  /**
   * 预览时权限
   */
  view?: PropertyPermissionTrait;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *模型标题vo
 */
export interface SchemaTitleVo {
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 数据标题
   */
  title?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *视图权限资源VO
 */
export interface SchemaViewPermissionResourceVo {
  /**
   * 按钮
   */
  btns?: CodeNameVo[];
  /**
   * 视图编码
   */
  code?: string;
  /**
   * 视图名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *视图权限VO
 */
export interface SchemaViewPermissionVo {
  /**
   * 视图按钮
   */
  btns?: string[];
  /**
   * 视图编码
   */
  code?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程发起权限资源VO
 */
export interface SchemaWorkflowPermission {
  /**
   * 流程编码
   */
  code?: string;
  /**
   * 移动端显示
   */
  mobileDisplay?: boolean;
  /**
   * 流程名称
   */
  name?: string;
  /**
   * PC显示
   */
  pcDisplay?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *查询定时任务vo
 */
export interface SearchJobVo {
  /**
   * 执行处理器
   */
  executorHandler?: string;
  /**
   * 任务描述
   */
  jobDesc?: string;
  /**
   * 开始页数
   */
  pageNum?: number;
  /**
   * 每页显示数量
   */
  pageSize?: number;
  /**
   * 触发状态
   */
  triggerStatus?: SearchJobVoTriggerStatus;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *查询工作任务参数VO
 */
export interface SearchWorkItemVo {
  /**
   * 节点名称
   */
  activityName?: string;
  /**
   * 审批时间
   */
  approvalTime?: string[];
  /**
   * 审批人
   */
  approver?: string;
  /**
   * 作废时间
   */
  cancelTime?: string[];
  /**
   * 流程实例名称
   */
  instanceName?: string;
  /**
   * 流程发起时间
   */
  instanceStartTime?: string[];
  /**
   * 流程实例状态
   */
  instanceStatus?: SearchWorkItemVoInstanceStatus;
  /**
   * 发起人
   */
  originator?: UnitVo;
  /**
   * 分页页数
   */
  pageNum?: number;
  /**
   * 分页条数
   */
  pageSize?: number;
  /**
   * 接收时间
   */
  receiveTime?: string[];
  /**
   * 任务类型
   */
  searchWorkItemType?: SearchWorkItemVoSearchWorkItemType;
  /**
   * 单据号
   */
  sequenceNo?: string;
  /**
   * 任务状态
   */
  status?: SearchWorkItemVoStatus;
  /**
   * 流程定义编码
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *查询流程实例参数VO
 */
export interface SearchWorkflowInstanceVo {
  /**
   * 流程实例名称
   */
  instanceName?: string;
  /**
   * 发起人id
   */
  originatorId?: string;
  /**
   * 分页页数
   */
  pageNum?: number;
  /**
   * 分页条数
   */
  pageSize?: number;
  /**
   * 单据号
   */
  sequenceNo?: string;
  /**
   * 流程发起时间
   */
  startTime?: string[];
  /**
   * 流程实例状态
   */
  status?: SearchWorkflowInstanceVoStatus;
  /**
   * 流程定义编码
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *认证客户端配置vo
 */
export interface SecurityClientVo {
  /**
   * 访问token有效时间
   */
  accessTokenValiditySeconds?: number;
  /**
   * 客户端id
   */
  clientId?: string;
  /**
   * 客户端名称
   */
  clientName?: string;
  /**
   * 客户端密钥
   */
  clientSecret?: string;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 修改时间
   */
  modifiedTime?: string;
  /**
   * 刷新token有效时间
   */
  refreshTokenValiditySeconds?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface ShortLink {
  /**
   * undefined
   */
  bizObjectId?: string;
  /**
   * undefined
   */
  formCode?: string;
  /**
   * undefined
   */
  instanceId?: string;
  /**
   * undefined
   */
  schemaCode?: string;
  /**
   * undefined
   */
  type?: ShortLinkType;
  /**
   * undefined
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *审批附件
 */
export interface SignFileVo {
  /**
   * 附件id
   */
  id?: string;
  /**
   * 附件名称
   */
  name?: string;
  /**
   * 附件大小
   */
  size?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *报表排序字段Vo
 */
export interface SortPropertyVo {
  /**
   * 别名
   */
  alias?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 数据项类型
   */
  dataType?: SortPropertyVoDataType;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序类型
   */
  order?: SortPropertyVoOrder;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 字段类型
   */
  type?: SortPropertyVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *发起流程VO
 */
export interface StartWorkflowVo {
  /**
   * 主表数据
   */
  data?: any;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 发起人部门-未指定则使用用户的主部门
   */
  originatorDepartment?: UnitVo;
  /**
   * 子表数据
   */
  sheetDatas?: BizObjectSheetSubmitVo[];
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 流程编码
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *子流程日志VO
 */
export interface SubInstanceLogVo {
  /**
   * 耗时
   */
  duration?: number;
  /**
   * 完成时间
   */
  finishTime?: string;
  /**
   * 流程id
   */
  id?: string;
  /**
   * 流程名称
   */
  name?: string;
  /**
   * 流程发起人
   */
  originator?: ParticipantVo;
  /**
   * 启动时间
   */
  startTime?: string;
  /**
   * 流程状态
   */
  status?: SubInstanceLogVoStatus;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *按应用查询权限结果vo
 */
export interface SummaryByAppQueryVo {
  /**
   * 拥有应用管理权限的用户列表
   */
  appManageList?: UnitVo[];
  /**
   * 有用应用前台数据权限的列表
   */
  portalAppDataPermList?: PortalAppDataPerm[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *按组织查询权限结果vo
 */
export interface SummaryByOrgResultVo {
  /**
   * 管理的应用列表
   */
  appList?: AppPackageVo[];
  /**
   * 是否系统管理员
   */
  sysAdminRole?: boolean;
  /**
   * 所属角色列表
   */
  tagList?: TagVo[];
  /**
   * 可发起的流程列表
   */
  workflowList?: WorkflowHeaderVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *支持添加的第三方组织vo
 */
export interface SupportOrgConfigVO {
  /**
   * 组织类型该组织类型支持的配置参数
   */
  configParamsList?: OrgConfigParamsBo[];
  /**
   * 组织类型
   */
  maintainType?: string;
  /**
   * 类型名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织同步VO
 */
export interface SyncOrgVo {
  /**
   * 部门ID集合
   */
  deptList?: string[];
  /**
   * 组织ID
   */
  orgId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *系统定时任务vo
 */
export interface SysJobVo {
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 创建人
   */
  creator?: UnitVo;
  /**
   * 执行处理器
   */
  executorHandler?: string;
  /**
   * 执行参数
   */
  executorParam?: any;
  /**
   * 任务id
   */
  id?: string;
  /**
   * 任务描述
   */
  jobDesc?: string;
  /**
   * 修改时间
   */
  modifiedTime?: string;
  /**
   * 修改人
   */
  modifier?: UnitVo;
  /**
   * 调度配置
   */
  scheduleConf?: string;
  /**
   * 调度类型
   */
  scheduleType?: SysJobVoScheduleType;
  /**
   * 触发状态
   */
  triggerStatus?: SysJobVoTriggerStatus;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *字典配置vo
 */
export interface SystemDictConfigVo {
  /**
   * 子数据项
   */
  childList?: SystemDictConfigVo[];
  /**
   * 编码
   */
  code?: string;
  /**
   * 字典id
   */
  dictId?: string;
  /**
   * 状态
   */
  enabled?: boolean;
  /**
   * id
   */
  id?: string;
  /**
   * 编码
   */
  name?: string;
  /**
   * 父id
   */
  parentId?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *字典分组vo
 */
export interface SystemDictGroupVo {
  /**
   * id
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序值
   */
  sortIndex?: number;
  /**
   * 字典列表
   */
  systemDictList?: SystemDictVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *字典排序vo
 */
export interface SystemDictSortVo {
  /**
   * 分组id
   */
  groupId?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 排序值
   */
  sortIndex?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *字典vo
 */
export interface SystemDictVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 字典项配置列表
   */
  configList?: SystemDictConfigVo[];
  /**
   * 创建人id
   */
  createdBy?: string;
  /**
   * 创建人名称
   */
  createdName?: string;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 状态
   */
  enabled?: boolean;
  /**
   * 业务分组
   */
  groupCode?: string;
  /**
   * 分组名称
   */
  groupName?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 排序值
   */
  sortIndex?: number;
  /**
   * 字典类型
   */
  type?: SystemDictVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *系统信息vo
 */
export interface SystemInfoVo {
  /**
   * 可被允许的CPU序列号
   */
  cpuSerial?: string[];
  /**
   * 引擎实例数
   */
  engineAmount?: number;
  /**
   * 授权期限
   */
  grantTerm?: string[];
  /**
   * 可被允许的MAC地址
   */
  macAddress?: string[];
  /**
   * 可被允许的主板序列号
   */
  mainBoardSerial?: string[];
  /**
   * 授权主体
   */
  subject?: string;
  /**
   * 用户数
   */
  userAmount?: number;
  /**
   * 系统版本号
   */
  version?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *系统日志详情Vo
 */
export interface SystemLogInfoVo {
  /**
   * 异常信息
   */
  exceptionInfo?: string;
  /**
   * 输入参数
   */
  input?: string;
  /**
   * 输出参数
   */
  output?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签组VO
 */
export interface TagGroupVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 角色类型：系统自维护：SYS，钉钉：DINGTALK，微信：WECHAT
   */
  maintainType?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 节点类型：组织:ORG，标签组：GROUP，标签：TAG
   */
  nodeType?: TagGroupVoNodeType;
  /**
   * 组织Id
   */
  orgId?: string;
  /**
   * 组织对象
   */
  orgUnit?: UnitVo;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签树形结构对象
 */
export interface TagTreeVo {
  /**
   * 子级
   */
  children?: TagTreeVo[];
  /**
   * 创建人
   */
  createdBy?: string;
  /**
   * 创建人名称
   */
  createdName?: string;
  /**
   * 创建人
   */
  createdTime?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 角色类型：系统自维护：SYS，钉钉：DINGTALK，微信：WECHAT
   */
  maintainType?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 节点类型：组织:ORG，标签组：GROUP，标签：TAG
   */
  nodeType?: TagTreeVoNodeType;
  /**
   * 组织Id
   */
  orgId?: string;
  /**
   * 组织
   */
  organizationVo?: OrganizationVo;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签组织id集合对象
 */
export interface TagUnitIdsVo {
  /**
   * 标签id
   */
  tagId?: string;
  /**
   * 组织id集合
   */
  unitIds?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签用户管理范围Vo
 */
export interface TagUnitOuScopeVo {
  /**
   * 管理范围id
   */
  ouScopes?: string[];
  /**
   * 标签id
   */
  tagId?: string;
  /**
   * 用户id
   */
  unitId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签组织维护请求参数Vo
 */
export interface TagUnitReqVo {
  /**
   * 管理范围id
   */
  ouScopes?: string[];
  /**
   * 标签id
   */
  tagId?: string;
  /**
   * 组织id
   */
  unitIds?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签组织Vo对象
 */
export interface TagUnitVo {
  /**
   * 主键
   */
  id?: string;
  /**
   * 管理范围对象集合
   */
  ouScopeUnits?: UnitVo[];
  /**
   * 用户
   */
  unit?: UnitVo;
  /**
   * 用户id
   */
  unitId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签更新VO
 */
export interface TagUpdateVo {
  /**
   * 角色组名称
   */
  groupName?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *标签VO
 */
export interface TagVo {
  /**
   * 编码
   */
  code?: string;
  /**
   * 创建人
   */
  createdBy?: string;
  /**
   * 创建人
   */
  createdName?: string;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 标签组ID
   */
  groupId?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 角色类型：系统自维护：SYS，钉钉：DINGTALK，微信：WECHAT
   */
  maintainType?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 节点类型：组织:ORG，标签组：GROUP，标签：TAG
   */
  nodeType?: string;
  /**
   * 组织Id
   */
  orgId?: string;
  /**
   * 组织
   */
  orgUnit?: UnitVo;
  /**
   * 父级id
   */
  parentId?: string;
  /**
   * 标签组
   */
  tagGroupVo?: TagGroupVo;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *树形数据查询参数Vo
 */
export interface TreeDataQueryVo {
  /**
   * 父级字段编码
   */
  parentCode?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface TreeNode {
  /**
   * undefined
   */
  children?: TreeNode[];
  /**
   * undefined
   */
  name?: string;
  /**
   * undefined
   */
  value?: any;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *业务对象短文本唯一校验查询参数Vo
 */
export interface UniqueValidateVo {
  /**
   * 业务数据id
   */
  bizObjectId?: string;
  /**
   * 数据项编码
   */
  propertyCode?: string;
  /**
   * 数据项值
   */
  propertyValue?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface UnitBo {
  /**
   * undefined
   */
  id?: string;
  /**
   * undefined
   */
  name?: string;
  /**
   * undefined
   */
  type?: UnitBoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织聚合vo
 */
export interface UnitGroupVo {
  /**
   * undefined
   */
  departmentList?: DepartmentVo[];
  /**
   * undefined
   */
  tagGroupList?: TagGroupVo[];
  /**
   * undefined
   */
  tagList?: TagVo[];
  /**
   * undefined
   */
  userList?: UserVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织树搜索结果vo对象
 */
export interface UnitTreeSearchVo {
  /**
   * 返回记录条数
   */
  returnCount?: number;
  /**
   * 总记录条数
   */
  totalCount?: number;
  /**
   * 返回数据
   */
  unitTrees?: UnitTreeVo[];
  /**
   * 组织类型，USER：用户，DEPARTMENT：部门
   */
  unitType?: UnitTreeSearchVoUnitType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织树形结构对象
 */
export interface UnitTreeVo {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 子级集合
   */
  children?: UnitTreeVo[];
  /**
   * 部门全路径名称
   */
  departmentFullName?: string;
  /**
   * 是否有子级
   */
  hasChildren?: boolean;
  /**
   * 主键
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 部门查询编码
   */
  queryCode?: string;
  /**
   * 是否是我的部门
   */
  selfDept?: boolean;
  /**
   * 组织类型，USER：用户，DEPARTMENT：部门
   */
  unitType?: UnitTreeVoUnitType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *组织Vo对象
 */
export interface UnitVo {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 部门id
   */
  departmentId?: string;
  /**
   * 部门名称
   */
  departmentName?: string;
  /**
   * ID
   */
  id?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 类型
   */
  type?: UnitVoType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *修改仪表盘配置vo
 */
export interface UpdateDashboardConfigVo {
  /**
   * 全局过滤
   */
  filters?: any;
  /**
   * 全局配置
   */
  global?: any;
  /**
   * 仪表盘id
   */
  id?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户修改密码vo对象
 */
export interface UpdatePasswordVo {
  /**
   * 密钥生成
   */
  batchId?: string;
  /**
   * 新密码
   */
  newPassword?: string;
  /**
   * 原密码
   */
  oldPassword?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *修改离职用户备注
 */
export interface UpdateUserRemarkVo {
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *url基础对象vo
 */
export interface UrlVo {
  /**
   * url
   */
  url?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户常用附件vo
 */
export interface UserCommonsVo {
  /**
   * 附件信息
   */
  fileVo?: SignFileVo;
  /**
   * id
   */
  id?: string;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户映射信息VO对象
 */
export interface UserMappingInfoVo {
  /**
   * 用户账号
   */
  code?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 工号
   */
  employeeNo?: string;
  /**
   * 入职日期
   */
  entryDate?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 主部门
   */
  mainDepartment?: UnitVo;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 用户名称
   */
  name?: string;
  /**
   * 上级部门
   */
  parentDepartments?: UnitVo[];
  /**
   * 兼职部门
   */
  partTimeDepartments?: UnitVo[];
  /**
   * 职位
   */
  position?: string;
  /**
   * 办公电话
   */
  telphone?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户权限VO
 */
export interface UserPermissionVo {
  /**
   * 管理组权限
   */
  adminRole?: boolean;
  /**
   * 业务服务管辖权限
   */
  bizServiceManage?: boolean;
  /**
   * 新建应用权限
   */
  createApp?: boolean;
  /**
   * 新建应用分组权限
   */
  createAppGroup?: boolean;
  /**
   * 新建集成服务目录权限
   */
  createBizServiceCategory?: boolean;
  /**
   * 新增角色权限
   */
  createRole?: boolean;
  /**
   * 登录后端权限
   */
  loginAdminSystem?: boolean;
  /**
   * 组织管理权限
   */
  organizationManage?: boolean;
  /**
   * 角色管辖权限
   */
  roleManage?: boolean;
  /**
   * 系统管理员管理权限
   */
  sysAdminManage?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户工作交接vo
 */
export interface UserTransferVo {
  /**
   * 部分交接时选中的数据列表
   */
  paramsMap?: any;
  /**
   * 接收人id
   */
  receiveUserId?: string;
  /**
   * 是否全部交接
   */
  transferAll?: boolean;
  /**
   * 交接类型
   */
  transferType?: UserTransferVoTransferType;
  /**
   * 交接人id
   */
  transferUserId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *用户VO对象
 */
export interface UserVo {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 用户账号
   */
  code?: string;
  /**
   * 部门id列表：用户所属的所有部门、包含主部门和兼职部门
   */
  departmentIds?: string[];
  /**
   * 部门列表：用户所属的所有部门、包含主部门和兼职部门
   */
  departments?: DepartmentVo[];
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 工号
   */
  employeeNo?: string;
  /**
   * 入职日期
   */
  entryDate?: string;
  /**
   * 性别
   */
  gender?: number;
  /**
   * 主键
   */
  id?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 主部门
   */
  mainDepartment?: DepartmentVo;
  /**
   * 主部门id
   */
  mainDepartmentId?: string;
  /**
   * undefined
   */
  manager?: boolean;
  /**
   * 流程管理员管理模板编码列表
   */
  managerWorkflowCodeList?: string[];
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 用户名称
   */
  name?: string;
  /**
   * 组织ID
   */
  orgId?: string;
  /**
   * 组织
   */
  organization?: OrganizationVo;
  /**
   * 兼职部门Id
   */
  partTimeDepartmentIds?: string[];
  /**
   * 兼职部门
   */
  partTimeDepartments?: DepartmentVo[];
  /**
   * 职位
   */
  position?: string;
  /**
   * 离职日期
   */
  quitDate?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 状态:正常：ENABLE，禁用：DISABLE，离职：QUIT
   */
  status?: UserVoStatus;
  /**
   * 超级管理员，代表admin用户
   */
  superAdmin?: boolean;
  /**
   * 是否是系统管理员
   */
  sysAdmin?: boolean;
  /**
   * 标签Id列表
   */
  tagIds?: string[];
  /**
   * 标签列表
   */
  tags?: TagVo[];
  /**
   * 办公电话
   */
  telphone?: string;
  /**
   * 组织类型
   */
  unitType?: UserVoUnitType;
  /**
   * 用户权限
   */
  userPermission?: UserPermissionVo;
  /**
   * 是否是流程管理员
   */
  workflowManager?: boolean;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程模版校验错误信息vo
 */
export interface ValidateErrorMessageVo {
  /**
   * undefined
   */
  errorLevel?: ValidateErrorMessageVoErrorLevel;
  /**
   * 模型编码
   */
  errorMessage?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *预览关联表单Vo
 */
export interface ViewCorrelationFormVo {
  /**
   * 业务对象id
   */
  bizObjectId?: string;
  /**
   * 表单编码
   */
  formCode?: string;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务加签VO
 */
export interface WorkItemAddParticipantVo {
  /**
   * 加签意见
   */
  comment?: string;
  /**
   * 参与者id集合
   */
  participantIds?: string[];
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务协办VO
 */
export interface WorkItemAssistVo {
  /**
   * 协办意见
   */
  comment?: string;
  /**
   * 参与者id集合
   */
  participantIds?: string[];
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务批量审批VO
 */
export interface WorkItemBatchSubmitVo {
  /**
   * 审批意见
   */
  comment?: string;
  /**
   * 签名附件
   */
  signFileVo?: SignFileVo;
  /**
   * 工作项id列表
   */
  workItemIdList?: string[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务传阅VO
 */
export interface WorkItemCirculateVo {
  /**
   * 传阅意见
   */
  comment?: string;
  /**
   * 参与者id集合
   */
  participantIds?: string[];
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务驳回VO
 */
export interface WorkItemRejectVo {
  /**
   * 驳回节点编码
   */
  activityCode?: string;
  /**
   * 驳回意见
   */
  comment?: string;
  /**
   * 签名附件
   */
  signFileVo?: SignFileVo;
  /**
   * 是否可以直接提交到驳回的节点
   */
  submitToReject?: boolean;
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务取回VO
 */
export interface WorkItemRetrieveVo {
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务提交VO
 */
export interface WorkItemSubmitVo {
  /**
   * 审批意见
   */
  comment?: string;
  /**
   * 主表数据
   */
  data?: any;
  /**
   * 提交任务使用的部门id
   */
  departmentId?: string;
  /**
   * 子表数据
   */
  sheetDatas?: BizObjectSheetSubmitVo[];
  /**
   * 签名附件
   */
  signFileVo?: SignFileVo;
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务转办VO
 */
export interface WorkItemTransferVo {
  /**
   * 转办意见
   */
  comment?: string;
  /**
   * 参与者id
   */
  participantId?: string;
  /**
   * 工作项id
   */
  workItemId?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *任务VO
 */
export interface WorkItemVo {
  /**
   * 节点编码
   */
  activityCode?: string;
  /**
   * 节点名称
   */
  activityName?: string;
  /**
   * 任务受托人
   */
  assignee?: UnitVo;
  /**
   * 任务委托人
   */
  assignor?: UnitVo;
  /**
   * 传阅人
   */
  circulatedBy?: UnitVo;
  /**
   * 传阅人id
   */
  circulatedById?: string;
  /**
   * 耗时
   */
  duration?: number;
  /**
   * 是否是委托任务
   */
  entrust?: boolean;
  /**
   * 完成时间
   */
  finishTime?: string;
  /**
   * 表单编码
   */
  formCode?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 流程实例名称
   */
  instanceName?: string;
  /**
   * 流程状态
   */
  instanceStatus?: WorkItemVoInstanceStatus;
  /**
   * 发起人
   */
  originator?: UnitVo;
  /**
   * 发起人部门
   */
  originatorDepartment?: UnitVo;
  /**
   * 发起人部门id
   */
  originatorDepartmentId?: string;
  /**
   * 发起人id
   */
  originatorId?: string;
  /**
   * 参与者
   */
  participant?: UnitVo;
  /**
   * 参与者id
   */
  participantId?: string;
  /**
   * 接收时间
   */
  receiveTime?: string;
  /**
   * 驳回标识
   */
  reject?: boolean;
  /**
   * 处理结果
   */
  resultStatus?: WorkItemVoResultStatus;
  /**
   * 单据号
   */
  sequenceNo?: string;
  /**
   * 传阅来源
   */
  source?: string;
  /**
   * 任务状态
   */
  status?: WorkItemVoStatus;
  /**
   * 停留时间-毫秒
   */
  stayTime?: number;
  /**
   * 是否超时
   */
  timeout?: boolean;
  /**
   * 超时状态
   */
  timeoutStatus?: WorkItemVoTimeoutStatus;
  /**
   * 任务类型
   */
  type?: WorkItemVoType;
  /**
   * 是否催办
   */
  urge?: boolean;
  /**
   * 催办消息
   */
  urgeMsg?: string;
  /**
   * 流程模版编码
   */
  workflowCode?: string;
  /**
   * 流程模版名称
   */
  workflowName?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程模板复制vo
 */
export interface WorkflowCloneVo {
  /**
   * 克隆编码
   */
  cloneCode?: string;
  /**
   * 编码
   */
  code?: string;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 名称
   */
  name?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程委托
 */
export interface WorkflowDelegateVo {
  /**
   * 受托人
   */
  assignee?: UnitVo;
  /**
   * 委托人
   */
  assignor?: UnitVo;
  /**
   * 委托结束时间
   */
  endTime?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 委托开始时间
   */
  startTime?: string;
  /**
   * 委托类型
   */
  type?: WorkflowDelegateVoType;
  /**
   * 委托流程
   */
  workflows?: CodeNameVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程部署记录Vo
 */
export interface WorkflowDeploymentVo {
  /**
   * 流程编码
   */
  code?: string;
  /**
   * 发布说明
   */
  description?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 流程名称
   */
  name?: string;
  /**
   * 流程定义id
   */
  procDefId?: string;
  /**
   * 发布时间
   */
  publishTime?: string;
  /**
   * 发布人
   */
  publisher?: string;
  /**
   * 发布人名称
   */
  publisherName?: string;
  /**
   * 版本号
   */
  version?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程定义草稿
 */
export interface WorkflowDraftVo {
  /**
   * 流程编码
   */
  code?: string;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 主键
   */
  id?: string;
  /**
   * 流程名称
   */
  name?: string;
  /**
   * 流程模版
   */
  workflowTemplate?: any;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *参与者表达式校验
 */
export interface WorkflowExprValidVo {
  /**
   * 表达式
   */
  participantExpr?: string;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程表单数据VO
 */
export interface WorkflowFormDataVo {
  /**
   * 操作权限
   */
  actionPermission?: ActionPermissionVo;
  /**
   * 节点编码
   */
  activityCode?: string;
  /**
   * 所有节点
   */
  activitys?: ActivityVo[];
  /**
   * 流程节点审批日志
   */
  approvalLogs?: InstanceActivityVo[];
  /**
   * 经办必填
   */
  approvalRequired?: boolean;
  /**
   * 表单配置
   */
  bizFormVo?: BizFormVo;
  /**
   * 业务对象数据
   */
  bizObjectData?: any;
  /**
   * 业务对象id
   */
  bizObjectId?: string;
  /**
   * 主模型
   */
  bizSchemaVo?: BizSchemaVo;
  /**
   * 是否允许评论
   */
  commentFlag?: boolean;
  /**
   * 数据项权限
   */
  dataPermissions?: any;
  /**
   * 表单评论列表
   */
  formCommentVoList?: BizFormCommentVo[];
  /**
   * 表单提醒
   */
  formRemind?: FormRemindVo;
  /**
   * 表单类型
   */
  formTypeEnum?: WorkflowFormDataVoFormTypeEnum;
  /**
   * 流程实例
   */
  instance?: WorkflowInstanceVo;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 可驳回的节点，当有驳回权限时有值
   */
  rejectActivitys?: ActivityVo[];
  /**
   * 运行中的节点
   */
  runtimeActivitys?: InstanceActivityVo[];
  /**
   * 主模型编码
   */
  schemaCode?: string;
  /**
   * 表单状态， 默认预览状态
   */
  status?: WorkflowFormDataVoStatus;
  /**
   * 暂存数据id
   */
  tid?: string;
  /**
   * 可查看的节点
   */
  viewableActivitys?: InstanceActivityVo[];
  /**
   * 工作任务id
   */
  workItemId?: string;
  /**
   * 流程编码
   */
  workflowCode?: string;
  /**
   * 流程模版名称
   */
  workflowName?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程定义头
 */
export interface WorkflowHeaderVo {
  /**
   * 应用编码
   */
  appCode?: string;
  /**
   * 流程编码
   */
  code?: string;
  /**
   * 图标
   */
  icon?: Icon;
  /**
   * 主键
   */
  id?: string;
  /**
   * 流程名称
   */
  name?: string;
  /**
   * 是否已发布
   */
  published?: boolean;
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 外链短码
   */
  shortLinkCode?: string;
  /**
   * 是否启用外链
   */
  shortLinkEnable?: boolean;
  /**
   * 流程标题
   */
  title?: string;
  /**
   * 移动端是否可见
   */
  visibleMobile?: boolean;
  /**
   * pc是否可见
   */
  visiblePc?: boolean;
  /**
   * 可见类型：ALL：全部人员，ASSIGN：部分人员
   */
  visibleType?: WorkflowHeaderVoVisibleType;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程实例VO
 */
export interface WorkflowInstanceVo {
  /**
   * 节点编码
   */
  activityCode?: string;
  /**
   * 节点名称
   */
  activityName?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 耗时
   */
  duration?: number;
  /**
   * 完成时间
   */
  finishTime?: string;
  /**
   * 主键
   */
  id?: string;
  /**
   * 流程实例id
   */
  instanceId?: string;
  /**
   * 流程实例名称
   */
  name?: string;
  /**
   * 发起人
   */
  originator?: UnitVo;
  /**
   * 发起人部门
   */
  originatorDepartment?: UnitVo;
  /**
   * 发起人部门id
   */
  originatorDepartmentId?: string;
  /**
   * 发起人id
   */
  originatorId?: string;
  /**
   * 当前处理人
   */
  participant?: UnitVo;
  /**
   * 参与者id
   */
  participantId?: string;
  /**
   * 单据号
   */
  sequenceNo?: string;
  /**
   * 启动时间
   */
  startTime?: string;
  /**
   * 流程状态
   */
  status?: WorkflowInstanceVoStatus;
  /**
   * 停留时间-毫秒
   */
  stayTime?: number;
  /**
   * 流程模版编码
   */
  workflowCode?: string;
  /**
   * 流程模版名称
   */
  workflowName?: string;
  /**
   * 流程模版版本号
   */
  workflowVersion?: number;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程节点参与者vo
 */
export interface WorkflowNodeParticipantVo {
  /**
   * 节点id
   */
  nodeId?: string;
  /**
   * 节点名称
   */
  nodeName?: string;
  /**
   * 节点参与者
   */
  participants?: UnitVo[];
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *流程模型编码vo对象
 */
export interface WorkflowSchemaCodeVo {
  /**
   * 模型编码
   */
  schemaCode?: string;
  /**
   * 版本号
   */
  version?: number;
  /**
   * 流程编码
   */
  workflowCode?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
/**
 *undefined
 */
export interface WxJsapiSignature {
  /**
   * undefined
   */
  corpId?: string;
  /**
   * undefined
   */
  nonceStr?: string;
  /**
   * undefined
   */
  signature?: string;
  /**
   * undefined
   */
  timestamp?: number;
  /**
   * undefined
   */
  url?: string;
  /**
   * 扩展字段
   */
  [key: string]: any;
}
