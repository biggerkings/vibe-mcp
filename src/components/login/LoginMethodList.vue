<template>
  <!-- 
    登录方式列表组件
    包含 6 种登录方式：邮箱、手机、Line、Apple、Facebook、Google
  -->
  <div class="login-method-list">
    <!-- 标题 -->
    <h2 class="login-method-list__title">登录享优惠，购票更轻松</h2>
    
    <!-- 登录按钮列表 -->
    <div class="login-method-list__buttons">
      <LoginButton 
        v-for="method in loginMethods" 
        :key="method.type"
        :type="method.type"
        :text="method.text"
        @click="handleLoginClick"
      />
    </div>
  </div>
</template>

<script setup>
/**
 * 登录方式列表组件
 * 展示所有可用的登录方式
 * 
 * @emits login - 登录按钮点击事件，参数：loginType (string)
 */

import LoginButton from './LoginButton.vue'

// 登录方式配置
const loginMethods = [
  { type: 'email', text: '电子邮箱地址' },
  { type: 'phone', text: '手机号码' },
  { type: 'line', text: 'Line账号' },
  { type: 'apple', text: 'Apple账号' },
  { type: 'facebook', text: 'Facebook账号' },
  { type: 'google', text: 'Google账号' }
]

const emit = defineEmits(['login'])

const handleLoginClick = (loginType) => {
  emit('login', loginType)
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.login-method-list {
  width: $content-width;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.81rem;

  &__title {
    font-family: $font-family-base;
    font-size: $font-size-xl;
    font-weight: $font-weight-medium;
    color: $color-text-primary;
    line-height: 0.45rem;
    text-align: center;
    margin: 0;
  }

  &__buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $gap-login-buttons;
  }
}
</style>
