import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import UtpButton from './UtpButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import UtpIcon from '../UtpIcon/UtpIcon.vue'

describe('UtpButton.vue', () => {
  test('basic button', () => {
    const wrapper = mount(UtpButton, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'myButton'
      }
    })
    // console.log('是否挂载成功', wrapper.html())
    expect(wrapper.classes()).toContain('utp-button--primary') // 检查存在的Clsaa是否被包含
    // get(); find() 都会返回新的wrapper， get()如果找不到会直接抛出，find()不会中断，用于检查某个元素是否存在
    expect(wrapper.get('button').text()).toBe('myButton')
    // 测试事件
    wrapper.get('button').trigger('click')
    // console.log('触发的事件', wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('disabled', () => {
    const wrapper = mount(UtpButton, {
      props: {
        disabled: true
      },
      slots: {
        default: 'myButtonDisabled'
      }
    })
    // 判断是否有禁用属性, toBeDefined()确定属性是否存在
    expect(wrapper.attributes('disabled')).toBeDefined()
    // 判断属性另一种方法
    expect(wrapper.find('button').element.disabled).toBeDefined()
    // 测试禁用状态会不会触发事件
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('icon', () =>{
    const wrapper = mount(UtpButton, {
      props: {
        icon: 'arrow-up'
      },
      slots: {
        default: 'icon'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    // console.log('图标', wrapper.html())
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    expect(iconElement.exists()).toBeTruthy() // 判断组件是否存在
    expect(iconElement.attributes('icon')).toBe('arrow-up') // 检查属性
  })
  test('loading', () =>{
    const wrapper = mount(UtpButton, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading'
      },
      global: {
        stubs: ['UtpIcon']
      }
    })
    console.log('loading', wrapper.html())
    const iconElement = wrapper.findComponent(UtpIcon)
    expect(iconElement.exists()).toBeTruthy() // 判断组件是否存在
    expect(iconElement.attributes('icon')).toBe('spinner') // 检查属性
    // 检查禁用状态
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
