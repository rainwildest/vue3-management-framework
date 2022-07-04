import { defineComponent, Fragment } from "vue";
import { ElMenuItem, ElSubMenu } from "element-plus";
import MenuItem from "./";

export default defineComponent({
  name: "MenuItem",
  props: {
    item: Object
  },
  setup(props) {
    return () => {
      return (
        <Fragment>
          {(!props.item?.children || !props.item?.children?.length) && <ElMenuItem index={props.item?.path}>{props.item?.meta?.title}</ElMenuItem>}

          {props.item?.children && props.item?.children?.length && (
            <ElSubMenu
              index={props.item?.path}
              v-slots={{
                title: () => <span class="title">{props.item?.meta?.title}</span>
              }}
            >
              {props.item?.children.map((child: any) => (
                <MenuItem item={child} />
              ))}
            </ElSubMenu>
          )}
        </Fragment>
      );
    };
  }
});
