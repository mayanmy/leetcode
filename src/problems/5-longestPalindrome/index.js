/**
 * https://leetcode.cn/problems/longest-palindromic-substring/
 * 5、给你一个字符串 s，找到 s 中最长的回文子串。
 * Manacher 时间复杂度 O(N)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    const manacherStr = getManacherString(s)
    const n = manacherStr.length
    // 回文半径数组
    const rArr = new Array(n).fill(0)
    // 最右回文边界R的下一个位置
    let R = -1
    // 最右回文边界R对应的C的位置
    let C = -1
    let max = 0
    let resIndex = -1
    for (let i = 0; i < n; i++) {
        const i2 = C * 2 - i
        // 扩
        // 1、i没被R罩住, 没法优化, 暴力往后扩
        // 2、i被R罩住,必存在(L, i2, C, i, R)这种关系
        //    1、i2所在的回文串在L,R内部, 则i的区域和i2的一样
        //    2、i2所扩的回文区域在L,R外部,则不用扩了,i的回文半径就是i--R (R-i)
        //    3、i2左边界的回文区域左边界和L压线,一定知道i的回文区域至少和i2一样,R往右继续验证
        rArr[i] = R > i ? Math.min(rArr[i2], R - i) : 1
        while (i + rArr[i] < n && i - rArr[i] > -1) {
            if (manacherStr[i + rArr[i]] === manacherStr[i - rArr[i]]) {
                rArr[i]++
            } else {
                break
            }
        }
        if (i + rArr[i] > R) {
            R = i + rArr[i]
            C = i
        }
        if (rArr[i] > max) {
            max = rArr[i]
            resIndex = Math.floor(i / 2)
        }
    }
    max = max - 1
    const start = resIndex - Math.floor(max / 2)
    const end = resIndex + Math.round(max / 2)
    let res = ""
    for (let i = start; i < end; i++) {
        res += s[i]
    }
    return res
}

function getManacherString(s) {
    let str = "#"
    for (let i = 0; i < s.length; i++) {
        str += `${s[i]}#`
    }
    return str
}


/**
 * 暴力解-中心扩散法  时间复杂度 O(N^2)
 * @param {*} s 
 */
var longestPalindrome2 = function (s) {
    if (s.length < 2) {
        return s
    }
    const manacherStr = getManacherString(s)
    const n = manacherStr.length
    let max = 0 // manacher串的最大半径
    let resIndex = -1
    // 将每一个i当作中心点
    for (let i = 0; i < n; i++) {
        for (let j = 0; i + j < n; j++) {
            if (manacherStr[i - j] === manacherStr[i + j]) {
                if (max < (1 + j)) {
                    max = 1 + j
                    resIndex = Math.floor(i / 2)
                }
            } else {
                break
            }
        }
    }
    max = max - 1
    const start = resIndex - Math.floor(max / 2)
    const end = resIndex + Math.round(max / 2)
    let res = ""
    for (let i = start; i < end; i++) {
        res += s[i]
    }
    return res
}
