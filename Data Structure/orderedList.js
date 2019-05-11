var u = require('./Utility');
var rl = require('readline-sync');
var fs = require('fs');

/** 
 * @Aim     : Ordered list
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 01/03/2019
 */

var data = fs.readFileSync('./orderedList.txt');
var str = data.toString();
console.log(str);
var num = rl.question("Enter the number to check:");
u.orderedList(num, str);