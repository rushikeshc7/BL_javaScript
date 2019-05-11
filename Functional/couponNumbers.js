var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Total random number needed to have all distinct numbers.
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */ 

 var num = Number(rl.question("Enter the number of coupons:"));
 u.generateCoupons(num);