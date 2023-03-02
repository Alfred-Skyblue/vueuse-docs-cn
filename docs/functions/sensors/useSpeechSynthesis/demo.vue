<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSpeechSynthesis } from '@vueuse/core'

const voice = ref<SpeechSynthesisVoice>(undefined as unknown as SpeechSynthesisVoice)
const text = ref('Hello, everyone! Good morning!')

const speech = useSpeechSynthesis(text, {
  voice,
})

let synth: SpeechSynthesis

const voices = ref<SpeechSynthesisVoice[]>([])

onMounted(() => {
  if (speech.isSupported.value) {
  // load at last
    setTimeout(() => {
      synth = window.speechSynthesis
      voices.value = synth.getVoices()
      voice.value = voices.value[0]
    })
  }
})

const play = () => {
  if (speech.status.value === 'pause') {
    console.log('resume')
    window.speechSynthesis.resume()
  }
  else {
    speech.speak()
  }
}

const pause = () => {
  window.speechSynthesis.pause()
}

const stop = () => {
  speech.stop()
}
</script>

<template>
  <div>
    <div v-if="!speech.isSupported">
      您的浏览器不支持 SpeechSynthesis API，
      <a
        href="https://caniuse.com/mdn-api_speechsynthesis"
        target="_blank"
      >更多细节</a>
    </div>
    <div v-else>
      <label class="font-bold mr-2">语音文本</label>
      <input v-model="text" class="!inline-block" type="text">

      <br>
      <label class="font-bold mr-2">语言</label>
      <div bg="$vp-c-bg" border="$vp-c-divider-light 1" inline-flex items-center relative rounded>
        <i i-carbon-language absolute left-2 opacity-80 pointer-events-none />
        <select v-model="voice" px-8 border-0 bg-transparent h-9 rounded appearance-none>
          <option bg="$vp-c-bg" disabled>
            选择语言
          </option>
          <option
            v-for="(voice, i) in voices"
            :key="i"
            bg="$vp-c-bg"
            :value="voice"
          >
            {{ `${voice.name} (${voice.lang})` }}
          </option>
        </select>
        <i i-carbon-chevron-down absolute right-2 opacity-80 pointer-events-none />
      </div>

      <div class="mt-2">
        <button
          :disabled="speech.isPlaying.value"
          @click="play"
        >
          {{ speech.status.value === 'pause' ? 'Resume' : 'Speak' }}
        </button>
        <button :disabled="!speech.isPlaying.value" class="orange" @click="pause">
          暂停
        </button>
        <button :disabled="!speech.isPlaying.value" class="red" @click="stop">
          停止
        </button>
      </div>
    </div>
  </div>
</template>
