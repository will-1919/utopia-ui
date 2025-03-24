import { omit } from "lodash-es";
import type { VNode, ComponentInternalInstance } from "vue";

interface UtpMessageProps {
  message?: string | VNode,
  duration?: number,
  showClose?: boolean,
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary',
  offset?: number,
  onDestory: () => void,
  id: string
}
type CreateUtpMessageProps =  Omit<UtpMessageProps, 'onDestory' | 'id'>
interface MessageContext {
  id: string,
  vnode: VNode,
  vm: ComponentInternalInstance,
  props: UtpMessageProps
}

export type {UtpMessageProps, CreateUtpMessageProps, MessageContext}
