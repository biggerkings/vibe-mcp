<script setup lang="ts">
/**
 * PayButton 组件
 * 底部支付按钮区域，固定在页面底部，包含支付按钮和iPhone Home指示条
 */

// 定义组件属性接口
interface Props {
  /** 按钮文字 */
  text: string;
  /** 价格显示 */
  price: number;
  /** 货币单位 */
  currency: string;
  /** 是否禁用 */
  disabled: boolean;
}

// 使用 withDefaults 设置默认值
withDefaults(defineProps<Props>(), {
  text: '立即支付',
  price: 1298,
  currency: 'CNY',
  disabled: false,
});

// 定义组件事件
const emit = defineEmits<{
  /** 点击支付按钮时触发 */
  (e: 'click'): void;
}>();

/**
 * 处理支付按钮点击事件
 */
const handleClick = () => {
  emit('click');
};
</script>

<template>
  <div class="pay-button-container">
    <!-- 支付按钮 -->
    <button class="pay-button" :disabled="disabled" @click="handleClick">
      <span class="button-text">{{ text }}</span>
      <span class="button-price">{{ currency }} {{ price }}</span>
    </button>

    <!-- iPhone Home 指示条 -->
    <div class="home-indicator"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

// 支付按钮容器，固定在底部
.pay-button-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  padding: 0.16rem 0.32rem calc(0.16rem + constant(safe-area-inset-bottom));
  padding: 0.16rem 0.32rem calc(0.16rem + env(safe-area-inset-bottom));
  box-shadow: 0 -0.02rem 0.08rem rgba(0, 0, 0, 0.06);
  z-index: 100;
}

// 支付按钮样式
.pay-button {
  width: 100%;
  height: 0.96rem;
  background: #E57423;
  border: none;
  border-radius: 0.32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.12rem;
  cursor: pointer;
  transition: all 0.2s ease;

  // 禁用状态
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  // 激活状态
  &:active:not(:disabled) {
    background: darken(#E57423, 5%);
    transform: scale(0.98);
  }
}

// 按钮文字样式
.button-text {
  font-size: 0.32rem;
  color: #FFFFFF;
  font-weight: 600;
}

// 按钮价格样式
.button-price {
  font-size: 0.32rem;
  color: #FFFFFF;
  font-weight: 600;
}

// iPhone Home 指示条样式
.home-indicator {
  width: 1.2rem;
  height: 0.06rem;
  background: #000000;
  border-radius: 0.03rem;
  margin: 0.12rem auto 0;
  opacity: 0.2;
}
</style>
