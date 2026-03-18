---
name: project-guide
description: 项目架构指南与 Skill 管理中枢。在开始新功能开发、代码重构或需要了解项目结构时使用，确保开发符合项目规范与架构方向。
---

# Tabigo 项目开发指南

> **版本**: v1.0  
> **更新日期**: 2026-03-17  
> **适用范围**: 本项目所有前端开发工作

---

## 一、项目架构概览

### 1.1 技术栈

| 层级 | 技术 | 说明 |
|:---|:---|:---|
| **框架** | Vue 3 | Composition API + `<script setup>` 语法 |
| **语言** | TypeScript | 严格类型检查，interface 优先 |
| **样式** | SCSS | 使用 `@use` 替代 `@import`，变量驱动 |
| **构建** | Vite | 快速 HMR，ESM 构建 |
| **UI 库** | Vant | 移动端组件库 |
| **状态** | Vue Reactive | 轻量级响应式，复杂场景考虑 Pinia |

### 1.2 目录结构

```
├── api/                    # 接口层
│   ├── request.ts          # 请求封装（Axios 实例）
│   ├── baseInterfaces.ts   # 基础类型定义
│   └── test/               # 业务接口（按模块分组）
│       ├── index.ts        # 接口实现
│       └── interfaces.ts   # 类型定义
│
├── src/
│   ├── assets/             # 静态资源
│   │   └── images/         # 按页面/组件分组
│   │
│   ├── components/         # 组件层
│   │   ├── common/         # 通用组件（跨页面复用）
│   │   │   ├── PageHeader.vue
│   │   │   └── StatusBar.vue
│   │   ├── home/           # 页面专属组件
│   │   │   ├── HomeHeader.vue
│   │   │   ├── HomeHero.vue
│   │   │   └── HomeDownload.vue
│   │   ├── login/          # 登录相关
│   │   └── order/          # 订单相关
│   │
│   ├── views/              # 页面层
│   │   ├── HomeView.vue    # 首页（官网）
│   │   ├── LoginView.vue   # 登录页
│   │   └── OrderDetail.vue # 订单详情
│   │
│   ├── router/             # 路由配置
│   ├── styles/             # 全局样式
│   │   └── variables.scss  # 设计令牌
│   │
│   └── main.js             # 入口文件
│
├── docs/                   # 项目文档
├── .cursor/skills/         # 项目级 Skills
└── skills/                 # 共享 Skills（Git 跟踪）
```

### 1.3 架构原则

```
┌─────────────────────────────────────────┐
│            页面层 (Views)                │
│         负责页面级布局与数据流            │
├─────────────────────────────────────────┤
│           组件层 (Components)            │
│    业务组件 + 通用组件，高内聚低耦合        │
├─────────────────────────────────────────┤
│            接口层 (API)                  │
│      类型定义 + 请求实现，强类型约束        │
├─────────────────────────────────────────┤
│            工具层 (Utils)                │
│      通用函数、常量、枚举定义              │
└─────────────────────────────────────────┘
```

---

## 二、Skill 管理体系

### 2.1 现有 Skills

本项目使用以下 Skills，按优先级排序：

#### 🔴 高优先级（必须遵循）

| Skill | 路径 | 用途 | 触发时机 |
|:---|:---|:---|:---|
| **project-guide** | `.cursor/skills/project-guide/` | 本项目架构指南 | 任何开发工作开始前 |
| **frontend-design** | `.cursor/skills/frontend-design` | 前端设计质量保障 | 创建新组件/页面时 |
| **ui-audit** | `.cursor/skills/ui-audit` | UI 审查与优化 | 页面完成后审查 |

#### 🟡 通用 Skills（用户级）

| Skill | 路径 | 用途 | 触发时机 |
|:---|:---|:---|:---|
| **code-reviewer** | `~/.cursor/agents/code-reviewer.md` | 代码审查 | 功能完成后 |
| **frontend-expert** | `~/.cursor/agents/frontend-expert.md` | 前端架构咨询 | 技术选型时 |
| **security-auditor** | `~/.cursor/agents/security-auditor.md` | 安全审计 | 处理敏感逻辑时 |

### 2.2 Skill 使用工作流

```
开始新任务
    │
    ▼
┌────────────────┐
│ 1. 读取 project-guide │ ◄── 了解架构约束
└────────────────┘
    │
    ▼
需要创建新组件/页面？
    ├── 是 ──► 读取 frontend-design skill
    │              ├── 确定视觉方向
    │              └── 编写组件代码
    │
    └── 否 ──► 继续开发
    │
    ▼
功能完成？
    ├── 是 ──► 读取 ui-audit skill
    │              ├── 视觉层次检查
    │              ├── 无障碍检查
    │              └── 风格一致性检查
    │
    └── 否 ──► 继续开发
    │
    ▼
代码审查
    ├── 使用 code-reviewer subagent
    └── 或 frontend-expert 咨询架构问题
```

### 2.3 Skill 扩展指南

如需添加新 Skill：

1. **评估需求**：是项目专属还是通用？
2. **选择位置**：
   - 项目专属 → `.cursor/skills/[skill-name]/SKILL.md`
   - 通用共享 → `~/.cursor/skills-cursor/[skill-name]/SKILL.md`
3. **遵循格式**：
   ```yaml
   ---
   name: skill-name
   description: 清晰的描述，包含触发时机
   ---
   # Skill 内容...
   ```
4. **创建软链接**（如果是共享 skill）：
   ```bash
   ln -s ../../skills/[skill-name] .cursor/skills/[skill-name]
   ```

---

## 三、开发规范

### 3.1 代码风格

#### Vue 组件规范

```vue
<script setup lang="ts">
/**
 * 组件简短描述
 * 
 * 详细说明组件职责、使用场景
 */

import { ref, computed } from 'vue'
import type { PropType } from 'vue'

// 1. 类型定义（如果有）
interface Props {
  title: string
  visible?: boolean
}

// 2. Props 定义
const props = withDefaults(defineProps<Props>(), {
  visible: false,
})

// 3. Emits 定义
const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'confirm'): void
}>()

// 4. 响应式数据
const loading = ref(false)

// 5. 计算属性
const displayTitle = computed(() => props.title || '默认标题')

// 6. 方法
const handleConfirm = () => {
  emit('confirm')
}
</script>

<template>
  <!-- 模板注释说明区块用途 -->
  <div class="component-name">
    {{ displayTitle }}
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.component-name {
  // 使用 SCSS 变量
  color: $color-text-primary;
}
</style>
```

#### 接口规范

```typescript
// api/module/interfaces.ts
/**
 * 模块名 - 类型定义
 * 由 Apifox MCP 自动生成 / 手动维护
 */

// 请求参数
export interface GetUserParams {
  /** 用户 ID */
  userId: string
  /** 是否需要详细信息 */
  detail?: boolean
}

// 响应数据
export interface UserInfo {
  /** 用户名 */
  name: string
  /** 头像 URL */
  avatar: string
}

// api/module/index.ts
import { request } from '@/api/request'
import type { GetUserParams, UserInfo } from './interfaces'

/**
 * 获取用户信息
 * @param params 查询参数
 * @returns 用户信息
 */
export const getUser = (params: GetUserParams) => {
  return request.post<UserInfo>({
    url: '/user/info',
    params,
  })
}
```

### 3.2 命名规范

| 类型 | 规范 | 示例 |
|:---|:---|:---|
| 组件名 | PascalCase，语义化 | `HomeHeader.vue`, `OrderStatus.vue` |
| 组合式函数 | camelCase，use 前缀 | `useUser.ts`, `useOrder.ts` |
| 接口文件 | camelCase | `interfaces.ts`, `baseInterfaces.ts` |
| API 函数 | camelCase，动词开头 | `getUserInfo`, `updateOrderStatus` |
| 类型/接口 | PascalCase | `UserInfo`, `OrderParams` |
| SCSS 变量 | kebab-case，$ 前缀 | `$color-primary`, `$spacing-md` |
| 常量 | SCREAMING_SNAKE_CASE | `MAX_RETRY_COUNT`, `DEFAULT_PAGE_SIZE` |

### 3.3 设计令牌使用

强制使用 `variables.scss` 中的变量，禁止硬编码：

```scss
// ✅ 正确
@use '@/styles/variables.scss' as *;

.button {
  color: $color-brand-primary;
  font-size: $font-size-md;
  padding: $spacing-md;
  border-radius: $border-radius-lg;
}

// ❌ 错误
.button {
  color: #E57423;          // 硬编码颜色
  font-size: 0.24rem;      // 硬编码尺寸
  padding: 0.24rem;        // 无意义数值
}
```

---

## 四、MCP 工具配置

### 4.1 已配置 MCP

| MCP | 用途 | 关键工具 |
|:---|:---|:---|
| **user-mastergo-magic-mcp** | 设计稿转代码 | `getDSL`, `getComponentLink` |
| **user-出海 - API 文档** | 接口文档管理 | `read_project_oas_ntfei2` |
| **cursor-ide-browser** | 浏览器自动化 | `browser_navigate`, `browser_snapshot` |
| **user-composio** | 通用工具集成 | 根据配置而定 |

### 4.2 使用示例

#### MasterGo MCP

```
用户: 读取 MasterGo 设计稿 file: 12345 的 DSL
AI: 调用 getDSL 工具获取设计数据
AI: 基于 DSL 生成 Vue 组件代码
```

#### Apifox MCP

```
用户: 通过 Apifox 拉取 /user 前缀的接口
AI: 调用 read_project_oas_ntfei2 获取接口定义
AI: 生成 interfaces.ts 和 index.ts
```

---

## 五、开发工作流

### 5.1 新功能开发流程

```
1. 需求理解
   ├── 阅读 product-guide skill
   ├── 查看相关设计稿（MasterGo）
   └── 确认技术方案

2. 接口准备（如需要）
   ├── 检查现有接口
   ├── 通过 Apifox MCP 拉取/更新接口
   └── 生成类型定义

3. 组件开发
   ├── 确定组件位置（common/ 或页面目录）
   ├── 遵循 frontend-design skill
   └── 使用设计令牌变量

4. 页面集成
   ├── 组装组件
   ├── 实现页面逻辑
   └── 响应式适配

5. 质量检查
   ├── 运行 ui-audit skill
   ├── 代码审查（code-reviewer）
   └── 浏览器测试（browser MCP）

6. 提交与合并
   ├── 遵循 Git 提交规范
   └── 创建 PR，关联看板任务
```

### 5.2 Git 提交规范

```
<type>: <subject>

<body>

<footer>
```

**Type 类型**：

| 类型 | 说明 |
|:---|:---|
| `feat` | 新功能 |
| `fix` | 修复 |
| `docs` | 文档 |
| `style` | 格式（不影响代码运行的变动）|
| `refactor` | 重构 |
| `test` | 测试 |
| `chore` | 构建过程或辅助工具的变动 |

**示例**：
```
feat: 添加订单支付按钮组件

- 实现 PayButton.vue 组件
- 支持显示价格和货币单位
- 添加点击事件和加载状态

Closes #123
```

---

## 六、常见问题

### Q1: 新组件应该放在哪个目录？

- 多个页面共享 → `src/components/common/`
- 仅一个页面使用 → `src/components/[page-name]/`
- 与特定业务强绑定 → 考虑放在 `views/` 中与页面文件同级

### Q2: 如何确保 UI 还原度？

1. 使用 MasterGo MCP 获取设计稿 DSL
2. 遵循 frontend-design skill 的 Bold Design 原则
3. 使用 ui-audit skill 进行审查
4. 用 browser MCP 截图对比设计稿

### Q3: 接口类型如何维护？

- 优先使用 Apifox MCP 自动生成
- 手动维护时，保持 `interfaces.ts` 与后端同步
- 所有响应数据必须定义类型，禁止 `any`

### Q4: 如何添加新 Skill？

参考本文件「2.3 Skill 扩展指南」，并更新「2.1 现有 Skills」表格。

---

## 七、参考资源

| 资源 | 路径 | 说明 |
|:---|:---|:---|
| 分享会文档 | `docs/分享会文档.md` | 项目整体介绍 |
| 什么是 MCP | `docs/什么是MCP.md` | MCP 协议详解 |
| MasterGo 集成指南 | `docs/使用MasterGo与MCP集成指南.md` | 设计协作流程 |
| 设计令牌 | `src/styles/variables.scss` | 颜色、字体、间距变量 |
| API 封装 | `api/request.ts` | 请求拦截、错误处理 |

---

## 八、更新日志

| 版本 | 日期 | 更新内容 |
|:---|:---|:---|
| v1.0 | 2026-03-17 | 初始版本，建立项目架构指南与 Skill 管理体系 |

---

**使用提示**: 开始任何开发工作前，请先阅读本 guide，确保了解项目架构与可用 Skills。
