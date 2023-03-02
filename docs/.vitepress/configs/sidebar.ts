import { getSideBar } from '../plugins/getSidebar'

const guides = [
  { text: '开始', link: '/guide/' },
  { text: '最佳实践', link: '/guide/best-practice' },
  { text: '配置', link: '/guide/configurations' },
  { text: '组件', link: '/guide/components' },
]
const defaultSidebar = [{ text: '指导', items: guides, link: '/guide/README' }]

const functionSidebar = getSideBar('./docs/functions')

export const sidebar = {
  '/guide/': defaultSidebar,
  '/functions/': functionSidebar,
}
