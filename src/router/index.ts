import { createRouter, createWebHashHistory } from "vue-router";
import { makeBaseRoute } from "./route";
import { RouteRecordRaw } from "vue-router";
import { FromKeyMakeRoute } from "@/utils";
import localCache from "@/utils/cache"

const routes: RouteRecordRaw[] = [
  {
    path: "/homeIndex",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
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


export default router