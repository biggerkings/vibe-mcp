<template>
  <!-- 
    协议勾选组件
    包含复选框和协议文字
    支持点击协议链接
  -->
  <div class="agreement-checkbox">
    <!-- 复选框 -->
    <div 
      class="agreement-checkbox__box"
      :class="{ 'is-checked': isChecked }"
      @click="toggleCheck"
    >
      <svg 
        v-if="isChecked" 
        class="agreement-checkbox__check-icon"
        width="28.33" 
        height="28.33" 
        viewBox="0 0 28.33 28.33" 
        fill="none"
      >
        <path 
          d="M14.1667 28.3333C21.9907 28.3333 28.3333 21.9907 28.3333 14.1667C28.3333 6.34263 21.9907 0 14.1667 0C6.34263 0 0 6.34263 0 14.1667C0 21.9907 6.34263 28.3333 14.1667 28.3333ZM21.9939 10.5337C21.9939 10.5337 13.0355 19.318 13.0355 19.318C12.6194 19.726 11.9524 19.7227 11.5403 19.3107C11.5403 19.3107 6.33203 14.1023 6.33203 14.1023C5.9171 13.6873 5.9171 13.0146 6.33204 12.5997C6.74698 12.1847 7.41971 12.1847 7.83464 12.5997C7.83464 12.5997 12.299 17.0641 12.299 17.0641C12.299 17.0641 20.5061 9.0164 20.5061 9.0164C20.9251 8.60556 21.5978 8.61216 22.0086 9.03114C22.4195 9.45012 22.4129 10.1228 21.9939 10.5337Z" 
          fill="#E57423"
        />
      </svg>
    </div>
    
    <!-- 协议文字 -->
    <div class="agreement-checkbox__text">
      <span class="agreement-checkbox__prefix">请确认您已阅读并同意</span>
      <span class="agreement-checkbox__link" @click="handlePrivacyClick">《隐私协议》</span>
      <span class="agreement-checkbox__link" @click="handleServiceClick">《服务协议》</span>
      <span class="agreement-checkbox__suffix">。</span>
    </div>
  </div>
</template>

<script setup>
/**
 * 协议勾选组件
 * 用于用户同意隐私协议和服务协议
 * 
 * @model {boolean} isChecked - 是否已勾选
 * @emits update:isChecked - 勾选状态变化
 * @emits privacy-click - 点击隐私协议
 * @emits service-click - 点击服务协议
 */

const props = defineProps({
  isChecked: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:isChecked', 'privacy-click', 'service-click'])

const toggleCheck = () => {
  emit('update:isChecked', !props.isChecked)
}

const handlePrivacyClick = () => {
  emit('privacy-click')
}

const handleServiceClick = () => {
  emit('service-click')
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.agreement-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.08rem;
  width: 100%;

  &__box {
    width: $checkbox-size;
    height: $checkbox-size;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 50%;
    transition: all 0.2s ease;

    &.is-checked {
      .agreement-checkbox__check-icon {
        display: block;
      }
    }

    svg {
      width: 0.2833rem;
      height: 0.2833rem;
    }
  }

  &__text {
    flex: 1;
    font-family: $font-family-base;
    font-size: $font-size-md;
    line-height: 0.34rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 0.02rem;
  }

  &__prefix,
  &__suffix {
    color: $color-text-tertiary;
  }

  &__link {
    color: $color-text-link;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:active {
      opacity: 0.7;
    }
  }
}
</style>
