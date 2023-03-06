import { defineConfig } from 'vitepress'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { docGithubURL, githubURL } from './configs/github'
import { nav } from './configs/nav'
import { sidebar } from './configs/sidebar'

export default defineConfig({
  ignoreDeadLinks: true,
  title: 'VueUse',
  description: 'VueUse 中文文档',
  lastUpdated: true,
  base: '/vueuse-docs-cn/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vueuse-docs-cn/favicon.svg' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-0hoO4Rl4KS' }],
  ],

  markdown: {
    headers: {
      level: [0, 0],
    },

    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      applyPlugins(md)
    },
  },

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/favicon.svg',
    algolia: {
      appId: 'T26UD676CK',
      apiKey: '7906a2b1c37d1026e24ac460b1d48ba3',
      indexName: 'alfred-skyblue-gitee',
    },
    nav,
    sidebar,
    editLink: {
      pattern: `${docGithubURL}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    socialLinks: [{ icon: 'github', link: githubURL }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-PRESENT 丶远方',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
