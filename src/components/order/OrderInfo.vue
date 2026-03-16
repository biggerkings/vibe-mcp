<template>
  <!-- 
    订单信息组件
    显示订单编号、下单时间和联系客服
    
    设计规范：
    - 白色卡片背景
    - 标题 + 联系客服链接
    - 订单编号可复制
    - 下单时间显示
  -->
  <div class="order-info">
    <!-- 头部：标题和联系客服 -->
    <div class="order-info__header">
      <h4 class="order-info__title">订单信息</h4>
      <div class="order-info__service" @click="handleServiceClick">
        <svg class="order-info__service-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path 
            d="M3.74782 13.5C1.67776 13.4988 0 11.8203 0 9.75C0 7.7787 1.52107 6.16267 3.45356 6.01155C4.24268 2.56839 7.32531 0 11.0078 0C14.6905 0 17.7733 2.5687 18.5622 6.01218C20.4909 6.16712 22.0078 7.78141 22.0078 9.75C22.0078 11.8211 20.3289 13.5 18.2578 13.5C18.2578 13.5 18.2578 13.4947 18.2578 13.4947C17.3732 15.8303 15.3922 17.6264 12.9432 18.2562C12.719 19.1157 11.9375 19.75 11.0078 19.75C9.90324 19.75 9.00781 18.8546 9.00781 17.75C9.00781 16.6454 9.90324 15.75 11.0078 15.75C11.7506 15.75 12.3987 16.1549 12.7437 16.756C15.3511 16.0039 17.2578 13.5988 17.2578 10.75C17.2578 10.75 17.2578 7.75 17.2578 7.75C17.2578 4.29822 14.4596 1.5 11.0078 1.5C7.55603 1.5 4.75781 4.29822 4.75781 7.75C4.75781 7.75 4.75781 12.75 4.75781 12.75C4.75781 13.1642 4.42203 13.5 4.00781 13.5C3.9768 13.5 3.94623 13.5004 3.9162 13.5008C3.85773 13.5015 3.80134 13.5023 3.74782 13.5ZM3.25781 11.946C3.25781 11.946 3.25781 7.75 3.25781 7.75C3.25781 7.68429 3.25863 7.61877 3.26026 7.55345C2.25311 7.77701 1.5 8.67556 1.5 9.75C1.5 10.8236 2.2519 11.7215 3.25781 11.946ZM18.6634 11.9635C19.7124 11.7726 20.5078 10.8542 20.5078 9.75C20.5078 8.67835 19.7586 7.78169 18.7554 7.55521C18.757 7.61995 18.7578 7.68488 18.7578 7.75C18.7578 7.75 18.7578 10.75 18.7578 10.75C18.7578 11.1629 18.7255 11.5682 18.6634 11.9635ZM11.0078 18.25C11.284 18.25 11.5078 18.0261 11.5078 17.75C11.5078 17.4739 11.284 17.25 11.0078 17.25C10.7317 17.25 10.5078 17.4739 10.5078 17.75C10.5078 18.0261 10.7317 18.25 11.0078 18.25Z" 
            fill="#5680E9"
          />
        </svg>
        <span class="order-info__service-text">联系客服</span>
      </div>
    </div>
    
    <!-- 订单编号 -->
    <div class="order-info__row">
      <span class="order-info__label">订单编号</span>
      <div class="order-info__value-wrapper">
        <span class="order-info__value">{{ orderNo }}</span>
        <svg 
          class="order-info__copy-icon" 
          width="19" 
          height="19" 
          viewBox="0 0 19 19" 
          fill="none"
          @click="handleCopy"
        >
          <path 
            d="M5 19L3 19C1.34594 19 0 17.6541 0 16L0 3C0 1.34594 1.34594 0 3 0L16 0C17.6541 0 19 1.34594 19 3L19 5C19 5.55219 18.5522 6 18 6C17.4478 6 17 5.55219 17 5L17 3C17 2.44844 16.5513 2 16 2L3 2C2.44875 2 2 2.44844 2 3L2 16C2 16.5516 2.44875 17 3 17L5 17C5.55219 17 6 17.4478 6 18C6 18.5522 5.55219 19 5 19Z" 
            fill="#000000"
          />
          <path 
            d="M16 19L3 19C1.34594 19 0 17.6541 0 16L0 3C0 1.34594 1.34594 0 3 0L16 0C17.6541 0 19 1.34594 19 3L19 16C19 17.6541 17.6541 19 16 19ZM3 2C2.44875 2 2 2.44844 2 3L2 16C2 16.5516 2.44875 17 3 17L16 17C16.5513 17 17 16.5516 17 16L17 3C17 2.44844 16.5513 2 16 2L3 2Z" 
            fill="#000000"
          />
        </svg>
      </div>
    </div>
    
    <!-- 下单时间 -->
    <div class="order-info__row">
      <span class="order-info__label">下单时间</span>
      <span class="order-info__value">{{ orderTime }}</span>
    </div>
  </div>
</template>

<script setup>
/**
 * 订单信息组件
 * 
 * @props {string} orderNo - 订单编号
 * @props {string} orderTime - 下单时间
 * 
 * @emits copy - 点击复制订单编号时触发
 * @emits service-click - 点击联系客服时触发
 */

const props = defineProps({
  orderNo: {
    type: String,
    default: ''
  },
  orderTime: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['copy', 'service-click'])

const handleCopy = () => {
  // 复制到剪贴板
  if (navigator.clipboard) {
    navigator.clipboard.writeText(props.orderNo)
  }
  emit('copy', props.orderNo)
}

const handleServiceClick = () => {
  emit('service-click')
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.order-info {
  width: 100%;
  background-color: $color-bg-card;
  padding: 0.36rem 0.24rem;
  display: flex;
  flex-direction: column;
  gap: 0.36rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-family: $font-family-base;
    font-size: 0.28rem;  // 28px
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.40rem;
    margin: 0;
  }

  &__service {
    display: flex;
    align-items: center;
    gap: 0.08rem;
    cursor: pointer;

    &:active {
      opacity: 0.7;
    }
  }

  &__service-icon {
    width: 0.28rem;
    height: 0.28rem;
    flex-shrink: 0;
  }

  &__service-text {
    font-family: $font-family-base;
    font-size: 0.24rem;  // 24px
    font-weight: $font-weight-normal;
    color: $color-text-link;  // #5680E9
    line-height: 0.34rem;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__label {
    font-family: $font-family-base;
    font-size: 0.26rem;  // 26px
    font-weight: $font-weight-normal;
    color: $color-text-primary;
    line-height: 0.37rem;
  }

  &__value-wrapper {
    display: flex;
    align-items: center;
    gap: 0.08rem;
  }

  &__value {
    font-family: $font-family-base;
    font-size: 0.26rem;  // 26px
    font-weight: $font-weight-normal;
    color: $color-text-primary;
    line-height: 0.37rem;
  }

  &__copy-icon {
    width: 0.32rem;
    height: 0.32rem;
    cursor: pointer;
    flex-shrink: 0;

    &:active {
      opacity: 0.6;
    }
  }
}
</style>
