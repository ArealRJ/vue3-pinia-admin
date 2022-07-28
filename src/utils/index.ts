import { RouterInterface } from "@/@types/interface";
import { myRoutes } from "@/router/route";

// 遍历路由获取menu
export function getMenuDataFromRouter(routes: Array<RouterInterface>) {
  const menuList: any[] = []
  routes.forEach((item) => {
    if (item.meta.noShow === false) {
      return
    } else {
      if (item.children) {
        menuList.push({
          path: item.path,
          meta: item.meta,
          type: 1,
          children: getMenuDataFromRouter(item.children)
        })
      } else {
        menuList.push({
          path: item.path,
          meta: item.meta,
        })
      }
    }

  })
  return menuList
}


//通过key数组还原路由
export const FromKeyMakeRoute = (keys: string[], routeArr = myRoutes) => {
  const arr: RouterInterface[] = [];
  for (const item of routeArr) {
    if (keys.includes(item.meta.key)) {
      if (!item.children) {
        arr.push(item);
      } else {
        arr.push({
          ...item,
          children: FromKeyMakeRoute(keys, item.children)
        });
      }
    }
  }
  return arr;
};