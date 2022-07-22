import { defineStore } from "pinia";
import { getToken, setToken } from "@/apis/auth";
import { login } from "@/apis/service/user";
import { ElMessage } from "element-plus";
import storage from "@/apis/storage";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getToken() || "",
      userinfo: storage.get("userinfo") || {}
    };
  },

  actions: {
    SetUserInfo(val: any) {
      this.userinfo = val;
      storage.set("userinfo", val);
    },

    SetToken(token: string) {
      this.token = token;
      setToken(token);
    },

    Login(data: any) {
      return new Promise((resolve, reject) => {
        const $data = login(data);
        $data.code === 104 && ElMessage.error("登录失败");
        $data.data && this.SetUserInfo($data.data);
        $data.token && this.SetToken($data.token);

        resolve($data);
      });
    }
  }
});
