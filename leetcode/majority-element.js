// 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

const mockData = [3,2,3,3,5,5,5,7,3];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
    let target = Math.floor(nums.length / 3);
    nums.sort((a, b) => a - b);
    let res = [];
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        while (nums[right] == nums[left]) {
            right++;
        }
        if (right - left > target) {
            res.push(nums[left]);
        }
        left = right;
    }
    return res;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement2(nums) {
    const cnt = new Map();
    let res = [];
    for (let i = 0; i <　nums.length; i++) {
        if (cnt.has(nums[i])) {
            cnt.set(nums[i], cnt.get(nums[i]) + 1);
        } else {
            cnt.set(nums[i], 1);
        }
    }
    for (let i of cnt.keys()) {
        if (cnt.get(i) > Math.floor(nums.length / 3)) {
            res.push(i);
        }
    }
    return res;
}

const res = majorityElement2(mockData);
console.log('res::', res);

