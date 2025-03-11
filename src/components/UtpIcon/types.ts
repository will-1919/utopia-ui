import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'

interface UtpIconProps extends FontAwesomeIconProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  color?: string
}

export type { UtpIconProps }
