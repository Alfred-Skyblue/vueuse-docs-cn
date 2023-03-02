# 配置

此处说明了 `VueUse` 中大部分功能的配置选项。

## 事件过滤器

从 v4.0 开始，我们提供了事件过滤器，可以灵活地控制事件何时被触发。例如，您可以使用 `throttleFilter` 和 `debounceFilter` 来控制事件触发的频率：

```ts
import {
  debounceFilter,
  throttleFilter,
  useLocalStorage,
  useMouse,
} from '@vueuse/core'

// 更改将以1秒的节流写入 localStorage
const storage = useLocalStorage(
  'my-key',
  { foo: 'bar' },
  { eventFilter: throttleFilter(1000) }
)

// 鼠标空闲 100 毫秒后，鼠标位置将更新
const { x, y } = useMouse({ eventFilter: debounceFilter(100) })
```

此外，您可以利用它 `pausableFilter` 来暂时暂停某些事件，例如

```ts
import { pausableFilter, useDeviceMotion } from '@vueuse/core'

const motionControl = pausableFilter()

const motion = useDeviceMotion({ eventFilter: motionControl.eventFilter })

// 暂停
motionControl.pause()

// 恢复
motionControl.resume()
```

## 触发时机

`VueUse` 的函数在一般情况下遵循 `Vue` 的响应式系统默认[触发时机](https://cn.vuejs.org/guide/essentials/watchers.html#callback-flush-timing)。

对于 `watch` 类的组合项（例如 `pausableWatch`、`whenever` `useStorage`、`useRefHistory` 默认为{ flush: 'pre' }。Vue 的响应式系统会缓存副作用函数，并异步地刷新它们，这样可以避免同一个“tick”中多个状态改变导致的不必要的重复调用。

与 watch 一样，VueUse 允许您通过传递 flush 选项来配置计时：

```ts
const { pause, resume } = pausableWatch(
  () => {
    // 可以访问到最新的 DOM
  },
  { flush: 'post' }
)
```

## 可配置的全局依赖

从 v4.0 开始，访问浏览器 API 的函数将提供一个选项字段供您指定全局依赖项（例如 window,document 和 navigator）。默认情况下它会使用全局实例，所以大多数时候你不需要担心它。此配置在使用 iframe 和测试环境时很有用。
