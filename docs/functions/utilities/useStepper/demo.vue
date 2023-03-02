<script setup lang="ts">
import { useStepper } from '@vueuse/core'
import { reactive } from 'vue'

const form = reactive({
  name: '',
  billingAddress: '',
  contractAccepted: false,
  carbonOffsetting: false,
  payment: 'credit-card' as 'paypal' | 'credit-card',
})

const stepper = useStepper({
  'user-information': {
    title: '用户信息',
    isValid: () => form.name,
  },
  'billing-address': {
    title: '地址',
    isValid: () => form.billingAddress?.trim() !== '',
  },
  'terms': {
    title: '条款',
    isValid: () => form.contractAccepted === true,
  },
  'payment': {
    title: '支付',
    isValid: () => ['credit-card', 'paypal'].includes(form.payment),
  },
})

function submit() {
  if (stepper.current.value.isValid())
    stepper.goToNext()
}

function allStepsBeforeAreValid(index: number): boolean {
  return !Array(index)
    .fill(null)
    .some((_, i) => !stepper.at(i)?.isValid())
}
</script>

<template>
  <div>
    <div class="flex gap-2 justify-center">
      <div v-for="(step, id, i) in stepper.steps.value" :key="id" class="">
        <button
          :disabled="!allStepsBeforeAreValid(i) && stepper.isBefore(id)"
          @click="stepper.goTo(id)"
          v-text="step.title"
        />
      </div>
    </div>

    <form class="mt-10" @submit.prevent="submit">
      <span class="text-lg font-bold" v-text="stepper.current.value.title" />
      <div class="flex flex-col justify-center gap-2 mt-2">
        <div>
          <div v-if="stepper.isCurrent('user-information')">
            <span>姓名:</span>
            <input v-model="form.name" class="!mt-0.5" type="text">
          </div>

          <div v-if="stepper.isCurrent('billing-address')">
            <input v-model="form.billingAddress" type="text">
          </div>

          <div v-if="stepper.isCurrent('terms')">
            <div>
              <input id="carbon-offsetting" v-model="form.carbonOffsetting" type="checkbox" class="mr-2">
              <label for="carbon-offsetting">我接受存入碳补偿费</label>
            </div>
            <div>
              <input id="contract" v-model="form.contractAccepted" type="checkbox" class="mr-2">
              <label for="contract">我接受合同条款</label>
            </div>
          </div>

          <div v-if="stepper.isCurrent('payment')">
            <div>
              <input id="credit-card" v-model="form.payment" type="radio" class="mr-2" value="credit-card">
              <label for="credit-card">信用卡</label>
            </div>
            <div>
              <input id="paypal" v-model="form.payment" type="radio" class="mr-2" value="paypal">
              <label for="paypal">支付宝</label>
            </div>
          </div>
        </div>

        <div>
          <button v-if="!stepper.isLast.value" :disabled="!stepper.current.value.isValid()">
            下一步
          </button>
          <button v-if="stepper.isLast.value" :disabled="!stepper.current.value.isValid()">
            提交
          </button>
        </div>
      </div>
    </form>

    <div class="flex flex-col gap-4 mt-12">
      <div class="w-full px-4 py-2 rounded border border-main space-y-2 overflow-auto h-full">
        <span class="font-bold">表单</span>
        <pre v-text="form" />
      </div>

      <div class="w-full px-4 py-2 rounded border border-main space-y-2 overflow-auto h-full">
        <span class="font-bold">Wizard</span>
        <pre v-text="stepper" />
      </div>
    </div>
  </div>
</template>
