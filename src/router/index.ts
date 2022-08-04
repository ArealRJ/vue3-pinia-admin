import { createRouter, createWebHashHistory } from "vue-router";
import { makeBaseRoute } from "./route";
import { RouteRecordRaw } from "vue-router";
import { FromKeyMakeRoute } from "@/utils";
import useUserStore from "@/store/modules/user";
import localCache from "@/utils/cache"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
    meta:{
      title:'登录',
      key:'login',
    }
  },
  // {
  //   path: "/main",
  //   name: "main",
  //   component: () => import("@/layout/index.vue"),
  // },
  {
    path: "/:pathMatch(.*)*",
    name: 'not-found',
    component: () => import("@/views/not-found.vue"),
  }
];


const getRoutes = (): any => {
  const routesArr: any = localCache.getCache("routers");
  if (routesArr) {
    const routeobj = routes.slice(1, routes.length);
    routeobj.push(makeBaseRoute(FromKeyMakeRoute(routesArr)));
    return routeobj;
  } else {
    return routes;
  }
};





const router = createRouter({
  routes:getRoutes(),
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {  //如果未匹配到路由
    from.path? next({ path:from.path}) : next('/');   //如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }
});


export default router