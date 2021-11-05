// 给你一个整数数组arr和一个整数difference，请你找出并返回 arr中最长等差子序列的长度，该子序列中相邻元素之间的差等于 difference 。

// 子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。

const arr = [1,5,7,8,5,3,4,2,1];
const difference = -2;

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
function longestSubsequence(arr, difference) {
    // let len = arr.length;
    // let res = 0;
    // for (let i = 0; i < len; i++) {
    //     let temp = 1;
    //     let left = i;
    //     for (let j = i + 1; j < len; j++) {
    //         if(arr[j] - arr[left] === difference) {
    //             temp++;
    //             left = j;
    //         }
    //     }
    //     if(temp > res) {
    //         res = temp;
    //     }
    // }
    // return res;

    let res = 0;
    const map  = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i] - difference) || 0) + 1);
        res = Math.max(res, map.get(arr[i]));
    }
    return res;
}

const res = longestSubsequence(arr, difference);
console.log('res::', res);
