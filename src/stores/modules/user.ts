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
    SETUSERINFO(val: any) {
      this.userinfo = val;
      storage.set("userinfo", val);
    },
    SETTOKEN(token: string) {
      this.token = token;
      setToken(token);
    },
    ONLOGIN(data: any) {
      return new Promise((resolve, reject) => {
        const $data = login(data);
        $data.code === 104 && ElMessage.error("登录失败");
        $data.data && this.SETUSERINFO($data.data);
        $data.token && this.SETTOKEN($data.token);

        resolve($data);
      });
    }
  }
});
