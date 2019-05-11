var u = require('./Utility');
var rl = require('readline-sync');
var fs = require("fs");
/*
 * @Aim:  Binary Search the Word from Word List
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */

var data = fs.readFileSync('./file.txt');

var str = data.toString();
var str1 = str.split(" ");
console.log(str1);
var n = str1.length;
u.bubble(str1, n);
var x = rl.question("Enter word you want to search:");
if (u.binSearchWord(str1, x) != -1)
    console.log("String found");
else
    console.log("String not found");