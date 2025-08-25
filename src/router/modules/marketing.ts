import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const marketingRoutes: RouteRecordRaw[] = [
  {
    path: "/marketing",
    component: Layout,
    children: [
      {
        path: "",
        name: "Marketing",
        component: () => import("@/views/Home.vue"),
        meta: { title: "营销", icon: "/src/assets/icons/marketing.svg" },
      },
    ],
  },
];

export default marketingRoutes;
