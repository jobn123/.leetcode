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
    
    // 左括号 直接入栈
    if (element in map) {
      arr.push(element);
    } else {
      // 右括号, 出栈对比
      if (map[arr.pop()] !== element) {
        return false
      }
    }
    
  }

  return arr.length === 0;
};
// @lc code=end

