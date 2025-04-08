<script setup>
import UtpForm from '@/components/UtpForm/UtpForm.vue'
import UtpButton from '@/components/UtpButton/UtpButton.vue'
import UtpInput from '@/components/UtpInput/UtpInput.vue'
import UtpFormItem from '@/components/UtpForm/UtpFormItem.vue'
import { ref, reactive } from 'vue'

const formRef = ref()
const model = reactive({
  email: '1111@qq.com',
  password: 'dsddwssss',
  normol: '我上早八'
})
const rules = {
  email: [{ type: 'email', required: true, trigger: 'blur' }, { type: 'string', required: true, trigger: 'input' }],
  password: [{ type: 'string', required: true, trigger: 'blur', min: 8, max: 16 }],
  normol: [{ type: 'string', required: true, trigger: 'blur', min: 4, max: 8 }]
}
const submit = async () => {
  let res = await formRef.value.validate()
    .catch((e) => {
      console.log('the error', e)
    })
  if(res) {
    console.log('passed!')
  }
}
const reset = () => {
  formRef.value.resetFields()
}
</script>

<template>
  <div>
    <utp-form ref="formRef" :model="model" :rules="rules">
      <utp-form-item label="the email" prop="email">
        <utp-input v-model="model.email"></utp-input>
      </utp-form-item>
      <utp-form-item label="the password" prop="password">
        <template #label="{ label }">
          <utp-button>{{ label }}</utp-button>
        </template>
        <utp-input v-model="model.password"></utp-input>
      </utp-form-item>
      <utp-form-item label="normol" prop="normol">
        <template #default="{ validate }">
          <input @blur="validate" type="text" v-model="model.normol">
        </template>
      </utp-form-item>
      <div>
        <utp-button type="primary" @click="submit">Submit</utp-button>
        <utp-button @click="reset">Reset</utp-button>
      </div>
    </utp-form>
    <p>
      form value
    <pre>{{ model }}</pre>
    </p>
  </div>
</template>
