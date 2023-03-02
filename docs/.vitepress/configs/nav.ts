import { sidebar } from './sidebar'

export const nav = [
  { text: '指导', link: '/guide/', activeMatch: '^/guide/' },
  {
    text: 'Hooks',
    link: sidebar['/functions/'][0].items[0].link,
    activeMatch: '^/functions/',
  },
  {
    text: '演练场',
    link: 'https://play.vueuse.org',
  },
]
