<template>
  <!-- 
    商品信息卡片组件
    显示订单商品详情、有效期、不支持取消等信息
    
    设计规范：
    - 白色卡片背景，圆角 16px
    - 商品标题：32px，#333333
    - 商品规格：24px，#666666，带勾选图标
    - 说明信息区域：#FAFAFA 背景，圆角 16px
    - 底部"如何使用"链接
  -->
  <div class="product-card">
    <!-- 商品标题 -->
    <div class="product-card__header">
      <h3 class="product-card__title">{{ title }}</h3>
    </div>
    
    <!-- 商品规格列表 -->
    <div class="product-card__specs">
      <div 
        v-for="(spec, index) in specs" 
        :key="index"
        class="product-card__spec-item"
      >
        <svg class="product-card__spec-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path 
            d="M23.3333 11.6667C23.3333 18.11 18.11 23.3333 11.6667 23.3333C5.22334 23.3333 0 18.11 0 11.6667C0 5.22334 5.22334 0 11.6667 0C18.11 0 23.3333 5.22334 23.3333 11.6667ZM1.75 11.6667C1.75 17.1435 6.18984 21.5833 11.6667 21.5833C17.1435 21.5833 21.5833 17.1435 21.5833 11.6667C21.5833 6.18984 17.1435 1.75 11.6667 1.75C6.18984 1.75 1.75 6.18984 1.75 11.6667ZM17.8468 8.84937C18.1919 8.51103 18.1973 7.95703 17.859 7.61199C17.5206 7.26695 16.9666 7.26151 16.6216 7.59985L9.86279 14.2274L6.51332 10.8778C6.17161 10.5361 5.61759 10.5361 5.27588 10.8778C4.93417 11.2195 4.93416 11.7735 5.27587 12.1153L9.23802 16.0775C9.57736 16.4168 10.1267 16.4195 10.4694 16.0835L17.8468 8.84937Z" 
            fill="#999999"
          />
        </svg>
        <span class="product-card__spec-text">{{ spec }}</span>
      </div>
    </div>
    
    <!-- 说明信息区域 -->
    <div class="product-card__info">
      <!-- 有效期 -->
      <div class="product-card__info-item">
        <div class="product-card__info-label">
          <svg class="product-card__info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path 
              d="M14 0C14.4142 0 14.75 0.335786 14.75 0.75V1.75H18C19.1046 1.75 20 2.64543 20 3.75V17.75C20 18.8546 19.1046 19.75 18 19.75H2C0.895431 19.75 0 18.8546 0 17.75V3.75C0 2.64543 0.895431 1.75 2 1.75H5.25V0.75C5.25 0.335786 5.58579 0 6 0C6.41421 0 6.75 0.335786 6.75 0.75V1.75H13.25V0.75C13.25 0.335786 13.5858 0 14 0ZM5.25 3.25V4.75C5.25 5.16421 5.58579 5.5 6 5.5C6.41421 5.5 6.75 5.16421 6.75 4.75V3.25H13.25V4.75C13.25 5.16421 13.5858 5.5 14 5.5C14.4142 5.5 14.75 5.16421 14.75 4.75V3.25H18C18.2761 3.25 18.5 3.47386 18.5 3.75V7.25H1.5V3.75C1.5 3.47386 1.72386 3.25 2 3.25H5.25ZM1.5 8.75V17.75C1.5 18.0261 1.72386 18.25 2 18.25H18C18.2761 18.25 18.5 18.0261 18.5 17.75V8.75H1.5Z" 
              fill="#000000"
            />
          </svg>
          <span>有效期</span>
        </div>
        <p class="product-card__info-desc">{{ validity }}</p>
      </div>
      
      <!-- 不支持取消 -->
      <div class="product-card__info-item">
        <div class="product-card__info-label">
          <svg class="product-card__info-icon" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <path 
              d="M26.6667 13.3333C26.6667 20.6971 20.6971 26.6667 13.3333 26.6667C5.96954 26.6667 0 20.6971 0 13.3333C0 5.96954 5.96954 0 13.3333 0C20.6971 0 26.6667 5.96954 26.6667 13.3333ZM1.73333 13.3333C1.73333 19.7398 6.92683 24.9333 13.3333 24.9333C19.7398 24.9333 24.9333 19.7398 24.9333 13.3333C24.9333 6.92683 19.7398 1.73333 13.3333 1.73333C6.92683 1.73333 1.73333 6.92683 1.73333 13.3333ZM14.3333 8C14.3333 7.44772 13.8856 7 13.3333 7C12.781 7 12.3333 7.44772 12.3333 8V14.6667C12.3333 15.219 12.781 15.6667 13.3333 15.6667C13.8856 15.6667 14.3333 15.219 14.3333 14.6667V8ZM14.6667 18.6667C14.6667 19.403 14.0697 20 13.3333 20C12.597 20 12 19.403 12 18.6667C12 17.9303 12.597 17.3333 13.3333 17.3333C14.0697 17.3333 14.6667 17.9303 14.6667 18.6667Z" 
              fill="#333333"
            />
          </svg>
          <span>不支持取消</span>
        </div>
        <p class="product-card__info-desc">{{ cancelPolicy }}</p>
      </div>
    </div>
    
    <!-- 如何使用链接 -->
    <div class="product-card__guide" @click="handleGuideClick">
      <span class="product-card__guide-text">如何使用</span>
      <svg class="product-card__guide-icon" width="14" height="8" viewBox="0 0 14 8" fill="none">
        <path 
          d="M6.21967 0.21967C6.51256 -0.0732233 6.98744 -0.0732233 7.28033 0.21967C7.28033 0.21967 13.2803 6.21967 13.2803 6.21967C13.5732 6.51256 13.5732 6.98744 13.2803 7.28033C12.9874 7.57322 12.5126 7.57322 12.2197 7.28033C12.2197 7.28033 6.75 1.81066 6.75 1.81066C6.75 1.81066 1.28033 7.28033 1.28033 7.28033C0.987437 7.57322 0.512563 7.57322 0.21967 7.28033C-0.0732233 6.98744 -0.0732233 6.51256 0.21967 6.21967C0.21967 6.21967 6.21967 0.21967 6.21967 0.21967Z" 
          fill="#5680E9"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
/**
 * 商品信息卡片组件
 * 
 * @props {string} title - 商品标题
 * @props {array} specs - 商品规格列表
 * @props {string} validity - 有效期说明
 * @props {string} cancelPolicy - 取消政策说明
 * 
 * @emits guide-click - 点击"如何使用"时触发
 */

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  specs: {
    type: Array,
    default: () => []
  },
  validity: {
    type: String,
    default: ''
  },
  cancelPolicy: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['guide-click'])

const handleGuideClick = () => {
  emit('guide-click')
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.product-card {
  width: 100%;
  background-color: $color-bg-card;
  border-radius: $card-border-radius;
  padding: 0.32rem;
  display: flex;
  flex-direction: column;
  gap: 0.32rem;

  &__header {
    width: 100%;
  }

  &__title {
    font-family: $font-family-base;
    font-size: 0.32rem;  // 32px
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.45rem;
    margin: 0;
  }

  &__specs {
    display: flex;
    flex-direction: column;
    gap: 0.08rem;
  }

  &__spec-item {
    display: flex;
    align-items: center;
    gap: 0.08rem;
  }

  &__spec-icon {
    width: 0.28rem;
    height: 0.28rem;
    flex-shrink: 0;
  }

  &__spec-text {
    font-family: $font-family-base;
    font-size: 0.24rem;  // 24px
    font-weight: $font-weight-normal;
    color: $color-text-secondary;  // #666666
    line-height: 0.34rem;
  }

  &__info {
    background-color: #FAFAFA;
    border-radius: $border-radius-md;  // 16px
    padding: 0.24rem;
    display: flex;
    flex-direction: column;
    gap: 0.24rem;
  }

  &__info-item {
    display: flex;
    flex-direction: column;
    gap: 0.08rem;
  }

  &__info-label {
    display: flex;
    align-items: center;
    gap: 0.08rem;
    font-family: $font-family-base;
    font-size: 0.26rem;  // 26px
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.37rem;

    span {
      margin-left: 0.08rem;
    }
  }

  &__info-icon {
    width: 0.32rem;
    height: 0.32rem;
    flex-shrink: 0;
  }

  &__info-desc {
    font-family: $font-family-base;
    font-size: 0.22rem;  // 22px
    font-weight: $font-weight-normal;
    color: $color-text-tertiary;  // #999999
    line-height: 0.31rem;
    margin: 0;
    padding-left: 0.40rem;
  }

  &__guide {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.04rem;
    cursor: pointer;
    padding-top: 0.08rem;

    &:active {
      opacity: 0.7;
    }
  }

  &__guide-text {
    font-family: $font-family-base;
    font-size: 0.24rem;  // 24px
    font-weight: $font-weight-normal;
    color: $color-text-link;  // #5680E9
    line-height: 0.34rem;
  }

  &__guide-icon {
    width: 0.14rem;
    height: 0.08rem;
    transform: rotate(-90deg);
  }
}
</style>
