import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import UtpButton from './UtpButton.vue'

describe('UtpButton.vue', () => {
  test('basic button', () => {
    const wrapper = mount(UtpButton, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    console.log('是否挂载成功', wrapper.html())
  })
})
