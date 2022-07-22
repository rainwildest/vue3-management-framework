import { App } from "vue";
import { mountRouter, loadRoutes } from "@/routers";
import { mountStore } from "@/stores";
import { loadGuards } from "@/routers/guards";

import "nprogress/nprogress.css";
import "virtual:svg-icons-register";
import "./styles/index.scss";

type Options = {
  app: App<Element>;
};

export async function bootstrap(options: Options) {
  const { app } = options;

  // const store = mountStore(app);
  mountStore(app);

  const router = mountRouter(app);

  await loadRoutes();
  loadGuards(router);

  return { router };
}
