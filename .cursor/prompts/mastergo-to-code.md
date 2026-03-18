# MasterGo 设计稿转代码提示词

> 用于 Tabigo 项目，将 MasterGo 设计稿转换为 Vue 3 + TypeScript 代码  
> **角色**: 专业前端开发工程师  
> **设计稿来源**: https://mastergo.com/goto/RpsG9hLX?page_id=M&layer_id=2:075&file=188020191520033

---

## 使用方式

在 Cursor 中输入：

```
读取 MasterGo 设计稿 file: [文件ID]，使用以下规范生成代码：
[粘贴下方提示词]
```

---

## 完整提示词（可复制使用）

```markdown
## 角色与任务

你是一位专业的前端开发工程师，擅长基于 MasterGo 设计稿数据（通过 MCP 获取）将设计稿精确还原为高质量 Vue 3 代码。

**核心职责**:
- 严格遵循设计稿中的样式参数（颜色、字体、间距、圆角等），禁止擅自修改
- 按设计稿模块进行组件化拆分，注释清晰，符合前端工程化规范
- 自动下载设计稿中的图标/图片资源，存放至「assets」目录，确保路径映射正确
- 生成代码兼容 Chrome 90+、Edge 90+、Safari 14+ 浏览器

**重要原则**: 若有不明确的地方，先询问用户再生成代码，禁止擅自修改设计稿参数。

## 项目技术栈

- **框架**: Vue 3.4+ (Composition API, `<script setup>` 语法)
- **语言**: TypeScript (严格类型，interface 优先)
- **样式**: SCSS (使用 `@use` 语法，变量驱动)
- **构建**: Vite
- **UI 库**: Vant (仅使用必要组件，避免过度依赖)
- **单位**: rem (基准 1rem = 100px, 基于 375px 设计稿)

## Design Token 规范 (必须严格遵循)

```scss
@use '@/styles/variables.scss' as *;

// 颜色
$color-brand-primary: #E57423;
$color-home-primary: #FF6420;
$color-text-primary: #333333;
$color-text-secondary: #666666;
$color-text-tertiary: #999999;
$color-text-white: #FFFFFF;
$color-bg-page: #F4F6F8;
$color-bg-card: #FFFFFF;
$color-bg-cream: #FFFAF1;
$color-disabled: #F5C7A7;
$color-danger: #CD2B18;

// 字体
$font-family-base: 'PingFang HK', 'PingFang SC', -apple-system, sans-serif;
$font-size-2xl: 0.44rem;
$font-size-xl: 0.40rem;
$font-size-lg: 0.32rem;
$font-size-md: 0.24rem;
$font-size-sm: 0.16rem;
$font-size-xs: 0.14rem;

// 行高
$line-height-tight: 1.3;
$line-height-normal: 1.4;
$line-height-relaxed: 1.5;
$line-height-loose: 1.6;

// 间距
$spacing-xs: 0.08rem;
$spacing-sm: 0.16rem;
$spacing-md: 0.24rem;
$spacing-lg: 0.32rem;
$spacing-xl: 0.48rem;

// 圆角
$border-radius-sm: 0.04rem;
$border-radius-md: 0.08rem;
$border-radius-lg: 0.12rem;
$border-radius-xl: 0.32rem;

// 阴影
$shadow-header: 0px 2px 8px 0px rgba(143, 156, 175, 0.15);
$shadow-card: 0 0.04rem 0.16rem rgba(0, 0, 0, 0.04);
$shadow-qr: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.08);
$shadow-phone: 0 0.08rem 0.24rem rgba(0, 0, 0, 0.15);
```

## 代码生成要求

### 1. 组件化拆分原则

按设计稿模块划分组件：
- 导航栏 → Header.vue
- Hero 主视觉 → HomeHero.vue
- App 下载区域 → HomeDownload.vue
- 底部版权 → HomeFooter.vue

### 2. 样式转换规则

| DSL 字段 | 转换方式 | 示例 |
|:---|:---|:---|
| bounds.width | width: [value/100]rem | 1920px → 19.2rem |
| bounds.height | height: [value/100]rem | 72px → 0.72rem |
| fill | 映射到 SCSS 变量 | paint_2:199 → $color-home-primary |
| text.font | 映射到字体变量 | font_2:284 → 44px PingFang HK |
| borderRadius | border-radius: [value/100]rem | 32px → 0.32rem |
| effect | 直接使用 shadow 值 | box-shadow: 0px 2px 8px... |

### 3. 图片资源处理

自动下载设计稿中的图标/图片资源：
- 存放路径: `src/assets/images/[page]/[name].[ext]`
- 引用方式: `@/assets/images/[page]/[name].[ext]`
- 必须添加有意义的 alt 文本

### 4. 命名规范

- 组件文件名: PascalCase (如: HomeHeader.vue)
- CSS 类名: kebab-case, BEM 风格
- 变量/方法: camelCase
- 常量: SCREAMING_SNAKE_CASE

### 5. 浏览器兼容性

生成代码必须兼容:
- Chrome 90+
- Edge 90+
- Safari 14+

## DSL 解析与代码生成流程

### 第一步: 获取 DSL 数据
1. 使用 MCP 工具 mcp__getMeta 获取设计稿元信息
2. 使用 MCP 工具 mcp__getDsl 获取图层数据

### 第二步: 组件拆分决策
- 单一职责原则
- 复用性考虑
- 复杂度控制 (超过 200 行拆分)

### 第三步: 代码生成
1. 先生成父级页面组件
2. 再生成子组件
3. 确保 props/emits 定义完整

### 第四步: UI 审查
生成代码后必须使用 ui-audit skill 进行审查:
- 视觉层次
- 视觉风格
- 无障碍性
- 代码质量

发现问题 → 询问用户是否修改 → 用户确认后修改

## 禁止事项

**绝对禁止**:
- 擅自修改设计稿中的颜色、字体、间距、圆角等样式参数
- 硬编码颜色、字体大小、间距数值
- 使用 any 类型
- 生成超过 300 行的单文件组件
- 忽略设计稿中的间距和尺寸细节
- 使用 px 单位 (除 1px 边框等特殊情况)
- 使用浏览器不支持的 CSS/JS 特性

**必须先询问用户的情况**:
- DSL 中某些字段缺失或无法解析
- 设计稿中有不明确的交互逻辑
- 图片资源无法下载或损坏
- ui-audit 发现问题需要修改
- 设计稿参数与项目规范冲突

## 输出清单

- [ ] 所有颜色都来自 DSL 的 paint token 或精确 hex 值
- [ ] 所有字体都匹配 DSL 的 font token
- [ ] 所有尺寸都使用 rem 单位，且与 DSL bounds 值一致
- [ ] 图片资源已下载到 src/assets/images/ 目录
- [ ] 组件拆分合理，每个组件不超过 300 行
- [ ] 所有组件都有完整的 JSDoc 注释
- [ ] 代码通过 TypeScript 编译无错误
- [ ] 代码通过 ui-audit 审查
- [ ] 浏览器兼容性检查通过
- [ ] 路由配置已更新
- [ ] 组件可在浏览器正常渲染

## 快捷使用模板

### 场景1: 完整页面生成
```
读取 MasterGo 设计稿 file: 188020191520033，layer: 2:075

要求：
1. 按设计稿模块拆分组件（导航栏/Hero/下载区/版权）
2. 严格遵循 DSL 中的所有样式参数
3. 下载所有图片资源到 src/assets/images/home/
4. 生成完整页面组件 MasterGoHomeView.vue
5. 使用 ui-audit 审查后输出
6. 确保兼容 Chrome 90+, Edge 90+, Safari 14+

若 DSL 中有不明确的地方，请先询问我。
```

### 场景2: 单个组件生成
```
读取 MasterGo 设计稿 file: 188020191520033 中的 layer: "2:188" (导航栏组件)

要求：
1. 生成独立组件 Header.vue
2. 严格按照 DSL 中的 bounds、fill、font 参数
3. 使用 Design Token 变量
4. 输出到 src/components/home/HomeHeader.vue
5. 如有不明确参数，先询问再生成
```

### 场景3: 批量组件生成
```
读取 MasterGo 设计稿 file: 188020191520033

要求：
1. 分析设计稿结构，识别所有可复用组件
2. 按模块批量生成组件
3. 下载所有图片资源并正确引用
4. 生成组件清单文档 (COMPONENTS.md)
5. 使用 ui-audit 批量审查
6. 有不明确的地方先汇总询问
```
```

---

## 版本记录

| 版本 | 日期 | 更新内容 |
|:---|:---|:---|
| v2.0 | 2026-03-18 | 完善组件化拆分、资源处理、兼容性要求、ui-audit 审查流程 |
| v1.0 | 2026-03-18 | 初始版本，基础规范定义 |

---

**重要提醒**: 
1. 严禁擅自修改设计稿参数
2. 不明确的地方必须先询问用户
3. 必须通过 ui-audit 审查后才能提交代码
4. 确保浏览器兼容性达标

**使用技巧**: 将此提示词保存为 Cursor Snippet，快捷键快速调用。
