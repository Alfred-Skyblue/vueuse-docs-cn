# useAsyncValidator

对[`async-validator`](https://github.com/yiminghe/async-validator)的响应式包装，在[@vueuse/integrations](https://vueuse.org/integrations/README)附加组件中可用。

## 演示

<demo src="./demo.vue" title="useAsyncValidator" desc=""></demo>

## 安装

```bash
npm i async-validator
```

## 使用

```ts
import { useAsyncValidator } from "@vueuse/integrations/useAsyncValidator";
```

## 类型

```ts
export type AsyncValidatorError = Error & {
  errors: ValidateError[];
  fields: Record<string, ValidateError[]>;
};
export interface UseAsyncValidatorReturn {
  pass: Ref<boolean>;
  errorInfo: Ref<AsyncValidatorError | null>;
  isFinished: Ref<boolean>;
  errors: Ref<AsyncValidatorError["errors"] | undefined>;
  errorFields: Ref<AsyncValidatorError["fields"] | undefined>;
}
export interface UseAsyncValidatorOptions {
  /**
   * @see https://github.com/yiminghe/async-validator#options
   */
  validateOption?: ValidateOption;
  /**
   * 验证将在第一次时立即触发。仅在 `manual` 未设置为 true 时有效。
   *
   * @default true
   */
  immediate?: boolean;
  /**
   * 如果设置为 true，将不会自动触发验证。
   */
  manual?: boolean;
}
/**
 * async-validator 包装器
 *
 * @see https://vueuse.org/useAsyncValidator
 * @see https://github.com/yiminghe/async-validator
 */
export declare function useAsyncValidator(
  value: MaybeComputedRef<Record<string, any>>,
  rules: MaybeComputedRef<Rules>,
  options?: UseAsyncValidatorOptions
): UseAsyncValidatorReturn & PromiseLike<UseAsyncValidatorReturn>;
```
