# Dynamic Wallpaper - 动态壁纸项目

## 项目概述

一个基于 React + Vite + Bun 的动态壁纸应用，具有可拖拽、可缩放的模块化界面，使用 MagicUI 的 Bento Grid 布局和 React Bits 的动效。

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite 5
- **运行时**: Bun
- **UI库**: MagicUI + React Bits
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **拖拽**: React Beautiful DnD

## 核心功能

### 1. 全屏壁纸背景
- 支持多张背景图片切换
- 平滑过渡动画
- 自适应不同屏幕尺寸

### 2. Bento Grid 模块布局
- 基于 MagicUI 的 Bento Grid 系统
- 响应式网格布局
- 保持视觉美观的约束

### 3. 可交互模块
- **拖拽功能**: 模块可在网格内自由拖拽
- **尺寸调整**: 支持模块大小缩放
- **Fluid Glass 效果**: 使用 React Bits 的毛玻璃效果

### 4. 内置模块类型
- 时间显示模块
- 日期显示模块  
- 天气信息模块
- 翻页效果模块
- 系统状态模块
- 可扩展的自定义模块

## 项目结构

```
dynamic-wallpaper/
├── docs/                    # 项目文档
│   ├── README.md           # 项目说明
│   ├── REQUIREMENTS.md     # 需求文档
│   ├── TECH-STACK.md      # 技术选型
│   └── TODO.md            # 任务清单
├── src/                    # 源代码
│   ├── components/         # 组件库
│   ├── modules/           # 功能模块
│   ├── hooks/             # 自定义 Hooks
│   ├── utils/             # 工具函数
│   ├── types/             # 类型定义
│   └── assets/            # 静态资源
├── public/                # 公共资源
└── package.json           # 项目配置
```

## 开发规范

- 每个功能模块完成后提交一次 Git 记录
- 保持清晰的 commit 信息
- 及时更新相关文档
- 遵循 TypeScript 严格模式
- 使用 ESLint 代码规范

## 快速开始

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run dev

# 构建生产版本
bun run build
```

## 版本记录

- v0.0.0: 项目初始化，基础配置完成