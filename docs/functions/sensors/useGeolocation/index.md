# useGeolocation

响应式[`Geolocation API`](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation_API)。如果用户愿意，它允许用户向 Web 应用程序提供他们的位置。出于隐私原因，要求用户允许报告位置信息。

## 演示

### 基础使用

<demo src="./demo.vue" title="" desc=""></demo>

### 组件使用

```html
<UseGeolocation v-slot="{ coords: { latitude, longitude } }">
    纬度: {{ latitude }}
    经度: {{ longitude }}
</UseGeolocation>
```




## 类型

```ts
export interface UseGeolocationOptions
  extends Partial<PositionOptions>,
  ConfigurableNavigator {
  immediate?: boolean
}

export interface UseGeolocationReturn {
  /**
   * 如果浏览器支持 Geolocation API 则为 true
   */
  isSupported: Ref<boolean>
  /**
   * 有关检索到的位置的信息，例如纬度和经度
   */
  coords: Ref<GeolocationCoordinates>
  /**
   * 获取到的位置的时间
   */
  locatedAt: Ref<number | null>
  /**
   * 如果发生错误，则为错误对象
   */
  error: Ref<GeolocationPositionError | null>
  /**
   * 启动监听位置变化
   */
  resume: () => void
  /**
   * 停止监听位置变化
   */
  pause: () => void
}
/**
 * 响应式 Geolocation API
 *
 * @see https://vueuse.org/useGeolocation
 * @param options
 */
export declare function useGeolocation(options?: UseGeolocationOptions): UseGeolocationReturn
```

