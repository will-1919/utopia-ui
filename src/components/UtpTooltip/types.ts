import type { Placement, Options } from "@popperjs/core"

interface UtpTooltipProps {
  content?: string,
  trigger?: 'hover' | 'click',
  placement?: Placement,
  manual?: boolean,
  popperOptions?: Partial<Options>,
  transition?: string
}
interface UtpTooltipEmits {
  (e: 'visible-change', value: Boolean): void
}
interface TooltipInstance {
  show: () => void,
  hide: () => void
}

export type { UtpTooltipProps, UtpTooltipEmits, TooltipInstance }
