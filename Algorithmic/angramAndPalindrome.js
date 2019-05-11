var u = require('./Utility');
var rl = require('readline-sync');
/*
 * @Aim: ­ prime numbers which are anagram and palindrome
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */


var primeNumbers = u.primeNumber(1000);
		
		console.log("Anagram and prime numbers are:");
		//	prints prime numbers that are anagrams
		for(let i = 0; i < primeNumbers.length; i++) 
		{
			for(let j = i + 1; j < primeNumbers.length; j++) 
			{
				if(u.anagram(primeNumbers[i].toString(), primeNumbers[j].toString())) 
				{
					console.log(primeNumbers[i] + " " + primeNumbers[j]);
				}
			}
		}

		console.log("\nPalindrome and prime numbers are:");
		//	prints prime numbers that are palindrome
		for(let i = 0; i < primeNumbers.length; i++) 
		{
			if(u.checkPalindrome(primeNumbers[i])) 
			{
				console.log(primeNumbers[i]);
			}
		}