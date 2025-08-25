import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const billingRoutes: RouteRecordRaw[] = [
  {
    path: "/billing",
    component: Layout,
    children: [
      {
        path: "",
        name: "Billing",
        component: () => import("@/views/billing/billing.vue"),
        meta: { title: "开单", icon: "/src/assets/icons/billing2.svg" },
      },
    ],
  },
];

export default billingRoutes;
