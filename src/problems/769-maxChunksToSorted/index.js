/**
 * https://leetcode.cn/problems/max-chunks-to-make-sorted/
 * 769. 最多能完成排序的块
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let res = 0
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        // 区间内的最大值和当前下标i相等，说明可以划分一次
        max = Math.max(max, arr[i])
        if (max === i) {
            res++
        }
    }
    return res
};

// 单调栈
var maxChunksToSorted2 = function (arr) {
    const maxStack = []
    for (let i = 0; i < arr.length; i++) {
        if (!maxStack.length || maxStack[maxStack.length - 1] < arr[i]) {
            maxStack.push(arr[i])
        } else {
            const top = maxStack.pop()
            while (maxStack.length && maxStack[maxStack.length - 1] > arr[i]) {
                maxStack.pop()
            }
            maxStack.push(top)
        }
    }
    return maxStack.length
};