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
    SETVIEWS(views: any) {
      this.views = views;
      storage.set("views", views);
    },
    SETCOLLAPSE(status: boolean) {
      this.collapse = status;
      storage.set("collapse", status);
    },

    GetViews() {
      this.SETVIEWS(dynamic.children);
      mountDynamicRoutes(dynamic.children || []);
      return dynamic;
    }
  }
});
