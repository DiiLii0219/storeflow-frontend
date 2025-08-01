import { createRouter, createWebHistory } from 'vue-router'
import { setupPermissionGuard } from './permission'

const routes = [
  {
    path: '/',
    redirect: '/login'  // 👉 默认进入登录页面
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
    meta: { requiresAuth: true }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})  

setupPermissionGuard(router)