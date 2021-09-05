/**
 * @file 冒泡排序
 * @author drcyun
 */

import {swap, defaultJudge} from "./utils.js";

const mockData = [1,3,2,8,4,7,5,6,4];

/**
 * @desc 冒泡排序
 * @param {Array} array
 * @param {Function} judge 数值比较大小的赋能
 * @returns {Array}
 */
function bubbleSort(array,judge = defaultJudge) {
    let loopCount = array.length;
    if(array == null || loopCount < 2) {
        return array;
    }
    // for (let i = array.length; i > 0; i--) {
    //     for (let j = 0; j < i - 1; j++) {
    //         if(array[j] > array[j+1]) {
    //             swap(array, j, j+1);
    //         }
    //     }
    // }
    while (loopCount--) {
        for (let j = 0; j < loopCount; j++) {
            if(judge(array[j], array[j+1])) {
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

const res = bubbleSort(mockData);
console.log('res::', res);
const res2 = bubbleSort(mockData, (pre, next) => pre < next);
console.log('res2::', res2);
