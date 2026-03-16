<script setup lang="ts">
/**
 * ProductCard 组件
 * 显示商品信息卡片，包含商品标题、规格列表、说明信息和使用指南链接
 */

// 规格项接口定义
interface SpecItem {
  /** 规格名称 */
  name: string;
  /** 规格详情 */
  detail: string;
}

// 说明项接口定义
interface NoteItem {
  /** 图标类型 */
  icon: 'calendar' | 'cancel';
  /** 标签文字 */
  label: string;
  /** 说明内容 */
  content: string;
}

// 定义组件属性接口
interface Props {
  /** 商品标题 */
  title: string;
  /** 规格列表 */
  specs: SpecItem[];
  /** 说明信息列表 */
  notes: NoteItem[];
}

// 使用 withDefaults 设置默认值
withDefaults(defineProps<Props>(), {
  title: '东京地铁24/48/72小时乘车券(兑换券）',
  specs: () => [
    { name: '东京地铁24小时乘车券', detail: '成人(12岁以上) x 2' },
  ],
  notes: () => [
    { icon: 'calendar', label: '有效期', content: '指定日期有效' },
    { icon: 'cancel', label: '不支持取消', content: '订单确认后不可取消' },
  ],
});

// 定义组件事件
const emit = defineEmits<{
  /** 点击"如何使用"链接时触发 */
  (e: 'clickGuide'): void;
}>();

/**
 * 处理使用指南点击事件
 */
const handleGuideClick = () => {
  emit('clickGuide');
};
</script>

<template>
  <div class="product-card">
    <!-- 商品标题 -->
    <h2 class="product-title">{{ title }}</h2>

    <!-- 规格列表区域 -->
    <div class="specs-list">
      <div v-for="(spec, index) in specs" :key="index" class="spec-item">
        <!-- 勾选图标 -->
        <svg class="check-icon" width="0.28rem" height="0.28rem" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#E57423" fill-opacity="0.1" />
          <path d="M8 14L12 18L20 10" stroke="#E57423" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="spec-text">{{ spec.name }}、{{ spec.detail }}</span>
      </div>
    </div>

    <!-- 说明信息区域 -->
    <div class="notes-section">
      <div v-for="(note, index) in notes" :key="index" class="note-item">
        <!-- 图标 -->
        <div class="note-icon">
          <svg v-if="note.icon === 'calendar'" width="0.28rem" height="0.28rem" viewBox="0 0 28 28" fill="none">
            <rect x="4" y="6" width="20" height="18" rx="2" stroke="#999999" stroke-width="2" />
            <path d="M4 12H24" stroke="#999999" stroke-width="2" />
            <path d="M10 4V8" stroke="#999999" stroke-width="2" stroke-linecap="round" />
            <path d="M18 4V8" stroke="#999999" stroke-width="2" stroke-linecap="round" />
          </svg>
          <svg v-else width="0.28rem" height="0.28rem" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="10" stroke="#999999" stroke-width="2" />
            <path d="M10 10L18 18" stroke="#999999" stroke-width="2" stroke-linecap="round" />
            <path d="M18 10L10 18" stroke="#999999" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <!-- 标签 -->
        <span class="note-label">{{ note.label }}</span>
        <!-- 说明内容 -->
        <span class="note-content">{{ note.content }}</span>
      </div>
    </div>

    <!-- 如何使用链接 -->
    <div class="guide-link" @click="handleGuideClick">
      <span>如何使用</span>
      <!-- 箭头图标 -->
      <svg width="0.24rem" height="0.24rem" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="#5680E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@styles/variables.scss" as *;

// 商品卡片容器
.product-card {
  background: #FFFFFF;
  border-radius: 0.32rem;
  padding: 0.32rem;
  margin: 0.24rem;
  box-shadow: 0 0.04rem 0.16rem rgba(0, 0, 0, 0.04);
}

// 商品标题样式
.product-title {
  font-size: 0.32rem;
  font-weight: 600;
  color: #333333;
  line-height: 1.5;
  margin: 0 0 0.24rem 0;
}

// 规格列表容器
.specs-list {
  display: flex;
  flex-direction: column;
  gap: 0.16rem;
  margin-bottom: 0.24rem;
}

// 规格项样式
.spec-item {
  display: flex;
  align-items: center;
  gap: 0.12rem;
}

// 勾选图标
.check-icon {
  flex-shrink: 0;
}

// 规格文字样式
.spec-text {
  font-size: 0.24rem;
  color: #666666;
  line-height: 1.4;
}

// 说明信息区域容器
.notes-section {
  background: #FAFAFA;
  border-radius: 0.16rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.16rem;
  margin-bottom: 0.24rem;
}

// 说明项样式
.note-item {
  display: flex;
  align-items: center;
  gap: 0.08rem;
}

// 说明图标
.note-icon {
  width: 0.28rem;
  height: 0.28rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

// 说明标签样式
.note-label {
  font-size: 0.22rem;
  color: #666666;
  font-weight: 500;
}

// 说明内容样式
.note-content {
  font-size: 0.22rem;
  color: #999999;
}

// 使用指南链接样式
.guide-link {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.04rem;
  cursor: pointer;

  span {
    font-size: 0.24rem;
    color: #5680E9;
    font-weight: 500;
  }
}
</style>
