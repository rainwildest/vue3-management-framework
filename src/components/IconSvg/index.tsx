import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "IconSvg",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const iconName = computed(() => {
      if (props.name.includes("icon-")) {
        return `#${props.name}`;
      } else {
        return `#icon-${props.name}`;
      }
    });

    return () => {
      return (
        <svg class="icon-svg" aria-hidden={true}>
          <use xlinkHref={iconName.value}></use>
        </svg>
      );
    };
  }
});
