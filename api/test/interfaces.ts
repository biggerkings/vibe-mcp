/**
 * 用户相关接口类型定义
 * 由 Apifox MCP 自动生成
 */

// ============================================
// 通用类型
// ============================================

export interface ApiBaseParams {
  /** 追踪 ID */
  traceId: string
}

export interface ApiBaseResponse<T> {
  /** 是否成功 */
  success: boolean
  /** 返回码 */
  code: string
  /** 错误消息 */
  message: string
  /** 响应数据 */
  data: T
}

// ============================================
// 用户模块
// ============================================

/**
 * 用户信息
 */
export interface UserInfo {
  /** 是否已注册 */
  registed: boolean
  /** 微信 openId */
  openId: string
  /** 微信 unionId */
  unionId: string
  /** 用户 token */
  token: string
  /** 手机号区号 */
  mobileAreaCode: string
  /** 手机号 */
  mobile: string
  /** 邮箱 */
  email: string
  /** 昵称 */
  nickname: string
  /** 用户头像 */
  userPhotoUrl: string
  /** 绑定时间 */
  bindDate: string
}

/**
 * 获取用户信息 - 请求参数
 */
export interface GetUserInfoParams extends ApiBaseParams {
  /** 微信登录 code */
  code: string
}

/**
 * 登录 - 请求参数
 */
export interface LoginParams extends ApiBaseParams {
  /** 微信 openId */
  openId: string
  /** 微信 unionId */
  unionId: string
  /** 微信登录 code */
  code: string
}

/**
 * 更新用户信息 - 请求参数
 */
export interface UpdateUserParams extends ApiBaseParams {
  /** 微信 openId */
  openId: string
  /** 微信 unionId */
  unionId: string
  /** 昵称 */
  nickname: string
}

/**
 * 根据 unionId 获取用户信息 - 请求参数
 */
export interface GetUserByUnionIdParams extends ApiBaseParams {
  /** 微信 unionId */
  unionId: string
}

// ============================================
// 通用模块
// ============================================

/**
 * 协议项
 */
export interface AgreementItem {
  /** 协议代码 */
  itemCode: string
  /** 协议名称/链接 */
  itemName: string
}

/**
 * 基础信息 - 请求参数
 */
export interface GetLaunchParams extends ApiBaseParams {
  // 仅需要 traceId
}

/**
 * 基础信息 - 响应数据
 */
export interface LaunchData {
  /** 协议列表 */
  agreementList: AgreementItem[]
}
