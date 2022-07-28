import { RouterInterface } from "@/@types/interface";

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
