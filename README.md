# MD5 工具

一个基于 Next.js 构建的在线 MD5 哈希计算工具，支持文本和文件 MD5 计算。

## 功能特性

- 🔤 **文本输入**: 直接在文本框中输入内容计算 MD5
- 📁 **文件上传**: 支持拖拽或点击上传文件计算 MD5
- 📋 **一键复制**: 计算结果可一键复制到剪贴板
- 🎨 **现代 UI**: 美观的响应式界面设计
- 🔒 **本地计算**: 所有计算在浏览器本地完成，保护隐私
- 📱 **移动友好**: 支持手机和平板设备

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **加密**: crypto-js
- **构建**: 支持 SSR/SSG

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 使用说明

### 文本模式

1. 在文本框中输入要计算 MD5 的内容
2. 点击"计算 MD5"按钮
3. 复制生成的 MD5 哈希值

### 文件模式

1. 点击上传区域或拖拽文件到指定区域
2. 系统会自动计算文件的 MD5 值
3. 复制生成的 MD5 哈希值

## 支持的文件格式

- 文本文件 (.txt, .md)
- 代码文件 (.js, .ts, .py, .java, .cpp, .c, .php, .rb, .go, .rs, .swift, .kt)
- 配置文件 (.json, .xml, .csv, .log)
- 网页文件 (.html, .css)

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

```bash
npm run build
npm start
```

## 许可证

MIT License

