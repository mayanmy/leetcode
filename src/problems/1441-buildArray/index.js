/**
 * https://leetcode.cn/problems/build-an-array-with-stack-operations/
 * 1441. 用栈操作构建数组
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    const res = []
    let j = 1
    for (let i = 0; i < target.length;) {
        if (target[i] === j) {
            res.push('Push')
            i++
        } else {
            res.push('Push')
            res.push('Pop')
        }
        j++
    }
    return res
};


var buildArray2 = function (target, n) {
    const res = []
    process(target, 0, 1, n, res)
    return res
};

function process(target, l, i, n, res) {
    if (l === target.length) {
        return false
    }
    if (i > n) {
        return false
    }
    if (target[l] === i) {
        res.push('Push')
        process(target, l + 1, i + 1, n, res)
    } else {
        res.push('Push')
        res.push('Pop')
        process(target, l, i + 1, n, res)
    }
}