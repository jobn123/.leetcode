/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  // 沿对角线镜像对称二维矩阵
  for(let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // 然后反转二维矩阵的每一行
  for(let k = 0; k < matrix.length; k++) {

    const row = matrix[k];

    // 反转一维数组
    let i = 0, j = row.length - 1;
    while (j > i) {
      const temp = row[i];
      row[i] = row[j];
      row[j] = temp;
      i++;
      j--;
    }
  }
};
// @lc code=end

