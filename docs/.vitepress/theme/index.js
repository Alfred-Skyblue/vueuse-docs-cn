import DefaultTheme from 'vitepress/theme'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'
import 'uno.css'
import './styles/index'
import { useComponents } from './useComponents.ts'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('demo', DemoBlock)
    useComponents(ctx.app)
  },
}
