import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const memberRoutes: RouteRecordRaw[] = [
  {
    path: "/member",
    component: Layout,
    children: [
      {
        path: "",
        name: "Member",
        component: () => import("@/views/Home.vue"),
        meta: { title: "会员", icon: "/src/assets/icons/member.svg" },
      },
    ],
  },
];

export default memberRoutes;
