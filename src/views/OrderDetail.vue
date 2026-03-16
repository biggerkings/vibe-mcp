<script setup lang="ts">
/**
 * OrderDetail 页面
 * 订单详情页主页面，整合所有订单相关组件
 * 页面结构：顶部导航栏、渐变遮罩、订单状态、商品信息、出行信息、订单信息、取消按钮、支付按钮
 */

import { ref, reactive } from 'vue';
import PageHeader from '@/components/common/PageHeader.vue';
import OrderStatus from '@/components/order/OrderStatus.vue';
import ProductCard from '@/components/order/ProductCard.vue';
import TravelInfo from '@/components/order/TravelInfo.vue';
import OrderInfo from '@/components/order/OrderInfo.vue';
import CancelButton from '@/components/order/CancelButton.vue';
import PayButton from '@/components/order/PayButton.vue';

// 页面标题
const pageTitle = ref('订单详情');

// 订单数据
const orderData = reactive({
  // 订单状态数据
  status: {
    text: '待支付',
    countdown: '14:12',
    currency: 'CNY',
    price: 1298,
  },
  // 商品数据
  product: {
    title: '东京地铁24/48/72小时乘车券(兑换券）',
    specs: [
      { name: '东京地铁24小时乘车券', detail: '成人(12岁以上) x 2' },
    ],
    notes: [
      { icon: 'calendar' as const, label: '有效期', content: '指定日期有效' },
      { icon: 'cancel' as const, label: '不支持取消', content: '订单确认后不可取消' },
    ],
  },
  // 出行信息数据
  travel: {
    traveler: { title: '出行人信息', isCompleted: false },
    contact: { title: '联系人信息', isCompleted: false },
  },
  // 订单信息数据
  orderInfo: {
    orderNo: 'SEW121234',
    orderTime: '2025-12-11 13:34:30',
  },
});

// 是否显示价格明细
const showPriceDetail = ref(false);

/**
 * 处理返回按钮点击
 */
const handleBack = () => {
  // 返回上一页
  window.history.back();
};

/**
 * 处理价格区域点击，展开/收起价格明细
 */
const handleTogglePrice = () => {
  showPriceDetail.value = !showPriceDetail.value;
  console.log('Toggle price detail:', showPriceDetail.value);
};

/**
 * 处理使用指南点击
 */
const handleGuideClick = () => {
  console.log('Open usage guide');
  // 跳转到使用指南页面或打开弹窗
};

/**
 * 处理出行人信息点击
 */
const handleTravelerClick = () => {
  console.log('Open traveler info form');
  // 打开出行人信息填写页面
};

/**
 * 处理联系人信息点击
 */
const handleContactClick = () => {
  console.log('Open contact info form');
  // 打开联系人信息填写页面
};

/**
 * 处理联系客服点击
 */
const handleServiceClick = () => {
  console.log('Open customer service');
  // 打开客服聊天窗口或拨打客服电话
};

/**
 * 处理复制订单号
 */
const handleCopyOrderNo = () => {
  // 复制订单号到剪贴板
  navigator.clipboard.writeText(orderData.orderInfo.orderNo);
  console.log('Order number copied:', orderData.orderInfo.orderNo);
};

/**
 * 处理取消订单
 */
const handleCancelOrder = () => {
  console.log('Cancel order');
  // 显示取消订单确认弹窗
};

/**
 * 处理立即支付
 */
const handlePayNow = () => {
  console.log('Pay now');
  // 调起支付流程
};
</script>

<template>
  <div class="order-detail-page">
    <!-- 顶部导航栏 -->
    <PageHeader :title="pageTitle" @back="handleBack" />

    <!-- 渐变遮罩 - 从白色渐变到透明 (设计稿: 矩形 8514) -->
    <div class="gradient-overlay"></div>

    <!-- 页面内容区域 -->
    <div class="page-content">
      <!-- 订单状态区域 -->
      <OrderStatus
        :status="orderData.status.text"
        :countdown="orderData.status.countdown"
        :currency="orderData.status.currency"
        :price="orderData.status.price"
        @toggle-price="handleTogglePrice"
      />

      <!-- 商品信息卡片 -->
      <ProductCard
        :title="orderData.product.title"
        :specs="orderData.product.specs"
        :notes="orderData.product.notes"
        @click-guide="handleGuideClick"
      />

      <!-- 出行信息卡片 -->
      <TravelInfo
        :traveler="orderData.travel.traveler"
        :contact="orderData.travel.contact"
        @click-traveler="handleTravelerClick"
        @click-contact="handleContactClick"
      />

      <!-- 订单信息区域 -->
      <OrderInfo
        :order-no="orderData.orderInfo.orderNo"
        :order-time="orderData.orderInfo.orderTime"
        @click-service="handleServiceClick"
        @copy-order-no="handleCopyOrderNo"
      />

      <!-- 取消订单按钮 -->
      <CancelButton text="取消订单" @click="handleCancelOrder" />

      <!-- 底部占位区域，防止内容被固定按钮遮挡 -->
      <div class="bottom-placeholder"></div>
    </div>

    <!-- 底部支付按钮 -->
    <PayButton
      text="立即支付"
      :price="orderData.status.price"
      :currency="orderData.status.currency"
      @click="handlePayNow"
    />
  </div>
</template>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

// 页面容器
.order-detail-page {
  min-height: 100vh;
  background: #F4F6F8;
  position: relative;
  max-width: 7.5rem;
  margin: 0 auto;
}

// 页面内容区域
.page-content {
  padding-top: 0.88rem; // 顶部导航栏高度
}

// 渐变遮罩 - 从白色渐变到透明 (设计稿: 矩形 8514)
.gradient-overlay {
  position: absolute;
  top: 1.76rem; /* PageHeader 高度 */
  left: 0;
  right: 0;
  height: 1.54rem; /* 154px */
  background: linear-gradient(180deg, #FFFFFF 44%, rgba(255, 255, 255, 0) 99%);
  pointer-events: none;
  z-index: 10;
}

// 底部占位区域
.bottom-placeholder {
  height: 1.6rem; // 支付按钮区域高度 + 间距
}
</style>
