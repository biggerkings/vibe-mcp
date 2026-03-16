<template>
  <!-- 
    订单详情页
    
    页面结构：
    1. 顶部导航栏（返回按钮 + 标题"订单详情"）- 使用可复用的 PageHeader 组件
    2. 顶部渐变遮罩
    3. 滚动内容区：
       - 订单状态（待支付 + 倒计时 + 价格）
       - 商品信息卡片
       - 出行信息
       - 订单信息
       - 取消订单按钮
    4. 底部支付按钮（固定在底部）
    
    设计尺寸：750 x 1728px
    背景色：#F4F6F8
  -->
  <div class="order-detail">
    <!-- 顶部导航栏 - 可复用组件 -->
    <PageHeader title="订单详情" @back="handleBack" />
    
    <!-- 顶部渐变遮罩 -->
    <div class="order-detail__gradient"></div>
    
    <!-- 滚动内容区 -->
    <div class="order-detail__content">
      <!-- 订单状态 -->
      <div class="order-detail__section">
        <OrderStatus 
          status-text="待支付"
          countdown="14:12"
          currency="CNY"
          amount="1298"
          :expandable="true"
          @expand="handleExpand"
        />
      </div>
      
      <!-- 商品信息卡片 -->
      <div class="order-detail__section">
        <ProductCard 
          title="东京地铁24/48/72小时乘车券(兑换券）"
          :specs="[
            '东京地铁24小时乘车券',
            '成人(12岁以上) x 2'
          ]"
          validity="此凭证自订单确认时间起365天内有效，车票于首次过闸进站后72小时内有效"
          cancel-policy="文案说明有文案说明文案说明文案说明文案说明文案说明文"
          @guide-click="handleGuideClick"
        />
      </div>
      
      <!-- 出行信息 -->
      <div class="order-detail__section">
        <TravelInfo 
          @traveler-click="handleTravelerClick"
          @contact-click="handleContactClick"
        />
      </div>
      
      <!-- 订单信息 -->
      <div class="order-detail__section">
        <OrderInfo 
          order-no="SEW121234"
          order-time="2025-12-11 13:34:30"
          @copy="handleCopy"
          @service-click="handleServiceClick"
        />
      </div>
      
      <!-- 取消订单 -->
      <div class="order-detail__section">
        <CancelButton @cancel="handleCancel" />
      </div>
      
      <!-- 底部占位，为固定支付按钮留出空间 -->
      <div class="order-detail__spacer"></div>
    </div>
    
    <!-- 底部支付按钮 - 固定在底部 -->
    <div class="order-detail__footer">
      <PayButton @pay="handlePay" />
    </div>
  </div>
</template>

<script setup>
/**
 * 订单详情页
 * 
 * 功能：
 * - 展示订单待支付状态和价格
 * - 显示商品详情、有效期、取消政策
 * - 出行人信息和联系人信息入口
 * - 订单信息展示和复制
 * - 取消订单和立即支付操作
 * 
 * 页面尺寸：750 x 1728px (移动端设计稿)
 */

import PageHeader from '@components/PageHeader.vue'
import OrderStatus from '@components/order/OrderStatus.vue'
import ProductCard from '@components/order/ProductCard.vue'
import TravelInfo from '@components/order/TravelInfo.vue'
import OrderInfo from '@components/order/OrderInfo.vue'
import CancelButton from '@components/order/CancelButton.vue'
import PayButton from '@components/order/PayButton.vue'

// 返回上一页
const handleBack = () => {
  console.log('返回上一页')
  // 实际项目中使用 router.back() 或 history.back()
}

// 展开/收起价格明细
const handleExpand = (isExpanded) => {
  console.log('价格明细展开状态:', isExpanded)
}

// 点击"如何使用"
const handleGuideClick = () => {
  console.log('打开使用指南')
  // 跳转使用指南页面或弹窗
}

// 点击出行人信息
const handleTravelerClick = () => {
  console.log('打开出行人信息')
  // 跳转出行人信息页面
}

// 点击联系人信息
const handleContactClick = () => {
  console.log('打开联系人信息')
  // 跳转联系人信息页面
}

// 复制订单编号
const handleCopy = (orderNo) => {
  console.log('已复制订单编号:', orderNo)
  // 显示复制成功提示
}

// 联系客服
const handleServiceClick = () => {
  console.log('联系客服')
  // 打开客服聊天窗口或拨打客服电话
}

// 取消订单
const handleCancel = () => {
  console.log('取消订单')
  // 显示确认弹窗，确认后调用取消订单API
}

// 立即支付
const handlePay = () => {
  console.log('立即支付')
  // 调用支付接口，跳转支付页面
}
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.order-detail {
  width: 100%;
  max-width: $page-max-width;
  margin: 0 auto;
  min-height: 100vh;
  background-color: $color-bg-page;  // #F4F6F8
  display: flex;
  flex-direction: column;
  position: relative;

  &__gradient {
    position: absolute;
    top: $page-header-height;
    left: 0;
    right: 0;
    height: 1.54rem;  // 154px
    background: $gradient-header-fade;
    pointer-events: none;
    z-index: 1;
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    padding: 0.24rem;
    display: flex;
    flex-direction: column;
    gap: $section-gap;  // 20px
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__section {
    width: 100%;
  }

  &__spacer {
    height: 2.56rem;  // 为底部固定按钮留出足够空间
  }

  &__footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: $page-max-width;
    margin: 0 auto;
    z-index: 100;
    background-color: $color-bg-card;
  }
}
</style>
