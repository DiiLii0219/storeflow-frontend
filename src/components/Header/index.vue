<!-- HeaderBar.vue -->
<template>
  <!-- 顶部外边距 -->
  <div class="mt-2">
    <!-- 主头部：白底+阴影，高度对齐，左右分布 -->
    <header
      class="w-full h-16 bg-white shadow px-4 flex items-center justify-between rounded-md"
    >
      <!-- 左侧 Logo -->
      <div class="flex items-center">
        <img class="h-8 w-auto" :src="logoSrc" alt="logo" />
      </div>

      <!-- 右侧功能区 -->
      <div class="flex items-center gap-4">
        <!-- 消息 -->
        <button
          class="flex items-center space-x-1 hover:opacity-80"
          @click="onNotice"
        >
          <el-badge :value="noticeCount" :max="99" class="mr-1">
            <el-icon><BellFilled /></el-icon>
          </el-badge>
          <span class="text-sm">消息</span>
        </button>

        <!-- 客服 -->
        <button
          class="flex items-center space-x-1 hover:opacity-80"
          @click="onSupport"
        >
          <el-icon><Headset /></el-icon>
          <span class="text-sm">客服</span>
        </button>

        <!-- 教学 -->
        <button
          class="flex items-center space-x-1 hover:opacity-80"
          @click="onTeach"
        >
          <el-icon><Collection /></el-icon>
          <span class="text-sm">教学</span>
        </button>

        <!-- 分割线 -->
        <el-divider direction="vertical" />

        <!-- 头像 + 姓名 + 下拉 -->
        <el-dropdown trigger="click">
          <span class="cursor-pointer flex items-center">
            <el-avatar :size="32" :src="user.avatar" class="mr-2" />
            <div class="flex flex-col leading-4">
              <span class="text-sm font-medium">{{ user.name }}</span>
              <span v-if="user.title" class="text-[11px] text-gray-500">{{
                user.title
              }}</span>
            </div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="editProfile"
                >修改个人信息</el-dropdown-item
              >
              <el-dropdown-item @click="changePassword"
                >修改密码</el-dropdown-item
              >
              <el-dropdown-item divided @click="logout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </header>

    <!-- 底部外边距 + 深色条（更深色的一部分） -->
    <!-- <div class="mb-2"></div> -->
    <div class="h-1 bg-gray-200 rounded-b-md"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { BellFilled, Headset, Collection } from "@element-plus/icons-vue";

const props = defineProps<{
  logoSrc?: string;
}>();

const logoSrc = props.logoSrc ?? "/logo.png";

const user = reactive({
  avatar: "https://avatars.githubusercontent.com/u/1?v=4", // 替换为真实头像
  name: "晓舞",
  title: "总部 / 掌门管理员",
});

const noticeCount = 3;

// 事件（按需替换为实际逻辑）
const onNotice = () => {
  /* 跳转消息中心 */
};
const onSupport = () => {
  /* 打开客服 */
};
const onTeach = () => {
  /* 进入教学模块 */
};
const editProfile = () => {
  /* 修改个人信息 */
};
const changePassword = () => {
  /* 修改密码 */
};
const logout = () => {
  /* 退出登录 */
};
</script>
