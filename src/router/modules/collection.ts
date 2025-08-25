import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const collectionRoutes: RouteRecordRaw[] = [
  {
    path: "/collect",
    component: Layout,
    children: [
      {
        path: "",
        name: "Collection",
        component: () => import("@/views/Home.vue"),
        meta: { title: "收账", icon: "/src/assets/icons/collection.svg" },
      },
    ],
  },
];

export default collectionRoutes;
