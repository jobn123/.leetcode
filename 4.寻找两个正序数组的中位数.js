/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);

  let len = arr.length
  let medium = len / 2;

  if (len % 2 === 0) {
    return (arr[medium - 1] + arr[medium]) / 2;
  }

  return arr[Math.floor(medium)];
};
// @lc code=end

