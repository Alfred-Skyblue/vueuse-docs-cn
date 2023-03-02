# useStepper

提供用于构建多步骤向导界面的帮助程序。


## 演示

<demo src="./demo.vue" title="useStepper" desc=""></demo>

## 用法

### 作为数组的步骤

```js
import { useStepper } from '@vueuse/core'

const {
  steps,
  stepNames,
  index,
  current,
  next,
  previous,
  isFirst,
  isLast,
  goTo,
  goToNext,
  goToPrevious,
  goBackTo,
  isNext,
  isPrevious,
  isCurrent,
  isBefore,
  isAfter,
} = useStepper([
  'billing-address',
  'terms',
  'payment',
])

// 通过`current`访问步骤
console.log(current.value) // 'billing-address'
```

### 步骤对象

```js
import { useStepper } from '@vueuse/core'

const {
  steps,
  stepNames,
  index,
  current,
  next,
  previous,
  isFirst,
  isLast,
  goTo,
  goToNext,
  goToPrevious,
  goBackTo,
  isNext,
  isPrevious,
  isCurrent,
  isBefore,
  isAfter,
} = useStepper({
  'user-information': {
    title: '用户信息',
  },
  'billing-address': {
    title: '帐单地址',
  },
  'terms': {
    title: '条款',
  },
  'payment': {
    title: '支付',
  },
})

// 通过`current`访问步骤对象
console.log(current.value.title) // 'User information'
```


## 类型

```ts
export interface UseStepperReturn<StepName, Steps, Step> {
  /**
   * 步骤列表。
   */
  steps: Readonly<Ref<Steps>>
  /**
   * 步骤名称列表。
   */
  stepNames: Readonly<Ref<StepName[]>>
  /**
   * 当前步骤的索引。
   */
  index: Ref<number>
  /**
   * 当前步骤。
   */
  current: ComputedRef<Step>
  /**
   * 下一步，如果当前步骤是最后一步，则为 undefined。
   */
  next: ComputedRef<StepName | undefined>
  /**
   * 上一步，如果当前步骤是第一步，则为 undefined。
   */
  previous: ComputedRef<StepName | undefined>
  /**
   * 当前步骤是否是第一步。
   */
  isFirst: ComputedRef<boolean>
  /**
   * 当前步骤是否是最后一步。
   */
  isLast: ComputedRef<boolean>
  /**
   * 获取指定索引的步骤。
   * @param {number} index
   * @return {Step | undefined}
   */
  at: (index: number) => Step | undefined
  /**
   * 获取指定名称的步骤。
   * @param {StepName} step
   * @return {Step | undefined}
   */
  get: (step: StepName) => Step | undefined
  /**
   * 跳转到指定步骤。
   * @param {StepName} step
   */
  goTo: (step: StepName) => void
  /**
   * 跳转到下一步。如果当前步骤是最后一步，则不执行任何操作。
   */
  goToNext: () => void
  /**
   * 跳转到上一步。如果当前步骤是第一步，则不执行任何操作。
   */
  goToPrevious: () => void
  /**
   * 返回给定步骤，仅当当前步骤在之后。
   * @param {StepName} step
   */
  goBackTo: (step: StepName) => void
  /**
   * 检查给定的步骤是否是下一步。
   * @param {StepName} step
   * @return {boolean}
   */
  isNext: (step: StepName) => boolean
  /**
   * 检查给定的步骤是否是上一步。
   * @param {StepName} step
   * @return {boolean}
   */
  isPrevious: (step: StepName) => boolean
  /**
   * 检查给定的步骤是否是当前步骤。
   * @param {StepName} step
   * @return {boolean}
   */
  isCurrent: (step: StepName) => boolean
  /**
   * 检查给定的步骤是否在当前步骤之前。
   * @param {StepName} step
   * @return {boolean}
   */
  isBefore: (step: StepName) => boolean
  /**
   * 检查给定的步骤是否在当前步骤之后。
   * @param {StepName} step
   * @return {boolean}
   */
  isAfter: (step: StepName) => boolean
}
export declare function useStepper<T extends string | number>(
  steps: MaybeRef<T[]>,
  initialStep?: T
): UseStepperReturn<T, T[], T>
export declare function useStepper<T extends Record<string, any>>(
  steps: MaybeRef<T>,
  initialStep?: keyof T
): UseStepperReturn<Exclude<keyof T, symbol>, T, T[keyof T]>
```
