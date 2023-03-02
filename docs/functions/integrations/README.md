# @vueuse/integrations

> 这是 [VueUse](https://github.com/vueuse/vueuse) 的附加组件，为第三方库提供集成包装器。

## 安装

```bash
npm i @vueuse/integrations
```

## 功能

- [`useAsyncValidator`](https://vueuse.org/integrations/useAsyncValidator/) — 包装器 [`async-validator`](https://github.com/yiminghe/async-validator)
- [`useAxios`](https://vueuse.org/integrations/useAxios/) — 包装器 [`axios`](https://github.com/axios/axios)
- [`useChangeCase`](https://vueuse.org/integrations/useChangeCase/) — 响应式包装器 [`change-case`](https://github.com/blakeembrey/change-case)
- [`useCookies`](https://vueuse.org/integrations/useCookies/) — 包装器 [`universal-cookie`](https://www.npmjs.com/package/universal-cookie)
- [`useDrauu`](https://vueuse.org/integrations/useDrauu/) — 响应式包装器 [drauu](https://github.com/antfu/drauu)
- [`useFocusTrap`](https://vueuse.org/integrations/useFocusTrap/) — 响应式包装器 [`focus-trap`](https://github.com/focus-trap/focus-trap)
- [`useFuse`](https://vueuse.org/integrations/useFuse/) — 使用组合式 API 轻松实现模糊搜索 [Fuse.js](https://github.com/krisk/fuse)
- [`useIDBKeyval`](https://vueuse.org/integrations/useIDBKeyval/) — 包装器 [`idb-keyval`](https://www.npmjs.com/package/idb-keyval)
- [`useJwt`](https://vueuse.org/integrations/useJwt/) — 包装器 [`jwt-decode`](https://github.com/auth0/jwt-decode)
- [`useNProgress`](https://vueuse.org/integrations/useNProgress/) — 响应式包装器 [`nprogress`](https://github.com/rstacruz/nprogress)
- [`useQRCode`](https://vueuse.org/integrations/useQRCode/) — 包装器 [`qrcode`](https://github.com/soldair/node-qrcode)

## 按需引入

为了获得更好的 tree-shaking，从子模块导入函数，例如：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

// Don't
import { useAxios } from '@vueuse/integrations'
```
