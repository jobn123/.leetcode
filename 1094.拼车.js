/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  // [1, 2) -> [1, 1]
  let diff = new Array(1002).fill(0);
  let sum = 0;
  for (let [n, s, e] of trips) {
    diff[s] += n;
    diff[e] -= n; // e - 1 + 1
  }
  for (let i = 0; i < diff.length; i++) {
    sum += diff[i];
    if (sum > capacity) return false;
  }
  return true;
};
// @lc code=end