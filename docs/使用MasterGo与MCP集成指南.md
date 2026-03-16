# 使用 MasterGo 与 MCP 集成指南

## 一、概述

**MasterGo MCP**（MasterGo Magic MCP）是一个基于 **Model Context Protocol（MCP）** 的独立服务，用于将 MasterGo 设计工具与 Cursor、Trae 等 AI 客户端连接。通过 MCP，AI 可以获取设计文件的 DSL、元数据、组件文档与工作流等信息，从而简化代码生成流程、提升代码质量，并为需要长期维护的项目提供更高效的协作方式。

本文介绍如何从零完成环境准备、获取令牌、配置 MCP，并在 Cursor 等客户端中使用 MasterGo 的 MCP 能力。

---

## 二、前置条件

| 条件 | 说明 |
|------|------|
| **Node.js** | MCP Server 基于 Node.js 运行，需安装**最新稳定版**。[下载地址](https://nodejs.org/zh-cn) |
| **MCP 客户端** | 支持 MCP 的 AI 工具，如 **Cursor**、**Trae**、**LingMa** 等 |
| **MasterGo 账号** | 用于在 mastergo.com 生成个人访问令牌（Token） |

---

## 三、环境准备

### 3.1 安装 Node.js

1. 打开 [Node.js 官网（中文）](https://nodejs.org/zh-cn)，下载并安装最新 LTS 版本。
2. 安装完成后，在终端中执行：

```bash
node -v
```

若输出类似 `v20.x.x` 的版本号，说明安装成功。

### 3.2 验证 npx

MasterGo MCP 通过 `npx` 拉取并运行，请确认本机已具备 npx（通常随 Node.js 一起安装）：

```bash
npx -v
```

---

## 四、获取 MasterGo 个人访问令牌（Token）

1. 打开浏览器，访问 **[https://mastergo.com](https://mastergo.com)** 并登录。
2. 进入 **个人设置**。
3. 切换到 **安全设置** 选项卡。
4. 找到 **个人访问令牌** 区域。
5. 点击 **生成令牌**，复制生成的 Token（形如 `mg_xxxxxxxx...`）。

> **注意**：Token 仅展示一次，请妥善保存；若泄露需在安全设置中重新生成并更新 MCP 配置。

---

## 五、配置 MCP

### 5.1 配置位置说明

不同客户端的 MCP 配置位置不同：

- **Cursor**：全局配置一般为 `~/.cursor/mcp.json`；部分版本可在设置中搜索「MCP」进行编辑。
- **Trae / LingMa**：请查阅各自官方文档中的「MCP 配置」或「集成」说明。

以下以 **Cursor** 为例（编辑 `~/.cursor/mcp.json`）。

### 5.2 方式一：命令行参数传递 Token（推荐）

将以下内容合并到现有 `mcpServers` 中（若文件为空，则保留外层的 `mcpServers` 结构）：

```json
{
  "mcpServers": {
    "mastergo-magic-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@mastergo/magic-mcp",
        "--token=你的MG_MCP_TOKEN",
        "--url=https://mastergo.com"
      ]
    }
  }
}
```

将 `你的MG_MCP_TOKEN` 替换为你在第四步中获取的 Token。

### 5.3 方式二：通过环境变量传递 Token

```json
{
  "mcpServers": {
    "mastergo-magic-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@mastergo/magic-mcp",
        "--url=https://mastergo.com"
      ],
      "env": {
        "MG_MCP_TOKEN": "你的MG_MCP_TOKEN"
      }
    }
  }
}
```

### 5.4 可选参数示例

可根据需要增加 `--rule`、`--timeout` 等参数，例如：

```json
{
  "mcpServers": {
    "mastergo-magic-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@mastergo/magic-mcp",
        "--token=你的MG_MCP_TOKEN",
        "--url=https://mastergo.com",
        "--rule=如果使用图片，则下载到本地并使用相对路径",
        "--timeout=30000"
      ]
    }
  }
}
```

| 参数 | 说明 |
|------|------|
| `--token` | 个人访问令牌（与 env 中 MG_MCP_TOKEN 二选一即可） |
| `--url` | MasterGo API 地址，默认 `https://mastergo.com` |
| `--rule` | 自定义规则说明，供 AI 在生成代码时参考 |
| `--timeout` | 超时时间（毫秒），如 30000 表示 30 秒 |

---

## 六、通过 MCP 市场安装（部分客户端）

若你使用 **Trae CN**、**LingMa** 等提供 MCP 市场的客户端：

1. 打开客户端内的 **MCP 市场**。
2. 搜索 **mastergo** 或 **MasterGo**。
3. 执行安装。
4. 在配置中填写 **MG_MCP_TOKEN**（即上文中的个人访问令牌）。

安装完成后即可在对话中使用 MasterGo 相关能力。

---

## 七、使用方式概览

配置生效后（部分客户端需重启或重新加载 MCP）：

- **Cursor**：在 Agent/对话中直接描述需求，例如「根据 MasterGo 设计稿生成页面代码」，AI 会通过 MCP 调用 MasterGo 提供的工具（如获取 DSL、元数据、组件文档等），再结合设计数据生成或优化代码。
- **Trae / LingMa**：根据各自文档，在支持 MCP 的对话或工作流中使用 MasterGo 能力即可。

常见 MCP 工具能力包括（具体以官方文档为准）：

- **get-dsl**：获取设计文件的 DSL 数据。
- **get-meta**：获取元数据信息。
- **get-component-link**：获取组件文档链接。
- **get-component-workflow**：获取组件工作流信息。

在 Cursor 中，可在 MCP 或工具列表中查看当前已连接的 `mastergo-magic-mcp` 及其暴露的工具名称与说明。

---

## 八、常见问题与排查

### 8.1 MCP 未出现在客户端

- 确认 `mcp.json`（或对应配置文件）格式正确、无多余逗号或语法错误。
- 重启 Cursor（或对应 AI 客户端），或通过设置中的「重新加载 MCP」类选项刷新。
- 确认 Node.js、npx 在终端中可正常执行（`node -v`、`npx -v`）。

### 8.2 连接超时或请求失败

- 检查本机网络能否访问 `https://mastergo.com`。
- 确认 Token 未过期且在安全设置中仍有效；若曾泄露，请重新生成并更新配置。
- 若使用代理，确保运行 MCP 的进程能使用相应代理访问外网。

### 8.3 Token 安全

- 不要将 `mcp.json` 或含 Token 的配置提交到公开仓库。
- 建议仅在本地或私有配置中使用；若需团队共享，请通过环境变量或密钥管理方式传递 Token。

---

## 九、参考链接

- [MasterGo 官网](https://mastergo.com)
- [MasterGo 帮助中心 - MCP](https://mastergo.com/help/MG/MCP)
- [mastergo-magic-mcp 开源仓库](https://github.com/mastergo-design/mastergo-magic-mcp)
- [Node.js 官网（中文）](https://nodejs.org/zh-cn)

---

*文档编写参考 MasterGo 官方帮助与 MCP 集成实践，如有更新请以官方文档为准。*
