var rl = require('readline-sync');
var list = require('./linkedList.js');
var st = require('./stack.js');
var dst = require('./dataStructure');

module.exports = {
    /** 
     * @Aim     : Ordered list
     * @Auther  : Rushikesh Chopade
     * @verison : 1.0.0
     * @since   : 01/03/2019
     */

    orderedList(num, str) {

        str1 = str.split(" ");
        const llInt = new list.linkedList();

        //traverse through str1
        for (let i = 0; i < str1.length; i++) {
            llInt.add(str1[i]);
        }
        console.log("sorted list of numbers:");

        //sort the linked list
        llInt.sort();
        llInt.printListO();
        if (llInt.search(num)) {
            //if number is present, remove it from list
            console.log("\nThe number is present in the list, remove it");

            //remove number from the list
            llInt.remove(num);
            llInt.printListO();

        }
        else {
            //if number is not present, add it to the list
            console.log("\nThe number is not present in the list, add it");

            //add number to the list
            llInt.add(num);
            console.log("\nsorted list after adding the number:");
            llInt.sort();
            llInt.printListO();
        }
    },

    /** 
     * @Aim     : Unordered list
     * @Auther  : Rushikesh Chopade
     * @verison : 1.0.0
     * @since   : 01/03/2019
     */
    unorderedList(word, str) {

        str1 = str.split(" ");
    
        const llWord = new list.linkedList();

        console.log(str1);

        console.log("Strings from the list are: ");

        //traverse through str1
        for (let i = 0; i < str1.length; i++) {
            llWord.add(str1[i]);
            console.log(str1[i]);

        }
        llWord.printListU();
       // console.log(llword.);
        

        console.log("The word you want to search is: " + word);

        //To search the word in,linked list
        if (llWord.search(word) != -1) {
            //if word is present, remove it from list
            console.log("\nThe word is present in the list, remove it");

            //remove the word from the list
            llWord.remove(word);
            llWord.printListU();


        }
        else {
            //if word is not present, add it to the list
            console.log("\nThe word is not present in the list, add it");

            //add the word to the list
            llWord.add(word);
            llWord.printListU();

        }
    },


    checkLeapYear(y) {
        //To make sure input year contains 4 digit 
        //If the year is completely divisible by 4 then it's a leap year. 
        if (y > 1000 && y < 10000 && y % 4 == 0) {
            return true;  //year is leap year
        }
        else if (y > 1000 && y < 10000 && y % 4 != 0) {
            return false; //year is not leap year
        }
        return true;

    },

    dayOfWeek(m, d, y) {
        //Formula for georgion calender
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
        var m0 = m + 12 * Math.floor(Math.floor(14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor(31 * m0 / 12)) % 7;
        var D = parseInt(d0);
        return D;   //returns day
    },


    balancedParanthesis(exp) {

        len = exp.length;
        var stk = new st.Stack(len);
        var expArr = [];
        expArr = exp;

        var ch = 0;

        //Traverse through expArr	
        for (let i = 0; i < expArr.length; i++) {

            if (expArr[i] === '(' || expArr[i] === '{' || expArr[i] === '[') {
                //add in the array if '(' appears in the expression 
                stk.push(expArr[i]);
            }
            else if (expArr[i] === ')' || expArr[i] === '}' || expArr[i] === ']') {
                //pop from the array if ')' appears in the expression
                ch = stk.pop();

                //Switch loop to check paranthesis pair
                switch (ch) {
                    case ')':
                        if (ch !== '(');
                        return false;
                    case '}':
                        if (ch !== '{');
                        return false;
                    case ']':
                        if (ch !== '[');
                        return false;
                }
            }
        }
        return stk.isEmpty();

    },

    checkPalindromeWord(word) {


        var size = word.length;
        var isPalindrome = true;

        //Dequeue
        let dqu = new dst.deque();
        // var ch = word.split(" ");

        for (let i = 0; i < size; i++) {
            //To add element from rear
            dqu.addRear(word[i]);
        }
        while (!dqu.isEmpty() && dqu.front != dqu.rear) {
            //if removed element from front is not equal to removed element from rear then returns false
            if (dqu.removeFront() == dqu.removeRear()) {
                isPalindrome = true;
            }
            else {
                return false;
            }
        }
        return true;
    },

    bankCashCounter(accBalance) {
        //Queue
        var queue = new dst.queue();
        var people = rl.question("Enter the number of person in queue:");

        //Adding people in the queue
        for (let i = 0; i <= people; i++) {
            queue.enqueue(i);
        }


        while (people > 0) {
            //Switch case to deposit or withdraw amount 	
            var amount = 0;
            let ch = rl.question("Enter 1 to deposit amount: \nEnter 2 to withdraw amount:");
            switch (ch) {
                case "1":

                    //To deposit amount
                    var depo = rl.question("Enter the money you want to deposit:");
                    var deposit = (Number(depo));
                    if (deposit < 0) {
                        console.log("Enter valid amount to deposit");
                    }
                    else {
                        //total balance after deposit
                        accBalance = accBalance + deposit;
                        console.log("Updated account balance is: " + accBalance);
                    }
                    console.log("person deposited " + deposit);
                    people--;
                    break;
                case "2":

                    //To withdraw amount
                    var withd = rl.question("Enter the money you want to withdraw:");
                    var withdraw = (Number(withd));
                    if (withdraw < 0) {
                        console.log("Enter valid amount to withdraw");
                    }
                    else if (withdraw > accBalance) {
                        console.log("Check account balance and withdraw valid ammount");
                    }
                    else {
                        //total balance after withdrawal
                        accBalance = accBalance - withdraw;
                        console.log("Updated account balance is: " + accBalance);
                    }
                    console.log("person withdrew " + withdraw);
                    people--;
                    break;
                default:
                    console.log("Enter valid choice to deposit or withdraw ");
            }
        }
        console.log("There are no people in the queue");
    },

    factorial(num) {
        var fact = 1;
        //Iterate through numb to get factorial of given number
        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;
    },

}





