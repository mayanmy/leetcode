/**
 * https://leetcode.cn/problems/distinct-subsequences/
 * 115. 不同的子序列
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    // 样本对应模型，看结尾
    const m = s.length
    const n = t.length
    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0)
    }
    dp[0][0] = s[0] === t[0] ? 1 : 0
    for (let i = 1; i < m; i++) {
        dp[i][0] = s[i] === t[0] ? dp[i - 1][0] + 1 : dp[i - 1][0]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j <= Math.min(i, n - 1); j++) {
            // S[...i]的所有子序列中，都不以s[i]结尾，则dp[i][j]肯定包含dp[i-1][j]
            // S[...i]的所有子序列中，都必须以s[i]结尾，这要求S[i] == T[j]，则dp[i][j]包含dp[i-1][j-1]
            dp[i][j] = dp[i - 1][j] + (s[i] === t[j] ? dp[i - 1][j - 1] : 0)
        }
    }
    return dp[m - 1][n - 1]
};