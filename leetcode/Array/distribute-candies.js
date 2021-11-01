// 给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果。你需要把这些糖果平均分给一个弟弟和一个妹妹。返回妹妹可以获得的最大糖果的种类数。

const mockData = [1,1,2,2,3,3];

/**
 * @param {number[]} candyType
 * @return {number}
 */
function distributeCandies(candyType) {
    let map =  new Map();
    for (let i = 0; i < candyType.length; i++) {
        if (!map.has(candyType[i])) {
            map.set(candyType[i], 1);
        } else {
            map.set(candyType[i], map.get(candyType[i]) + 1)
        }
    }
    if (map.size >= candyType.length >> 1) {
        return candyType.length >> 1;
    } else {
        return map.size;
    }
}

/**
 * @param {number[]} candyType
 * @return {number}
 */
function distributeCandies2(candyType) {
    let set = new Set(candyType);
    return Math.min(set.size, candyType.length >> 1);
}

const res = distributeCandies(mockData);
console.log('res::', res);
const res2 = distributeCandies2(mockData);
console.log('res2::', res2);
