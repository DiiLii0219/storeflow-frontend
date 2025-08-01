import { defineStore } from 'pinia';
import type { User } from '@/types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    user: null as User | null,
  }),
  getters: {
    isLoggedIn: state => !!state.token,
  },
  actions: {
    login(token: string, user: User) {
      this.token = token;
      this.user = user;
    },
    logout() {
      this.token = '';
      this.user = null;
    },
  },
});
