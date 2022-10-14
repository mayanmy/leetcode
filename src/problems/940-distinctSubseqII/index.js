/**
 * https://leetcode.cn/problems/distinct-subsequences-ii/
 * 940. 不同的子序列 II
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
    const n = s.length
    const mod = Math.pow(10, 9) + 7
    const map = new Map()
    let all = 1
    for (let i = 0; i < n; i++) {
        const newAdd = all
        // const curAll = all + newAdd - (map.get(s[i]) || 0)
        let curAll = all
        curAll = (curAll + newAdd) % mod
        curAll = (curAll - (map.get(s[i]) || 0) + mod) % mod
        all = curAll
        map.set(s[i], newAdd)
    }
    return all - 1
};
