import { sidebar } from './sidebar'

export const nav = [
  { text: '指导', link: '/guide/', activeMatch: '^/guide/' },
  {
    text: 'functions',
    link: sidebar['/functions/'][0].items[0].link,
    activeMatch: '^/functions/',
  },
  {
    text: '联系我',
    link: '/about/',
  },
  {
    text: '演练场',
    link: 'https://play.vueuse.org',
  },
  {
    text: '英文文档',
    link: 'https://vueuse.org',
    target: '_self',
  },
]
