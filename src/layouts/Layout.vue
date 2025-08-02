<template>
  <div class="layout">
    <Sidebar />
    <div class="flex-1 flex flex-col h-screen">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar/index.vue";
import Header from "@/components/Header/index.vue";
</script>

<style scoped>
.layout {
  display: flex;
}
</style>
