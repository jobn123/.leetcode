/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    // 防止left和right太大直接相加导致溢出
    const middle = Math.ceil(left + (right - left) / 2);
    const middleValue = nums[middle];

    if (middleValue === target) {
      return middle;
    } else if (middleValue < target) {
      left = middle + 1;
    } else if (middleValue > target) {
      right = middle - 1;
    }
  }

  return -1;
};
// @lc code=end

