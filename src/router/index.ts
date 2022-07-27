import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import("@/layout/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'not-found',
    component: () => import("@/views/not-found.vue"),
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// router.beforeEach((to, from, next) => {
//   if(to.path ==='/login'){
//     next()
//   }
//   // console.log(to.path);
//   // next()
// })


export default router