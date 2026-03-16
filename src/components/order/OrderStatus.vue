<script setup lang="ts">
/**
 * OrderStatus 组件
 * 显示订单状态区域，包含状态图标、状态文字、倒计时和价格信息
 */

// 定义组件属性接口
interface Props {
  /** 订单状态文字，如"待支付" */
  status: string;
  /** 倒计时显示，如"14:12" */
  countdown: string;
  /** 价格货币单位，如"CNY" */
  currency: string;
  /** 价格数值 */
  price: number;
}

// 使用 withDefaults 设置默认值
withDefaults(defineProps<Props>(), {
  status: '待支付',
  countdown: '14:12',
  currency: 'CNY',
  price: 1298,
});

// 定义组件事件
const emit = defineEmits<{
  /** 点击价格区域时触发，用于展开/收起价格明细 */
  (e: 'togglePrice'): void;
}>();

/**
 * 处理价格区域点击事件
 */
const handlePriceClick = () => {
  emit('togglePrice');
};
</script>

<template>
  <div class="order-status">
    <!-- 左侧：状态信息区域 -->
    <div class="status-left">
      <!-- 红色感叹号图标 -->
      <div class="status-icon">
        <svg width="0.6rem" height="0.6rem" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="30" fill="#CD2B18" />
          <rect x="27" y="16" width="6" height="20" rx="3" fill="white" />
          <circle cx="30" cy="44" r="3" fill="white" />
        </svg>
      </div>
      <!-- 状态文字 -->
      <span class="status-text">{{ status }}</span>
      <!-- 倒计时标签 -->
      <span class="countdown-tag">{{ countdown }}</span>
    </div>

    <!-- 右侧：价格信息区域 -->
    <div class="status-right" @click="handlePriceClick">
      <span class="currency">{{ currency }}</span>
      <span class="price">{{ price }}</span>
      <!-- 下拉箭头图标 -->
      <svg class="arrow-icon" width="0.24rem" height="0.24rem" viewBox="0 0 24 24" fill="none">
        <path d="M7 10L12 15L17 10" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

// 订单状态区域容器
.order-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.24rem;
  margin-top: 0.32rem;
}

// 左侧状态信息区域
.status-left {
  display: flex;
  align-items: center;
  gap: 0.16rem;
}

// 状态图标容器
.status-icon {
  width: 0.6rem;
  height: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

// 状态文字样式
.status-text {
  font-size: 0.4rem;
  font-weight: 600;
  color: #333333;
  line-height: 1.4;
}

// 倒计时标签样式
.countdown-tag {
  font-size: 0.24rem;
  color: #CD2B18;
  background: #FFF2F1;
  padding: 0.06rem 0.12rem;
  border-radius: 0.08rem;
  font-weight: 500;
}

// 右侧价格区域
.status-right {
  display: flex;
  align-items: baseline;
  gap: 0.08rem;
  cursor: pointer;
}

// 货币单位样式
.currency {
  font-size: 0.24rem;
  color: #333333;
  font-weight: 500;
}

// 价格数值样式
.price {
  font-size: 0.36rem;
  color: #333333;
  font-weight: 700;
}

// 下拉箭头图标
.arrow-icon {
  margin-left: 0.04rem;
}
</style>
