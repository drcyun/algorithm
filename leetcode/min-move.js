// 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。

const mockData = [1,2,3,4];

/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves(nums) {
    let count = 0;
    let len = nums.length;
    nums.sort((a, b) => a - b);
    for(let i = 1; i < len; i++) {
        count += nums[i] - nums[0];
    }
    return count;
}

const res = minMoves(mockData);
console.log('最少需要次数: %d', res);
