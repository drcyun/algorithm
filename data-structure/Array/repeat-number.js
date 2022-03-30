
const mockData = [1,2,3,3,6,2,2,1,4,5,4];
const mockData2 = [];
const mockData3 = [1,2,3,4,5];

/**
 * @desc 数组中重复的数
 * @param {Array} nums
 * @return {Array}
 */
function repeatNumber(nums) {
    if (nums.length <= 1) {
        return [];
    }
    let res = [];
    let map = new Map();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    map.forEach((value, key) => {
        if (value > 1) {
            res.push(key);
        }
    })
    return res;
}

function repeatNumber2(nums) {
    if (nums.length <= 1) {
        return []
    }
    let res = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            if (i === 0 || nums[i] !== nums[i - 1]) {
                res.push(nums[i])
            }
        }
    }
    return res;
}

const res = repeatNumber(mockData);
console.log('res::', res);

const res2 = repeatNumber2(mockData);
console.log('res2::', res2);
