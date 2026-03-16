<template>
  <!-- 
    出行信息组件
    显示出行人信息和联系人信息
    
    设计规范：
    - 白色卡片背景，圆角 32px
    - 每个信息项带右侧箭头
    - 分割线 #E4E4E4
    - 36px padding
  -->
  <div class="travel-info">
    <!-- 出行人信息 -->
    <div class="travel-info__item" @click="handleTravelerClick">
      <span class="travel-info__label">出行人信息</span>
      <svg class="travel-info__arrow" width="14" height="8" viewBox="0 0 14 8" fill="none">
        <path 
          d="M6.21967 0.21967C6.51256 -0.0732233 6.98744 -0.0732233 7.28033 0.21967C7.28033 0.21967 13.2803 6.21967 13.2803 6.21967C13.5732 6.51256 13.5732 6.98744 13.2803 7.28033C12.9874 7.57322 12.5126 7.57322 12.2197 7.28033C12.2197 7.28033 6.75 1.81066 6.75 1.81066C6.75 1.81066 1.28033 7.28033 1.28033 7.28033C0.987437 7.57322 0.512563 7.57322 0.21967 7.28033C-0.0732233 6.98744 -0.0732233 6.51256 0.21967 6.21967C0.21967 6.21967 6.21967 0.21967 6.21967 0.21967Z" 
          fill="#000000"
        />
      </svg>
    </div>
    
    <!-- 分割线 -->
    <div class="travel-info__divider"></div>
    
    <!-- 联系人信息 -->
    <div class="travel-info__item" @click="handleContactClick">
      <span class="travel-info__label">联系人信息</span>
      <svg class="travel-info__arrow" width="14" height="8" viewBox="0 0 14 8" fill="none">
        <path 
          d="M6.21967 0.21967C6.51256 -0.0732233 6.98744 -0.0732233 7.28033 0.21967C7.28033 0.21967 13.2803 6.21967 13.2803 6.21967C13.5732 6.51256 13.5732 6.98744 13.2803 7.28033C12.9874 7.57322 12.5126 7.57322 12.2197 7.28033C12.2197 7.28033 6.75 1.81066 6.75 1.81066C6.75 1.81066 1.28033 7.28033 1.28033 7.28033C0.987437 7.57322 0.512563 7.57322 0.21967 7.28033C-0.0732233 6.98744 -0.0732233 6.51256 0.21967 6.21967C0.21967 6.21967 6.21967 0.21967 6.21967 0.21967Z" 
          fill="#000000"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
/**
 * 出行信息组件
 * 
 * @emits traveler-click - 点击出行人信息时触发
 * @emits contact-click - 点击联系人信息时触发
 */

const emit = defineEmits(['traveler-click', 'contact-click'])

const handleTravelerClick = () => {
  emit('traveler-click')
}

const handleContactClick = () => {
  emit('contact-click')
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.travel-info {
  width: 100%;
  background-color: $color-bg-card;
  border-radius: $card-border-radius;
  padding: 0.36rem 0.24rem;
  display: flex;
  flex-direction: column;
  gap: 0.36rem;
  box-shadow: $shadow-top;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.02rem 0;

    &:active {
      opacity: 0.7;
    }
  }

  &__label {
    font-family: $font-family-base;
    font-size: 0.28rem;  // 28px
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.40rem;
  }

  &__arrow {
    width: 0.14rem;
    height: 0.08rem;
    transform: rotate(-90deg);
    flex-shrink: 0;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: $color-divider;
  }
}
</style>
