import { defineComponent, KeepAlive, Transition, reactive, watch, computed } from "vue";
import { useTagsStore, useConfigStore } from "@/stores/modules";
import { storeToRefs } from "pinia";
import { ElContainer, ElMain, ElHeader } from "element-plus";
// import { useRoute } from "vue-router";
import Sider from "./components/Sider";
import Topbar from "./components/Topbar";
import TagsView from "./components/TagsView";
import "./styles/index.scss";

export default defineComponent({
  name: "Layout",
  props: {
    layout: {
      type: String,
      default: "layout-1"
    }
  },
  setup(props, { slots }) {
    // const route = useRoute();
    // const configStore = useConfigStore();
    const tagStore = useTagsStore();
    const { tags } = storeToRefs(tagStore);
    // const { collapse } = storeToRefs(configStore);

    // const key = computed(() => route.path);
    const caches = computed(() => [...tags.value.filter((e) => e.keepAlive).map((e) => e.name)]);

    return () => {
      return (
        <div class="w-full h-full flex">
          <ElContainer class="overflow-hidden">
            <ElHeader class="bg-gray-200">Header</ElHeader>

            <ElContainer class="overflow-auto">
              <Sider>
                {{
                  default: () => {
                    return "skdfsd";
                  }
                }}
              </Sider>
              <ElMain>
                <div class="main__view">
                  <router-view>
                    {{
                      default: ({ Component }: any) => (
                        <Transition mode="out-in" name="fade-transform">
                          {{
                            default: () => <KeepAlive include={caches.value}>{Component}</KeepAlive>
                          }}
                        </Transition>
                      )
                    }}
                  </router-view>
                </div>
              </ElMain>
            </ElContainer>
          </ElContainer>
        </div>
      );
    };
  }
});
