/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   if (n <= 2) return n;
//   let dp = [1, 2];

//   for (let i = 2; i < n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n - 1];
// };

var climbStairs = function (n) {
  if (n <= 2) return n;
  let dp = [1, 2];
  const fib = (n) => { 
    if (n <= 2) return n;
    if (dp[n] !== undefined) return dp[n];
    dp[n] = fib(n - 1) + fib(n - 2);
    return dp[n];
  }
  
  return dp[n - 1];
};

// @lc code=end