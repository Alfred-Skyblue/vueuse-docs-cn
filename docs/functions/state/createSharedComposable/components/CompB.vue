<script lang="ts" setup>
import { useSharedMouse } from '../useSharedMouse'

const { x, y } = useSharedMouse()
</script>

<template>
  <div>
    <h4>CompB</h4>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
  </div>
</template>
