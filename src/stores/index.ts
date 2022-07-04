import { createPinia } from "pinia";
import { App } from "vue";
const store = createPinia();

export default store;

export function mountStore(app: App<Element>) {
  app.use(store);

  return store;
}
