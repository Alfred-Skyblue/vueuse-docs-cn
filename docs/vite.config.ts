import { resolve } from 'path'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [UnoCSS(), Components({
    dirs: resolve(__dirname, '.vitepress/theme/components'),
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    resolvers: [
      IconsResolver({
        componentPrefix: '',
      }),
    ],
    dts: './.vitepress/components.d.ts',
    transformer: 'vue3',
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Icons({
    compiler: 'vue3',
    defaultStyle: 'display: inline-block',
  })],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
})
