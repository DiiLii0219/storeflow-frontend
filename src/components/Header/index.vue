<template>
  <div class="flex justify-between items-center h-14 px-4 bg-white shadow">
    <!-- Avatar + Dropdown -->
    <el-dropdown trigger="click">
      <span class="cursor-pointer flex items-center">
        <el-avatar :size="32" :src="user.avatar" class="mr-2" />
        <span class="text-sm text-gray-700">{{ user.name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="editProfile">修改个人信息</el-dropdown-item>
          <el-dropdown-item @click="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

// 模拟用户信息（可替换为 pinia / api 数据）
const user = {
  name: "Admin",
  avatar: "https://i.pravatar.cc/150?img=3",
};

const editProfile = () => {
  // 可打开 dialog 或跳转页面
  console.log("修改信息");
};

const changePassword = () => {
  console.log("修改密码");
};

const logout = () => {
  // 清除 token 等
  localStorage.removeItem("token");
  router.push("/login");
};
</script>
