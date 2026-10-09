import { defineConfig } from "@rspress/core";
import { pluginRss } from "@rspress/plugin-rss";
import { pluginSitemap } from "@rspress/plugin-sitemap";

export default defineConfig({
  root: "docs",
  title: "神灯",
  description: "神灯文章",
  lang: "zh",
  siteOrigin: "https://blog.glimverge.com",
  // Logos from https://github.com/glimverge/design/tree/master/logo
  logo: "/logo-full-transparent.svg",
  logoText: "神灯",
  icon: "/logo-full-transparent.ico",
  // AI-native Markdown index (llms.txt / per-page .md)
  llms: true,
  plugins: [
    pluginSitemap(),
    pluginRss({
      feed: {
        id: "articles",
        title: "神灯",
        description: "神灯文章",
        language: "zh-CN",
        // Include article pages with a publish date; skip Overview and other index pages
        test: (page) =>
          Boolean(page.frontmatter?.date || page.frontmatter?.published_at) &&
          page.routePath !== "/" &&
          !page.frontmatter?.overview,
      },
      output: {
        type: "atom",
      },
    }),
  ],
  themeConfig: {
    lastUpdated: true,
    editLink: {
      docRepoBaseUrl: "https://github.com/glimverge/shendeng-article/tree/main/docs",
    },
    llmsUI: {
      placement: "outline",
      viewOptions: ["markdownLink", "chatgpt", "claude"],
    },
    socialLinks: [
      {
        icon: {
          // Classic RSS mark (Rspress has no built-in "rss" preset)
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.67A12.89 12.89 0 0 0 4 7.11zm0 5.34a10.22 10.22 0 0 1 10.22 10.22h-2.67A7.56 7.56 0 0 0 4 12.45z"/></svg>',
        },
        mode: "link",
        content: "/rss/articles.xml",
      },
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/glimverge/shendeng-article",
      },
    ],
  },
});
