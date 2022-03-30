const nums = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicates(nums) {
    let slow = 0;
    let fast = 1;
    while (fast <= nums.length - 1) {
        if (nums[fast] !== nums[slow]) {
            slow += 1;
            fast += 1;
        } else {
            nums.splice(fast,1);
        }
    }
    return nums;
}

console.log(removeDuplicates(nums))
