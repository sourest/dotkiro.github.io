---
layout: post
title: VitePress 教程
date: 2022-05-14 20:00
---

# VitePress 教程

## 什么是 VitePress

[VitePress](https://vitepress.vuejs.org/) 是尤大基于其开发的下一代前端工程构建工具 [Vite](https://vitejs.dev/) 开发的类比 [VuePress](https://vuepress.vuejs.org/) 的文档生成器。

同时本站点基于 `VitePress` 建立，在此作鸣谢。

## 安装

安装环境：NodeJS > 12.0

第一步，在你的项目中安装 `VitePress`

```shell
npm install --save-dev vitepress
```

第二步，在你的项目 `package.json` 文件中添加一些脚步

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```

至此你已经完成了 VitePress 的安装，接下来你可以在你的项目根目录下的 `docs` 文件夹下创建你的 `markdown` 文档了。

## 配置

你的项目文档目录应当是这样的：

```shell
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.ts
│  └─ index.md
└─ package.json
```

其中 `docs/.vitepress/config.ts` 是 VitePress 的配置文件，你可以在这里配置你的项目文档的一些基本信息，并将配置信息导出

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hello World',
  description: 'This is a VitePress project',
  // And more...
})
```

具体配置信息可以参考 [VitePress 配置文档](https://vitepress.vuejs.org/config/basics.html)。

## 使用

启动开发服务器：

```shell
npm run docs:dev
```

VitePress 将在 `http://localhost:3000/` 监听你的项目文档目录，你可以在浏览器中访问。

生成文档：

```shell
npm run docs:build
```

VitePress 将生成你的项目文档，你可以在 `docs/.vitepress/dist` 中查看你的静态站点文件。

启动静态服务器：

```shell
npm run docs:serve
```

VitePress 将在 `http://localhost:5000/` 启动你的文静态站点服务器。

## 部署

### FTP 部署

您可以运行 `npm run docs:build` 命令来构建文档。

```shell
npm run docs:build
```

默认情况下，构建输出将放置在 `.vitepress/dist`。您可以将此文件夹部署 dist 到您喜欢的任何平台，如果你使用 FTP，那么此时可以将其打包上传到你的服务器。

### GitHub Pages 部署

1. 在 `docs/.vitepress/config.js` 中设置正确的 `base`。

   如果您要部署到 `https://<USERNAME>.github.io/`，则可以省略设置 `base`，因为它默认为 `'/'`。

   如果您要部署到 `https://<USERNAME>.github.io/<REPOSITORY>/`，例如您的存储库位于 `https://github.com/<USERNAME>/<REPOSITORY>`，则设置 `base` 为 `'/<REPOSITORY>/'`。

2. 在项目的根目录下创建一个名为 `.travis.yml` 的 [Travis CI](https://www.travis-ci.com/) 配置文件。

3. 在本地运行 `npm install` 并提交生成的 `package-lock.json` 锁文件。

4. 配置 `.travis.yml`：

```shell
language: node_js
node_js:
  - lts/*
install:
  - npm ci
script:
  - npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vitepress/dist
  github_token: $GITHUB_TOKEN
  keep_history: true
  on:
    branch: main
```

### GitLab Pages 部署

1. 在 `docs/.vitepress/config.js` 中设置正确的 `base`。

   如果您要部署到 `https://<USERNAME>.gitlab.io/`，则可以省略设置 `base`，因为它默认为 `'/'`。

   如果您要部署到 `https://<USERNAME>.gitlab.io/<REPOSITORY>/`，例如您的存储库位于 `https://gitlab.com/<USERNAME>/<REPOSITORY>`，则设置 `base` 为 `'/<REPOSITORY>/'`。

2. 在项目的根目录下创建一个名为 `.gitlab-ci.yml` 的 `GitLab CI` 配置文件。

3. 在本地运行 `npm install` 并提交生成的 `package-lock.json` 锁文件。

4. 配置 `.gitlab-ci.yml`：

```yaml
image: node:16.5.0
pages:
  stage: deploy
  cache:
    paths:
      - node_modules/
  script:
    - npm ci
    - npm run docs:build
  artifacts:
    paths:
      - docs/.vitepress/dist
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

## 对比

### 与 [VuePress](https://vuepress.vuejs.org/) v1 对比

1. 使用 Vue 3
2. 使用 Vite
3. 不使用 `vue-router`，使用简单的自定义路由
4. 从实用主义出发，更加简洁
5. 还无稳定版

### 与 [Gatsby](https://www.gatsbyjs.com/) 对比

1. 学习成本低
2. 设计更加简洁
3. 使用 Vue 3
4. 使用 Vite
5. 还无稳定版
6. 生态不如 Gatsby
