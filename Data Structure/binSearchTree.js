var u = require('./Utility');
var rl = require('readline-sync');
/** 
 * @Aim     : Number of binary search tree
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 06/03/2019
 */


//Use (2n)!/(n+1)!n! formula to find the number of binary search trees
var num = parseInt(rl.question("Enter the number of nodes:"));

//Take factorial of given num
var n = u.factorial(2 * num);
var a = u.factorial(num + 1);
var c = u.factorial(num);
var d = a*c;
var result = Math.floor(n/d);
console.log("Number of binary trees: " + result);