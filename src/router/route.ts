import { RouterView } from 'vue-router'
import { RouterInterface } from "@/@types/interface"
const adminRoutes: Array<RouterInterface> = [
  {
    path: '/home',
    component: RouterView,
    meta: {
      title: '综合统计',
      key: 'home'
    },
    children: [
      {
        path: '/',
        component: () => import("@/views/main/dataCenter/index.vue"),
        meta: {
          title: '数据管理',
          key: 'dataManage'
        }
      }
    ]
  },
  {
    path: '/user',
    component: RouterView,
    meta: {
      title: '用户管理',
      key: 'user',
    },
    children: [
      {
        path: '/',
        component: () => import("@/views/main/user/member.vue"),
        meta: {
          title: '成员管理',
          key: 'memberManage'
        },
      }]
  },
]



export const makeBaseRoute = (routes: RouterInterface[] = adminRoutes):any => {
  return {
    path: '/',
    components:()=>import("@/layout/index.vue"),
    redirect: routes[0].path,
    children: routes
  }
}


export default adminRoutes