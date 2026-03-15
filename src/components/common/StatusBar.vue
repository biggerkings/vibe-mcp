<template>
  <!-- 
    状态栏组件
    显示时间、信号、WiFi、电池等状态图标
    高度：88px (0.88rem)
  -->
  <div class="status-bar">
    <!-- 左侧时间 -->
    <div class="status-bar__time">
      <span class="status-bar__time-text">9:41</span>
    </div>
    
    <!-- 右侧状态图标组 -->
    <div class="status-bar__icons">
      <!-- 信号图标 -->
      <div class="status-bar__icon">
        <svg width="34" height="21.33" viewBox="0 0 34 21.33" fill="none">
          <path 
            d="M30 0L32 0C33.1046 0 34 0.895431 34 2L34 19.3333C34 20.4379 33.1046 21.3333 32 21.3333L30 21.3333C28.8954 21.3333 28 20.4379 28 19.3333L28 2C28 0.895431 28.8954 0 30 0ZM20.667 4.66797L22.667 4.66797C23.7716 4.66797 24.667 5.5634 24.667 6.66797L24.667 19.3346C24.667 20.4392 23.7716 21.3346 22.667 21.3346L20.667 21.3346C19.5624 21.3346 18.667 20.4392 18.667 19.3346L18.667 6.66797C18.667 5.5634 19.5624 4.66797 20.667 4.66797ZM11.333 9.33398L13.333 9.33398C14.4376 9.33398 15.333 10.2294 15.333 11.334L15.333 19.334C15.333 20.4386 14.4376 21.334 13.333 21.334L11.333 21.334C10.2284 21.334 9.33301 20.4386 9.33301 19.334L9.33301 11.334C9.33301 10.2294 10.2284 9.33398 11.333 9.33398ZM2 13.334L4 13.334C5.10457 13.334 6 14.2294 6 15.334L6 19.334C6 20.4386 5.10457 21.334 4 21.334L2 21.334C0.895431 21.334 0 20.4386 0 19.334L0 15.334C0 14.2294 0.895431 13.334 2 13.334Z" 
            fill="#333333"
          />
        </svg>
      </div>
      
      <!-- WiFi 图标 -->
      <div class="status-bar__icon">
        <svg width="30.67" height="22" viewBox="0 0 31 22" fill="none">
          <path 
            d="M15.3341 4.56895C19.7836 4.56915 24.0629 6.27737 27.2876 9.34056C27.5305 9.57705 27.9186 9.57406 28.1578 9.33387L30.479 6.99321C30.6001 6.87138 30.6676 6.70636 30.6666 6.53467C30.6656 6.36297 30.5961 6.19875 30.4736 6.07835C22.0098 -2.02612 8.65714 -2.02612 0.193313 6.07835C0.0707088 6.19866 0.00114455 6.36283 1.39972e-05 6.53453C-0.00111655 6.70622 0.0662798 6.87129 0.187289 6.99321L2.50918 9.33387C2.74819 9.57442 3.13662 9.57741 3.37931 9.34056C6.60442 6.27717 10.8842 4.56894 15.3341 4.56895ZM21.9483 14.7328C20.1361 13.0933 17.7787 12.1853 15.334 12.1855C12.8909 12.1865 10.5353 13.0943 8.72439 14.7328C8.47929 14.9655 8.09319 14.9604 7.85427 14.7214L5.53639 12.3808C5.41403 12.2582 5.34605 12.0916 5.34769 11.9185C5.34932 11.7454 5.42044 11.5802 5.54509 11.4599C11.0634 6.33108 19.6092 6.33108 25.1276 11.4599C25.2521 11.5802 25.3233 11.7453 25.325 11.9184C25.3268 12.0914 25.259 12.258 25.1369 12.3808L22.8184 14.7214C22.5795 14.9604 22.1934 14.9655 21.9483 14.7328ZM19.7901 17.7707C19.9141 17.6492 19.9824 17.4818 19.9788 17.3083C19.9753 17.1347 19.9002 16.9703 19.7713 16.8539C17.21 14.6893 13.4587 14.6893 10.8974 16.8539C10.7685 16.9702 10.6933 17.1346 10.6896 17.3081C10.6859 17.4817 10.7541 17.6491 10.878 17.7707L14.8893 21.8147C15.0068 21.9336 15.1671 22.0005 15.3344 22.0005C15.5016 22.0005 15.6619 21.9336 15.7795 21.8147L19.7901 17.7707Z" 
            fill="#333333"
          />
        </svg>
      </div>
      
      <!-- 电池图标 -->
      <div class="status-bar__icon status-bar__battery">
        <div class="status-bar__battery-body">
          <div class="status-bar__battery-level"></div>
        </div>
        <div class="status-bar__battery-cap"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 状态栏组件
 * 模拟 iOS 状态栏样式
 * 显示时间、信号、WiFi 和电池图标
 */
</script>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

.status-bar {
  width: 100%;
  height: $status-bar-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 $page-padding-horizontal;
  position: relative;

  &__time {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.08rem;
    height: 0.36rem;
    position: absolute;
    left: 0.42rem;
    top: 0.28rem;
  }

  &__time-text {
    font-family: $font-family-base;
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    line-height: 0.42rem;
  }

  &__icons {
    display: flex;
    align-items: center;
    gap: 0.04rem;
    position: absolute;
    right: 0.32rem;
    top: 0.34rem;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // 电池图标样式
  &__battery {
    display: flex;
    align-items: center;
    width: 0.4866rem;
    height: 0.2267rem;
    position: relative;
  }

  &__battery-body {
    width: 0.44rem;
    height: 0.2267rem;
    border: 0.02rem solid $color-text-primary;
    border-radius: 0.0533rem;
    opacity: 0.35;
    display: flex;
    align-items: center;
    padding: 0.04rem;
    box-sizing: border-box;
  }

  &__battery-level {
    width: 0.36rem;
    height: 0.1467rem;
    background-color: $color-text-primary;
    border-radius: 0.0267rem;
  }

  &__battery-cap {
    width: 0.0266rem;
    height: 0.08rem;
    background-color: $color-text-primary;
    border-radius: 0 0.01rem 0.01rem 0;
    opacity: 0.4;
    margin-left: 0.01rem;
  }
}
</style>
