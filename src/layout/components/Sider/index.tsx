import { defineComponent } from "vue";
import Menu from "./Menu";

export default defineComponent({
  name: "Sider",
  setup() {
    return () => {
      return (
        <div class="bg-gray-1001 sider-container">
          <div class="h-20">KK</div>
          <div class="menu">
            <Menu collapse={false} />
          </div>
        </div>
      );
    };
  }
});
