# useNow

响应式获取当前 Date 实例。

## 演示

### 基本用法

<demo src="./demo.vue" title="useNow" desc=""></demo>


### 组件用法

```html
<UseNow v-slot="{ now, pause, resume }">
  Now: {{ now }}
  <button @click="pause()">暂停</button>
  <button @click="resume()">恢复</button>
</UseNow>
```
