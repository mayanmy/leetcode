/**
 * https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/
 * 801. 使序列递增的最小交换次数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
    const n = nums1.length
    const dp = new Array(n)
    for (let i = 0; i < n; i++) {
        // 初始化为最大值n
        dp[i] = new Array(2).fill(n)
    }
    // 在一次操作中，我们可以交换 nums1[i] 和 nums2[i]的元素 === 每次只能交换相同位置的两个数
    // dp[i][j] j===0不交换 j===1交换
    dp[0][0] = 0
    dp[0][1] = 1
    for (let i = 1; i < n; i++) {
        // 顺序位满足要求
        if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
            dp[i][0] = dp[i - 1][0] // 不互换
            dp[i][1] = dp[i - 1][1] + 1 // 互换
        }
        // 交叉位满足要求
        if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
            dp[i][0] = Math.min(dp[i][0], dp[i - 1][1]) // 前一个位置交换
            dp[i][1] = Math.min(dp[i][1], dp[i - 1][0] + 1) // 当前位置交换
        }
    }
    return Math.min(dp[n - 1][0], dp[n - 1][1])
};