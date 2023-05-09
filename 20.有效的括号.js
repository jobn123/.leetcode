/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //  使用栈数据结构 后进先出
  let map = {"(": ")", "{": "}", "[": "]"};

  let arr = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    const last = arr[arr.length - 1];

    if (map[last] === element) {
      arr.pop();
    } else {
      arr.push(element);
    }

  }

  return arr.length === 0;
};
// @lc code=end

