<script setup lang="ts">
/**
 * CancelButton 组件
 * 取消订单按钮，白色背景样式
 */

// 定义组件属性接口
interface Props {
  /** 按钮文字 */
  text: string;
  /** 是否禁用 */
  disabled: boolean;
}

// 使用 withDefaults 设置默认值
withDefaults(defineProps<Props>(), {
  text: '取消订单',
  disabled: false,
});

// 定义组件事件
const emit = defineEmits<{
  /** 点击按钮时触发 */
  (e: 'click'): void;
}>();

/**
 * 处理按钮点击事件
 */
const handleClick = () => {
  emit('click');
};
</script>

<template>
  <button class="cancel-button" :disabled="disabled" @click="handleClick">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

// 取消订单按钮样式
.cancel-button {
  width: calc(100% - 0.48rem);
  height: 0.88rem;
  background: #FFFFFF;
  border: 0.02rem solid #E4E4E4;
  border-radius: 0.32rem;
  font-size: 0.28rem;
  color: #666666;
  font-weight: 500;
  cursor: pointer;
  margin: 0 0.24rem 0.24rem;
  transition: all 0.2s ease;

  // 禁用状态样式
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // 激活状态样式
  &:active:not(:disabled) {
    background: #F4F6F8;
    transform: scale(0.98);
  }
}
</style>
