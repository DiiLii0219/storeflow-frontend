import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { setupPermissionGuard } from "./permission";
import Layout from "@/layout/Layout.vue";

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
  {
    path: "/home",
    component: Layout, // 用 Layout 作为父组件
    children: [
      {
        path: "", // 注意这里 path 为空，表示默认子路由
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: { title: "主页", icon: "HomeFilled" },
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

setupPermissionGuard(router);
