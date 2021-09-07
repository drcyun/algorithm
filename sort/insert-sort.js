/**
 * @file 直接插入排序
 * @author drcyun
 */

import { swap, defaultJudge } from "./utils.js";

const mockData = [1,3,2,8,4,7,5,6,4];
const append = (array, from, to) => {
    array.splice(to, 0,array.splice(from, 1)[0]);
}

/**
 * @desc 直接插入排序
 * @param {Array} array
 * @param {Function} judge 数值比较大小的赋能
 * @returns {*}
 */
function insertSort(array, judge = defaultJudge) {
    let loopCount = array.length;
    if (array == null || loopCount < 2) {
        return array;
    }
    // C语言写法
    // for(let i = 0; i < loopCount - 1; i++) {
    //     for(let j = i + 1; j > 0; j--) {
    //         if(!judge(array[j],array[j-1])) {
    //             swap(array, j, j-1);
    //         }
    //     }
    // }

    // JS写法
    for (let i = 0; i < loopCount; i++) {
        for (let j = 0; j < i; j++) {
            if (judge(array[j], array[i])) {
                append(array, i, j);
                break;
            }
        }
    }
    return array;
}

const res = insertSort(mockData);
console.log('res::', res);
