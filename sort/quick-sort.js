/**
 * @file 快速排序
 * @author drcyun
 */

import {swap, defaultJudge} from "./utils.js";

const mockData = [1,3,2,8,4,7,5,6,4];
const START = 0;
const END = mockData.length - 1;

/**
 * @desc 快速排序
 * @param {Array} array 快速排序的数组
 * @param {Number} start 快速排序的起点
 * @param {Number} end 快速排序的终点
 * @param {Function} judge 数值比较大小的赋能
 * @returns {Array}
 */
function quickSort(array, start, end, judge = defaultJudge) {
    let pivot = start;
    let left = start;
    let right = end;
    if(right - left <= 1) {
        return array;
    }
    while(left < right) {
        while(right > pivot && judge(array[right], array[pivot])) {
            right--;
        }
        if(end > pivot) {
            swap(array, pivot, right);
            pivot = right;
        }
        while(left < pivot && !judge(array[left], array[pivot])) {
            left++;
        }
        if(left < pivot) {
            swap(array, pivot, left);
            pivot = left;
        }
    }
    quickSort(array, start, pivot);
    quickSort(array, pivot + 1, end);
    return array;
}

const res = quickSort(mockData, START, END);
console.log('res::', res);
