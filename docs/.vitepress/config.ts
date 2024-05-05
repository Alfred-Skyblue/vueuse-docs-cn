import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { docGithubURL, githubURL } from './configs/github'
import { nav } from './configs/nav'
import { sidebar } from './configs/sidebar'
const links = []
export default defineConfig({
  ignoreDeadLinks: true,
  title: 'VueUse',
  description: 'VueUse 中文文档',
  lastUpdated: true,
  base: '/',
  head: [
    [
      'meta',
      {
        httpEquiv: 'refresh',
        content: '0; url=https://vueuse.pages.dev/',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-0hoO4Rl4KS' }],
    ['meta', { name: 'google-site-verification', content: 'v3_UHXg-hHfXvTVPh5bhX6_AT-K2oX4AZ8LqbdCzLrM' }],
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
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      links.push({
      // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated,
      })
    }
  },

  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://alfred-skyblue.gitee.io/',
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach(link => sitemap.write(link))
    sitemap.end()
    // eslint-disable-next-line promise/param-names
    await new Promise(r => writeStream.on('finish', r))
  },
})
