/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/?favorite=2cktkvj
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const n = s.length
    if (n < 2) {
        return n
    }
    let max = 0
    let l = 0
    const map = new Map()
    for (let r = 0; r < n; r++) {
        const pre = map.get(s[r])
        if (pre >= l) {
            l = pre + 1
        }
        map.set(s[r], r)
        max = Math.max(max, r - l + 1)
    }
    return max
};
