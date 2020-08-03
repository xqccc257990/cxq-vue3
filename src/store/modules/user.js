const user = () => import("./pages/user.vue");

export default [
  {
    path: "user/list",
    redirect: user,
    meta: {
      btnId: {
        "41": 0,
        "42": 1,
        "43": 2,
      },
    },
  },
];
