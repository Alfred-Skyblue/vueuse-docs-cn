# refAutoReset

一段时间后将重置为默认值的 ref。

## 演示

<demo src="./demo.vue" title="refAutoReset" desc="1秒后将重置为默认值"></demo>


## 用法

```ts
import { refAutoReset } from '@vueuse/core'

const message = refAutoReset('default message', 1000)

const setMessage = () => {
  // 这里的值将更改为“消息已设置”，但在 1000 毫秒后，它将更改为“默认消息”
  message.value = 'message has set'
}
```
