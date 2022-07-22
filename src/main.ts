import { createApp } from "vue";
import App from "./App";
import { bootstrap } from "./bootstrap";

// import "element-plus/dist/index.css";

const app = createApp(App);

bootstrap({ app }).then(async ({ router }) => {
  router.isReady().then(() => app.mount("#app"));
});
