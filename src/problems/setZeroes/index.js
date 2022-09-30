/**
 * https://leetcode.cn/problems/zero-matrix-lcci/
 * 面试题 01.08. 零矩阵
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const rowBoolean = new Array(m)
    const colBoolean = new Array(n)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowBoolean[i] = true
                colBoolean[j] = true
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rowBoolean[i] || colBoolean[j]) {
                matrix[i][j] = 0
            }
        }
    }
};