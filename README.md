# 登录引导页面 - Vue 3 项目

基于 MasterGo 设计稿开发的移动端登录引导页面。

## 项目信息

- **设计稿来源**: MasterGo (file: 17858753938881)
- **页面名称**: 引导登录/注册
- **设计尺寸**: 750 x 1624px (移动端)
- **技术栈**: Vue 3 + Vite + SCSS

## 设计规范

### 颜色规范

```scss
// 背景色
$color-bg-primary: #FFFFFF;                    // 主背景色
$color-bg-secondary-start: #FDF4ED;            // 渐变起始色
$color-bg-secondary-end: #FFFFFF;              // 渐变结束色

// 字体色
$color-text-primary: #333333;                  // 一级文字
$color-text-tertiary: #999999;                 // 三级文字
$color-text-link: #5680E9;                   // 链接色

// 品牌色
$color-brand-primary: #E57423;               // 主品牌色

// 线条色
$color-border-card: #D6D6D6;                 // 卡片描边
```

### 字体规范

- **字体家族**: PingFang SC, -apple-system, sans-serif
- **标题字号**: 32px (0.32rem)
- **按钮字号**: 30px (0.30rem)
- **辅助文字**: 24px (0.24rem)

### 尺寸规范

- **页面宽度**: 750px (7.5rem)
- **状态栏高度**: 88px (0.88rem)
- **登录按钮高度**: 96px (0.96rem)
- **按钮圆角**: 32px (0.32rem)

## 项目结构

```
├── index.html                 # HTML 入口
├── package.json               # 项目依赖
├── vite.config.js             # Vite 配置
├── src/
│   ├── main.js               # 应用入口
│   ├── App.vue               # 主页面组件
│   ├── styles/
│   │   ├── variables.scss    # SCSS 变量规范
│   │   └── global.scss       # 全局样式
│   ├── assets/
│   │   └── images/           # 图片资源
│   │       └── line-logo.png # Line 品牌 Logo
│   └── components/
│       ├── common/           # 通用组件
│       │   ├── StatusBar.vue      # 状态栏
│       │   └── CloseButton.vue    # 关闭按钮
│       └── login/            # 登录相关组件
│           ├── LoginButton.vue        # 登录按钮
│           ├── LoginMethodList.vue    # 登录方式列表
│           ├── AgreementCheckbox.vue  # 协议勾选
│           ├── LogoIllustration.vue   # Logo 插画
│           ├── HomeIndicator.vue      # Home 指示条
│           └── icons/          # 图标组件
│               ├── EmailIcon.vue
│               ├── PhoneIcon.vue
│               ├── LineIcon.vue
│               ├── AppleIcon.vue
│               ├── FacebookIcon.vue
│               └── GoogleIcon.vue
```

## 功能特性

1. **多种登录方式**
   - 电子邮箱登录
   - 手机号码登录
   - Line 账号登录
   - Apple 账号登录
   - Facebook 账号登录
   - Google 账号登录

2. **协议确认**
   - 隐私协议勾选
   - 服务协议勾选
   - 可点击的协议链接

3. **REM 适配**
   - 基于 750px 设计稿
   - 1rem = 100px (方便计算)
   - 响应式缩放

4. **浏览器兼容**
   - Chrome 90+
   - Edge 90+
   - Safari 14+

## 安装和运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 使用说明

### REM 适配方案

项目使用 REM 适配方案，基准设置为：
- 设计稿宽度: 750px
- 1rem = 100px

示例：
```scss
// 设计稿 32px → 0.32rem
.button {
  font-size: 0.32rem;
}
```

### 组件使用

```vue
<template>
  <!-- 登录按钮 -->
  <LoginButton type="email" text="电子邮箱地址" @click="handleLogin" />
  
  <!-- 协议勾选 -->
  <AgreementCheckbox v-model:isChecked="isChecked" />
</template>
```

### 事件处理

```javascript
// 登录方式点击
const handleLogin = (loginType) => {
  console.log('选择的登录方式:', loginType)
  // email | phone | line | apple | facebook | google
}

// 协议点击
const handlePrivacyClick = () => {
  // 打开隐私协议
}
```

## 资源文件

从设计稿自动下载的资源：
- `src/assets/images/line-logo.png` - Line 品牌 Logo

## 注意事项

1. 所有样式均严格遵循 MasterGo 设计稿规范
2. 使用 SCSS 变量统一管理设计 Token
3. 组件化拆分，便于维护和复用
4. 支持 iPhone 安全区域适配

## 设计稿链接

https://mastergo.com/goto/RmyuJCng?page_id=2:66736&layer_id=1613:94068&file=17858753938881

---

**生成时间**: 2026-03-15  
**生成工具**: MasterGo MCP + Vue 3
