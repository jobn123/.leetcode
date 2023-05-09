/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const nrows = dungeon.length;
  const ncols = dungeon[0].length;

  const dp = [];
  for (let i = 0; i < nrows + 1; i++) {
    dp[i] = [];
    for (let j = 0; j < ncols + 1; j++) {
      dp[i][j] = Number.MAX_SAFE_INTEGER;
    }
  }
  dp[nrows - 1][ncols] = dp[nrows][ncols-1] = 1;

  for (let k = nrows - 1; k >= 0; k--) {
    for (let l = ncols - 1; l >= 0; l--) {
      dp[k][l] = Math.max(1, Math.min(dp[k + 1][l], dp[k][l + 1]) - dungeon[k][l]);
    }
  }
  return dp[0][0];
};
// @lc code=end

