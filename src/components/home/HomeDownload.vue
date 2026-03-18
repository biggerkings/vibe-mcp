<script setup lang="ts">
/**
 * App 下载区域组件
 * 
 * 设计稿来源: MasterGo file: 188020191520033, layer: 6:900
 * 规格: 背景 #FFFAF1, 装饰椭圆 #F5C7A7
 */

// 无额外逻辑，纯展示组件
</script>

<template>
  <section class="home-download">
    <!-- 装饰性椭圆元素 -->
    <div class="ellipse ellipse-left" aria-hidden="true"></div>
    <div class="ellipse ellipse-right" aria-hidden="true"></div>
    <div class="ellipse ellipse-small" aria-hidden="true"></div>

    <div class="download-content">
      <!-- 左侧：手机展示 -->
      <div class="phone-showcase">
        <div class="phone-frame">
          <img
            src="@/assets/images/home/phone-bg.jpg"
            alt="App Screenshot"
            class="phone-bg"
          />
          <img
            src="@/assets/images/home/phone-overlay.png"
            alt="Phone Overlay"
            class="phone-overlay"
          />
        </div>
      </div>

      <!-- 中间：下载信息 -->
      <div class="download-info">
        <h2 class="download-title">Tabigoをはじめよう</h2>
        <p class="download-desc">
          列車チケットやさまざまなサービスをTabigoでまとめて予約。<br />
          あなたの旅を、ここからもっと便利に。
        </p>
        <div class="download-buttons">
          <a href="#" class="download-btn app-store" aria-label="Download on App Store">
            <img src="@/assets/images/home/app-store.png" alt="App Store" />
          </a>
          <a href="#" class="download-btn google-play" aria-label="Get it on Google Play">
            <img src="@/assets/images/home/app-store.png" alt="Google Play" />
          </a>
        </div>
      </div>

      <!-- 右侧：QR 码 -->
      <div class="qr-section">
        <div class="qr-card">
          <img src="@/assets/images/home/qr-code.png" alt="QR Code" class="qr-image" />
        </div>
        <p class="qr-text">今すぐダウンロード</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

/**
 * Download 区域样式
 * 
 * 设计稿规格:
 * - 背景: #FFFAF1 (paint_2:288)
 * - 装饰椭圆: #F5C7A7 (paint_2:291)
 * - 标题: font_2:267 PingFang HK 40px 常规体, #333333
 * - 描述: font_2:368 PingFang HK 16px 常规体, #333333
 * - 按钮: 132x38px, 圆角 8px
 * - QR: 155x156px, 圆角 12px
 */
.home-download {
  position: relative;
  width: 100%;
  background: $color-home-bg-cream;
  overflow: hidden;
  padding: $spacing-xl 0;
}

/* 装饰椭圆 */
.ellipse {
  position: absolute;
  border-radius: 50%;
  background: $color-home-bg-disabled;
  opacity: 0.6;
  pointer-events: none;
}

.ellipse-left {
  width: 5.8rem;
  height: 5.8rem;
  left: -3.6rem;
  top: 2.7rem;
}

.ellipse-right {
  width: 6.16rem;
  height: 6.16rem;
  right: -5.3rem;
  top: -5.3rem;
}

.ellipse-small {
  width: 0.86rem;
  height: 0.64rem;
  left: 0.15rem;
  top: 0.69rem;
  transform: rotate(54deg);
}

.download-content {
  position: relative;
  z-index: 2;
  max-width: 12.8rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-xl;
  padding: 0 $spacing-md;
}

/* 手机展示区域 */
.phone-showcase {
  flex-shrink: 0;
  width: 3.6rem;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-frame {
  position: relative;
  width: 2.38rem;
  height: 5.16rem;
  border-radius: $border-radius-xl;
  overflow: hidden;
  border: 0.06rem solid #000000;
  box-shadow: 0 0.08rem 0.24rem rgba(0, 0, 0, 0.15);
}

.phone-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.phone-overlay {
  position: absolute;
  top: 0.05rem;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

/* 下载信息区域 */
.download-info {
  flex: 1;
  max-width: 6.45rem;
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.download-title {
  /* font_2:267: PingFang HK 40px 常规体 */
  font-family: $font-family-base;
  font-size: $font-size-2xl;
  font-weight: $font-weight-normal;
  line-height: 1.3;
  color: $color-text-primary;
  margin: 0;
}

.download-desc {
  /* font_2:368: PingFang HK 16px 常规体 */
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-normal;
  line-height: 1.5;
  color: $color-text-primary;
  margin: 0 0 $spacing-md;

  br {
    display: block;
    content: '';
    margin-bottom: 0.04rem;
  }
}

.download-buttons {
  display: flex;
  gap: 0.21rem;
}

.download-btn {
  display: block;
  width: 1.32rem;
  height: 0.38rem;
  border-radius: $border-radius-sm;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-0.02rem);
    box-shadow: 0 0.04rem 0.12rem rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* QR 码区域 */
.qr-section {
  flex-shrink: 0;
  width: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.02rem;
  padding: $spacing-xs 0;
}

.qr-card {
  width: 1.55rem;
  height: 1.56rem;
  background: $color-bg-card;
  border-radius: 0.12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-xs;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.08);
}

.qr-image {
  width: 1.39rem;
  height: 1.4rem;
  object-fit: contain;
}

.qr-text {
  /* font_2:348: PingFang HK 14px 常规体 */
  font-family: $font-family-base;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: 1.57;
  color: $color-text-primary;
  text-align: center;
  margin: 0;
}

/* 响应式适配 */
@media (max-width: 1200px) {
  .download-content {
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing-lg;
  }

  .phone-showcase {
    order: 2;
  }

  .download-info {
    order: 1;
    width: 100%;
    max-width: 100%;
    text-align: center;
  }

  .download-desc-section {
    align-items: center;
  }

  .download-buttons {
    justify-content: center;
  }

  .qr-section {
    order: 3;
  }

  .ellipse-left,
  .ellipse-right {
    display: none;
  }
}

@media (max-width: 768px) {
  .home-download {
    padding: $spacing-lg 0;
  }

  .phone-showcase {
    width: 2.8rem;
    height: 3.2rem;
  }

  .phone-frame {
    width: 1.8rem;
    height: 3.9rem;
  }

  .download-title {
    font-size: 0.28rem;
  }

  .download-desc {
    font-size: $font-size-sm;
  }

  .download-buttons {
    flex-direction: column;
    align-items: center;
  }

  .download-btn {
    width: 1.6rem;
    height: 0.46rem;
  }

  .qr-section {
    width: 100%;
  }
}
</style>
