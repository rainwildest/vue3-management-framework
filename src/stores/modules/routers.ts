import { defineStore } from "pinia";
import storage from "@/apis/storage";
import dynamic from "@/routers/modules/dynamic";
import { mountDynamicRoutes } from "@/routers";

export const useRoutersStore = defineStore("routers", {
  state: () => {
    return {
      collapse: storage.get("collapse") || false,
      views: storage.get("views") || []
    };
  },

  actions: {
    SetViews(views: any) {
      this.views = views;
      storage.set("views", views);
    },

    SetCollapse(status: boolean) {
      this.collapse = status;
      storage.set("collapse", status);
    },

    GetViews() {
      const path: any[] = [];
      dynamic.forEach((item) => {
        if (!item?.children) return path.push(item);

        item.children.length === 1 ? path.push(...item.children) : path.push(item);
      });

      this.SetViews(path);
      mountDynamicRoutes(dynamic || []);

      // this.SetViews(dynamic.children);
      // mountDynamicRoutes(dynamic.children || []);

      return dynamic;
    }
  }
});
