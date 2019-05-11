var rl = require('readline-sync');
var w = require('util');
module.exports =
   {

      replaceUserName(str) {
         var str1 = "Hello Prasanna, how are you?"

         //to replace the string
         str1 = str1.replace("Prasanna", str);
         return str1;
      },


      coinFlip(n) {
         var head = 0;
         var tail = 0;
         //To iterate through 0 to n, where n is no. of times coin flipped  
         for (i = 0; i < n; i++) {
            let result = Math.random();
            //To random value between 0 and 1
            if (result < 0.5) {
               tail++;
            }
            else {
               head++;
            }
         }
         //To take the percentage of head and tail
         console.log("Percentage of head: " + head * 100 / n);
         console.log("Percentage of tail: " + tail * 100 / n);
      },

      leapYear(year) {
         if (year > 1000 && year < 10000 && year % 4 == 0) {
            console.log(year + " is a leap year");  //year is leap year
         }
         else if (year > 1000 && year < 10000 && year % 4 != 0) {
            console.log(year + " is a not leap year"); //year is not leap year
         }
         else {
            console.log("Please enter 4 digit number to check leap year");
         }
      },

      powerOf2(n) {
         //To take power of 2 using Math.pow function
         console.log("Power of 2^" + n + " is " + Math.pow(2, n));
         console.log();

         if (n >= 0 && n <= 31) {
            for (i = 1; i <= n; i++) {
               //To print power of 2
               console.log("Power of 2^" + i + " is " + Math.pow(2, i));
            }
         }
         else {
            console.log("Enter the number between 0 and 31");
         }
      },

      harmonicNumber(n) {

         var sum = 0;
         if (n > 0) {
            //Loop to add 1/1 + 1/2 + 1/3 + ... + 1/n. 
            for (i = 1; i <= n; i++) {
               sum = sum + (1.0 / i);   //To store is harmonic number in sum variable
            }
         }
         else {
            console.log("Enter a number greater than zero");
         }
         return sum;
      },

      primeFactorization(n) {

         //Traverse through 2 to n to find prime factor
         for (i = 2; i <= n; i++) {
            while (n % i == 0) {
               console.log(i + " ");
               n = n / i;
            }
         }
         return n;
      },

      gambler(stake, goal, noOfTimes) {
         var wins = 0;
         for (i = 0; i < noOfTimes; i++) {
            var money = stake;

            //Loop till gambler is broke or has won
            while (money > 0 && money < goal) {

               //To find the random  number 
               if (Math.random() < 0.5) {
                  money++;          //if less than 0.5, cash increses
               }
               else {
                  money--;          //if more than 0.5, cash decreases
               }

               if (money == goal) {
                  wins++;
               }
            }
         }
         //To find win percentage
         var winPercentage = (wins * 100) / (noOfTimes);
         console.log("Number of wins: " + wins);

         //To find winnng and losing percentage
         console.log("Winning percentage is:" + winPercentage);
         console.log("Losing pecentage is:" + (100 - winPercentage));
      },

      generateCoupons(num) {
         let count = 0;
         var arr = [];
         let i = 0;
         //loop till i is less than number of coupons
         while (i < num) {

            count++;
            var n = Math.floor(Math.random() * Math.floor(num));
            var check = 0;
            //Ti iterate through the array of coupons
            for (let j = 0; j < num; j++) {
               //if random number is already present in array, then ignore the random number
               if (arr[j] == n) {
                  check = 1;
               }
            }
            //if random number is not present in array, then put the random number in the array
            if (check == 0) {
               arr[i] = n;
               i++;
            }
         }
         //To print the number the number of coupons generated	 
         console.log("Number of coupons generated: " + count);
      },

      array2D(row, column) {
         var array = [];
         for (let i = 0; i < row; i++) {
            var arr = [];
            array[i] = arr;
            for (let j = 0; j < column; j++) {
               array[i][j] = rl.question("");
            }
         }

         for (let i = 0; i < row; i++) {

            console.log(array[i]);

         }
      },

      sumOf3() {
         var count = 0;
         var arr = [1, 2, -3, 8, -1, 7, -6, 7, 5, 6];

         //Loop to find the triplets 
         for (let i = 0; i < arr.length - 2; i++) {
            for (let j = i + 1; j < arr.length - 1; j++) {
               for (let k = j + 1; k < arr.length; k++) {
                  //Sum of three integers is zero
                  if (arr[i] + arr[j] + arr[k] == 0) {
                     //To print the three intergers
                     console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                     count++;
                  }
               }
            }
         }
         //Number of distinct triplets
         console.log("Number of triplets: " + count);
      },

      distance(x, y) {
         //returns the distance formulae
         return Math.pow((Math.pow(x, 2) + Math.pow(y, 2)), 0.5);
      },

      currentTime() {
         //to take current time in miliseconds
         var d = new Date();
         var time = d.getMilliseconds();
         return time;
      },

      elapsedTime(start, end) {
         var elapsed = end - start;
         return elapsed;
      },

      allPermutation(permutation, input) {
         //If the length of input id 0, print permutation
         if (input.length === 0) {
            console.log(permutation);
         }

         //Loop to iterate through input string
         for (let i = 0; i < input.length; i++) {
            //Recursive function to print get all permutations
            var result = this.allPermutation(permutation + input.charAt(i), input.substring(0, i) + input.substring(i + 1));
         }
         return result;
      },

      printBoard(game) {
         //Loop to iterate through board
         for (let i = 0; i < game.length; i++) {
            //to print '|'
            w.print("| ");
            for (let j = 0; j < game.length; j++) {
               w.print(game[i][j] + " | ");
            }
            w.print("\n");
         }
      },

      quadratic(a, b, c) {
         var delta = (b * b - 4 * a * c);
         var x1 = (-b + (Math.sqrt(delta))) / (2 * a);
         var x2 = (-b - (Math.sqrt(delta))) / (2 * a);

         //to print the root 1 and 2
         console.log("Root 1 is: " + x1);
         console.log("Root 2 is: " + x2);
      },


      windchillCalculate(t, v) {
         //Formula to find windchill

         //tempreature should be less than 50
         if (t > 50) {
            console.log("Temperature should not be greater than 50");
            return;
         }
         //speed range should be 4 to 119
         else if (v < 3 || v > 120) {
            console.log("Velocity should be less than 120 and greater than 3");
            return;
         }
         else {
            var windchill = 35.74 + 0.6215 * t + (0.4575 * t - 35.75) * Math.pow(v, 0.6);
            //print windchill
            return windchill;
         }
      }

   }