// 这个实现使用了左侧元素作为基准点（pivot），并且在每次交换元素时，总是让左指针先走。当左指针遇到的元素大于基准点，右指针遇到的元素小于基准点时，它们交换位置。最后，指针重合时，将基准点换到该位置，然后递归调用 quickSort 函数对基准点左右两边的子数组进行排序。

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  const pivot = arr[left];
  let i = left + 1;
  let j = right;
  while (i <= j) {
    if (arr[i] <= pivot) {
      i++;
      continue;
    }
    if (arr[j] >= pivot) {
      j--;
      continue;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[left], arr[j]] = [arr[j], arr[left]];
  quickSort(arr, left, j - 1);
  quickSort(arr, j + 1, right);
  return arr;
}