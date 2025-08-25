import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const roomRoutes: RouteRecordRaw[] = [
  {
    path: "/room",
    component: Layout,
    children: [
      {
        path: "",
        name: "Room",
        component: () => import("@/views/room/index.vue"),
        meta: { title: "房间", icon: "/src/assets/icons/room.svg" },
      },
    ],
  },
];

export default roomRoutes;
