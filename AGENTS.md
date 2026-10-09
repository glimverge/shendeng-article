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
