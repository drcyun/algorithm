/*
1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
 */

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    if (n == 1) {
        return '1';
    }
    let lastResult = countAndSay(n-1);
    let res = '';
    let index = 0;
    for (let i = 0; i < lastResult.length; i++) {
        if (lastResult.charAt(i) != lastResult.charAt(index)) {
            let count = i - index;
            let temp = count + lastResult.charAt(index);
            res += temp;
            index = i;
        }
        if (i == lastResult.length - 1 && lastResult.charAt(i) == lastResult.charAt(index)) {
            let count = i - index + 1;
            let temp = count + lastResult.charAt(index);
            res += temp;
        }
    }
    return res;
}

const res = countAndSay(5);

