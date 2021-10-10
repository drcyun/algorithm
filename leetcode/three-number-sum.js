// 给你一个包含 n 个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

const mockData = [-1, 0, 1, 2, -1, 4];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let size = nums.length;
    let i = 0;
    while (i < size - 2) {
        if (nums[i] > 0) {
            break;
        }
        let left = i + 1;
        let right = size - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]]);
            }
            if (sum <= 0) {
                while(nums[left] == nums[++left]) {}
            }
            if (sum > 0) {
                while(nums[right] == nums[--right]) {}
            }
        }
        while (nums[i] == nums[++i]) {}
    }
    return result;
}

const res = threeSum(mockData);
console.log('res::', res);
