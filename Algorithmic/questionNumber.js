var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Print the intermediary number and the final answer
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */

var n = process.argv[2];
var upper = Math.pow(2, n - 1);
console.log("Take number between 0 to " + upper);
var count = 0;
var first = 0;
var last = upper;
var mid = (first + last) / 2;
var x = null;
u.question(count, first, last, mid, x, n);