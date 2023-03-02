import { getSideBar } from '../plugins/getSidebar'

const guides = [
  { text: '开始', link: '/guide/' },
  { text: '最佳实践', link: '/guide/best-practice' },
  { text: '配置', link: '/guide/configurations' },
  { text: '组件', link: '/guide/components' },
]
const defaultSidebar = [{ text: '指导', items: guides, link: '/guide/README' }]

const thirdSidebar = [
  {
    text: '@Head',
    link: 'https://github.com/vueuse/head#api',
    items: [
      {
        text: 'createHead', link: 'https://github.com/vueuse/head#api',
      },
      {
        text: 'useHead', link: 'https://github.com/vueuse/head#api',
      },
    ],
  },
  {
    text: '@Motion',
    link: 'https://motion.vueuse.org/api/use-element-style.html',
    items: [
      {
        text: 'useElementStyle', link: 'https://motion.vueuse.org/api/use-element-style.html',
      },
      {
        text: 'useElementTransform', link: 'https://motion.vueuse.org/api/use-element-transform.html',
      },
      {
        text: 'useMotion', link: 'https://motion.vueuse.org/api/use-motion.html',
      },
      {
        text: 'useMotionProperties', link: 'https://motion.vueuse.org/api/use-motion-properties.html',
      },
      {
        text: 'useMotionVariants', link: 'https://motion.vueuse.org/api/use-motion-variants.html',
      },
      {
        text: 'useSpring', link: 'https://motion.vueuse.org/api/use-spring.html',
      },
    ],
  },
  {
    text: '@SchemaOrg',
    link: 'https://vue-schema-org.netlify.app/api/core/create-schema-org.html',
    items: [
      {
        text: 'createSchemaOrg', link: 'https://vue-schema-org.netlify.app/api/core/create-schema-org.html',
      }, {
        text: 'useSchemaOrg', link: 'https://vue-schema-org.netlify.app/api/core/use-schema-org.html',
      },
    ],
  },
  {
    text: '@Sound',
    link: 'https://github.com/vueuse/sound#examples',
    items: [
      {
        text: 'useSound', link: 'https://github.com/vueuse/sound#examples',
      },
    ],
  },

]

const functionSidebar = [...getSideBar('./docs/functions'), ...thirdSidebar]
export const sidebar = {
  '/guide/': defaultSidebar,
  '/functions/': functionSidebar,
}
