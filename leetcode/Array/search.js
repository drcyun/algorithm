/*
    整数数组 nums 按升序排列，数组中的值 互不相同 。

    在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为[4,5,6,7,0,1,2] 。

    给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回-1。

 */

const mockData = [3,1];
const target = 1;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = left + ((right - left) >> 1);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[left] <= nums[middle]) {
            if (nums[left] <= target && nums[middle] > target) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (nums[middle] < target && nums[right] >= target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        console.log(middle,left,right);
    }
    return -1;
}

search(mockData,target);
