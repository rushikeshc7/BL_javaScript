

/**
 * @Aim     : Stack method
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 02/03/2019
 */

class Node {
    constructor(max, top) {
        this.max = max;
        this.top = top;
    }
}

//Object
var arrObj = new Node();

class Stack {
    constructor() {
        this.top = -1;
    }

    isEmpty() {
        if (this.top === -1) {
            return true;
        }
        return false;
    }

    push(x) {

        //If stack is full
        if (this.top === (this.max - 1)) {
            return false;
        }
        else {
            //Push the value in the stack from the top
            arrObj[++this.top] = x;
            return true;
        }
    }

    pop() {

        //If the stack is empty
        if (this.top == -1) {
            return null;
        }
        else {
            //Pop value from the top
            return arrObj[this.top--];
        }
    }

    peek() {

        //returns top value
        return arrObj[this.top];
    }

    size() {
        //returns size of the stack
        return this.top + 1;
    }

    printStk() {
        while(!this.isEmpty()){
           console.log(this.pop());
        }
    }
}

module.exports = {

    Stack
}