// 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。

const mockData = [1,2,1,3,2,5];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
    let res = [];
    let tempArray = [...nums];
    while (tempArray.length > 0) {
        let temp = tempArray.shift();
        if (tempArray.indexOf(temp) !== -1) {
            tempArray.splice(tempArray.indexOf(temp),1);
        } else {
            res.push(temp);
        }
    }
    return res;
}

const res = singleNumber(mockData);
console.log('res::', res);
