<script setup>
import UtpForm from '@/components/UtpForm/UtpForm.vue'
import UtpButton from '@/components/UtpButton/UtpButton.vue'
import UtpInput from '@/components/UtpInput/UtpInput.vue'
import UtpFormItem from '@/components/UtpForm/UtpFormItem.vue'
import { ref, reactive } from 'vue'

const formRef = ref()
const model = reactive({
  email: '1234567@gmail.com',
  password: '',
  comfirmPwd: ''
})
const rules = {
  email: [{ type: 'email', required: true, trigger: 'blur' }, { type: 'string', required: true, trigger: 'input' }],
  password: [{ type: 'string', required: true, trigger: 'blur', min: 8, max: 16 }],
  comfirmPwd: [{ type: 'string', required: true, trigger: 'blur' }, {
    validator: (rule, value) => {
      return value === model.password
    },
    trigger: 'blur',
    message: '密码不一致'
  }]
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
const clearValidta = () => {
  formRef.value.clearValidta()
}
</script>

<template>
  <div>
    <utp-form ref="formRef" :model="model" :rules="rules">
      <utp-form-item label="Email" prop="email">
        <utp-input v-model="model.email"></utp-input>
      </utp-form-item>
      <utp-form-item label="Password" prop="password">
        <template #label="{ label }">
          {{ label }}
        </template>
        <utp-input v-model="model.password" type="password" showPassword></utp-input>
      </utp-form-item>
      <utp-form-item label="Repeat password" prop="comfirmPwd">
        <utp-input v-model="model.comfirmPwd" type="password" showPassword></utp-input>
      </utp-form-item>
      <br>
      <div>
        <utp-button type="primary" @click="submit">提交</utp-button>
        <utp-button type="text" @click="reset">初始化表单</utp-button>
        <utp-button type="text" @click="clearValidta">清除验证</utp-button>
      </div>
    </utp-form>
  </div>
</template>
