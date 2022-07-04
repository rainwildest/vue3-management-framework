import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import * as path from "path";
import ElementPlus from "unplugin-element-plus/vite";

const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // typings: path.resolve(__dirname, "src/typings"),
      apis: path.resolve(__dirname, "src/apis"),
      assets: path.resolve(__dirname, "src/assets")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自定义的主题色
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  plugins: [vue(), vueJsx(), ElementPlus({ useSource: true })]
});
