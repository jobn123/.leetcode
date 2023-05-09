/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

  // 合并两个链表
  while (headA) {
    if (!headA.next) {
      headA.next = headB;
    }
  }

  hasCycle(headA);
};

var hasCycle = function(head) {
  // 初始化指针
  let fast = head;

  // 快指针走到最后一个节点停止
  while(fast && fast.next) {

    // 慢指针走一步
    head = head.next;

    // 快指针走两步
    fast = fast.next.next;

    // 快慢指针相遇，说明含有环
    if (head === fast) return head;
  }

  // 不含环
  return null;
};
// @lc code=end

