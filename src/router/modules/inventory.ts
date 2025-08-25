import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const inventoryRoutes: RouteRecordRaw[] = [
  {
    path: "/inventory",
    component: Layout,
    meta: { title: "库存", icon: "/src/assets/icons/inventory.svg" },
    children: [
      {
        path: "dashboard",
        name: "InventoryDashboard",
        component: () => import("@/views/inventory/index.vue"),
        meta: { title: "数据看板", icon: "PieChart" },
      },
      {
        path: "manage",
        name: "InventoryManage",
        component: () => import("@/views/inventory/index.vue"),
        meta: { title: "库存管理", icon: "Box" },
      },
    ],
  },
];

export default inventoryRoutes;
