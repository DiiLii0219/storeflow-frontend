<template>
  <div class="flex h-screen w-screen flex-col">
    <!-- Header 在最上方 -->
    <Header />

    <!-- 主体部分：左侧 Sidebar + 右侧 RouterView -->
    <div class="flex flex-1 min-h-0">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-100 h-full">
        <Sidebar />
      </aside>

      <!-- 主内容 -->
      <main class="flex-1 overflow-auto bg-gray-50 p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar/index.vue";
import Header from "@/components/Header/index.vue";
</script>
