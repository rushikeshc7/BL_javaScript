var u = require('./Utility');
var list = require('./queue');
var rl = require('readline-sync');

/** 
 * @Aim     : Simulate banking cash counter
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 03/03/2019
 */


console.log("#Welcome to Bank#");
        
//Account balance before deposit or withdrawal
var accBalance = 15000;
console.log("The account balance is: " + accBalance);
u.bankCashCounter(accBalance);
