import type { Router } from 'vue-router'
import { useAuthStore } from '@/store/auth'

export function setupPermissionGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    const isLoggedIn = auth.isLoggedIn

    if (to.meta.requiresAuth && !isLoggedIn) {
      next({ path: '/login' })
    } else if (to.path === '/login' && isLoggedIn) {
      next({ path: '/' })
    } else {
      next()
    }
  })
}
