import type { Placement } from "@popperjs/core"

interface UtpTooltipProps {
  content?: string,
  trigger?: 'hover' | 'click',
  placement?: Placement
}
interface UtpTooltipEmits {
  (e: 'visible-change', value: Boolean): void
}

export type { UtpTooltipProps, UtpTooltipEmits }
