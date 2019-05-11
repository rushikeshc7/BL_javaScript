var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: find the Two Strings are anagram or not
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */

 var str1 = rl.question("Enter string 1:");
 var str2 = rl.question("Enter string 2:");
 
 var result = u.anagram(str1, str2);
 if(result == true)
 {
     console.log("Strings are anagram"); 
 }
 else{
    console.log("Strings are not anagram");
 }