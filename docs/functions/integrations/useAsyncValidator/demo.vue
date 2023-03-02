<script setup lang="ts">
import { reactive } from 'vue'
import type { Rules } from 'async-validator'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'

const form = reactive({ email: '', name: '', age: '' })
const rules: Rules = {
  name: {
    type: 'string',
    min: 5,
    max: 20,
    required: true,
    message: '姓名不能为空',
  },
  age: {
    type: 'number',
    required: true,
    message: '年龄不能为空',
  },
  email: [
    {
      type: 'email',
      required: true,
      message: '邮箱不能为空',
    },
  ],
}

const { pass, isFinished, errorFields } = useAsyncValidator(form, rules)
</script>

<template>
  <div>
    通过:
    <BooleanDisplay :value="pass" />
  </div>
  <div>
    已完成:
    <BooleanDisplay :value="isFinished" />
  </div>

  <div class="bg-base border-main rounded shadow max-w-96 p-8">
    <div>
      电子邮件:
      <input
        v-model="form.email"
        :class="{ '!border-red': errorFields?.email?.length }"
        type="text"
        placeholder="email"
      >
      <div v-if="errorFields?.email?.length" text-red>
        {{ errorFields.email[0].message }}
      </div>
    </div>
    <div>
      姓名:
      <input
        v-model="form.name"
        :class="{ '!border-red': errorFields?.name?.length }"
        type="text"
        placeholder="name"
      >
      <div v-if="errorFields?.name?.length" text-red>
        {{ errorFields.name[0].message }}
      </div>
    </div>
    <div>
      年龄:
      <input
        v-model="form.age"
        :class="{ '!border-red': errorFields?.age?.length }"
        type="number"
        placeholder="age"
      >
      <div v-if="errorFields?.age?.length" text-red>
        {{ errorFields.age[0].message }}
      </div>
    </div>
    <button :disabled="!pass">
      提交
    </button>
  </div>
</template>
