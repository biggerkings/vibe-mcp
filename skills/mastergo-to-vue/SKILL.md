---
name: mastergo-to-vue
description: MasterGo 设计稿转 Vue 3 代码。在需要从 MasterGo DSL 生成 Vue 组件或页面时使用，自动应用 Design Token 和项目规范。
---

# MasterGo 设计稿转 Vue 3 代码

将 MasterGo 设计稿转换为高质量 Vue 3 + TypeScript 组件。

---

## 何时使用

- 从 MasterGo 设计稿生成 Vue 组件
- 批量转换设计稿中的多个组件
- 需要根据 DSL 数据精确还原设计稿
- 希望自动应用项目 Design Token

---

## 使用方法

### 方式1: 完整页面生成

```
读取 MasterGo 设计稿 file: [文件ID]，使用 mastergo-to-vue skill 生成完整的登录页。
输出到: src/views/LoginView.vue
```

### 方式2: 单个组件生成

```
读取 MasterGo 设计稿 file: [文件ID] 中的 "订单卡片" 组件，
使用 mastergo-to-vue skill 生成组件。
输出到: src/components/order/OrderCard.vue
```

### 方式3: 批量生成

```
读取 MasterGo 设计稿 file: [文件ID]，
使用 mastergo-to-vue skill 识别并批量生成所有组件。
输出到: src/components/[模块]/
```

---

## 技术栈规范

生成代码将遵循以下技术栈：

| 技术 | 版本/规格 |
|:---|:---|
| **框架** | Vue 3.4+ (Composition API) |
| **语法** | `<script setup>` |
| **语言** | TypeScript (严格类型) |
| **样式** | SCSS (`@use` 语法) |
| **构建** | Vite |
| **UI 库** | Vant (按需使用) |
| **单位** | rem (基准 1rem = 100px) |

---

## Design Token 映射

所有样式必须映射到 `variables.scss` 中的变量：

### 颜色映射

| DSL Token | SCSS 变量 | 值 |
|:---|:---|:---|
| `paint_2:327`, `#E57423` | `$color-brand-primary` | #E57423 |
| `paint_2:337`, `#333333` | `$color-text-primary` | #333333 |
| `paint_2:088`, `#666666` | `$color-text-secondary` | #666666 |
| `paint_2:212`, `#FFFFFF` | `$color-text-white` | #FFFFFF |
| `paint_2:288`, `#FFFAF1` | `$color-bg-cream` | #FFFAF1 |
| `paint_2:291`, `#F5C7A7` | `$color-bg-disabled` | #F5C7A7 |

### 字体映射

| DSL Font | SCSS 变量 | 规格 |
|:---|:---|:---|
| `font_2:284` 44px 中粗体 | `$font-size-2xl` | 0.44rem |
| `font_2:279` 24px 中黑体 | `$font-size-xl` | 0.32rem |
| `font_2:267` 40px 常规体 | `$font-size-xl` | 0.40rem |
| `font_2:227` 14px 中黑体 | `$font-size-sm` | 0.14rem |
| `font_2:368` 16px 常规体 | `$font-size-xs` | 0.16rem |

### 间距映射

| DSL 数值 | SCSS 变量 | rem 值 |
|:---|:---|:---|
| 8px | `$spacing-xs` | 0.08rem |
| 16px | `$spacing-sm` | 0.16rem |
| 24px | `$spacing-md` | 0.24rem |
| 32px | `$spacing-lg` | 0.32rem |

---

## DSL 字段解析

解析 MasterGo DSL 时遵循以下映射规则：

### 布局属性

```typescript
// 位置和尺寸
'bounds.x' → left: [x/100]rem
'bounds.y' → top: [y/100]rem
'bounds.width' → width: [w/100]rem
'bounds.height' → height: [h/100]rem

// Flex 布局
'flexContainerInfo.flexDirection' → flex-direction
'flexContainerInfo.justifyContent' → justify-content
'flexContainerInfo.alignItems' → align-items
'flexContainerInfo.gap' → gap: [value/100]rem
'flexContainerInfo.padding' → padding: [value/100]rem
```

### 样式属性

```typescript
// 颜色
'fill' → background-color (映射到 $color-*)
'textColor' → color (映射到 $color-text-*)

// 文字
'text.font' → font-family
'text.fontSize' → font-size: [size/100]rem
'text.style' → font-weight (中粗体=600, 常规体=400)

// 圆角
'borderRadius' → border-radius: [value/100]rem

// 阴影
'effect' → box-shadow
```

---

## 代码模板

生成的 Vue 组件遵循以下结构：

```vue
<script setup lang="ts">
/**
 * [组件名称]
 * 
 * 设计稿来源: MasterGo file: [文件ID], layer: [图层ID]
 * 生成时间: [日期]
 */

import { ref } from 'vue'

// ===== 类型定义 =====
interface Props {
  // 根据设计稿定义
}

// ===== Props & Emits =====
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'click'): void
}>()

// ===== 响应式数据 =====
const loading = ref(false)

// ===== 方法 =====
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <!-- 严格遵循设计稿层级 -->
  <div class="component-name">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.component-name {
  // 使用 Design Token 变量
  // 使用 rem 单位
}
</style>
```

---

## 命名规范

| 类型 | 规范 | 示例 |
|:---|:---|:---|
| 组件文件 | PascalCase | `OrderStatus.vue` |
| CSS 类名 | kebab-case, BEM | `order-status__header` |
| 变量/方法 | camelCase | `handleClick` |
| 常量 | SCREAMING_SNAKE | `MAX_RETRY` |

---

## 输出要求

生成代码时必须检查：

- [ ] 所有颜色使用 `$color-*` 变量，无硬编码
- [ ] 所有尺寸使用 rem 单位 (除以 100)
- [ ] 类型定义完整，无 `any`
- [ ] 组件结构符合 Vue 3 最佳实践
- [ ] 视觉还原度达到 95%+
- [ ] 文件路径符合项目规范

---

## 禁止事项

- ❌ 硬编码颜色值
- ❌ 使用 px 单位 (除 1px 边框)
- ❌ 忽略设计稿间距细节
- ❌ 生成超过 300 行的单文件
- ❌ 使用 `any` 类型

---

## 版本

| 版本 | 日期 | 更新 |
|:---|:---|:---|
| v1.0 | 2026-03-18 | 初始版本 |

---

**关联文件**: `.cursor/prompts/mastergo-to-code.md`
