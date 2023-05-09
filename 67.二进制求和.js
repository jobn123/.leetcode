/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let len = Math.max(a.length, b.length);
  a = a.padStart(len, 0); // 小的前面补零
  b = b.padStart(len, 0);

  let str = '';
  let prefix = 0;

  for(let i = len - 1; i >= 0; i--) {
    let ai = Number(a.charAt(i)) || 0
    let bi = Number(b.charAt(i)) || 0

    let sum = ai + bi + prefix
    prefix = Math.floor(sum/2);
    str = sum % 2 + str;
  }

  if (prefix===1)  {
   str = "1" + str;
  }

  return str

};
// @lc code=end

