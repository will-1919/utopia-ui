import type { Placement, Options } from "@popperjs/core"

interface UtpTooltipProps {
  content?: string,
  trigger?: 'hover' | 'click',
  placement?: Placement,
  manual?: boolean,
  popperOptions?: Partial<Options>,
  transition?: string,
  openDelay?: number,
  closeDelay?: number
}
interface UtpTooltipEmits {
  (e: 'visible-change', value: Boolean): void
}
interface TooltipInstance {
  show: () => void,
  hide: () => void
}

export type { UtpTooltipProps, UtpTooltipEmits, TooltipInstance }
