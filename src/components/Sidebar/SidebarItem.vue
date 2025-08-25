<template>
  <template v-if="hasChildren">
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon v-if="isElementPlusIcon(item.meta?.icon)" class="icon-class">
          <component :is="item.meta.icon" />
        </el-icon>
        <img v-else :src="item.meta.icon" alt="icon" class="icon-class" />
        <span>{{ item.meta?.title }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      />
    </el-sub-menu>
  </template>

  <template v-else>
    <el-menu-item :index="item.path">
      <el-icon v-if="isElementPlusIcon(item.meta?.icon)" class="icon-class">
        <component :is="item.meta.icon" />
      </el-icon>
      <img v-else :src="item.meta.icon" alt="icon" class="icon-class" />
      <span>{{ item.meta?.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { computed } from "vue";
import * as Icons from "@element-plus/icons-vue";

const props = defineProps<{ item: any }>();

const hasChildren = computed(
  () => Array.isArray(props.item.children) && props.item.children.length > 0
);

function isElementPlusIcon(name: string | undefined): boolean {
  return name ? !!(Icons as Record<string, any>)[name] : false;
}
</script>

<style scoped>
.icon-class {
  width: 1.25rem;  /* 20px = Tailwind w-5 */
  height: 1.25rem;
  margin-right: 0.25rem;
}
</style>
