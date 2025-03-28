import type { PropType } from 'vue'
type ButtonType = 'primary' | 'success' | 'info' | 'danger' | 'warning' | 'text' // 按钮主题（颜色）
type ButtonSize = 'big' | 'middle' | 'small'
type NativeType = 'button' | 'submit' | 'reset'

// 使用泛型写法，组件在使用的时候对于布尔值，不能简写为属性名，必须写为 :属性名="true"
// interface ButtonProps {
//   type?: ButtonType // 按钮主题颜色
//   size?: ButtonSize // 按钮大小
//   plain?: Boolean // 按钮样式
//   round?: Boolean // 椭圆按钮
//   circle?: Boolean // 圆形按钮
//   disabled?: Boolean // 是否禁用
// }
interface ButtonProps {
  type?: ButtonType,
  nativeType?: NativeType,
  size?: ButtonSize,
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  disabled?: boolean,
  autofocus?: boolean,
  icon?: string,
  loading?: boolean
}
// 组件承接的参数
const ButtonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary',
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'middle',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
}
// 组件对外暴露属性类型
interface ButtonInstance {
  ref: HTMLButtonElement
}

export type { ButtonInstance, ButtonProps }
// export { ButtonProps }
