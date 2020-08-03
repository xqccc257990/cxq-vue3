import Vue from "vue";
import Router from "vue-router";
import test from "./modules/test";
// import common from "./modules/common";
// import user from "./modules/user";
// import store from "./store";
const Login = () => import("../pages/Login.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "is-active",
  routes: [
    ...test,
    {
      path: "/",
      component: Login,
    },
    {
      path: "/main",
      component: () => import("../pages/Main.vue"),
      children: [
        {
          path: "s",
          component: Login,
        },
      ],
    },
  ],
});
