// const s = () => import("../../pages/Login.vue");

export default [
  {
    path: "/",
    redirect: "../../pages/Login.vue",
  },
  {
    path: "*",
    redirect: "../../pages/Login.vue",
  },
];
