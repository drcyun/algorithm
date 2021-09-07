/**
 * @file 选择排序
 * @author drcyun
 */

import { swap, defaultJudge } from './utils.js'

const mockData = [1,3,2,8,4,7,5,6,4];

/**
 * @desc 选择排序
 * @param {Array} array
 * @param {Function} judge 数值比较大小的赋能
 * @returns {Array}
 */
function selectSort(array, judge = defaultJudge) {
    let loopCount = array.length;
    if (array == null || loopCount < 2) {
        return array;
    }
    for (let i = 0;i < loopCount;i++) {
        let minIndex = i;
        for (let j = i + 1;j < loopCount;j++) {
            minIndex = !judge(array[j], array[minIndex]) ? j : minIndex;
        }
        swap(array, i, minIndex);
    }
    return array;
}

const res = selectSort(mockData);
console.log('res::', res);


