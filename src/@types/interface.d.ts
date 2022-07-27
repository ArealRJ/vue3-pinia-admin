
/* 定义全局类型接口 */

export interface IRoute {
  path:string,
  name?:string,
  component: any,
  type?:number,
  meta:{
    title:string,
    key:string,
  },
  children?:IRoute[]
}

export interface userInfo {
  username:string,
  password:string,
}



export interface responseType {
  code:number,
  msg:string,
  data:any,
}
