// 给定一个包括n 个整数的数组nums和 一个目标值target。找出nums中的三个整数，使得它们的和与target最接近。返回这三个数的和。假定每组输入只存在唯一答案。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [0, 1, 2];
const target = 0;

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let i = 0;
    let res = nums[0] + nums[1] + nums[len-1];
    while (i < len - 2) {
        let left = i + 1;
        let right = len - 1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum <= target) {
                if (target - sum <= target - res || target - sum <= res - target) {
                   res = sum;
                }
                while (nums[left] == nums[++left]) {}
            } else {
                if(sum - target <= res - target || sum - target <= target - res) {
                    res = sum;
                }
                while (nums[right] == nums[--right]) {}
            }
        }
        while (nums[i] == nums[++i]) {}
    }
    return res;
}

const res = threeSumClosest(nums, target);
console.log('res::', res);
