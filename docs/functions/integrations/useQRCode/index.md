# useQRCode

[`qrcode`](https://github.com/soldair/node-qrcode) 包装器，用于生成二维码，在[@vueuse/integrations](https://vueuse.org/integrations/README)附加组件中可用。

## 演示

<demo src="./demo.vue" title="useQRCode" desc=""></demo>

## 安装 

```bash
npm i qrcode
```

## 用法

```ts
import { useQRCode } from '@vueuse/integrations/useQRCode'

// `qrcode` will be a ref of data URL
const qrcode = useQRCode('text-to-encode')
```

或者传递一个 `ref` 给它，返回的数据 `URL ref` 将随着 `source ref` 的变化而变化。

```ts
import { ref } from 'vue'
import { useQRCode } from '@vueuse/integrations/useQRCode'

const text = ref('text-to-encode')
const qrcode = useQRCode(text)
```

```html
<input v-model="text" type="text">
<img :src="qrcode" alt="QR Code" />
```


## 类型

```ts
/**
 * qrcode 包装器
 *
 * @see https://vueuse.org/useQRCode
 * @param text
 * @param options
 */
export declare function useQRCode(
  text: MaybeComputedRef<string>,
  options?: QRCode.QRCodeToDataURLOptions
): Ref<string>
```
