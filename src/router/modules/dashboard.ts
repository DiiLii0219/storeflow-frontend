import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    component: Layout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: { title: "总览", icon: "/src/assets/icons/dashboard2.svg" },
      },
    ],
  },
];

export default dashboardRoutes;
