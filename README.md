# VueUse

本文档是社区翻译的中文文档，非官方文档，仅供参考，如有错误，欢迎指正。

如需查询官方文档，请访问 [vueuse](https://vueuse.org/) 。


## 介绍

VueUse 是一个 Vue 3 的实用函数库，它提供了一些常用的功能，以便您可以在 Vue 3 中更轻松地使用它们。

## 安装

```bash

npm i @vueuse/core

```

## 用法

```ts
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
```
