/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let str = x.toString();
  let r = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) != str.charAt(r)) return false;

    r--
  }

  return true
};
// @lc code=end

