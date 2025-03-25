import { render, h, shallowReactive } from 'vue'
import type { CreateUtpMessageProps, MessageContext } from './types'
import UtpMessage from './UtpMessage.vue'
import useZIndex from '@/hooks/useZIndex'

let seed: number = 0
const instances: MessageContext[] = shallowReactive([]) // shallowReactive不会监听深层次的，只会监听数组
// 生成消息组件--------------------------------------------------------
const createMessage = (props: CreateUtpMessageProps) => {
  const { initialZIndex, nextZindex } = useZIndex()
  seed++
  const id = `utp_message_${seed}`
  const container = document.createElement('div')
  // 手动删除
  const manualDestroy = () => {
    const instance = instances.find((item) => {
      return item.id === id
    })
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }
  const destory = () => {
    // 删除数组中的实例
    const index = instances.findIndex((item) => {
      return item.id === id
    })
    if (index === -1) {
      return
    }
    instances.splice(index, 1)
    // 删除dom中的实例
    render(null, container)
  }
  const newProps = {
    ...props,
    id: id,
    onDestory: destory,
    zIndex: nextZindex(),
  }
  const vnode = h(UtpMessage, newProps)
  render(vnode, container)
  // !为非空断言操作符，代表firstElementChild不是null或者undifined
  document.body.appendChild(container.firstElementChild!)
  const instance: MessageContext = {
    id: id,
    props: newProps,
    vm: vnode.component!,
    vnode: vnode,
    destory: manualDestroy,
  }
  instances.push(instance)
  return instance
}

// 获取已经生成的最后一个消息组件的实例--------------------------------------------
const getLastInstance = () => {
  return instances.length > 0 ? instances[instances.length - 1] : undefined
}
// 获取上一个组件的底部位置-------------------------------------------------------
const getLastBottomOffset = (id: string) => {
  const index = instances.findIndex((item) => {
    return item.id === id
  })
  if (index <= 0) {
    return 0
  } else {
    return instances[index - 1].vm.exposed!.bottomOffset.value
  }
}
// 关闭所有实例
const closeAll = () => {
  instances.forEach((item) => {
    item.destory()
  })
}

export { createMessage, getLastInstance, getLastBottomOffset, closeAll }
