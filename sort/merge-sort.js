/**
 * @file 归并排序
 * @author dryun
 */

import {defaultJudge} from "./utils.js";

const mockData = [1,3,2,8,4,7,5,6,4];

/**
 * @desc 归并排序合并左右两个数组的工具函数
 * @param {Array} left
 * @param {Array} right
 * @param {Function} judge
 * @returns {Array}
 */
function merge(left, right, judge) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if(judge(left[0], right[0])) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    return result.concat(left).concat(right);
}

/**
 * @desc 归并排序主程序
 * @param {Array} array
 * @param {Function} judge
 * @returns {Array}
 */
function mergeSort(array, judge = defaultJudge) {
    if(array.length == 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left, judge), mergeSort(right, judge), judge);
}

const res = mergeSort(mockData);
console.log('res::', res);
const res2 = mergeSort(mockData, (pre, next) => pre < next);
console.log('res2::', res2);
