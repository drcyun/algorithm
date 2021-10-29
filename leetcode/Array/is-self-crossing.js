// 给你一个整数数组 distance 。

// 从 X-Y 平面上的点(0,0)开始，先向北移动 distance[0] 米，然后向西移动 distance[1] 米，向南移动 distance[2] 米，向东移动 distance[3] 米，持续移动。也就是说，每次移动后你的方位会发生逆时针变化。

// 判断你所经过的路径是否相交。如果相交，返回 true ；否则，返回 false 。

const mockData = [1,1,2,2,3,3,4,4,10,4,4,3,3,2,2,1,1];

/**
 * @desc 归纳法解决问题
 * @param {number[]} distance
 * @return {boolean}
 */
function isSelfCrossing(distance) {
    for (let i = 3; i < distance.length; i++) {
        if (distance[i-1] <= distance[i-3] && distance[i] >= distance[i-2]) {
            console.log('1',i);
            return true;
        }
        if (i >= 4 && distance[i-1] === distance[i-3] && distance[i] >= distance[i-2] - distance[i-4]) {
            console.log('2',i);
            return true;
        }
        if (i >=5 &&
            distance[i] >= distance[i-2] - distance[i-4] &&
            distance[i-1] >= distance[i-3] - distance[i-5] &&
            distance[i-1] <= distance[i-3] &&
            distance[i-2] > distance[i-4]
        ) {
            console.log('3',i);
            return true;
        }
    }
    return false;
}

const res = isSelfCrossing(mockData);
console.log('res::', res);
