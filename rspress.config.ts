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
        icon: "github",
        mode: "link",
        content: "https://github.com/glimverge/shendeng-article",
      },
    ],
  },
});
