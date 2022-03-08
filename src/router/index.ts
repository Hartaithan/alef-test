import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Form from "../views/Form.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/preview",
    name: "Preview",
    component: () => import("../views/Preview.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
