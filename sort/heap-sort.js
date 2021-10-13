/**
 * @file 堆排序
 * @author drcyun
 */

import { swap, defaultJudge } from "./utils.js";

const mockData = [1,3,2,8,4,7,5,6,4];

/**
 * @desc 堆排序确定某一个数具体位置的工具函数
 * @param {Array} arr
 * @param {Number} index
 * @param {Function} judge
 */
function heapInsert(arr, index, judge) {
    while (judge(arr[index], arr[Math.floor((index - 1) / 2)])) {
        swap(arr, index, Math.floor((index - 1) / 2));
        index = Math.floor((index - 1) / 2);
    }
}

/**
 * @desc 堆排序
 * @param {Array} arr
 * @param {Function} judge
 * @returns {Array}
 */
function heapSort(arr, judge = defaultJudge) {
    let temp = [...arr];
    for (let i = 1;i < arr.length; i++) {
        heapInsert(temp, i, judge);
    }
    return temp;
}

const res = heapSort(mockData)
console.log('res::', res);
const res2 = heapSort(mockData, (pre, next) => pre < next);
console.log('res2::', res2);
