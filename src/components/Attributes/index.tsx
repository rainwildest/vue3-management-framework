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
      return (
        <div class="w-72 bg-gray-100 absolute right-0 top-0 bottom-0">
          <div onClick={k}>
            属性{name.value}
            {counter.value}
          </div>
        </div>
      );
    };
  }
});
