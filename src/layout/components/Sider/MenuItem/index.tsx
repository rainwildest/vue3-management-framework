import { defineComponent, Fragment } from "vue";
import { ElMenuItem, ElSubMenu } from "element-plus";
import MenuItem from "./";
import { ElIcon } from "element-plus";
import IconSvg from "@/components/IconSvg";

export default defineComponent({
  name: "MenuItem",
  props: {
    item: Object
  },
  setup(props) {
    return () => {
      return (
        <Fragment>
          {!!(!props.item?.children || !props.item?.children?.length) && (
            <ElMenuItem index={props.item?.path}>
              {!!props.item?.meta?.icon && (
                <ElIcon size="14px" class="pointer-events-none">
                  <IconSvg name={props.item?.meta.icon} />
                </ElIcon>
              )}
              <span>{props.item?.meta?.title}</span>
            </ElMenuItem>
          )}

          {!!(props.item?.children && props.item?.children?.length) && (
            <ElSubMenu
              index={props.item?.path}
              v-slots={{
                title: () => (
                  <Fragment>
                    {!!props.item?.meta?.icon && (
                      <ElIcon size="14px" class="pointer-events-none">
                        <IconSvg name={props.item?.meta.icon} />
                      </ElIcon>
                    )}
                    <span class="title">{props.item?.meta?.title}</span>
                  </Fragment>
                )
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
