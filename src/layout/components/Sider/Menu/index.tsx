import { defineComponent, computed } from "vue";
import { storeToRefs } from "pinia";
import { ElAside, ElMenu } from "element-plus";
import { useRoutersStore } from "@/stores/modules/routers";
import MenuItem from "../MenuItem";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Menu",
  props: {
    collapse: {
      type: Boolean
    }
  },
  setup(props) {
    const { currentRoute } = useRouter();
    const store = useRoutersStore();
    const { views } = storeToRefs(store);

    const activedPath = computed(() => {
      const { path } = currentRoute.value;

      return path;
    });

    const routeList = computed(() => (views.value && views.value.length > 0 ? views.value : []));

    return () => {
      return (
        <ElAside class="w-full">
          <ElMenu class="bg-gray-1001 sider-menu" backgroundColor="#304156" textColor="#FFFFFF" defaultActive={activedPath.value} uniqueOpened router collapse={props.collapse}>
            {routeList.value.map((route: any) => (
              <MenuItem key={route.path} item={route} />
            ))}
          </ElMenu>
        </ElAside>
      );
    };
  }
});
