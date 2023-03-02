# useKeyModifier

响应式[键盘修饰键状态](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState)。跟踪任何修饰键的状态- [请参阅浏览器兼容性说明](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#browser_compatibility)。

## 演示

<demo src="./demo.vue" title="useKeyModifier" desc="响应式键盘修饰键状态"></demo>


## 类型

```ts
export type KeyModifier =
    | 'Alt'
    | 'AltGraph'
    | 'CapsLock'
    | 'Control'
    | 'Fn'
    | 'FnLock'
    | 'Meta'
    | 'NumLock'
    | 'ScrollLock'
    | 'Shift'
    | 'Symbol'
    | 'SymbolLock'
export interface UseModifierOptions<Initial> extends ConfigurableDocument {
  /**
   * 更新修改器状态的事件名称
   *
   * @default ['mousedown', 'mouseup', 'keydown', 'keyup']
   */
  events?: WindowEventName[]
  /**
   * 初始值
   * @default null
   */
  initial?: Initial
}
export type UseKeyModifierReturn<Initial> = Ref<
    Initial extends boolean ? boolean : boolean | null
    >
export declare function useKeyModifier<Initial extends boolean | null>(
  modifier: KeyModifier,
  options?: UseModifierOptions<Initial>
): UseKeyModifierReturn<Initial>
```
