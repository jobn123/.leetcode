// 随机找一个基准位对比, 小的放左边 大的放右边 然后递归
const quicksort = (arr) => {

  if (arr.length < 2) {
    return arr
  }

  const left = [];
  const right = [];
  const rand = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    
    if (element < rand) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  return quicksort(left).concat(rand, quicksort(right));
}