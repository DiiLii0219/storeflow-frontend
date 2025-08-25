<template>
  <div class="p-4">
    <el-row :gutter="20">
      <el-col :span="8" v-for="(sec, idx) in sections" :key="idx" class="mb-4">
        <el-card shadow="never" class="rounded-2xl overflow-hidden">
          <!-- 头部 -->
          <div class="flex items-center gap-3 pb-2">
            <div
              class="w-9 h-9 rounded-xl flex items-center justify-center"
              :class="sec.badgeBg"
            >
              <el-icon class="text-white text-lg">
                <component :is="sec.icon" />
              </el-icon>
            </div>
            <div class="font-semibold text-gray-800 text-lg">
              {{ sec.title }}
            </div>
          </div>

          <!-- 分隔线（更贴近示例图的淡分隔） -->
          <div class="border-t border-gray-100 mb-1"></div>

          <!-- 列表 -->
          <ul class="divide-y divide-gray-100">
            <li
              v-for="(item, i) in sec.items"
              :key="i"
              class="py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-1 rounded cursor-pointer transition-colors"
            >
              {{ item }}
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {
  OfficeBuilding,
  User,
  Coin,
  Grid,
  Setting,
  MagicStick,
} from '@element-plus/icons-vue'

// 复刻图片里的 6 个区块
const sections = [
  {
    title: '商户信息管理',
    icon: OfficeBuilding,
    badgeBg: 'bg-sky-500',
    items: ['商户信息设置', '门店管理', '房间管理', '设备管理', '店内区域管理', '连锁区域管理'],
  },
  {
    title: '员工管理',
    icon: User,
    badgeBg: 'bg-emerald-500',
    items: ['员工列表', '员工职位/头衔设置', '员工排班管理', '员工考勤规则设置', '员工预约排序设置'],
  },
  {
    title: '提成设置',
    icon: Coin,
    badgeBg: 'bg-rose-500',
    items: ['项目提成', '开卡提成', '产品提成', '套餐提成', '券提成', '阶梯提成'],
  },
  {
    title: '品项管理',
    icon: Grid,
    badgeBg: 'bg-amber-500',
    items: ['项目', '套餐', '产品', '卡', '券', '品项类别设置', '产品供应商管理'],
  },
  {
    title: '系统基础设置',
    icon: Setting,
    badgeBg: 'bg-teal-500',
    items: ['权限管理', '支付方式管理', '预约设置', '收银设置', '顾客设置', '微信设置', '显示使用设置'],
  },
  {
    title: '系统高级设置',
    icon: MagicStick,
    badgeBg: 'bg-violet-500',
    items: [
      '自定义属性',
      '顾客档案字段管理',
      '个性化名词',
      '服务小记自定义提醒事项',
      '会员标签库管理',
      '会员号自定义',
      '管理员专用功能',
    ],
  },
]
</script>

<style scoped>
/* 精细化一些视觉，尽可能贴合截图 */
.el-card {
  margin-bottom: 5px;
}
</style>
