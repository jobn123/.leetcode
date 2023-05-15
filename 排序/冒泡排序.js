const bubbleSort = (array) => {
  // 遍历n次
  for (let i = 0; i < array.length; i++) {
    // 每次遍历取最大值放到最后
    // 可以优化的点是 array.length - 1 - i;
    for (let j = 0; j < array.length - 1 - i; j++) {
      const tmp = array[j];
      
      // 交环位置
      if (tmp > array[j + 1]) {
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}
