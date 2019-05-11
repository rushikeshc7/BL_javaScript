var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim:  Find the Fewest Notes to be returned for Vending Machine
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */

 var notes = [1000,500,100,50,10,5,2,1];
 var amt = rl.question("Enter the amount:"); 
 var total = 0;
 var totalNotes = u.vendingMachine(notes, amt, total, 0);
 console.log("Total number of notes are:" + totalNotes);