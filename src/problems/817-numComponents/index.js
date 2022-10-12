/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.cn/problems/linked-list-components/
 * 817. 链表组件
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
    let res = 0
    let cur = head
    const set = new Set(nums)
    let preHas = false
    while (cur) {
        if (set.has(cur.val)) {
            preHas = true
        } else {
            res += preHas ? 1 : 0
            preHas = false
        }
        cur = cur.next
    }
    res += preHas ? 1 : 0
    return res
};