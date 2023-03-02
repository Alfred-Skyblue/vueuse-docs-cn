<script setup lang="ts">
import { ref } from 'vue'
import { useEventBus } from '@vueuse/core'

const { on, emit } = useEventBus<string>('vue-use-event-bus')
const message = ref('')
const news = [
  '我喜欢使用vueuse',
  'javascript 是最好的语言',
  '130名中风专家接种疫苗后：与疫苗无关',
  '中国在奥运会跳水和举重比赛中获得两枚金牌',
  '东京奥运挑动运动员睡纸箱吃罐头，回顾北京奥运神级安排',
]
on(_message => message.value = news[Math.floor(Math.random() * news.length)])
</script>

<template>
  <div style="display: flex; gap: 100px;">
    <div>
      <div class="whitespace-nowrap">
        新闻频道:
      </div>
      <button class="whitespace-nowrap" @click="emit('开始了')">
        播送
      </button>
    </div>
    <div>
      <div style="margin-bottom: 13px;">
        电视:
      </div>
      <div>{{ message || '--- no signal ---' }}</div>
    </div>
  </div>
</template>
