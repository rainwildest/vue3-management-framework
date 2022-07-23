import { defineStore } from "pinia";
import storage from "@/apis/storage";
import dynamic from "@/routers/modules/dynamic";
import { mountDynamicRoutes } from "@/routers";

export const useRoutersStore = defineStore("routers", {
  state: () => {
    return {
      views: storage.get("views") || []
    };
  },

  actions: {
    SetViews(views: any) {
      this.views = views;
      storage.set("views", views);
    },

    GetViews() {
      const path: any[] = [];
      dynamic.forEach((item) => {
        if (!item?.children) return path.push(item);

        item.children.length === 1 ? path.push(...item.children) : path.push(item);
      });

      this.SetViews(path);
      mountDynamicRoutes(dynamic || []);

      return dynamic;
    }
  }
});
