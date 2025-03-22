import { omit } from "lodash-es";
import type { VNode } from "vue";

interface UtpMessageProps {
  message?: string | VNode,
  duration?: number,
  showClose?: boolean,
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary'
  onDestory: () => void
}
type CreateUtpMessageProps =  Omit<UtpMessageProps, 'onDestory'>
interface MessageContext {
  id: string,
  vnode: VNode,
  props: UtpMessageProps
}

export type {UtpMessageProps, CreateUtpMessageProps, MessageContext}
