import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";
// import zzTable from "./base_modules/utils/complugin";

//资源库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import { Message } from "element-ui";

Vue.use(ElementUI);

//脚本库
// import ajax from "./base_modules/plugin/ajax";
// import cache from "./base_modules/plugin/cache";
// import common from "./base_modules/plugin/common";

// Vue.use(ajax, router);
// Vue.use(cache);
// Vue.use(common, router);

//组件库
// import appTree from "./base_modules/components/app-tree";

// Vue.component("app-tree", appTree);
import ZzTable from "./base_modules/components/zz-table";
import ZzInput from "./base_modules/components/zz-input";

import ZzSelect from "./base_modules/components/zz-select";
import ZzForm from "./base_modules/components/zz-form";
import ZzUpload from "./base_modules/components/zz-upload";
Vue.component("zz-table", ZzTable);
Vue.component("zz-input", ZzInput);
Vue.component("zz-select", ZzSelect);
Vue.component("zz-upload", ZzUpload);
Vue.component("zz-form", ZzForm);

// Vue.component("zz-select", zzSelect);

Vue.config.productionTip = false;
Vue.config.TOKEN_NAME = "accessToken"; //全局自定义token名
// Vue.config.interceptors = {
//   response: (res) => {
//     if (res.status === 200 && res.data.code == 0) {
//       return true;
//     } else if (res.status === 200 && res.data.code == 1001) {
//       Message({
//         message: "登录已超时",
//         type: "warning",
//       });
//       router.push("/login");
//       return false;
//     } else {
//       return false;
//     }
//   },
// };
const AJAX_URL = process.env.VUE_APP_AJAX_URL;
Vue.config.BASE_URL = AJAX_URL;
Vue.prototype.UPLOAD_URL = AJAX_URL;

// 配置路由权限
// router.beforeEach((to, from, next) => {
//   localStorage.setItem("beforePath", from.path);
//   if (
//     localStorage.getItem("userInfo") ||
//     to.path == "/login" ||
//     to.path == "/downLoad"
//   ) {
//     // 判断本地是否存在access_token
//     next();
//   } else {
//     // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
//     Message({
//       message: "登录已过期",
//       type: "warning",
//     });
//     next("/login");
//   }
// });

// let url = {
//   test: {
//     BASE_URL: "http://10.0.14.60:6060",
//     UPLOAD_URL: "http://10.0.14.60:6060",
//   },
//   pre: {
//     BASE_URL: "https://apartment-preapi.wavewisdom.com",
//     UPLOAD_URL: "https://apartment-preapi.wavewisdom.com",
//   },
//   pro: {
//     BASE_URL: "https://apartment-api.wavewisdom.com",
//     UPLOAD_URL: "https://apartment-api.wavewisdom.com",
//   },
//   dev: {
//     BASE_URL: "http://10.0.14.57:6060",
//     UPLOAD_URL: "http://10.0.14.57:6060",
//   },
// };
// Vue.prototype.allUrl = url;

// Vue.config.urlOpt = [
//   ["http://10.0.14.57:6060", "http://apptest.wavewisdom.com/apart-dev"],
//   ["http://10.0.14.60:6060", "http://test-wx.wavewisdom.com"],
// ];

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
