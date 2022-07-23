import { defineStore } from "pinia";
import storage from "@/apis/storage";

export const useConfigStore = defineStore("config", {
  state: () => {
    return {
      collapse: storage.get("collapse") || false,
      layout: "layout-normal",

      // all these properties will have their type inferred automatically
      counter: 0,
      name: "Eduardo",
      isAdmin: false,
      config: []
    };
  },
  actions: {
    SetCollapse(status: boolean) {
      this.collapse = status;
      storage.set("collapse", status);
    },

    increment(e?: any) {
      console.log(e);
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
    modifyConfig(e: any) {
      this.config = e;
    }
  }
});
