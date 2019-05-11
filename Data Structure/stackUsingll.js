var u = require('../Algorithmic/Utility');
var stll = require('./stack');


/** 
 * @Aim     : Add the Prime Numbers that are Anagram in the Range of 0 ­to 1000 in a Stack using 
 *            the Linked List and Print the Anagrams from the Stack. 
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 04/03/2019
 */

var stk = new stll.Stack();
var primeNumbers =  u.primeNumber(1000);
for(let i = 0; i < primeNumbers.length; i++) 
		{
			for(let j = i + 1; j < primeNumbers.length; j++) 
			{
				if(u.anagram(primeNumbers[i].toString(), primeNumbers[j].toString())) 
				{
					stk.push(primeNumbers[i] + " " + primeNumbers[j]);
				}
			}
		}
var size = stk.size();
for (let i = 1; i <= size; i++) {
    console.log(stk.pop());
}