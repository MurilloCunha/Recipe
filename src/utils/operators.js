export const debounceTime = (milliseconds, fn) => {
  console.log(fn,milliseconds)
  let timer = 0
  return () => {
    clearTimeout(timer)
    timer = setTimeout(fn,milliseconds)
  }
}