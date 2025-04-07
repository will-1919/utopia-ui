<script setup>
import UtpForm from '@/components/UtpForm/UtpForm.vue'
import UtpButton from '@/components/UtpButton/UtpButton.vue'
import UtpInput from '@/components/UtpInput/UtpInput.vue'
import UtpFormItem from '@/components/UtpForm/UtpFormItem.vue'
import { ref, reactive } from 'vue'

const model = reactive({
  email: '',
  password: ''
})
const rules = {
  email: [{ type: 'string', required: true, trigger: 'blur' }],
  password: [{ type: 'string', required: true, trigger: 'blur' }]
}
</script>

<template>
  <div>
    <utp-form :model="model" :rules="rules">
      <utp-form-item label="the email" prop="email">
        <utp-input v-model="model.email"></utp-input>
      </utp-form-item>
      <utp-form-item label="the password" prop="password">
        <template #label="{ label }">
          <utp-button>{{ label }}</utp-button>
        </template>
        <utp-input v-model="model.password"></utp-input>
      </utp-form-item>
      <div>
        <utp-button type="primary">Submit</utp-button>
        <utp-button>Reset</utp-button>
      </div>
    </utp-form>
    <p>
      form value
      <pre>{{ model }}</pre>
    </p>
  </div>
</template>
