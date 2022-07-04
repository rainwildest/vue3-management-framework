import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: "Eduardo",
      isAdmin: false,
      config: []
    };
  },
  actions: {
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
