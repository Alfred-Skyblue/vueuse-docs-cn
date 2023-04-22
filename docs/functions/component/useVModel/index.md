# useVModel

v-model 绑定的简写，props + emit -> ref

## 用法

```ts
import { useVModel } from "@vueuse/core";

export default {
  setup(props, { emit }) {
    const data = useVModel(props, "data", emit);

    console.log(data.value); // props.data
    data.value = "foo"; // emit('update:data', 'foo')
  },
};
```

### `<script setup>`

```vue
<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const data = useVModel(props, "modelValue", emit);
</script>
```

## 类型

```ts
export interface UseVModelOptions<T> {
  /**
   * 当 passive 设置为 true 时，它将使用 watch 与 props 和 ref 同步。而不是依赖 `v-model` 或 `.sync` 来工作。
   *
   * @default false
   */
  passive?: boolean;
  /**
   * 设置 eventName 后，它的值将用于覆盖发出的事件名称。
   *
   * @default undefined
   */
  eventName?: string;
  /**
   * 试图检查深层嵌套对象或数组中的属性更改。仅在 `passive` 选项设置为 `true` 时有效
   *
   * @default false
   */
  deep?: boolean;
  /**
   * 当没有传递任何值时，为 return ref 定义默认值。
   *
   * @default undefined
   */
  defaultValue?: T;
  /**
   * 接受自定义克隆函数。当设置为 true 时，它将使用 JOSN.parse(JSON.stringify(value)) 进行克隆。
   *
   * @default false
   */
  clone?: boolean | CloneFn<T>;

  /**
   * 触发 emit 事件之前的钩子可用于表单验证。
   * 如果返回 false，则不会触发 emit 事件。
   *
   * @default undefined
   */
  shouldEmit?: (v: T) => boolean;
}
/**
 * v-model 绑定的简写，props + emit -> ref
 *
 * @see https://vueuse.org/useVModel
 * @param props
 * @param key (default 'value' in Vue 2 and 'modelValue' in Vue 3)
 * @param emit
 */
export declare function useVModel<
  P extends object,
  K extends keyof P,
  Name extends string
>(
  props: P,
  key?: K,
  emit?: (name: Name, ...args: any[]) => void,
  options?: UseVModelOptions<P[K]>
): Ref<UnwrapRef<P[K]>> | WritableComputedRef<P[K]>;
```
