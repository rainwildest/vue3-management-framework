import { defineComponent, ref } from "vue";
import { ElConfigProvider } from "element-plus";

export default defineComponent({
  name: "App",
  setup: () => {
    const local = ref({
      name: "zh-cn",
      el: {}
    });

    return () => (
      <ElConfigProvider locale={local.value}>
        {/* <div> */}
        <router-view />
        {/* </div> */}
      </ElConfigProvider>
    );
  }
});
