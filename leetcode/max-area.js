// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

const mockData = [1,8,6,2,5,4,8,3,7];

/**
 * @param {number []} arr
 * @param {number} start
 * @param { number} end
 * @returns {number}
 */
function getWaterVolume(arr, start, end) {
    if (arr[start] < arr[end]) {
        return arr[start] * (end - start);
    } else {
        return arr[end] * (end - start);
    }
}

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    while (left < right) {
        if (getWaterVolume(height, left, right) > res) {
            res = getWaterVolume(height, left, right);
        }
        if (height[left] < height[right]) {
            while (height[left] > height[++left]) {}
        } else {
            while (height[right] > height[--right]) {}
        }
    }
    return res;
}

const res = maxArea(mockData);
console.log('res:: %d', res);
