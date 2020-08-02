const s = () => import("../../pages/Login.vue");

export default [
  {
    path: "user/list",
    component: s,
  },
  {
    path: "sw",
    component: s,
  },
];
