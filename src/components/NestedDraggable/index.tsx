import { defineComponent, PropType } from "vue";
import Draggable from "vuedraggable";
import NestedDraggable from "./";

export default defineComponent({
  name: "NestedDraggable",
  props: {
    tasks: {
      type: Array as PropType<FieldProps>,
      required: true
    },
    updateValue: {
      type: Function as PropType<(v: any) => void>
    }
  },
  setup(props) {
    const onUpdate = (e: any) => {
      props.updateValue && props.updateValue(e);
    };

    return () => {
      return (
        <Draggable
          class=""
          // list={props.tasks}
          group={{ name: "site" }}
          itemKey="uuid"
          modelValue={props.tasks}
          onUpdate:modelValue={onUpdate}
        >
          {{
            item: ({ element }: any) => {
              return (
                <div class="border border-solid border-gray-900">
                  {!element.children && <div class="">{element.text}</div>}
                  {element.children && (
                    <NestedDraggable
                      style={{ minHeight: "30px", padding: "10px" }}
                      tasks={element.children}
                      updateValue={(e: any) => {
                        element.children = e;
                      }}
                    />
                  )}
                </div>
              );
            }
          }}
        </Draggable>
      );
    };
  }
});
