<template>
  <!-- 
    登录按钮组件
    用于各种第三方登录方式（邮箱、手机、Line、Apple、Facebook、Google）
    尺寸：686x96px，圆角 32px
    背景：白色，边框 1px #D6D6D6
  -->
  <div 
    class="login-button"
    :class="[`login-button--${type}`]"
    @click="handleClick"
  >
    <!-- 图标区域 -->
    <div class="login-button__icon">
      <slot name="icon">
        <!-- 默认图标插槽 -->
        <component :is="iconComponent" v-if="iconComponent" />
      </slot>
    </div>
    
    <!-- 文字区域 -->
    <span class="login-button__text">{{ text }}</span>
  </div>
</template>

<script setup>
/**
 * 登录按钮组件
 * 支持多种登录方式：邮箱、手机、Line、Apple、Facebook、Google
 * 
 * @props {string} type - 登录类型：email | phone | line | apple | facebook | google
 * @props {string} text - 按钮文字
 * @emits click - 点击事件
 */

import { computed } from 'vue'
import EmailIcon from './icons/EmailIcon.vue'
import PhoneIcon from './icons/PhoneIcon.vue'
import LineIcon from './icons/LineIcon.vue'
import AppleIcon from './icons/AppleIcon.vue'
import FacebookIcon from './icons/FacebookIcon.vue'
import GoogleIcon from './icons/GoogleIcon.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'email',
    validator: (value) => ['email', 'phone', 'line', 'apple', 'facebook', 'google'].includes(value)
  },
  text: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['click'])

// 根据类型自动选择对应图标组件
const iconComponent = computed(() => {
  const iconMap = {
    email: EmailIcon,
    phone: PhoneIcon,
    line: LineIcon,
    apple: AppleIcon,
    facebook: FacebookIcon,
    google: GoogleIcon
  }
  return iconMap[props.type] || null
})

const handleClick = () => {
  emit('click', props.type)
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.login-button {
  width: 100%;
  height: $login-button-height;
  background-color: $color-bg-primary;
  border: 0.01rem solid $color-border-card;
  border-radius: $login-button-border-radius;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $gap-login-items;
  padding: 0.28rem 0.10rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    background-color: rgba(0, 0, 0, 0.02);
    transform: scale(0.98);
  }

  &__icon {
    width: $login-button-icon-size;
    height: $login-button-icon-size;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__text {
    font-family: $font-family-base;
    font-size: $font-size-lg;
    font-weight: $font-weight-medium;
    color: $color-text-primary;
    line-height: 0.32rem;
    white-space: nowrap;
  }
}
</style>
