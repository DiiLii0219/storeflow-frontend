import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const bookingRoutes: RouteRecordRaw[] = [
  {
    path: "/booking",
    component: Layout,
    children: [
      {
        path: "",
        name: "Booking",
        component: () => import("@/views/booking/index.vue"),
        meta: { title: "预约", icon: "/src/assets/icons/booking.svg" },
      },
    ],
  },
];

export default bookingRoutes;
