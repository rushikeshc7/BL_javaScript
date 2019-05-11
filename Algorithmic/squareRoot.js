var u = require('./Utility');
var rl = require('readline-sync');
/*
 * @Aim: Find tht square root
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */


var num = process.argv[2];
var result = u.sqRoot(num);
console.log("The square root of the number is:" + result);
