<template>
  <!-- 
    应用根组件
    使用 router-view 渲染匹配的路由页面
  -->
  <router-view />
</template>

<script setup>
/**
 * 应用根组件
 * 通过 Vue Router 的 router-view 渲染当前路由对应的页面组件
 * 
 * 可用路由：
 * - /              -> 登录引导页
 * - /order-detail  -> 订单详情页
 * - /about         -> 关于页面
 */
</script>

<style lang="scss">
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
