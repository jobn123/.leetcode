
/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  const seq = [];
    for (const booking of bookings) {
        const [i, j, k] = booking;
        seq[i] = !seq[i] ? k : (seq[i] + k);
        seq[j + 1] = !seq[j + 1] ? -k : (seq[j + 1] - k);
    }
    let k = 1;
    let c = 0;
    let out = [];
    while (k++ <= n) {
        c += seq[k - 1] || 0;
        out.push(c);
    }
    return out;
};
// @lc code=end

