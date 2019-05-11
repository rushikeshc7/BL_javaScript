var u = require('./Utility');
var rl = require('readline-sync');
/*
 * @Aim: swap nibbles
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */
var n = rl.question("Enter the decimal number:");
var binStr = u.toBinary(n);
var result = u.swapNibbles(binStr);
console.log("Swapped binary:" + result);
var value = u.binToDec(result);
console.log("The output decimal value is:" + value);
var m = u.powerOf(value);
console.log(m);