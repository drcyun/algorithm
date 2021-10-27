// 给定一个包含红色、白色和蓝色，一共n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。

const mockData = [2, 0, 2, 1, 1, 0];

/**
 * @param {number[]} nums
 * @return {Array}
 */
function sortColors(nums) {
    let len = nums.length;
    let red = [];
    let white = [];
    let blue = [];
    let res = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] == 0) {
            red.push(nums[i]);
        } else if (nums[i] == 1) {
            white.push(nums[i]);
        } else {
            blue.push(nums[i]);
        }
    }
    res = [...red, ...white, ...blue];
    return res;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors2(nums) {
    let i = 0;
    let len = nums.length;
    let right = len - 1;
    while( i <= right) {
        if (nums[i] == 0) {
            nums.unshift(nums.splice(i, 1)[0]);
            i++;
        } else if (nums[i] == 1) {
            i++;
        } else {
            nums.push(nums.splice(i,1)[0]);
            right--;
        }
    }
};

const res = sortColors(mockData);
console.log('res::', res);
sortColors2(mockData);
console.log(mockData);

