<template>
  <!-- 
    Line 图标
    尺寸：36x36px (在 40x40 容器内)
    使用设计稿中的图片资源
  -->
  <div class="line-icon">
    <img 
      src="/src/assets/images/line-logo.png" 
      alt="Line"
      class="line-icon__image"
    />
  </div>
</template>

<script setup>
/**
 * Line 登录图标
 * 使用从 MasterGo 设计稿下载的图片资源
 * 图片路径：src/assets/images/line-logo.png
 */
</script>

<style scoped>
.line-icon {
  width: 0.36rem;
  height: 0.36rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.line-icon__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
