import userinfo from "@/data/user.json";
import md5 from "md5";

export const login = (data: any = {}) => {
  const { username = "", password = "" } = data;
  const valid = userinfo.name === username && password === userinfo.password;
  const $data = valid ? userinfo : "";

  return { data: $data, token: valid ? md5(JSON.stringify($data)) : "", code: valid ? 100 : 104 };
};
