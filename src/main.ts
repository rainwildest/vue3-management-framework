import { createApp } from "vue";
import App from "./App";
// import store from "./stores";
import { bootstrap } from "./bootstrap";
import "./styles/index.scss";
import "nprogress/nprogress.css";
// import "element-plus/dist/index.css";
const app = createApp(App);
// app.use(store).mount("#app");

bootstrap({ app }).then(async ({ router }) => {
  router.isReady().then(() => app.mount("#app"));
});
