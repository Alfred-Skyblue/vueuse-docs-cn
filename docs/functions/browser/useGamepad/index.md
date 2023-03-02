# useGamepad

响应式操作 [`Gamepad API`](https://developer.mozilla.org/zh-CN/docs/Web/API/Gamepad_API).
Gamepad API 可以给予开发者一种简单、统一的方式来识别并响应游戏控制器（手柄）。其中包含了三个接口、两个事件、一个特殊函数，用来响应控制器的连接与断开、获取其他关于控制器的信息以及识别当前是哪个按键或是哪个控制器被按下了。

## 演示

### 基础使用

<demo src="./demo.vue" title="useGamepad" desc="操作游戏控制器"></demo>

## 用法

> 由于 Gamepad API 的工作方式，您必须使用游戏手柄与页面进行交互，然后才会被检测到。

```vue
<script setup>
import { useGamepad } from '@vueuse/core'

const { isSupported, gamepads } = useGamepad()
const gamepad = computed(() => gamepads.find(g => g.mapping === 'standard'))
</script>

<template>
  <span>
    {{ gamepad.id }}
  </span>
</template>
```

### 手柄更新

目前 `Gamepad API` 不支持更新游戏手柄状态的事件。更新游戏手柄状态，`requestAnimationFrame` 用于轮询游戏手柄更改。您可以使用 `pause` 和 `resume` 提供的功能来控制此轮询 `useGamepad`

```ts
const { pause, resume, gamepads } = useGamepad()

pause()

// 游戏手柄对象不会更新

resume()

// 游戏手柄对象将根据用户输入更新
```

### 手柄连接和断开连接事件

`onConnected` 和 `onDisconnected` 事件将在手柄连接或断开连接时触发。

```ts
const { gamepads, onConnected, onDisconnected } = useGamepad()

onConnected((index) => {
  console.log(`${gamepads.value[index].id} connected`)
})

onDisconnected((index) => {
  console.log(`${index} disconnected`)
})
```

### 振动

> Gamepad Haptics API 存在兼容性问题，因此在使用前检查[兼容性表](https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator#browser_compatibility)。

```ts
const supportsVibration = computed(() => gamepad.hapticActuators.length > 0)
const vibrate = () => {
  if (supportsVibration.value) {
    const actuator = gamepad.hapticActuators[0]
    actuator.playEffect('dual-rumble', {
      startDelay: 0,
      duration: 1000,
      weakMagnitude: 1,
      strongMagnitude: 1,
    })
  }
}
```

### 映射

为了使 `Gamepad API` 更易于使用，我们提供映射以将控制器映射到控制器按钮布局。

```vue
<script setup>
import { mapGamepadToXbox360Controller } from '@vueuse/core'

const controller = mapGamepadToXbox360Controller(gamepad)
</script>

<template>
  <span>{{ controller.buttons.a.pressed }}</span>
  <span>{{ controller.buttons.b.pressed }}</span>
  <span>{{ controller.buttons.x.pressed }}</span>
  <span>{{ controller.buttons.y.pressed }}</span>
</template>
```

目前只有 Xbox 360 控制器的映射。如果您有想要为其添加映射的控制器，请随时提交 PR 以获取更多控制器映射！

## 类型

```ts
export interface UseGamepadOptions extends ConfigurableWindow, ConfigurableNavigator {}
/**
 * 将标准标准游戏手柄映射到 Xbox 360 控制器。
 */
export declare function mapGamepadToXbox360Controller(gamepad: Ref<Gamepad | undefined>): ComputedRef<{
  buttons: {
    a: GamepadButton
    b: GamepadButton
    x: GamepadButton
    y: GamepadButton
  }
  bumper: {
    left: GamepadButton
    right: GamepadButton
  }
  triggers: {
    left: GamepadButton
    right: GamepadButton
  }
  stick: {
    left: {
      horizontal: number
      vertical: number
      button: GamepadButton
    }
    right: {
      horizontal: number
      vertical: number
      button: GamepadButton
    }
  }
  dpad: {
    up: GamepadButton
    down: GamepadButton
    left: GamepadButton
    right: GamepadButton
  }
  back: GamepadButton
  start: GamepadButton
} | null>
export declare function useGamepad(options?: UseGamepadOptions): {
  isSupported: Ref<boolean>
  onConnected: EventHookOn<number>
  onDisconnected: EventHookOn<number>
  gamepads: Ref<
        {
          readonly axes: readonly number[]
          readonly buttons: readonly {
            readonly pressed: boolean
            readonly touched: boolean
            readonly value: number
          }[]
          readonly connected: boolean
          readonly hapticActuators: readonly {
            readonly type: 'vibration'
          }[]
          readonly id: string
          readonly index: number
          readonly mapping: GamepadMappingType
          readonly timestamp: number
        }[]
    >
  pause: Fn
  resume: Fn
  isActive: Readonly<Ref<boolean>>
}
export type UseGamepadReturn = ReturnType<typeof useGamepad>
```
