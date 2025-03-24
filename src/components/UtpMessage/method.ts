import { render, h, shallowReactive } from 'vue'
import type { CreateUtpMessageProps, MessageContext } from './types'
import UtpMessage from './UtpMessage.vue'

let seed: number = 0
const instances: MessageContext[] = shallowReactive([]) // shallowReactive不会监听深层次的，只会监听数组
// 生成消息组件--------------------------------------------------------
const createMessage = (props: CreateUtpMessageProps) => {
  seed++
  const id = `utp_message_${seed}`
  const container = document.createElement('div')
  const destory = () => {
    // 删除数组中的实例
    const index = instances.findIndex((item) => {
      return item.id === id
    })
    if(index === -1) {
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
  }
  const vnode = h(UtpMessage, newProps)
  render(vnode, container)
  // !为非空断言操作符，代表firstElementChild不是null或者undifined
  document.body.appendChild(container.firstElementChild!)
  const instance: MessageContext = {
    id: id,
    props: newProps,
    vm: vnode.component!,
    vnode: vnode
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
  if(index <= 0) {
    return 0
  } else {
    return instances[index - 1].vm.exposed!.bottomOffset.value
  }
}

export { createMessage, getLastInstance, getLastBottomOffset }
