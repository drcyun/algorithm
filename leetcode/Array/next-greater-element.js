// 给你两个 没有重复元素 的数组nums1 和nums2，其中nums1是nums2的子集。

// 请你找出 nums1中每个元素在nums2中的下一个比其大的值。

// nums1中数字x的下一个更大元素是指x在nums2中对应位置的右边的第一个比x大的元素。如果不存在，对应位置输出 -1 。

const nums1 = [4,1,2];
const nums2 = [1,3,4,2];

/**
 * @desc 暴力解法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        let temp = 0;
        let flag = false;
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                temp = j;
                break;
            }
        }
        for (let j = temp + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                res.push(nums2[j]);
                flag = true;
                break;
            }
        }
        if (flag == false) {
            res.push(-1);
        }
    }
    return res;
}

/**
 * @desc 单调栈解法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement2(nums1, nums2) {
    const map = new Map();
    const res = [...nums1];
    const stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length && nums2[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1);
        stack.push(nums2[i]);
    }
    return res.map(((value, index) => {
        return map.get(nums1[index]);
    }))
}

const res = nextGreaterElement(nums1, nums2);
console.log('res::', res);
const res2 = nextGreaterElement2(nums1, nums2);
console.log('res2::', res2);
