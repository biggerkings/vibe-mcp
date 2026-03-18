// 请求拓展参数
export interface ApiBaseRequest {
  // 展示loading
  loading?: boolean
  loadingText?: string
  // 忽略重复请求
  ignoreCancelToken?: boolean
  // 需要用户登录状态
  needLogin?: boolean
  verifyAuth?: boolean
  errorInfo?: any
}

// 接口返回
export interface ApiBaseResponse<T> {
  // 返回码
  success: boolean
  code: string
  errorCode: string
  errorMessage: string
  data?: T
  // 提示信息
  message: string
}

export interface UploadFileParams {
  data?: any
  name?: string
  file: File | Blob
  filename?: string
  [key: string]: any
}

// 接口分页入参
export interface PageDataParams {
  pageNum: number
  pageSize: number
}
export interface NewPageDataParams {
  pageNo: number
  pageSize: number
}

// 存storage传参
export interface StorageParams {
  key: string
  value: string
  expires?: number
  storageTime?: number
}

// 常量定义
export interface ConstantsKeyV {
  key: any
  value?: string | number
  label?: string
  color?: string
  btns?: any
  tabShow?: boolean
}
