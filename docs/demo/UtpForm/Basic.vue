<!-- 表单基本使用 -->
<script setup>
import { UtpForm, UtpButton, UtpInput, UtpSelect, UtpSwitch, UtpFormItem } from '@will47/utopia-ui';
import { ref, reactive } from 'vue'

// 表单ref
const formRef = ref()
// 身份选择器菜单
const identityMenu = ref([
  { label: '阿米娅', value: 'Amiya' },
  { label: '博士', value: 'doctor' },
  { label: '凯尔希', value: 'Kaltsit' },
  { label: '特蕾西娅', value: 'CivilightEterna' },
])
// 当前表单值
const model = reactive({
  email: '1234567@gmail.com',
  password: '',
  comfirmPwd: '',
  identity: '',
  protocol: false
})
// 验证规则
const rules = {
  email: [{ type: 'email', required: true, trigger: 'blur' }, { type: 'string', required: true, trigger: 'input' }],
  password: [{ type: 'string', required: true, trigger: 'blur', min: 8, max: 16 }],
  comfirmPwd: [{ type: 'string', required: true, trigger: 'blur' }, {
    validator: (rule, value) => {
      return value === model.password
    },
    trigger: 'blur',
    message: '密码不一致'
  }],
  identity: [{ type: 'string', required: true, trigger: 'blur' }],
  protocol: [{ type: 'enum', required: true, enum: [true], message: '请同意协议'}]
}
// 提交函数
const submit = async () => {
  let res = await formRef.value.validate()
    .catch((e) => {
      console.log('the error', e)
    })
  if (res) {
    console.log('passed!')
  }
}
// 重置表单函数
const reset = () => {
  formRef.value.resetFields()
  console.log('当前表单值', model)
}
// 清空验证函数
const clearValidta = () => {
  formRef.value.clearValidta()
  console.log('当前表单值', model)
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
      <utp-form-item label="Identity" prop="identity">
        <utp-select v-model="model.identity" :options="identityMenu"></utp-select>
      </utp-form-item>
      <utp-form-item label="Protocol" prop="protocol">
        <utp-switch v-model="model.protocol"></utp-switch>
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
