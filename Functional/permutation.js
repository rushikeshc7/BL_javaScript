var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Find all the permutations of the string
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */


var str = rl.question("Enter the String:");
u.allPermutation("", str);