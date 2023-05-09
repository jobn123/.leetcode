/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 思路：使用快慢双指针解决此问题

var hasCycle = function(head) {
  var fast = head

  while(fast && fast.next) {
    head = head.next

    fast = fast.next.next

    if (head === fast) {
      return true
    }
  }

  return false
}
// var hasCycle = function(head) {
//   // 初始化指针
//   let fast = head;

//   // 快指针走到最后一个节点停止
//   while(fast && fast.next) {

//     // 慢指针走一步
//     head = head.next;

//     // 快指针走两步
//     fast = fast.next.next;

//     // 快慢指针相遇，说明含有环
//     if (head === fast) return true;
//   }

//   // 不含环
//   return false;
// };
// @lc code=end

