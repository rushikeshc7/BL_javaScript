var u = require('./Utility');
var rl = require('readline-sync');

/** 
 * @Aim     : Check if the Arithmetic Expression is balanced or not.
 * @Auther  : Rushikesh Chopade
 * @verison : 1.1.0
 * @since   : 05/03/2019
 */

var exp = rl.question("Enter expression: ");
var isBalanced = u.balancedParanthesis(exp);
if (isBalanced == true)
    console.log("String is Balanced");
else
    console.log("String is not Balanced");
