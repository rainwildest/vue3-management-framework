import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout";

// const dynamic: RouteRecordRaw = {
//   path: "/",
//   name: "layout",
//   component: Layout,
//   children: [
//     {
//       path: "/",
//       component: () => import("@/pages/home"),
//       name: "home",
//       meta: {
//         title: "首页",
//         icon: "home",
//         affix: false,
//         keepAlive: true
//       }
//     },
//     {
//       path: "/home-test",
//       component: () => import("@/pages/error/404"),
//       name: "home_1",
//       meta: {
//         title: "首页-测试",
//         icon: "home",
//         affix: false
//       },
//       children: [
//         // {
//         //   path: "/home-test-1",
//         //   component: () => import("@/pages/error/404"),
//         //   name: "home_1_1",
//         //   meta: {
//         //     title: "首页-测试-1",
//         //     icon: "home",
//         //     affix: false,
//         //     keepAlive: true
//         //   }
//         // }
//       ]
//     }
//   ]
// };

export const dynamic: RouteRecordRaw[] = [
  {
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
          icon: "milk-tea",
          affix: false,
          keepAlive: true
        }
      }
    ]
  },
  {
    path: "/home-error",
    component: Layout,
    name: "home_1",
    meta: {
      title: "错误",
      icon: "milk-tea",
      affix: false,
      keepAlive: true
    },
    children: [
      {
        path: "/home-test-1",
        component: () => import("@/pages/test/ii"),
        name: "home_1_1",
        meta: {
          title: "首页-测试-1",
          icon: "milk-tea",
          affix: false,
          keepAlive: true
        }
      },
      {
        path: "/home-400",
        component: () => import("@/pages/error/404"),
        name: "home_1_2",
        meta: {
          title: "404",
          icon: "milk-tea",
          affix: false,
          keepAlive: true
        }
      }
    ]
  },
  {
    path: "/test-i",
    component: () => import("@/pages/test/i"),
    name: "home_2",
    meta: {
      title: "首页-测试-1",
      icon: "milk-tea",
      affix: false,
      ignore: true
    },
    children: []
  }
];

export default dynamic;
