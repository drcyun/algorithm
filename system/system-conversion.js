/**
 * @file 进制转换
 * @author drcyun
 */

/**
 * @desc 进制转换
 * @param {Number} number
 * @param {Number} targetSystem
 * @param {Number} sourceSystem
 * @returns {Number}
 */

const DEFAULTSYSTEM = 10

function systemConversion(number, targetSystem,sourceSystem = DEFAULTSYSTEM) {
    const temp = parseInt(number, sourceSystem);
    return temp.toString(targetSystem);
}

const res = systemConversion(20,2, 3);
console.log('res::', res);

