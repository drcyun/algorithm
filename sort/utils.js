/**
 * @file utils
 * @author drcyun
 */

/**
 * @desc 交换数组两个位置元素值
 * @param {Array} array
 * @param {Number} from
 * @param {Number} to
 */
export function swap(array, from, to) {
    // let template = array[from];
    // array[from] = array[to];
    // array[to] = template;

    // ES6写法
    [array[from], array[to]] = [array[to], array[from]];

}

/**
 * @desc 对比较函数默认赋能
 * @param a {Number}
 * @param b {Number}
 * @returns {boolean}
 */
export const defaultJudge = (a, b) => a > b;
