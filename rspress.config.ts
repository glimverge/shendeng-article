import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: 'docs',
  title: '神灯',
  description: '神灯文章',
  lang: 'zh',
  siteOrigin: 'https://blog.glimverge.com',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/glimverge/shendeng-article',
      },
    ],
  },
});
