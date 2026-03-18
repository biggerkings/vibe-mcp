import { request } from '@/api/request'

/**
 * 资金流水记录列表
 * @param params
 * @returns
 */
export const feedback = (params: any) => {
  return request.post<any>({
    url: '/user/feedback',
    params,
  })
}
