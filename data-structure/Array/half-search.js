/**
 * @file 二分查找
 */

const mockData = [1,2,3,4,7,9,10];
const target1 = 1;
const target2 = 10;
const target3 = 2;

/**
 * @file 左闭右闭
 * @param {number []} nums
 * @param {number} target
 * @return {number}
 */
function halfSearch1(nums, target) {
    let len = nums.length;
    let left = 0;
    let right = len - 1;
    while (left <= right) {
        let middle = left + ((right - left) >> 1);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

/**
 * @file 左闭右开
 * @param {number []} nums
 * @param {number} target
 * @return {number}
 */
function halfSearch2(nums, target) {
    let len = nums.length;
    let left = 0;
    let right = len;
    while (left < right) {
        let middle = left + ((right - left) >> 1);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}


const res1 = halfSearch1(mockData, target1);
console.log('res::', res1);

const res2 = halfSearch1(mockData, target2);
console.log('res::', res2);

const res3 = halfSearch1(mockData, target3);
console.log('res::', res3);

const res4 = halfSearch2(mockData, target1);
console.log('res::', res4);

const res5 = halfSearch2(mockData, target2);
console.log('res::', res5);

const res6 = halfSearch2(mockData, target3);
console.log('res::', res6);
