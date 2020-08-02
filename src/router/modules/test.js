const menu = () => import("./test/menu.vue");
const table = () => import("./test/table.vue");
const input = () => import("./test/input.vue");
const select = () => import("./test/select.vue");
// const tree = () => import("./test/tree.vue");
const form = () => import("./test/form.vue");
const upload = () => import("./test/upload.vue");

export default [
  {
    path: "/u",
    component: upload,
  },
  {
    path: "/m",
    component: menu,
  },
  {
    path: "/f",
    component: form,
  },
  {
    path: "/t",
    component: table,
  },
  {
    path: "/i",
    component: input,
  },
  {
    path: "/s",
    component: select,
  },
  // {
  //   path: "/tr",
  //   component: tree,
  // },
];
