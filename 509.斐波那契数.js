/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const cache = {};

var fib = function(n) {
  
  if (n <= 1) return n;

  if (cache[n]) return cache[n];

  cache[n] = fib(n - 1 ) + fib(n - 2);
  return cache[n];
};

// var helper = function(n) {
  
// }
// @lc code=end

