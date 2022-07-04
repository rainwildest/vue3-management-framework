/**
 * @description 获取 assets 下的图片资源路径
 * @param {string} src 路径
 * @returns string
 */
export const getImageUrl = (src: string) => {
  const sign = src.substring(0, 2);

  let _src = "";
  if (sign !== "./") _src = `../${src}`;
  return new URL(_src, import.meta.url).href;
};

/**
 * @description 数据类型判断
 * @param {unknown} value
 * @returns string
 */
export const typeOf = (value: unknown): string => {
  /* 使用原型链来实现这一方法 */
  let res = Object.prototype.toString.call(value);

  /* 字符串分割 */
  res = res.split(" ")[1];

  /* 字符串切割 */
  res = res.substring(0, res.length - 1);

  return res.toLowerCase();
};

/**
 * @description 判断对象是否为 JSON
 * @param {string} str
 * @returns boolean
 */
export const isJSON = (str: string): boolean => {
  if (typeof str === "string") {
    try {
      const obj = JSON.parse(str);
      return typeof obj === "object" && obj ? true : false;
    } catch (e) {
      return false;
    }
  }

  return typeOf(str) === "object";
  // throw "parameter should be a string";
};

export const isNull = (value: any) => {
  return value === "" || value === undefined || value === null;
};
