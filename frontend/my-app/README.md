# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

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
npm install react-router-dom

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
