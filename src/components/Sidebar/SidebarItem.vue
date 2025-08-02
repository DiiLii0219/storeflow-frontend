<template>
  <template v-if="hasChildren">
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon v-if="item.meta?.icon"><component :is="item.meta.icon" /></el-icon>
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
      <el-icon v-if="item.meta?.icon"><component :is="item.meta.icon" /></el-icon>
      <span>{{ item.meta?.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
const props = defineProps<{ item: any }>()

const hasChildren = computed(() => Array.isArray(props.item.children) && props.item.children.length > 0)
</script>
