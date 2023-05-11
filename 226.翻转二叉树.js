/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return null
  }

  // solution 1
  // 交换左右子节点
  // const temp = root.left
  // root.left = root.right
  // root.right = temp

  // 左右子节点继续反转子节点
  // invertTree(root.left)
  // invertTree(root.right)

  // solution 2
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root

};
// @lc code=end

