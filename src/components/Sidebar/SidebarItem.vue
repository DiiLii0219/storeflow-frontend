<template>
  <template v-if="hasChildren">
    <el-sub-menu :index="fullPath">
      <template #title>
        <el-icon v-if="isElementPlusIcon(item.meta?.icon)" class="icon-class">
          <component :is="item.meta.icon" />
        </el-icon>
        <img v-else :src="item.meta.icon" alt="icon" class="icon-class" />
        <span>{{ item.meta?.title }}</span>
      </template>

      <SidebarItem
        v-for="child in visibleChildren"
        :key="childKey(child)"
        :item="child"
        :base-path="childBasePath(child)"
      />
    </el-sub-menu>
  </template>

  <template v-else>
    <el-menu-item :index="fullPath">  <!-- ★ 用完整路径 -->
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

const props = defineProps<{ item: any; basePath?: string }>();

/** 子项可见性过滤（支持 meta.hidden） */
const visibleChildren = computed(() =>
  Array.isArray(props.item.children)
    ? props.item.children.filter((c: any) => !c.meta?.hidden)
    : []
);

const hasChildren = computed(() => visibleChildren.value.length > 0);

/** 是否是 Element Plus 图标名 */
function isElementPlusIcon(name: string | undefined): boolean {
  return name ? !!(Icons as Record<string, any>)[name] : false;
}

/** 路径拼接：把相对 path 拼到 basePath 上 */
function joinPath(parent: string | undefined, child: string | undefined): string {
  const p = parent ?? "";
  const c = child ?? "";
  if (!c) return p || "/";
  if (c.startsWith("/")) return c;               // 已是绝对路径
  if (!p) return "/" + c.replace(/^\/+/, "");
  return (p.endsWith("/") ? p.slice(0, -1) : p) + "/" + c.replace(/^\/+/, "");
}

/** 当前项的完整路径（用于 :index） */
const fullPath = computed(() => {
  // 如果 item.path 已经是绝对路径，直接用
  if (typeof props.item.path === "string" && props.item.path.startsWith("/")) {
    return props.item.path;
  }
  return joinPath(props.basePath, props.item.path);
});

/** 给子项的 basePath：当前项是父级时，子项的 base 就是当前项的 fullPath */
function childBasePath(child: any): string {
  // 对于子项，如果它自己是绝对路径，就直接用它自身
  if (typeof child.path === "string" && child.path.startsWith("/")) {
    return child.path;
  }
  return fullPath.value;
}

/** 更稳定的 key（避免子路由相对路径冲突） */
function childKey(child: any): string {
  return joinPath(fullPath.value, child.path);
}
</script>

<style scoped>
.icon-class {
  width: 1.25rem;  /* 20px */
  height: 1.25rem;
  margin-right: 0.25rem;
}
</style>
