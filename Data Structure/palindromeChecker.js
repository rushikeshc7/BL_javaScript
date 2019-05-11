var u = require('./Utility');
var rl = require('readline-sync');

/** 
 * @Aim     : Palindrome Checker
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 02/03/2019
 */

 var word = rl.question("Enter the word to check palindrome:");
 var isPalindrome = u.checkPalindromeWord(word);
		if(isPalindrome == true)
			console.log(word+" is Palindrome");
		else
			console.log(word+" is not Palindrome");
