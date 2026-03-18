<script setup lang="ts">
/**
 * OrderInfo 组件
 * 显示订单信息区域，包含订单编号、下单时间和客服入口
 */

// 定义组件属性接口
interface Props {
  /** 订单编号 */
  orderNo: string;
  /** 下单时间 */
  orderTime: string;
}

// 使用 withDefaults 设置默认值
withDefaults(defineProps<Props>(), {
  orderNo: 'SEW121234',
  orderTime: '2025-12-11 13:34:30',
});

// 定义组件事件
const emit = defineEmits<{
  /** 点击联系客服时触发 */
  (e: 'clickService'): void;
  /** 点击复制订单号时触发 */
  (e: 'copyOrderNo'): void;
}>();

/**
 * 处理联系客服点击事件
 */
const handleServiceClick = () => {
  emit('clickService');
};

/**
 * 处理复制订单号点击事件
 */
const handleCopyClick = () => {
  emit('copyOrderNo');
};
</script>

<template>
  <div class="order-info">
    <!-- 头部区域：标题 + 联系客服 -->
    <div class="info-header">
      <span class="header-title">订单信息</span>
      <div class="service-link" @click="handleServiceClick">
        <!-- 客服图标 -->
        <svg width="0.28rem" height="0.28rem" viewBox="0 0 28 28" fill="none">
          <path d="M14 3C8.477 3 4 7.477 4 13V19L2 21H8V13C8 9.686 10.686 7 14 7C17.314 7 20 9.686 20 13V21H26L24 19V13C24 7.477 19.523 3 14 3Z" stroke="#5680E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="14" cy="20" r="2" fill="#5680E9" />
        </svg>
        <span>联系客服</span>
      </div>
    </div>

    <!-- 订单编号行 -->
    <div class="info-row">
      <span class="row-label">订单编号</span>
      <div class="row-value">
        <span class="value-text">{{ orderNo }}</span>
        <!-- 复制图标 -->
        <svg class="copy-icon" width="0.28rem" height="0.28rem" viewBox="0 0 28 28" fill="none" @click="handleCopyClick">
          <rect x="8" y="4" width="16" height="16" rx="2" stroke="#999999" stroke-width="2" />
          <path d="M4 10V22C4 23.1046 4.89543 24 6 24H18" stroke="#999999" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </div>

    <!-- 下单时间行 -->
    <div class="info-row">
      <span class="row-label">下单时间</span>
      <span class="row-value value-text">{{ orderTime }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

// 订单信息容器
.order-info {
  background: #FFFFFF;
  border-radius: 0.32rem;
  padding: 0.24rem;
  margin: 0 0.24rem 0.24rem;
}

// 头部区域样式
.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.24rem;
}

// 头部标题样式
.header-title {
  font-size: 0.28rem;
  font-weight: 600;
  color: #333333;
}

// 联系客服链接样式
.service-link {
  display: flex;
  align-items: center;
  gap: 0.06rem;
  cursor: pointer;

  span {
    font-size: 0.24rem;
    color: #5680E9;
    font-weight: 500;
  }
}

// 信息行样式
.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.12rem 0;
}

// 行标签样式
.row-label {
  font-size: 0.26rem;
  color: #666666;
}

// 行值样式
.row-value {
  display: flex;
  align-items: center;
  gap: 0.12rem;
}

// 值文字样式
.value-text {
  font-size: 0.26rem;
  color: #333333;
  font-weight: 500;
}

// 复制图标样式
copy-icon {
  cursor: pointer;
  flex-shrink: 0;
}
</style>
