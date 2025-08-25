import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const expensesRoutes: RouteRecordRaw[] = [
  {
    path: "/expense",
    component: Layout,
    children: [
      {
        path: "",
        name: "Expense",
        component: () => import("@/views/Home.vue"),
        meta: { title: "支出", icon: "/src/assets/icons/expenses.svg" },
      },
    ],
  },
];

export default expensesRoutes;
