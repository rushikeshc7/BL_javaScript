var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: print 2 dimentional Array
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */

var row = rl.question("Enter the number of row:");
var column = rl.question("Enter the number of column:");

u.array2D(row, column);