// 本地缓存工具
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if(value){
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}
// 封装cookie
// class Cookie {
//   constructor() {
//     this.setCookie = this.setCookie.bind(this)
//     this.getCookie = this.getCookie.bind(this)
//     this.deleteCookie = this.deleteCookie.bind(this)
//   }
//   setCookie(key: string, value: any) {
//     document.cookie = `${key}=${value}`
//   }
//   getCookie(key: string) {
//     const cookie = document.cookie
//     const reg = new RegExp(`${key}=([^;]+)`)
//     const result = reg.exec(cookie)
//     if(result){
//       return result[1]
//     }
//   }
//   deleteCookie(key: string) {
//     document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
//   }
//   clearCookie() {
//     const keys = document.cookie.match(/[^ =;]+/g) || []
//     keys.forEach(key => {
//       document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
//     })
//   }
// }

export default new LocalCache()