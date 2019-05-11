var u = require('../Algorithmic/Utility');
var que = require('./QueueUsingLinkedList');


/** 
 * @Aim     : Add the Prime Numbers that are Anagram in the Range of 0 ­to 1000 in a Queue using 
 *            the Linked List and Print the Anagrams from the Queue. 
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 04/03/2019
 */

var queue = new que.QueueUsingLinkedList();
var primeNumbers =  u.primeNumber(1000);
for(let i = 0; i < primeNumbers.length; i++) 
		{
			for(let j = i + 1; j < primeNumbers.length; j++) 
			{
				if(u.anagram(primeNumbers[i].toString(), primeNumbers[j].toString())) 
				{
					queue.enqueue(primeNumbers[i] + " " + primeNumbers[j]);
				}
			}
		}
var size = queue.size();
for (let i = 1; i <= size; i++) {
    console.log(queue.dequeue());
}