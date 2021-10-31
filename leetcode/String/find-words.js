// 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词

const mockData = ["Hello","Alaska","Dad","Peace"];

/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
    let rep = /[qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+/ig;
    let res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].match(rep) !== null) {
            if(words[i].match(rep).length === 1) {
                res.push(words[i]);
            }
        }
    }
    return res;
}

const res = findWords(mockData);
console.log('res::', res);
