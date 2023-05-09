/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const colors = new Map();
  const stack = [];

  for (var i = 0; i < graph.length; i++) {
    if (colors.has(i)) {
      continue;
    }

    colors.set(i, true);
    stack.push(i);

    while (stack.length) {
      const node = stack.pop();

        for (let neighbor of graph[node]) {
          if (!colors.has(neighbor)) {
            colors.set(neighbor, !colors.get(node));
            stack.push(neighbor);
            continue;
          }

          if (colors.get(neighbor) === colors.get(node)) {
            return false;
          }

        }
    }
  }
};
// @lc code=end

