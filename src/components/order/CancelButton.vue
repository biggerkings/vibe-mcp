<template>
  <!-- 
    取消订单按钮组件
    
    设计规范：
    - 白色背景，无边框
    - 文字：28px 常规体，#333333
    - 居中显示
  -->
  <div class="cancel-button" @click="handleCancel">
    <span class="cancel-button__text">取消订单</span>
  </div>
</template>

<script setup>
/**
 * 取消订单按钮组件
 * 
 * @emits cancel - 点击取消订单时触发
 */

const emit = defineEmits(['cancel'])

const handleCancel = () => {
  emit('cancel')
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.cancel-button {
  width: 100%;
  height: 1.12rem;
  background-color: $color-bg-card;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:active {
    opacity: 0.7;
  }

  &__text {
    font-family: $font-family-base;
    font-size: 0.28rem;  // 28px
    font-weight: $font-weight-normal;
    color: $color-text-primary;
    line-height: 0.40rem;
  }
}
</style>
