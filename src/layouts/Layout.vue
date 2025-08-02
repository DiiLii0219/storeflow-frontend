<template>
  <div class="layout">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar/index.vue'
</script>

<style scoped>
.layout {
  display: flex;
}
</style>
