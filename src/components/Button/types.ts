import type { PropType } from 'vue'
type ButtonType = 'primary' | 'success' | 'info' | 'danger' | 'warning' // 按钮主题（颜色）
type ButtonSize = 'big' | 'middle' | 'small'

// 使用泛型写法，组件在使用的时候对于布尔值，不能简写为属性名，必须写为 :属性名="true"
// interface ButtonProps {
//   type?: ButtonType // 按钮主题颜色
//   size?: ButtonSize // 按钮大小
//   plain?: Boolean // 按钮样式
//   round?: Boolean // 椭圆按钮
//   circle?: Boolean // 圆形按钮
//   disabled?: Boolean // 是否禁用
// }
const ButtonProps = {
  type: {
    type: String as PropType<ButtonType>,
  },
  size: {
    type: String as PropType<ButtonSize>,
  },
  plain: {
    type: Boolean,
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
}

export { ButtonProps }
