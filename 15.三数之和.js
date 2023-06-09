/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  // 过滤异常情况
  if (nums && nums.length < 3) return ans

  // 排序
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    // 去重
    if(i > 0 && nums[i] == nums[i-1]) continue; 

    // 左指针
    let l = i + 1;
    // 右指针
    let r = nums.length - 1;
    
    let sum = 0;

    while (l < r) { 
      sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        ans.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return ans;
};
// @lc code=end

