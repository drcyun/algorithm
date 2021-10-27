const str = 'border-top-color';

/**
 * @desc 命名方式改为驼峰式
 * @param str
 * @returns {*}
 */
function toHumpName(str) {
    const regExp = /-(\w)/g; // \w匹配所有的字母和数字字符以及下划线_
    return str.replace(regExp, function(match, $1) {
        // 第一个参数re表示正则,第二个回调函数,对该字符串处理方式,圆括号内的形参数表示正则表达式的子选项
        return $1.toUpperCase(); // 转大写
    });
}
console.log(toHumpName(str)); // borderTopColor
