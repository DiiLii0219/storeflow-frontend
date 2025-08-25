<template>
  <div class="h-full flex flex-col">
    <!-- 上部分：Logo + 主菜单 -->
    <div>
      <el-menu :default-active="route.path" router>
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </div>

    <!-- 下部分：更多设置 -->
    <div class="mt-auto">
      <el-menu :default-active="route.path" router>
        <el-menu-item index="/settings">
          <el-icon><Setting /></el-icon>
          <span>更多设置</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
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
    // 有 title 的 Layout，作为父菜单
    if (r.component === Layout && r.meta?.title && !r.meta?.hidden) {
      result.push(r);
    }

    // Layout 无 meta.title，但有默认子路由（例如 dashboard）
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
        path: r.path, // 用 Layout 路由的 path 作为菜单 index
      });
    }
  });

  return result;
});

const goHome = () => {
  router.push("/dashboard");
};
</script>
