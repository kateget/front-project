<!-- 1. 项目搭建 -->
npm create vite@latest my-app -- --template react-ts
<!-- 2. 安装依赖 -->
# 安装 React 和 TypeScript
npm install react react-dom
npm install typescript @types/react @types/react-dom --save-dev

# 安装 Less
npm install less --save-dev

# 可选：安装 CSS 预处理器相关插件
npm install vite-plugin-imp --save-dev  # 用于按需导入样式

<!-- 4. 配置 TypeScript -->
<!-- 5. 配置 Vite -->
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 可以在这里配置全局变量
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
<!-- 6. 配置 Less 模块化（可选） -->
<!-- 7. 创建示例组件 -->
<!-- 8. 安装常用开发依赖 -->
# 代码质量工具
npm install eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npm i eslint-plugin-prettier -D

# 路由 | 路由表配置
npm install axios react-router-dom

# 状态管理（可选）
npm install @reduxjs/toolkit react-redux

# UI 组件库（可选）
npm install antd
# 或
npm install @mui/material @emotion/react @emotion/styled
<!-- 按需导入配置（以 antd 为例） -->
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ]
})
# 构建工具
-- 热更新
-- 文件合并
-- 文件指纹