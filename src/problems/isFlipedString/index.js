/**
 * https://leetcode.cn/problems/string-rotation-lcci/
 * 面试题 01.09. 字符串轮转
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    const s = s1 + s1
    return s.includes(s2)
};