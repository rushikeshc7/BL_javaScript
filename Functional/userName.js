var u = require('./Utility.js');
var rl=require('readline-sync');

/*
 * @Aim: User Input and Replace String Template “Hello <<UserName>>, How are you?”
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */


    //To take the user input string
    str=rl.question("Enter name you want to replace:");
    var string = u.replaceUserName(str);
    console.log("New String: " + string);
    
   
