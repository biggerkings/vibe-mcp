import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, Canceler } from 'axios'
import axios from 'axios'
import { Toast } from 'vant'
import type { ApiBaseRequest, ApiBaseResponse, UploadFileParams } from '@/api/baseInterfaces'
import {
  buildParam,
  getSecurityParam,
  getSignature,
  getTraceId,
  judgeContain,
  getLocalStorage,
  getDeviceUniqueValue,
} from '@/utils/common'
import { ContentTypeEnum, RequestMethodEnum, StorageEnum } from '@/constants/enums'

const pendingMap = new Map<string, Canceler>()
let os = ''
export function getPendingUrl(config: AxiosRequestConfig) {
  return [config.method, config.url, JSON.stringify(config.data || '')].join('&')
}
// 等登录被挂起的
const requestList = <any>[]
const base = {
  baseURL: '',
  timeout: 15000,
  validateStatus: (status: number) => {
    return status >= 200 && status < 300
  },
  header: {
    'Access-Control-Allow-Origin': '*',
    'x-mada-sign': '',
  },
}

interface BaseDataModel {
  traceId?: string
  os?: string
  appVersion?: string
  versionCode?: string
  userNo?: string
  deviceId?: string
}

// 添加请求方法
function pendingHttp(config: AxiosRequestConfig) {
  cancelHttp(config)
  const url = getPendingUrl(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap?.has(url)) {
        pendingMap.set(url, cancel)
      }
    })
}

// 取消请求方法
function cancelHttp(config: AxiosRequestConfig) {
  const url = getPendingUrl(config)
  if (pendingMap.has(url)) {
    const cancel = pendingMap.get(url)
    cancel && cancel(url)
    pendingMap.delete(url)
  }
}

// 处理请求参数
async function beforeRequestHook(config: AxiosRequestConfig, opts?: ApiBaseRequest) {
  if (opts?.loading) {
    Toast.loading({
      message: opts?.loadingText ? opts?.loadingText : '加载中...',
      forbidClick: true,
      duration: 8000,
    })
  }
  const baseData: BaseDataModel = {
    os,
  }


  const baseConfig = {
    baseURL: process.env.API_URL,
    timeout: base.timeout,
    validateStatus: base.validateStatus,
    headers: {
      ignoreCancelToken: opts?.ignoreCancelToken || false,
    },
  }
  console.log('baseConfig----------------', baseConfig)
  config = Object.assign(baseConfig, config)
  const urlParams = {
    os,
  }
  let params = config.params || {}
  const data = config.data || false
  if (config.method?.toUpperCase() === RequestMethodEnum.GET) {
    params = Object.assign(urlParams, params)
    config.params = undefined
  } else if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
    params = Object.assign(urlParams, params)
    config.data = data
    config.params = params
  } else {
    // 非GET请求如果没有提供data，则将params视为data
    config.data = params
    config.params = undefined
  }
  config.data = Object.assign(config.data || {}, baseData)
  return config
}

// 处理请求结果
const afterRequestHook: any = async (
  res: AxiosResponse<ApiBaseResponse<any>>,
  config: AxiosRequestConfig,
  opts: ApiBaseRequest
) => {
  const { loading, errorInfo } = opts || {}
  const { data, status } = res
  if (!data) {
    throw new Error('请求出错，请稍候重试')
  }
  if (loading) {
    Toast.clear()
  }
  if (data && errorInfo?.[status]) {
    data.errorMessage = errorInfo?.[status]
  }
  return data
}

export class Server {
  private instance: AxiosInstance
  private readonly config: AxiosRequestConfig
  private readonly opts: ApiBaseRequest
  constructor(config?: AxiosRequestConfig, opts?: ApiBaseRequest) {
    this.config = config || {}
    this.opts = opts || {}
    this.instance = axios.create(config)
    this.setupInterceptors()
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use((config) => {
      const ignoreCancelToken = config?.headers?.ignoreCancelToken
      const ignoreCancel =
        ignoreCancelToken !== undefined ? ignoreCancelToken : this.opts?.ignoreCancelToken

      !ignoreCancel && pendingHttp(config)
      return config
    })

    // 响应拦截器
    this.instance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && cancelHttp(res.config)
      return res
    })
  }

  async uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData()
    const customFilename = params.name || 'file'
    const baseConfig = {
      baseURL: process.env.API_URL,
      timeout: base.timeout,
      validateStatus: base.validateStatus,
      headers: {
        'Content-type': ContentTypeEnum.FORM_DATA,
        ignoreCancelToken: true,
      },
    }
    config = Object.assign(baseConfig, config)
    params.data = {
    }
    config.params = Object.assign(config.params || {})
    if (params.filename) {
      formData.append(customFilename, params.file, params.filename)
    } else {
      formData.append(customFilename, params.file)
    }
    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data![key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }

        formData.append(key, params.data![key])
      })
    }
    console.log('------------------', config)
    return new Promise((resolve) => {
      resolve(
        this.instance.request<T>({
          ...config,
          method: RequestMethodEnum.POST,
          data: formData,
        })
      )
    })
  }

  async get<T = any>(
    config: AxiosRequestConfig,
    opts?: ApiBaseRequest
  ): Promise<ApiBaseResponse<T>> {
    return await this.request({ ...config, method: RequestMethodEnum.GET }, opts).catch((e) => e)
  }

  async post<T = any>(
    config: AxiosRequestConfig,
    opts: ApiBaseRequest = {}
  ): Promise<ApiBaseResponse<T>> {
    return await this.request({ ...config, method: RequestMethodEnum.POST }, opts).catch((e) => e)
  }

  async request<T = any>(
    config: AxiosRequestConfig,
    opts?: ApiBaseRequest
  ): Promise<ApiBaseResponse<T>> {
    config = await beforeRequestHook(config, opts)
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<ApiBaseResponse<T>>>(config)
        .then((res: AxiosResponse<ApiBaseResponse<T>>) => {
          try {
            const ret = afterRequestHook(res, config, opts)
            resolve(ret)
          } catch (err) {
            reject(err || new Error('request error!'))
          }
        })
        .catch(async (e: any) => {
          const { status } = e?.response || {}
          if (status === 401) {
            reject(e)
          } else {
            try {
              const ret = afterRequestHook(e?.response, config, opts)
              resolve(ret)
            } catch (err) {
              reject(e)
            }
          }
        })
    })
  }
}

function createServer(config?: AxiosRequestConfig, opts?: ApiBaseRequest) {
  return new Server(config, opts)
}

export const request = createServer()
