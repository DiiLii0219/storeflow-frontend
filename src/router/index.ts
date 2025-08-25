import { createRouter, createWebHashHistory  } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { setupPermissionGuard } from "./permission";
// import Layout from "@/layouts/Layout.vue"
import dashboardRoutes from "./modules/dashboard";
import bookingRoutes from "./modules/booking";
import roomRoutes from "./modules/room";
import billingRoutes from "./modules/billing";
import ordersRoutes from "./modules/orders";
import marketingRoutes from "./modules/marketing";
import memberRoutes from "./modules/member";
import analyticsRoutes from "./modules/analytics";
import expensesRoutes from "./modules/expenses";
import wechatRoutes from "./modules/wechat";
import inventoryRoutes from "./modules/inventory";
import collectionRoutes from "./modules/collection";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
    meta: { requiresAuth: false },
  },
  ...dashboardRoutes,
  ...bookingRoutes,
  ...roomRoutes,
  ...billingRoutes,
  ...ordersRoutes,
  ...marketingRoutes,
  ...memberRoutes,
  ...analyticsRoutes,
  ...expensesRoutes,
  ...wechatRoutes,
  ...inventoryRoutes,
  ...collectionRoutes
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

setupPermissionGuard(router);
