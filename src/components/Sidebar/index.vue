<template>
  <el-menu
    :default-active="route.path"
    router
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
  >
    <SidebarItem v-for="route in routes" :key="route.path" :item="route" />
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { computed } from "vue";
import { router } from "@/router";

const route = useRoute();

const routes = computed(() => {
  // 取 layout 下的子路由
  return router.options.routes.find((r) => r.path === "/")?.children || [];
});
</script>
