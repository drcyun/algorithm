// 给你一个字符串 s，找到 s 中最长的回文子串。
// 回文串：轴对称字符串

const str = 'babad';

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let len = s.length;
    let begin = 0;
    let maxLen = 1;
    for (let i = 0; i < len - maxLen; i++) {
        for (let j = i + maxLen; j < len; j++) {
            if (confirm(s, i, j)) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substr(begin, maxLen);
}

/**
 * @desc 比较字符串某个子串是否为回文串
 * @param {String} s
 * @param {Number} left
 * @param {Number} right
 * @returns {boolean}
 */
function confirm(s, left, right) {
    let start = left;
    let end = right;
    while (start < end) {
        if (s.charAt(start) === s.charAt(end)) {
            start++;
            end--;
        } else {
            break;
        }
    }
    if (start >= end) {
        return true;
    } else {
        return false;
    }
}

const res = longestPalindrome(str);
console.log('res::', res);
