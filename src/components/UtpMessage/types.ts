import type { VNode } from "vue";

interface UtpMessageProps {
  message?: string | VNode,
  duration?: number,
  showClose?: boolean,
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary'
}

export type {UtpMessageProps}
