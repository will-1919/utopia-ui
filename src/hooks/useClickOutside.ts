// 点击组件外关闭函数
import type { Ref } from "vue"
import { onMounted, onUnmounted } from "vue"
const useClickOutside = (elementRef: Ref<undefined | HTMLElement>, callBack: (e: MouseEvent) => void) => {
  const handler = (e: MouseEvent) => {
    if(elementRef.value && e.target) {
      // contains函数为判断一个dom节点包含不包含另一个dom节点
      if(!elementRef.value.contains(e.target as HTMLElement)) {
        callBack(e)
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}
export default useClickOutside
