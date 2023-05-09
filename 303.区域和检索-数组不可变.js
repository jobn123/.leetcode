/*
 * @Author: ZhouBin
 * @Version: 1.0
 * @Date: 2022-02-11 22:14:16
 * @FilePath: /.leetcode/303.区域和检索-数组不可变.js
 * @LastEditTime: 2022-02-12 12:35:05
 * Copyright (C) 2022 Honnverse. All rights reserved.
 * @Description: 
 * @LastEditors: ZhouBin
 */
/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// 创建一个数组存放原数组中每项累加的和
// 然后用减法直接得出结果 sumRange(left,right)=sums[right+1]−sums[left]。


// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.prenums = new Array(nums.length+1).fill(0);
  
  for(let i = 0; i < nums.length; i++) {
    this.prenums[i+1] = this.prenums[i] + nums[i];
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.prenums[right + 1] - this.prenums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

