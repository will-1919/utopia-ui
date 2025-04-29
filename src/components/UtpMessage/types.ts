import { omit } from 'lodash-es'
import type { VNode, ComponentInternalInstance } from 'vue'

interface UtpMessageProps {
  message?: string | VNode
  duration?: number
  showClose?: boolean
  type?: 'success' | 'info' | 'error' | 'primary'
  offset?: number
  onDestory: () => void
  id: string
  zIndex: number
  transitionName?: string
}
type CreateUtpMessageProps = Omit<UtpMessageProps, 'onDestory' | 'id' | 'zIndex'>
interface MessageContext {
  id: string
  vnode: VNode
  vm: ComponentInternalInstance
  props: UtpMessageProps
  destory: () => void
}

export type { UtpMessageProps, CreateUtpMessageProps, MessageContext }
