<script setup>
import UtpForm from '@/components/UtpForm/UtpForm.vue'
import UtpButton from '@/components/UtpButton/UtpButton.vue'
import UtpInput from '@/components/UtpInput/UtpInput.vue'
import UtpFormItem from '@/components/UtpForm/UtpFormItem.vue'
</script>

<template>
  <div>
    <utp-form>
      <utp-form-item label="the email">
        <utp-input></utp-input>
      </utp-form-item>
      <utp-form-item label="the text">
        <template #label="{ label }">
          <utp-button>{{ label }}</utp-button>
        </template>
        <utp-input></utp-input>
      </utp-form-item>
      <div>
        <utp-button type="primary">Submit</utp-button>
        <utp-button>Reset</utp-button>
      </div>
    </utp-form>
  </div>
</template>
