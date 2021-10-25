// 编写一个高效的算法来搜索m,x,n矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

const mockData = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
const target = 5;

/**
 * @param nums
 * @param target
 * @returns {number}
 */
function halfSearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    for (let row of matrix) {
        let res = halfSearch(row, target);
        if (res >= 0) {
            return true;
        }
    }
    return false;
}

const res = searchMatrix(mockData, target);
console.log('res::', res);
