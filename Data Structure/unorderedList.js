var u = require('./Utility');
var rl = require('readline-sync');
var fs = require('fs');

/** 
 * @Aim     : Unordered list
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 01/03/2019
 */

var data = fs.readFileSync('./unorderedList.txt');
var str = data.toString().trim(" ");
console.log(str);
var word = rl.question("Enter the word to check:");
u.unorderedList(word, str);