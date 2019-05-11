var u = require('./Utility');
var rl = require('readline-sync');
/*
 * @Aim: Calculates the monthly payments you would have to make over Y years to pay off a P principal loan
         amount at R percent interest compounded monthly
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */

var P = +process.argv[2];
var Y = +process.argv[3];
var R = +process.argv[4];
var pay = u.paymentMonth(P, Y, R);
console.log("Monthly payment is: " + pay);

