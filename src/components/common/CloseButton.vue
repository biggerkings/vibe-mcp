<template>
  <!-- 
    关闭按钮组件
    点击区域：80x80px (0.80rem)
    图标尺寸：32x32px (0.32rem)
  -->
  <div class="close-button" @click="handleClick">
    <div class="close-button__icon">
      <svg width="24.33" height="24.33" viewBox="0 0 25 25" fill="none">
        <!-- 第一条斜线 -->
        <path 
          d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967C1.28033 0.21967 11.947 10.8863 11.947 10.8863C12.2399 11.1792 12.2399 11.6541 11.947 11.947C11.6541 12.2399 11.1792 12.2399 10.8863 11.947C10.8863 11.947 0.21967 1.28033 0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" 
          fill="#000000"
        />
        <!-- 第二条斜线 -->
        <path 
          d="M11.947 0.21967C12.2399 0.512563 12.2399 0.987437 11.947 1.28033C11.947 1.28033 1.28033 11.947 1.28033 11.947C0.987437 12.2399 0.512563 12.2399 0.21967 11.947C-0.0732233 11.6541 -0.0732233 11.1792 0.21967 10.8863C0.21967 10.8863 10.8863 0.21967 10.8863 0.21967C11.1792 -0.0732233 11.6541 -0.0732233 11.947 0.21967Z" 
          fill="#000000"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
/**
 * 关闭按钮组件
 * 用于页面左上角返回/关闭操作
 * 
 * @emits click - 点击事件
 */

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.close-button {
  width: $close-button-area;
  height: $close-button-area;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:active {
    opacity: 0.6;
  }

  &__icon {
    width: $close-button-size;
    height: $close-button-size;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 0.2433rem;
      height: 0.2433rem;
    }
  }
}
</style>
