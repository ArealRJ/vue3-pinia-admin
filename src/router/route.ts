import { RouterView } from 'vue-router'
import { RouterInterface } from "@/@types/interface"
const adminRoutes: Array<RouterInterface> = [
  {
    path: '/home',
    component: RouterView,
    meta: {
      title: '综合统计',
      key: 'home',
      icon:'HomeFilled'
    },
  },
  {
    path: '/user',
    component: RouterView,
    meta: {
      title: '用户管理',
      key: 'user',
      icon:'UserFilled'
    },
  },
  {
    path:'/form',
    component: RouterView,
    meta:{
      title:'表单管理',
      key:'form',
      icon:'Histogram'
    },
    children:[
      {
      path:'/',
      component:RouterView,
      meta:{
        title:'人员信息',
        key:'form-user',
        icon:'UserOutlined'
      }
      }
  ]
  }
]



export const makeBaseRoute = (routes: RouterInterface[] = adminRoutes): any => {
  return {
    path: '/',
    components: () => import("@/layout/index.vue"),
    redirect: routes[0].path,
    children: routes
  }
}


export default adminRoutes