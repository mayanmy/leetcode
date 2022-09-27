/**
 * https://leetcode.cn/problems/check-permutation-lcci/
 * 面试题 01.02. 判定是否互为字符重排
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    const n = s1.length
    const map = new Map()
    for (let i = 0; i < n; i++) {
        map.set(s1[i], (map.get(s1[i]) || 0) + 1)
    }
    for (let i = 0; i < n; i++) {
        const count = map.get(s2[i]) || 0
        if (count <= 0) {
            return false
        }
        map.set(s2[i], count - 1)
    }
    return true
};


var CheckPermutation2 = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    return [...s1].sort().join("") === [...s2].sort().join("")
};