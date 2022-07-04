import { defineComponent } from "vue";
import { useConfigStore } from "@/stores/modules";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Attributes",
  setup() {
    const store = useConfigStore();
    const { name, counter, isAdmin } = storeToRefs(store);
    console.log(name.value, counter.value);
    const k = () => {
      store.increment();
    };

    return () => {
      return <div class="w-72 bg-gray-100">首页</div>;
    };
  }
});
