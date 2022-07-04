import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import { App, toRaw } from "vue";
import routes from "./modules/pages";
import dynamic from "./modules/dynamic";
import { useRoutersStore } from "@/stores/modules/routers";

// import
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true
});

// 挂载路由
export const mountRouter = (app: App<Element>) => {
  app.use(router);

  return router;
};

// 加载路由
// @ts-ignore
export async function loadRoutes() {
  const store = useRoutersStore();
  const views = store.views;

  views.length && mountDynamicRoutes(views);
}

// 动态添加路由
export function mountDynamicRoutes(routers: RouteRecordRaw[]) {
  router.addRoute({ ...dynamic });
  // // 在动态路由添加后，在将404添加进入，解决刷新是找不到路由跳转404
  router.addRoute({
    path: "/:pathMatch(.*)",
    redirect: "/404"
  });
}
