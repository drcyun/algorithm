// 给你一个 正 整数 num ，输出它的补数。补数是对该数的二进制表示取反。


/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
    // 存在溢界问题
    // let twoNum = num.toString(2);
    // let temp = '';
    // for (let i = 0; i < twoNum.length; i++) {
    //     if(twoNum.charAt(i) == '1') {
    //         temp += '0';
    //     }else {
    //         temp += '1';
    //     }
    // }
    // return parseInt(Number(temp), 2);

    let len = num.toString(2).length;
    const str = new Array(len).fill(1).join('');
    const temp = parseInt(str, 2);
    return num ^ temp;
}

const res = findComplement(20161211);
console.log('res::', res);
