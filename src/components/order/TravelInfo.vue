<script setup lang="ts">
/**
 * TravelInfo 组件
 * 显示出行信息卡片，包含出行人信息和联系人信息两个入口
 */

// 出行信息项接口定义
interface TravelItem {
  /** 项目标题 */
  title: string;
  /** 是否已完成填写 */
  isCompleted: boolean;
}

// 定义组件属性接口
interface Props {
  /** 出行人信息 */
  traveler: TravelItem;
  /** 联系人信息 */
  contact: TravelItem;
}

// 使用 withDefaults 设置默认值
withDefaults(defineProps<Props>(), {
  traveler: () => ({ title: '出行人信息', isCompleted: false }),
  contact: () => ({ title: '联系人信息', isCompleted: false }),
});

// 定义组件事件
const emit = defineEmits<{
  /** 点击出行人信息时触发 */
  (e: 'clickTraveler'): void;
  /** 点击联系人信息时触发 */
  (e: 'clickContact'): void;
}>();

/**
 * 处理出行人信息点击事件
 */
const handleTravelerClick = () => {
  emit('clickTraveler');
};

/**
 * 处理联系人信息点击事件
 */
const handleContactClick = () => {
  emit('clickContact');
};
</script>

<template>
  <div class="travel-info">
    <!-- 出行人信息入口 -->
    <div class="info-item" @click="handleTravelerClick">
      <div class="item-content">
        <!-- 完成状态图标 -->
        <svg v-if="traveler.isCompleted" class="status-icon" width="0.32rem" height="0.32rem" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#E57423" fill-opacity="0.1" />
          <path d="M10 16L14 20L22 12" stroke="#E57423" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <!-- 未完成状态图标 -->
        <svg v-else class="status-icon" width="0.32rem" height="0.32rem" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="15" stroke="#E4E4E4" stroke-width="2" />
          <path d="M16 10V18" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" />
          <circle cx="16" cy="22" r="1.5" fill="#E4E4E4" />
        </svg>
        <span class="item-title">{{ traveler.title }}</span>
      </div>
      <!-- 右箭头图标 -->
      <svg class="arrow-icon" width="0.28rem" height="0.28rem" viewBox="0 0 28 28" fill="none">
        <path d="M10 7L18 14L10 21" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

    <!-- 分割线 -->
    <div class="divider"></div>

    <!-- 联系人信息入口 -->
    <div class="info-item" @click="handleContactClick">
      <div class="item-content">
        <!-- 完成状态图标 -->
        <svg v-if="contact.isCompleted" class="status-icon" width="0.32rem" height="0.32rem" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#E57423" fill-opacity="0.1" />
          <path d="M10 16L14 20L22 12" stroke="#E57423" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <!-- 未完成状态图标 -->
        <svg v-else class="status-icon" width="0.32rem" height="0.32rem" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="15" stroke="#E4E4E4" stroke-width="2" />
          <path d="M16 10V18" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" />
          <circle cx="16" cy="22" r="1.5" fill="#E4E4E4" />
        </svg>
        <span class="item-title">{{ contact.title }}</span>
      </div>
      <!-- 右箭头图标 -->
      <svg class="arrow-icon" width="0.28rem" height="0.28rem" viewBox="0 0 28 28" fill="none">
        <path d="M10 7L18 14L10 21" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

// 出行信息卡片容器
.travel-info {
  background: #FFFFFF;
  border-radius: 0.32rem;
  padding: 0.08rem 0.24rem;
  margin: 0 0.24rem 0.24rem;
  box-shadow: 0 -0.04rem 0.12rem rgba(0, 0, 0, 0.04);
}

// 信息项样式
.info-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.24rem 0;
  cursor: pointer;
}

// 信息项内容区域
.item-content {
  display: flex;
  align-items: center;
  gap: 0.12rem;
}

// 状态图标
.status-icon {
  flex-shrink: 0;
}

// 信息项标题样式
.item-title {
  font-size: 0.28rem;
  font-weight: 600;
  color: #333333;
  line-height: 1.4;
}

// 分割线样式
.divider {
  height: 0.02rem;
  background: #E4E4E4;
  margin: 0 0.08rem;
}

// 右箭头图标
.arrow-icon {
  flex-shrink: 0;
}
</style>
