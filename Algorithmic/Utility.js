var rl = require('readline-sync');
var w = require('util');
module.exports =
   {

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

      anagram(str1, str2) {
         str1 = str1.toLowerCase();
         str2 = str2.toLowerCase();

         if (str1.length != str2.length) {
            return false;

         }

         else {
            var s1 = str1.split("");
            var s2 = str2.split("");
            s1.sort();
            s2.sort();
            for (var i = 0; i < s1.length; i++) {
               if (s1[i] !== s2[i])
                  return false;
            }
            return true;
         }
      },

      primeNumber(n) {

         var strArr = [1000];
         var position = 0;
         for (let i = 2; i <= n; i++) {
            var isPrime = true;
            for (let j = 2; j <= i / 2; j++) {
               if ((i % j) == 0) {
                  isPrime = false;
                  break;
               }
            }
            if (isPrime == true) {
               //if the number id prime, put it in the strArr
               strArr[position] = i;
               position++;
            }
         }
         var strArray = [position];

         //Loop to take values from strArr to strArray
         for (let k = 0; k < position; k++) {
            strArray[k] = strArr[k];
         }
         return strArray;    //return strArray

      },

      checkPalindrome(num) {
         if (num.length < 2) {
            return false;
         }

         array = ("" + num).split("");
         var n = array.length;

         //loop to traverse through the array
         for (let i = 0; i < n; i++) {
            //returns false if array[i] is not equal to array[n-1-i]
            if (array[i] != array[n - 1 - i]) {
               return false;
            }
         }
         return true;
      },

      binSearchInt(arr, key) {

         var first = 0;
         var last = arr.length - 1;
         var mid;
         //iterate through array
         while (first <= last) {
            //Find middle of array
            mid = (first + last) / 2;

            //if middle element is greater than key then middle will become last
            if (arr[mid] > key) {
               last = mid;
            }

            //if middle element is less than key then middle + 1 will become first
            else if (arr[mid] < key) {
               first = mid + 1;
            }
            else {
               //if above two conditions failed, return middle
               return mid;
            }
         }
         return -1;
      },

      binSearchStr(array, keyStr) {
         var n = array.length;
         var first = 0;
         var last = n - 1;
         var mid;

         //iterate through array
         while (first <= last) {
            //Find middle of array
            mid = (first + last) / 2;

            //if middle element is greater than key then middle will become last
            if (keyStr.localeCompare(array[mid]) == -1) {
               last = mid;
            }

            //if middle element is less than key then middle + 1 will become first
            else if (keyStr.localeCompare(array[mid]) == 1) {
               first = mid + 1;
            }
            else {
               //if above two conditions failed, return middle
               return mid;
            }
         }
         return -1;
      },

      insertionSortInt(arrInt, nI) {

         for (let i = 1; i < nI; i++) {
            var a = arrInt[i];
            var j = i - 1;

            //Loop till j is greater than or equal to 0 and arr[j] is greater than a             
            while (j >= 0 && arrInt[j] > (a)) {
               //if above condtion is true then swap values
               arrInt[j + 1] = arrInt[j];
               j = j - 1;
            }
            arrInt[j + 1] = a;
         }

         //print the sorted array
         console.log("Sorted array is:");
         for (let k = 0; k < nI; k++) {
            console.log(arrInt[k] + " ");
         }
      },

      bubbleSortInt(arrInt1, nI1) {

         var temp;
         nI1 = arrInt1.length;
         console.log("Sorted array is:");

         //Loop to iterate through array
         for (let i = 0; i < nI1; i++) {
            for (let j = i + 1; j < nI1; j++) {
               //if arr[i] is greater than arr[j] then swap
               if (arrInt1[i] > arrInt1[j]) {
                  temp = arrInt1[i];
                  arrInt1[i] = arrInt1[j];
                  arrInt1[j] = temp;
               }
            }
            
         }

         for (let k = 0; k < arrInt1.length; k++) {
            console.log(arrInt1[k] + " ");
         }
      },

      bubbleSortStr(arrStr1, nS1) {

         var temp;
         nS1 = arrStr1.length;
         console.log("Sorted array is:");

         //Loop to iterate through array
         for (let i = 0; i < nS1; i++) {
            for (let j = i + 1; j < nS1; j++) {
               //if arr[i] is greater than arr[j] then swap
               if (arrStr1[i].localeCompare(arrStr1[j]) > 0) {
                  temp = arrStr1[i];
                  arrStr1[i] = arrStr1[j];
                  arrStr1[j] = temp;
               }
            }
            

         }
         for (let k = 0; k < arrStr1.length; k++) {
            console.log(arrStr1[k] + " ");
         }

      },

      question(count, first, last, mid, x, n) {

         //Ask the user if he found the number
         console.log("Is your number:" + mid);
         //Choose between 'Yes','High' and 'Low'
         var ch = rl.question("Select between 'Yes','High' and 'Low':");

         do {
            count++;
            //If user chose 'Yes', then print the number pass it took to find the number
            if (ch == 'High') {
               first = mid + 1;
            }
            //If user chose 'High', then middle + 1 will become first element
            else if (ch == 'Yes') {
               console.log("Your number is:" + mid);
               console.log("Your number found in " + count + " counts");
               break;
            }
            //If user chose 'Low', then middle will become last element
            else if (ch == 'Low') {
               last = mid;
            }

            //If number of pass is less than size of array, then find the middle
            if (count < n) {
               mid = Math.floor((first + last) / 2);
               console.log("Is your number:" + mid);
               var ch = rl.question("Select between 'Yes','High' and 'Low':");
            }
         } while (first <= last)

         //if number of pass is greater than size of array then, print element not found
         if (count > n) {
            console.log("Element not found");

         }

      },

      insertion(arr, n) {

         //Loop to iterate through array
         for (let i = 1; i < n; i++) {
            var a = arr[i];
            let j = i - 1;

            //Loop till j is greater than or equal to 0 and arr[j] is greater than a       
            while (j >= 0 && arr[j] > a) {
               //if above condtion is true then swap values
               arr[j + 1] = arr[j];
               j = j - 1;
            }
            arr[j + 1] = a;
         }
         //print the sorted array
         console.log("Sorted array is:");
         for (let k = 0; k < n; k++) {
            console.log(arr[k] + " ");
         }

      },

      bubble(arr, n) {

         var temp;
         n = arr.length;
         console.log("Sorted array is:");

         //Loop to iterate through array
         for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
               //if arr[i] is greater than arr[j] then swap
               if (arr[i] > arr[j]) {
                  temp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = temp;
               }
            }
         }
         //print arr[k]
         for (let k = 0; k < arr.length; k++) {
            console.log(arr[k] + " ");
         }


      },



      merge(str, first, mid, last) {


         //Divide the string in two parts i.e left array and right array 
         var left = [];
         var right = [];
         let length1 = mid - first + 1;
         let length2 = last - mid;

         //Loop to iterate through left array
         for (let i = 0; i < length1; ++i) {

            //copy data to left[]
            left[i] = str[first + i];
         }

         //Loop to iterate through right array
         for (let j = 0; j < length2; ++j) {

            //copy data to right[]
            right[j] = str[mid + 1 + j];
         }


         let i = 0, j = 0;
         let k = first;
         while (i < length1 && j < length2) {
            if (left[i] <= right[i]) {
               str[k] = left[i];
               i++;
            }
            else {
               str[k] = right[j];
               j++;
            }
            k++;
         }

         //take remaining elemenst of left[]
         while (i < length1) {
            str[k] = left[i];
            i++;
            k++;
         }

         //take remaining elemenst of right[]
         while (i < length1) {
            str[k] = right[j];
            j++;
            k++;
         }

      },

      sort(str, first, last) {

         if (first < last) {
            let mid = (Math.floor((first + last) / 2));
            //sort the first and second halves
            this.sort(str, first, mid);
            this.sort(str, mid + 1, last);

            //merge the sorted arrays
            this.merge(str, first, mid, last);
         }
         return str;
      },

      vendingMachine(notes, amt, total, i) {
         var rem = 0;
         //If amount become 0, return total
         if (amt == 0) {
            return total;
         }
         else {
            if (amt >= notes[i]) {
               //to find the number of notes
               var result = amt / notes[i];

               //to find the remaining amount 
               rem = amt % notes[i];
               amt = rem;

               //To find total amount
               total = total + result;
               console.log(notes[i] + "'s notes " + result);
            }
         }
         i++;
         //return total number no of notes
         return vendingMachine(notes, amt, total, i);
      },

      binSearchWord(words, x) {
         var first = 0;
         var last = words.length;

         while (first < last) {
            //To find the middle element of array
            var mid = (first + last) / 2;

            //if x is less than middle element then middle will become last
            if (x.localeCompare(words[mid]) < 0) {
               last = mid;
            }
            //if x is greater than middle element then middle + 1 will become first
            else if (x.localeCompare(words[mid]) > 0) {
               first = mid + 1;
            }
            else {
               //will return middle element
               return mid;
            }

         }
         return -1;
      },

      tempConv(temp, t) {
         if (t == 'c') {
            //Formula to convert temperature(C) to temperature(F)  
            return (temp * 9 / 5) + 32;
         }
         else {
            //Formula to convert temperature(F) to temperature(C)
            return (temp - 32) * 5 / 9;
         }
      },

      temperatureConversion() {
         var t = rl.question("Enter 'f' for fahrenheit and 'c' for celcius as temperature:");
         if (t == 'c') {
            //To take the user input
            var cTemp = rl.question("Enter temperature in celcius:");

            console.log("Temperature in farenheit is: ", this.tempConv(cTemp, t));

         }
         else if (t == 'f') {
            //To take the user input
            var fTemp = rl.question("Enter temperature in fahrenheit:");

            console.log("Temperature in celcius is: ", this.tempConv(fTemp, t));
         }
         else {
            console.log("You Entered a wrong unit. Please Enter 't' or 'c' as unit.");
            tempConversion();
         }
      },

      paymentMonth(P, Y, R) {
         //Formula to find monthly payment
         var n = -1 * 12 * Y;
         var r = R / (12 * 100);
         var payment = (P * r) / (1 - Math.pow((1 + r), n));

         //returns monthly payment
         return payment;
      },

      sqRoot(c) {
         var t = c;

         //Take positive number
         if (c > 0) {
            //epsilon = 1e-15
            var epsilon = Math.pow(1 * 2.71828, -15);

            //loop till you get the desired accuracy
            while (Math.abs(t - (c / t)) > (epsilon * t)) {
               //take the average of c/t and t and replace it with t
               t = Math.floor(((c / t) + t) / 2);
            }
         }
         else {
            console.log("Number Can,t be negative, please enter positive number");
         }

         return t;
      },

      toBinary(n) {
         var bin = "";
         var revBin = "";
         //Number should be positive
         while (n > 0) {
            //Take mod then put the remainder in array
            bin = n % 2;
            revBin = bin + revBin;
            n = Math.floor(n / 2);

         }
         console.log("Binary Number is:");
         while (revBin.length < 8) {
            revBin = '0' + revBin;
         }
         console.log(revBin);
         return revBin;
      },


      swapNibbles(binStr) {
         var len = binStr.length;

         //Iterate through the binaryStr
         for (let i = 0; i < 8 - len; i++) {
            binStr = "0" + binStr;
         }

         //take 2 substrings from binaryStr
         var n1 = binStr.substring(0, 4);
         var n2 = binStr.substring(4);

         //return n2 + n1 
         return (n2 + n1);
      },

      binToDec(result) {
         var temp = result;
         var decValue = 0;
         var base = 1;
         while (temp > 0) {
            //Take mod and put remainder in variable last 
            var last = temp % 10;
            temp = Math.floor(temp / 10);

            //Add the product of last and base variables to decValue
            decValue += last * base;
            base = base * 2;
         }

         //return decimal value
         return decValue;
      },

      powerOf(value) {

         var binStr = value.toString();
         var n = binStr.length;
         //Loop to iterate through binString
         for (let i = 0; i <= n; i++) {
            //if charaters from binString is not equal to 0 then return false
            if (binStr.charAt(i) != 0) {
               return false;
            }
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


   }
