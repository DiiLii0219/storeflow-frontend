import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const wechatRoutes: RouteRecordRaw[] = [
  {
    path: "/wechat",
    component: Layout,
    children: [
      {
        path: "",
        name: "Wechat",
        component: () => import("@/views/Home.vue"),
        meta: { title: "微信", icon: "/src/assets/icons/wechat2.svg" },
      },
    ],
  },
];

export default wechatRoutes;
