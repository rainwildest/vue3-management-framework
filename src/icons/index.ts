/**
 * 加载 svg
 */
export function loadSvg() {
  const files = import.meta.globEager("./svg/*.svg"); // vite

  const modules: any = {};

  const requireAll = (files: any) => {
    for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        console.log("ddd", files[key].default);
        modules[key.replace(/(\.\/|\.svg)/g, "")] = files[key].default;
      }
    }
  };

  console.log("svg", files);
  requireAll(files);

  // const requireAll = (requireContext) => requireContext.keys().map(requireContext);
  // const req = require.context("@/icons/svg/", false, /\.svg$/);
  // requireAll(req);
}
