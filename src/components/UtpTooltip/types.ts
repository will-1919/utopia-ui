import type { Placement } from "@popperjs/core"

interface UtpTooltipProps {
  content?: string,
  trigger?: 'hover' | 'click',
  placement?: Placement,
  manual?: boolean
}
interface UtpTooltipEmits {
  (e: 'visible-change', value: Boolean): void
}
interface TooltipInstance {
  show: () => void,
  hide: () => void
}

export type { UtpTooltipProps, UtpTooltipEmits, TooltipInstance }
