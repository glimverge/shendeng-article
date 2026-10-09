# AGENTS.md

## GitHub Pages / 域名

- 站点使用自定义域名：**https://blog.glimverge.com**
- 部署在域名根路径，**不要配置 Rspress `base`**（保持默认 `/`）
- `siteOrigin` 应设为 `https://blog.glimverge.com`，不要写成 `https://glimverge.github.io` 或带仓库子路径

## 文档站

- 基于 **Rspress 2**（`@rspress/core`）
- 文档根目录：`docs/`
- 首页是 Overview（`docs/index.md` 中 `overview: true`）
- 导航 / 侧栏：`docs/_nav.json`、`docs/_meta.json`
- 构建产物目录：`doc_build/`
- 常用命令：`npm run docs:dev` / `docs:build` / `docs:preview`

## Logo

- 品牌 Logo 来自 https://github.com/glimverge/design/tree/master/logo
- Web 资源放在 `docs/public/`（勿提交 `.ai` / `.cdr` 源文件）
- 导航 Logo：`logo-full-transparent.svg`；站点 icon：`logo-full-transparent.ico`

## 代码格式（Oxfmt）

- 使用 **Oxfmt**（`oxfmt`）格式化项目文件：Markdown / TypeScript / JavaScript / JSON / YAML 等（勿再引入 Prettier）
- 配置：`.oxfmtrc.json`（`proseWrap: preserve`，避免重排中文段落；忽略 `doc_build`、`docs/public`、`.agents`、`.workbuddy` 等）
- 本地检查：`npm run fmt:check`；本地修复：`npm run fmt`
- CI：`.github/workflows/autofix.yml`（**workflow 名必须是 `autofix.ci`**）在 push/PR 时跑 `npm run fmt`，再由 [autofix.ci](https://autofix.ci/) App 把修复推回分支
- 组织已安装 autofix.ci GitHub App；不要再手写 `git commit` / `git push` 做格式修复
