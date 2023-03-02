# useIdle

跟踪用户是否处于非活动状态。

## 演示

### 基础使用

<demo src="./demo.vue" title="" desc=""></demo>

### 组件使用

```html
<UseIdle v-slot="{ idle }" :timeout="5 * 60 * 1000">
    空闲状态: {{ idle }}
</UseIdle>
```

## 类型

```ts
export interface UseIdleOptions
  extends ConfigurableWindow,
  ConfigurableEventFilter {
  /**
   * 侦听检测到的用户活动的事件名称
   * @default ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel']
   */
  events?: WindowEventName[]
  /**
   * 监听文档可见性变化
   *
   * @default true
   */
  listenForVisibilityChange?: boolean
  /**
   * 空闲的初始状态
   *
   * @default false
   */
  initialState?: boolean
}
export interface UseIdleReturn {
  idle: Ref<boolean>
  lastActive: Ref<number>
}
/**
 * 跟踪用户是否处于非活动状态。
 *
 * @see https://vueuse.org/useIdle
 * @param timeout default to 1 minute
 * @param options IdleOptions
 */
export declare function useIdle(
  timeout?: number,
  options?: UseIdleOptions
): UseIdleReturn
```
