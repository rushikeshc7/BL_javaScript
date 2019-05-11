var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Prime numbers in the range of 0 to 1000
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */


var arr = [];
arr = u.primeNumber(1000);
console.log(arr);

var n = arr.length;
console.log("Prime numbers between 0 to 1000 are:");
for (let i = 2; i < n; i++) {
    console.log(arr[i]);
}
