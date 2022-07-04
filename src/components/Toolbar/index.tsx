import { defineComponent } from "vue";
import Draggable from "vuedraggable";
import k from "./tool.json";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  name: "Attributes",
  setup() {
    const sort = false;
    const onClone = (e: any) => {
      const element = { ...e, uuid: uuidv4() };

      if (e?.children) element["children"] = [];
      return element;
    };

    // const drage = ref(true);
    return () => {
      return (
        <div class="w-72 bg-white absolute left-0 top-0 bottom-0">
          <div class="px-3 py-4 flex items-center bg-white">组件</div>
          {k.map((item: any) => {
            return (
              <div>
                <div class="title mt-6 cursor-default px-3 mb-3">
                  {item.title}
                </div>

                <Draggable
                  group={{ name: "site", pull: "clone", put: false }}
                  list={item.children}
                  itemKey="name"
                  sort={sort}
                  class="grid grid-cols-2 gap-2"
                  clone={onClone}
                >
                  {{
                    item: ({ element }: any) => {
                      return (
                        <div class="cursor-pointer border border-solid text-gray-900 border-gray-100 py-2 px-3 text-sm rounded-md">
                          {element.text}
                        </div>
                      );
                    }
                  }}
                </Draggable>
              </div>
            );
          })}
        </div>
      );
    };
  }
});
