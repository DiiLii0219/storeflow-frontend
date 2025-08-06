<template>
  <!-- Logo -->
  <div class="text-xl font-bold cursor-pointer" @click="goHome">StoreFlow</div>
  <!-- SiderBar -->
  <el-menu
    :default-active="route.path"
    router
  >
    <SidebarItem v-for="route in routes" :key="route.path" :item="route" />
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { computed } from "vue";
import { router } from "@/router";
import Layout from "@/layouts/Layout.vue"

const route = useRoute();

const routes = computed(() => {
  const result: any[] = []
  router.options.routes.forEach((r) => {
    if (r.component === Layout && r.children) {
      result.push(...r.children.filter(child => child.meta?.title && !child.meta?.hidden))
    }
  })
  return result
});

const goHome = () => {
  router.push('/home')
}
</script>
