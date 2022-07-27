import { RawRouteComponent } from "vue-router"
/* 定义全局类型接口 */

export interface RouterInterface {
  path: string;
  name?: string;
  component: RawRouteComponent;
  meta: {
    title: string;
    key: string;
    noShow?: boolean;
  };
  children?: RouterInterface[];
}

export interface userInfo {
  username: string,
  password: string,
}



export interface responseType {
  code: number,
  msg: string,
  data: any,
}
