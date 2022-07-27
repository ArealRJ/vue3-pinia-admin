// service统一出口
import MyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import config from '@/config'
import localCache from "@/utils/cache"

const Axios = new MyRequest({
  baseURL: 'http://localhost:3000',
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      if (!config) {
        config = {}
      }
      if (!config.headers) {
        config.headers = {}
      }
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default Axios
