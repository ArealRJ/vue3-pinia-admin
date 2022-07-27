import { RouterInterface } from "@/@types/interface";

// 遍历路由获取menu
export function getMenuDataFromRouter(routes: Array<RouterInterface>) {
  const menuInfo: any[] = [];
  // console.log(routes);
  const getMenuList = (routes: any) => {
    console.log(routes);
    routes.forEach((item:any) => {
      menuInfo.push({
        name: item.name,
        title: item.meta.title,
        path: item.path,
        children: item.children?item.children.map((child:any) => {
          return {
            name: child.name,
            title: child.meta.title,
            path: child.path,
            type: child.children ? 1 :2,
            children:child.children?child.children:null
          }
        }):[],
        type: item.children ? 1 : 2,
      });
    });
  }
  getMenuList(routes)
  return menuInfo;
}
