<template>
  <div class="flex h-screen w-screen overflow-hidden">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-100 h-full">
      <Sidebar />
    </aside>

    <!-- Right side: Header + RouterView -->
    <div class="flex flex-col flex-1 min-w-0">
      <!-- Header -->
      <header class="h-16 bg-white shadow px-4 flex items-center justify-between">
        <Header />
      </header>

      <!-- Main content -->
      <main class="flex-1 overflow-auto bg-gray-50 p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar/index.vue"
import Header from "@/components/Header/index.vue"
</script>

