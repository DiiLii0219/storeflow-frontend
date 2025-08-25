<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18">
        <div
          class="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-gray-700"
        >
          <!-- 左箭头 -->
          <button
            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white active:scale-95"
            @click="prevDay"
            aria-label="前一天"
          >
            <!-- 你也可以换成 icon 库，这里用简单的字符 -->
            ‹
          </button>

          <!-- 日期文本 -->
          <span
            class="min-w-[11rem] text-sm sm:text-base tracking-wide text-gray-800 text-center"
          >
            {{ zhDate }}
          </span>

          <!-- 右箭头 -->
          <button
            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white active:scale-95"
            @click="nextDay"
            aria-label="后一天"
          >
            ›
          </button>
        </div>
        <div class="p-4 space-y-3">
          <FullCalendar ref="fcRef" :options="options" />
        </div>
        <div>图例</div>
      </el-col>
      <el-col :span="6">
        <div>预约日历标题</div>
        <div>日历表</div>
        <div>预约提醒标题</div>
        <div>预约提醒区域</div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourcePlugin from "@fullcalendar/resource";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import zhCn from "@fullcalendar/core/locales/zh-cn";

const current = ref(new Date());

const nextDay = () => {
  current.value = new Date(current.value.getTime() + 24 * 60 * 60 * 1000);
};
const prevDay = () => {
  current.value = new Date(current.value.getTime() - 24 * 60 * 60 * 1000);
};

// 显示：08月14日 星期四
const zhDate = computed(() => {
  const d = current.value;
  const pad = (n) => String(n).padStart(2, "0");
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());

  const weekMap = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const wk = weekMap[d.getDay()];

  return `${mm}月${dd}日 ${wk}`;
});
// ====== 资源（两位员工）======
const resources = [
  { id: "empA", title: "张三", extendedProps: { role: "美容师" } },
  { id: "empB", title: "李四", extendedProps: { role: "美容师" } },
];

// ====== 今天的两条示例预约 ======
const todayISO = new Date().toISOString().slice(0, 10);
const events = [
  {
    id: "e1",
    title: "客户A\n11:30 - 12:30",
    start: `${todayISO}T11:30:00`,
    end: `${todayISO}T12:30:00`,
    resourceId: "empA",
  },
  {
    id: "e2",
    title: "客户B\n15:00 - 16:00",
    start: `${todayISO}T15:00:00`,
    end: `${todayISO}T16:00:00`,
    resourceId: "empB",
  },
];

// ====== FullCalendar 选项 ======
const options = {
  // schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
  plugins: [
    interactionPlugin,
    timeGridPlugin,
    dayGridPlugin,
    resourcePlugin,
    resourceTimeGridPlugin,
  ],
  initialView: "resourceTimeGridDay",
  locale: "zh-cn",
  locales: [zhCn],
  headerToolbar: false, // 我们用自定义头部
  resources,
  events,

  slotMinTime: "10:00:00", // 从 10 点开始
  slotMaxTime: "20:00:00", // 到 20 点结束
  slotDuration: "00:30:00",
  allDaySlot: false,
  nowIndicator: true,
  scrollTime: "10:00:00",
  slotLabelFormat: { hour: "2-digit", minute: "2-digit", hour12: false },

  // 资源列头（两行：姓名 + 职位）
  resourceLabelContent(arg) {
    const role = arg.resource.extendedProps.role || "";
    return {
      html: `<div class="flex flex-col items-center py-1">
      <div class="text-gray-900 font-medium">${arg.resource.title}</div>
      <div class="text-gray-400 text-xs">${role}</div>
    </div>`,
    };
  },

  selectable: true,
  selectMirror: true,
  select(info) {
    console.log("选中：", info.startStr, info.endStr, info.resource?.id);
  },

  // 让事件样式更清晰一点
  eventClassNames() {
    return [
      "bg-white",
      "rounded-md",
      "border",
      "border-gray-200",
      "shadow-sm",
      "text-xs",
      "p-2",
      "leading-4",
    ];
  },
  eventContent(arg) {
    const lines = arg.event.title.split("\n");
    return {
      html: lines.map((line) => `<div>${line}</div>`).join(""),
    };
  },
};
</script>
