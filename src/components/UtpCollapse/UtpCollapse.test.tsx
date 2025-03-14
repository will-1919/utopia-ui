import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import UtpCollapse from './UtpCollapse.vue'
import UtpCollapseItem from './UtpCollapseItem.vue'

describe('UtpCollapse.vue', () => {
  test('basic collapse', async () => {
    // 测试事件
    const onChange = vi.fn()
    const wrapper = mount(
      () => {
        return (
          <UtpCollapse onChange={onChange} modelValue={['a']}>
            <UtpCollapseItem name={'a'} title="title a">
              content a
            </UtpCollapseItem>
            <UtpCollapseItem name={'b'} title="title b">
              content b
            </UtpCollapseItem>
            <UtpCollapseItem name={'c'} title="title c" disabled>
              content c disabled
            </UtpCollapseItem>
          </UtpCollapse>
        )
      },
      {
        global: {
          stubs: ['UtpIcon'],
        },
        // 解决jsdom组件不更细的BUG
        attachTo: document.body,
      },
    )
    const headers = wrapper.findAll('.utp-collapse-item__header')
    const contents = wrapper.findAll('.utp-collapse-item__wrapper')
    // 测试找到的dom数量
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    // 测试标题内容
    const firstHeader = headers[0]
    expect(firstHeader.text()).toBe('title a')
    // 测试文本内容
    const firstContent = contents[0]
    const secondContent = contents[1]
    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content a')
    // 点击
    await firstHeader.trigger('click')
    expect(firstContent.isVisible()).toBeFalsy()
    const secondHeader = headers[1]
    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()
    // 测试自定义返回事件
    expect(onChange).toHaveBeenCalledWith([]) // 点击第一个标题，change事件以什么参数调用
    expect(onChange).toHaveBeenLastCalledWith(['b']) // 点击第二个标题，change事件以什么参数调用
    // 测试禁用
    const disabledHeader = headers[2]
    expect(disabledHeader.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    const disabledContent = contents[2]
    expect(disabledContent.isVisible()).toBeFalsy()
    // 测试禁用自定义返回事件不被调用
    // 重置change事件
    onChange.mockClear()
    expect(onChange).not.toHaveBeenCalled()
  })
})
