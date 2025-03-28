import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'

interface UtpIconProps extends FontAwesomeIconProps {
  type?: 'primary' | 'success' | 'error' | 'info'
  color?: string
}

export type { UtpIconProps }
