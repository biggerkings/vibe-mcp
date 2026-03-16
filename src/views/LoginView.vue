<template>
  <!-- 
    登录引导页面
    
    页面结构：
    1. 状态栏 (StatusBar)
    2. 关闭按钮区域
    3. 主内容区（Logo + 登录方式列表 + 协议勾选）
    4. 底部 Home 指示条
    
    页面尺寸：750 x 1624px (移动端设计稿)
  -->
  <div class="login-page">
    <!-- 状态栏 -->
    <StatusBar />
    
    <!-- 关闭按钮 -->
    <div class="login-page__header">
      <CloseButton @click="handleClose" />
    </div>
    
    <!-- 主内容区域 -->
    <div class="login-page__content">
      <!-- Logo 插画 -->
      <LogoIllustration />
      
      <!-- 登录方式列表 -->
      <LoginMethodList @login="handleLogin" />
      
      <!-- 协议勾选 -->
      <div class="login-page__agreement">
        <AgreementCheckbox 
          v-model:isChecked="isAgreementChecked"
          @privacy-click="handlePrivacyClick"
          @service-click="handleServiceClick"
        />
      </div>
    </div>
    
    <!-- 底部 Home 指示条 -->
    <HomeIndicator />
  </div>
</template>

<script setup>
/**
 * 登录引导页面
 * 
 * 功能：
 * - 展示品牌 Logo
 * - 提供多种第三方登录方式
 * - 协议勾选确认
 * 
 * 页面尺寸：750 x 1624px (移动端设计稿)
 */

import { ref } from 'vue'
import StatusBar from '@components/common/StatusBar.vue'
import CloseButton from '@components/common/CloseButton.vue'
import LogoIllustration from '@components/login/LogoIllustration.vue'
import LoginMethodList from '@components/login/LoginMethodList.vue'
import AgreementCheckbox from '@components/login/AgreementCheckbox.vue'
import HomeIndicator from '@components/login/HomeIndicator.vue'

// 协议勾选状态
const isAgreementChecked = ref(false)

// 关闭按钮点击
const handleClose = () => {
  console.log('关闭按钮点击')
  // 可以添加返回或关闭页面的逻辑
}

// 登录方式点击
const handleLogin = (loginType) => {
  if (!isAgreementChecked.value) {
    alert('请先同意隐私协议和服务协议')
    return
  }
  console.log('选择登录方式:', loginType)
  // 调用对应的登录 API
}

// 隐私协议点击
const handlePrivacyClick = () => {
  console.log('打开隐私协议')
  // 打开隐私协议页面
}

// 服务协议点击
const handleServiceClick = () => {
  console.log('打开服务协议')
  // 打开服务协议页面
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.login-page {
  width: 100%;
  max-width: $page-max-width;
  margin: 0 auto;
  min-height: 100vh;
  background: $gradient-page-background;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &__header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.88rem $page-padding-horizontal 0;
    gap: 0.76rem;
  }

  &__agreement {
    width: $content-width;
    margin-top: 0.16rem;
    margin-bottom: 1.16rem; // 底部预留空间，确保与 Home 指示条有足够间距
  }
}
</style>
