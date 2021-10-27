// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [start, end] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

const intervals = [[1,3],[2,6],[8,10],[15,18]];

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    let temp = [...intervals];
    temp.sort((a, b) => a[0] - b[0]);
    let res = [];
    while (temp.length > 0) {
        let i = 0;
        res.push(temp[0]);
        temp.shift();
        let last = res.length - 1;
        while (i < temp.length) {
            if (res[last][1] < temp[i][0]) {
                break;
            }else if (res[last][1] > temp[i][1]) {
                temp.splice(i, 1);
            }else {
                res[last] = [res[last][0], temp[i][1]];
                temp.splice(i, 1);
            }
        }
    }
    return res;
}

const res = merge(intervals);
console.log('res::', res);
