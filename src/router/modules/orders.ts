import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const ordersRoutes: RouteRecordRaw[] = [
  {
    path: "/orders",
    component: Layout,
    children: [
      {
        path: "",
        name: "Orders",
        component: () => import("@/views/Home.vue"),
        meta: { title: "订单", icon: "/src/assets/icons/orders.svg" },
      },
    ],
  },
];

export default ordersRoutes;
