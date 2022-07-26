/*
 * @Author: RenJie
 * @Date: 2022-05-25 19:54:07
 * @LastEditors: RenJie
 * @LastEditTime: 2022-07-01 14:29:01
 * @FilePath: /vue3-crm/src/router/route.ts
 * @Description: 
 */
import { RouterView } from 'vue-router'
import { RouteRecordRaw } from "vue-router";
import { IRoute } from "@/@types/interface"
const adminRoutes: IRoute[] = [
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

const allRoutes = {
  admin: adminRoutes,
}

export default allRoutes