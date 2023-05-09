
/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const target = graph.length - 1;
  const res = [];
  const dfs = (node, path) => {
    path.push(node);
    if(node === target) {
      res.push(path);
      return;
    }

    for(let i = 0; i < graph[node].length; i++) {
      dfs(graph[node][i], [...path]);
    }
  }
  dfs(0, []);
  return res;
};
// @lc code=end

