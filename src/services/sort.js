export function bubbleSort (arr) {
  let len = arr.length
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

export default function selectionSort (arr) {
  let minIdx
  let temp
  let len = arr.length
  for (let i = 0; i < len; i++) {
    minIdx = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = temp
  }
  return arr
}
