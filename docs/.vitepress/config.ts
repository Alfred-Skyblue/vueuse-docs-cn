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
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
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
      appId: '',
      apiKey: '',
      indexName: '',
      placeholder: '搜索功能暂不可用',
    },
    nav,
    sidebar,
    editLink: {
      pattern: `${docGithubURL}/edit/master/docs/:path`,
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
