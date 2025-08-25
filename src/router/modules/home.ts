import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: { title: "总览", icon: "HomeFilled" },
      },
    ],
  },
];

export default homeRoutes;
