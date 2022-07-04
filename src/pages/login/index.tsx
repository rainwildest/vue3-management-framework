import { defineComponent, reactive, ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { useUserStore } from "@/stores/modules/user";
import { useRoutersStore } from "@/stores/modules/routers";
import { useRouter } from "vue-router";

const validateUsername = (rule: any, value: string, callback: any) => {
  if (!value) {
    callback(new Error("请填写用户名"));
  } else {
    callback();
  }
};

const validatePassword = (rule: any, value: string, callback: any) => {
  if (!value.length) {
    callback(new Error("请填写密码"));
  } else {
    callback();
  }
};

export default defineComponent({
  name: "Login",
  setup() {
    const userStore = useUserStore();
    const routerStore = useRoutersStore();
    const router = useRouter();

    const rules = reactive({
      username: [{ validator: validateUsername }],
      password: [{ validator: validatePassword }]
    });

    const loading = ref(false);
    const form = ref();
    const info = reactive({ username: "", password: "" });

    const onLogin = () => {
      form.value.validate(async (valid: any) => {
        if (!valid) return;
        loading.value = true;
        setTimeout(async () => {
          const data: any = await userStore.ONLOGIN(info);
          data.code === 104 && (loading.value = false);

          if (data.code === 100) {
            await routerStore.GetViews();
            router.push("/");
          }
        }, 1000 * 0.5);
      });
    };

    const onEnter = (evt: Event | KeyboardEvent) => {
      if ((evt as KeyboardEvent).key === "Enter") onLogin();
    };

    return () => {
      return (
        <div class="w-screen h-screen flex items-center justify-center bg-gray-1000">
          <div class="w-72 h-72">
            <p class="text-center text-white text-4xl font-semibold mb-6">系统登录</p>
            <ElForm ref={form} model={info} labelPosition="top" rules={rules}>
              <ElFormItem label="账号" prop="username">
                <ElInput autocomplete="off" clearable v-model={info.username} onKeydown={onEnter} />
              </ElFormItem>
              <ElFormItem label="密码" prop="password">
                <ElInput type="password" autocomplete="off" clearable v-model={info.password} onKeydown={onEnter} />
              </ElFormItem>

              <ElButton class="w-full mt-5" type="primary" onClick={onLogin} loading={loading.value}>
                登录
              </ElButton>
            </ElForm>
          </div>
        </div>
      );
    };
  }
});
