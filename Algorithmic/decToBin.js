var u = require('./Utility');
var rl = require('readline-sync');
/*
 * @Aim: Convert decimal to binary
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */

var n = rl.question("Enter a decimal number:")
u.toBinary(n);
