// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
// 如果数组元素个数小于 2，则返回 0。

const mockData = [3,6,9,1];

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumGap(nums) {
    if (nums.length < 2) {
       return 0;
    }
    nums.sort((a, b) => a - b);
    let i = 0;
    let res = 0;
    let len = nums.length;
    while (i < len - 1) {
        if(nums[i + 1] - nums[i] > res) {
            res = nums[i + 1] - nums[i];
        }
        i++;
    }
    return res;
}

const res = maximumGap(mockData);
console.log('res::', res);

