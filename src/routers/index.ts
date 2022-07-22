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

/**
 * @brief 挂载路由
 * @param {App<Element>} app
 * @returns Router
 */
export const mountRouter = (app: App<Element>) => {
  app.use(router);

  return router;
};

/**
 * @brief 加载路由
 * @returns void
 */
export async function loadRoutes() {
  const store = useRoutersStore();
  const views = store.views;

  views.length && mountDynamicRoutes(dynamic);
}

/**
 * @brief 动态添加路由
 * @param {Array<RouteRecordRaw>} routers
 * @returns void
 */
export function mountDynamicRoutes(routers: RouteRecordRaw[]) {
  console.log(routers);

  routers.forEach((item) => router.addRoute({ ...item }));

  // 在动态路由添加后，在将404添加进入，解决刷新是找不到路由跳转404
  router.addRoute({
    path: "/:pathMatch(.*)",
    redirect: "/404"
  });
}
