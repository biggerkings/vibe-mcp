<template>
  <!-- 
    订单状态组件
    显示订单支付状态、倒计时和价格
    
    设计规范：
    - 左侧：红色圆形图标（带时钟/感叹号）+ "待支付" 文字 + 倒计时标签
    - 右侧：价格 CNY 1298 + 展开/收起箭头
  -->
  <div class="order-status">
    <div class="order-status__left">
      <!-- 状态图标 -->
      <div class="order-status__icon">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path 
            d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM30 6C43.2548 6 54 16.7452 54 30C54 43.2548 43.2548 54 30 54C16.7452 54 6 43.2548 6 30C6 16.7452 16.7452 6 30 6ZM22.7025 18.5696C23.462 17.8101 24.6934 17.8101 25.4529 18.5696L29.9375 23.0542L34.4221 18.5696C35.1816 17.8101 36.413 17.8101 37.1725 18.5696C37.9321 19.3292 37.9321 20.5606 37.1725 21.3201L32.4399 26.0527L37.1979 26.0527C38.272 26.0527 39.1428 26.9235 39.1428 27.9976C39.1428 29.0718 38.272 29.9425 37.1979 29.9425L31.816 29.9425L31.8368 33.5708L37.1979 33.5708C38.272 33.5708 39.1428 34.4416 39.1428 35.5157C39.1428 36.5898 38.272 37.4606 37.1979 37.4606L31.8592 37.4606L31.8786 40.8392C31.8847 41.9133 31.019 42.789 29.9449 42.7952C28.8708 42.8014 27.995 41.9356 27.9888 40.8615L27.9693 37.4606L22.9449 37.4606C21.8708 37.4606 21 36.5898 21 35.5157C21 34.4416 21.8708 33.5708 22.9449 33.5708L27.947 33.5708L27.9262 29.9425L22.9449 29.9425C21.8708 29.9425 21 29.0718 21 27.9976C21 26.9235 21.8708 26.0527 22.9449 26.0527L27.4351 26.0527L22.7025 21.3201C21.9429 20.5606 21.9429 19.3292 22.7025 18.5696Z" 
            fill="#CD2B18"
          />
        </svg>
      </div>
      
      <div class="order-status__info">
        <span class="order-status__text">{{ statusText }}</span>
        <span v-if="countdown" class="order-status__countdown">{{ countdown }}</span>
      </div>
    </div>
    
    <div class="order-status__right" @click="toggleExpand">
      <div class="order-status__price">
        <span class="order-status__currency">{{ currency }}</span>
        <span class="order-status__amount">{{ amount }}</span>
      </div>
      <svg 
        class="order-status__arrow" 
        :class="{ 'is-expanded': isExpanded }"
        width="14" 
        height="8" 
        viewBox="0 0 14 8" 
        fill="none"
      >
        <path 
          d="M6.21967 0.21967C6.51256 -0.0732233 6.98744 -0.0732233 7.28033 0.21967L13.2803 6.21967C13.5732 6.51256 13.5732 6.98744 13.2803 7.28033C12.9874 7.57322 12.5126 7.57322 12.2197 7.28033L6.75 1.81066L1.28033 7.28033C0.987437 7.57322 0.512563 7.57322 0.21967 7.28033C-0.0732233 6.98744 -0.0732233 6.51256 0.21967 6.21967L6.21967 0.21967Z" 
          fill="#000000"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
/**
 * 订单状态组件
 * 
 * @props {string} statusText - 状态文字（如：待支付）
 * @props {string} countdown - 倒计时显示（如：14:12）
 * @props {string} currency - 货币单位（默认：CNY）
 * @props {string} amount - 金额
 * @props {boolean} expandable - 是否可展开
 * 
 * @emits expand - 点击展开/收起时触发
 */

import { ref } from 'vue'

const props = defineProps({
  statusText: {
    type: String,
    default: '待支付'
  },
  countdown: {
    type: String,
    default: ''
  },
  currency: {
    type: String,
    default: 'CNY'
  },
  amount: {
    type: String,
    default: '0'
  },
  expandable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['expand'])

const isExpanded = ref(false)

const toggleExpand = () => {
  if (props.expandable) {
    isExpanded.value = !isExpanded.value
    emit('expand', isExpanded.value)
  }
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.order-status {
  width: 100%;
  height: 0.60rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.16rem;

  &__left {
    display: flex;
    align-items: center;
    gap: 0.16rem;
  }

  &__icon {
    width: 0.60rem;
    height: 0.60rem;
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 0.08rem;
  }

  &__text {
    font-family: $font-family-base;
    font-size: 0.40rem;  // 40px
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.56rem;
  }

  &__countdown {
    font-family: $font-family-base;
    font-size: 0.32rem;  // 32px
    font-weight: $font-weight-semibold;
    color: $color-danger;  // #CD2B18
    line-height: 0.40rem;
    padding: 0.04rem 0.08rem;
    background-color: $color-bg-tag;  // #FFF2F1
    border-radius: $tag-border-radius;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 0.04rem;
    cursor: pointer;
  }

  &__price {
    display: flex;
    align-items: baseline;
    gap: 0.04rem;
  }

  &__currency {
    font-family: $font-family-base;
    font-size: $font-size-md;  // 24px
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.34rem;
  }

  &__amount {
    font-family: $font-family-base;
    font-size: 0.36rem;  // 36px
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.51rem;
  }

  &__arrow {
    width: 0.14rem;
    height: 0.08rem;
    transition: transform 0.3s ease;

    &.is-expanded {
      transform: rotate(180deg);
    }
  }
}
</style>
