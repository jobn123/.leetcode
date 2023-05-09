/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = [];

  const combine = function(start, curComb) {

    if (curComb.length === k) {
      result.push([...curComb]);
      return;
    }

    for (let i = start; i <= n; i++) { 
      curComb.push(i);
      combine(i + 1, curComb);
      curComb.pop();
    }
    return;
  }

  combine(start=1, curComb=[]);
  return result;
};
// @lc code=end

