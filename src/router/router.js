import Vue from "vue";
import Router from "vue-router";
// import common from "./modules/common";
import user from "./modules/user";
// import store from "./store";
const s = () => import("../pages/Login.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/c",
      component: s,
    },
    {
      path: "/main",
      component: () => import("../pages/Main.vue"),
      children: [...user],
    },
  ],
});
