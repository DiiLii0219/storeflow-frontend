<template>
  <div class="p-8 space-y-4">
    <div class="text-3xl text-blue-600">Login Page</div>

    <button
      class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      @click="handleLogin"
    >
      登录
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth"; // 如果你有 Pinia 的 auth store

const router = useRouter();
const auth = useAuthStore();

const handleLogin = () => {
  const fakeToken = "mocked-token-123";
  const fakeUser = {
    id: 1,
    name: "Demo User",
    email: "demo@example.com",
  };

  auth.login(fakeToken, fakeUser);
  router.push("/dashboard"); // 跳转到主页
};
</script>

<style scoped>
/* 样式可选 */
</style>
