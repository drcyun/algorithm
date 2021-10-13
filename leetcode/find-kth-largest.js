// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

const mockData = [3,2,1,5,6,4];
const Kth = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    nums.sort((a, b) => a - b);
    return nums[nums.length - k];
}
const res = findKthLargest(mockData, Kth);
console.log('res::', res);
