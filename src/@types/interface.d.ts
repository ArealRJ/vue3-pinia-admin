import { RawRouteComponent } from "vue-router"
/* 定义全局类型接口 */

export interface RouterInterface {
  path: string;
  name?: string;
  component: RawRouteComponent;
  meta: {
    title: string;
    key: string;
    icon:string,
    noShow?: boolean;
  };
  children?: RouterInterface[];
}

export interface userInfo {
  username: string,
  password: string,
  avatar:string
}



export interface responseType {
  code: number,
  msg: string,
  data: any,
}

export type sideBarStatus = "Fold" | "Expand";


interface tag {
  name: string,
  path: string,
  title?:string
}