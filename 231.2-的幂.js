/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  // 通过二进制 | 操作符判断 
  // & 两位都为1 = 1 否则为 0
  // | 两位都为0 = 0 否则为 1

  //  8 二进制  1000
  //  7 二进制  0111

  return n > 0 && (n & n - 1) === 0
};
// @lc code=end

