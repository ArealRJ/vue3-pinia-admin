import { RouterView } from 'vue-router'
import { RouterInterface } from "@/@types/interface"
export const myRoutes: Array<RouterInterface> = [
  {
    path: '/home',
    component: ()=>import('@/views/Home.vue'),
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





export const makeBaseRoute = (routes: RouterInterface[] = myRoutes): any => {
  return {
    path: '/',
    name:'home',
    components: () => import("@/layout/index.vue"),
    redirect: routes[0].path,
    children: routes
  }
}


export default myRoutes