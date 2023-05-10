/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 利用^特性
  // 两个位置相不同为1 否则 为 0
  // 2 ^ 1 = 3
  // 10 ^ 01 
  // 11 
  let result = 0;

  nums.forEach((num) => result ^= num);

  return result;
};
// @lc code=end

