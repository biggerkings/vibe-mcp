<template>
  <!-- 
    页面顶部导航栏组件
    可复用的顶部导航栏，支持自定义标题、左侧返回按钮和右侧操作区
    
    设计规范：
    - 高度：176px (0.88rem 状态栏占位 + 0.88rem 标题栏)
    - 背景：白色 #FFFFFF
    - 标题：32px PingFang SC Semibold，颜色 #333333
    - 返回按钮：左侧 34x34px 区域，箭头图标
  -->
  <div class="page-header">
    <!-- 状态栏占位区域（按设计稿保留高度，但不显示内容） -->
    <div class="page-header__status-bar"></div>
    
    <!-- 标题栏 -->
    <div class="page-header__title-bar">
      <!-- 左侧区域：返回按钮 -->
      <div class="page-header__left" @click="handleBack">
        <slot name="left">
          <!-- 默认返回箭头 -->
          <svg class="page-header__back-icon" width="18" height="34" viewBox="0 0 18 34" fill="none">
            <path 
              d="M17.9962 31.875L15.9053 34L0.558052 18.4027C-0.207822 17.6244 -0.207822 16.3756 0.558053 15.5973L15.9053 -7.10543e-14L17.9962 2.125L3.35967 17L17.9962 31.875Z" 
              fill="#333333"
            />
          </svg>
        </slot>
      </div>
      
      <!-- 中间区域：标题 -->
      <div class="page-header__center">
        <slot name="center">
          <h1 class="page-header__title">{{ title }}</h1>
        </slot>
      </div>
      
      <!-- 右侧区域：操作按钮 -->
      <div class="page-header__right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 页面顶部导航栏组件
 * 
 * @props {string} title - 页面标题
 * @emits back - 点击返回按钮时触发
 * 
 * 使用示例：
 * <PageHeader title="订单详情" @back="goBack" />
 * 
 * 或自定义插槽：
 * <PageHeader>
 *   <template #left>
 *     <CustomBackButton />
 *   </template>
 *   <template #center>
 *     <CustomTitle />
 *   </template>
 *   <template #right>
 *     <ShareButton />
 *   </template>
 * </PageHeader>
 */

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['back'])

const handleBack = () => {
  emit('back')
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.page-header {
  width: 100%;
  height: $page-header-height;
  background-color: $color-bg-card;
  position: relative;
  flex-shrink: 0;

  &__status-bar {
    height: $status-bar-height;
    width: 100%;
  }

  &__title-bar {
    height: $status-bar-height;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 $page-padding-horizontal;
    position: relative;
  }

  &__left {
    width: 0.80rem;  // 80px 点击区域
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:active {
      opacity: 0.6;
    }
  }

  &__back-icon {
    width: 0.18rem;
    height: 0.34rem;
  }

  &__center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__title {
    font-family: $font-family-base;
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.32rem;
    opacity: 0.9;
    white-space: nowrap;
    margin: 0;
  }

  &__right {
    width: 0.80rem;
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
