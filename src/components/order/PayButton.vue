<template>
  <!-- 
    支付按钮组件
    固定在底部的立即支付按钮
    
    设计规范：
    - 白色背景，顶部 1px 边框 #D6D6D6
    - 按钮：品牌色背景 #E57423，圆角 32px
    - 按钮文字：32px 白色，中粗体
    - 底部包含 Home 指示条区域
  -->
  <div class="pay-button">
    <div class="pay-button__content">
      <button class="pay-button__btn" @click="handlePay">
        <span class="pay-button__text">立即支付</span>
      </button>
    </div>
    
    <!-- Home 指示条 -->
    <div class="pay-button__indicator">
      <div class="pay-button__indicator-bar"></div>
    </div>
  </div>
</template>

<script setup>
/**
 * 支付按钮组件
 * 
 * @emits pay - 点击支付按钮时触发
 */

const emit = defineEmits(['pay'])

const handlePay = () => {
  emit('pay')
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.pay-button {
  width: 100%;
  background-color: $color-bg-card;
  border-top: 1px solid $color-border-card;
  box-shadow: $shadow-top;
  flex-shrink: 0;

  &__content {
    padding: 0.20rem 0.32rem;
  }

  &__btn {
    width: 100%;
    height: 0.96rem;
    background-color: $color-brand-primary;  // #E57423
    border: none;
    border-radius: $login-button-border-radius;  // 32px
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:active {
      opacity: 0.9;
    }
  }

  &__text {
    font-family: $font-family-base;
    font-size: 0.32rem;  // 32px
    font-weight: $font-weight-semibold;
    color: $color-text-white;  // #FFFFFF
    line-height: 0.45rem;
  }

  &__indicator {
    height: 0.60rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: env(safe-area-inset-bottom);
  }

  &__indicator-bar {
    width: 1.35rem;
    height: 0.05rem;
    background-color: #000000;
    border-radius: 0.025rem;
  }
}
</style>
