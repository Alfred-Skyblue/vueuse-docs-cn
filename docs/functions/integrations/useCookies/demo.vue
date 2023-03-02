<script setup lang="ts">
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['locale'])
</script>

<template>
  <p>
    <strong>Cookies Value</strong>: {{ cookies.get('locale') || 'unknown' }}
  </p>
  <pre class="ml-2">{{ JSON.stringify(cookies.getAll(), null, 2) }}</pre>
  <br>
  <note>Change to</note>
  <button @click="cookies.set('locale', 'zh-CN')">
    简体中文
  </button>
  <button @click="cookies.set('locale', 'en-US')">
    English
  </button>
</template>
