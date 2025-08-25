<template>
  <!-- Logo -->
  <div class="text-xl font-bold cursor-pointer" @click="goHome">StoreFlow</div>
  <!-- SiderBar -->
  <el-menu :default-active="route.path" router>
    <SidebarItem v-for="route in routes" :key="route.path" :item="route" />
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { computed } from "vue";
import { router } from "@/router";
import Layout from "@/layouts/Layout.vue";

const route = useRoute();

const routes = computed(() => {
  const result: any[] = [];

  router.options.routes.forEach((r) => {
    // 有 title 的 Layout，说明是父菜单（如：库存）
    if (r.component === Layout && r.meta?.title && !r.meta?.hidden) {
      result.push(r);
    }

    // 处理那些 Layout 自身没有 meta.title，但是有默认子路由的情况（如：dashboard）
    if (
      r.component === Layout &&
      r.children?.length === 1 &&
      r.children[0].path === "" &&
      r.children[0].meta?.title &&
      !r.children[0].meta?.hidden
    ) {
      const child = r.children[0];
      result.push({
        ...child,
        path: r.path, // 把 Layout 路由的 path 作为菜单的 index
      });
    }
  });

  return result;
});

const goHome = () => {
  router.push("/home");
};
</script>
