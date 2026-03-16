<template>
  <!-- 
    iPhone 底部指示条组件
    用于 iPhone X 及以上机型
    高度：34px
  -->
  <div class="home-indicator">
    <div class="home-indicator__bar"></div>
  </div>
</template>

<script setup>
/**
 * iPhone 底部 Home 指示条组件
 * 适配 iPhone X 及以上机型的安全区域
 */
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.home-indicator {
  width: 100%;
  height: $home-indicator-height;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);

  &__bar {
    width: 1.35rem;
    height: 0.05rem;
    background-color: #000000;
    border-radius: 0.025rem;
  }
}
</style>
