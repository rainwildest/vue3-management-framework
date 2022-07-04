import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout";

const dynamic: RouteRecordRaw = {
  path: "/",
  name: "layout",
  component: Layout,
  children: [
    {
      path: "/",
      component: () => import("@/pages/home"),
      name: "home",
      meta: {
        title: "首页",
        icon: "home",
        affix: false,
        keepAlive: true
      }
    },
    {
      path: "/home-test",
      component: Layout,
      name: "home_1",
      meta: {
        title: "首页-测试",
        icon: "home",
        affix: false
      },
      children: [
        {
          path: "/home-test-1",
          component: () => import("@/pages/error/404"),
          name: "home_1_1",
          meta: {
            title: "首页-测试-1",
            icon: "home",
            affix: false,
            keepAlive: true
          }
        }
      ]
    }
  ]
};
export default dynamic;
