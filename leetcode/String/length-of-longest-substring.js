// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

const str = 'pwwkew';

/**
 * @desc 暴力解法
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let res = 0;
    for (let i = 0; i < s.length - res; i++) {
        let str = '';
        let count = 0;
        let j = i;
        while (!str.includes(s.charAt(j)) && s.charAt(j)) {
            str += s.charAt(j);
            count++;
            j++;
        }
        if (count > res) {
            res = count;
        }
    }
    return res;
}

/**
 * @desc 滑动窗口
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring2(s) {
    let set =  new Set();
    let res = 0;
    let right = 0;
    for (let i = 0; i < s.length - res; i++) {
        if (i!=0) {
            set.delete(s.charAt(i - 1));
        }
        while (right < s.length && !set.has(s.charAt(right))) {
            set.add(s.charAt(right))
            right++;
        }
        res = Math.max(res, right - i);
    }
    return res;
}

const res = lengthOfLongestSubstring(str);
console.log('res::', res);
const res2 = lengthOfLongestSubstring2(str);
console.log('res2::', res2);
