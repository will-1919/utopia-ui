import { ref, computed } from "vue";

const zIndex = ref<number>(0)
const  useZIndex = (initialValue: number = 2000) => {
  // 初始的zIndex值，初始值为接收的参数，也可以使用过程中手动改变
  const initialZIndex = ref<number>(initialValue)
  // 当前返回的zIndex，即当前组件需要的zIndex
  const currentZIndex = computed(() => {
    return zIndex.value + initialZIndex.value
  })
  // 生成下一组件的zIndex
  const nextZindex = () => {
    zIndex.value++
    return currentZIndex.value
  }
  return {nextZindex, currentZIndex, initialZIndex}
}

export default useZIndex
