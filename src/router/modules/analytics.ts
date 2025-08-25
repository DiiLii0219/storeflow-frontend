import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const analyticsRoutes: RouteRecordRaw[] = [
  {
    path: "/data",
    component: Layout,
    children: [
      {
        path: "",
        name: "Data",
        component: () => import("@/views/Home.vue"),
        meta: { title: "数据", icon: "/src/assets/icons/analytics.svg" },
      },
    ],
  },
];

export default analyticsRoutes;
