import { defineComponent } from "vue";
import Menu from "./Menu";

export default defineComponent({
  name: "Sider",
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="bg-gray-1001 sider-container">
          {slots.default ? slots.default() : ""}
          <div class="menu">
            <Menu collapse={props.collapse} />
          </div>
        </div>
      );
    };
  }
});
