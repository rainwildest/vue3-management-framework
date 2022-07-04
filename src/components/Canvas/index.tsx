import { defineComponent, computed } from "vue";
import NestedDraggable from "../NestedDraggable";
import { useConfigStore } from "@/stores/modules";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Canvas",
  setup() {
    const store = useConfigStore();
    const { config } = storeToRefs(store);

    const configValue = computed({
      get: () => config.value,
      set(e) {
        store.modifyConfig(e);
      }
    });

    const onUpdate = (e: any) => {
      configValue.value = e;
    };

    return () => {
      return (
        <div>
          <NestedDraggable
            class="absolute left-1/2 h-60 -translate-x-1/2 w-96 border border-solid overflow-auto p-3"
            tasks={configValue.value as any}
            updateValue={onUpdate}
          />
        </div>
      );
    };
  }
});
