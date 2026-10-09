import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '神灯',
  description: '神灯文章',
  lang: 'zh-CN',

  themeConfig: {
    // 右上角导航：外链等；文章列表放在左侧 sidebar
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/glimverge/shendeng-article',
      },
    ],

    sidebar: [
      {
        text: '文章',
        items: [
          {
            text: '二十分钟写完的代码，你敢改一版吗',
            link: '/二十分钟写完的代码你敢改一版吗',
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/glimverge/shendeng-article',
      },
    ],

    // 右侧本页目录
    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
