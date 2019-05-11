var fs = require('fs');

/** 
 * @Aim     : Data Structure methods
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 01/03/2019
 */


function Node(data) {
    this.value = data;
    this.next = null;
}
function queue() {
    this.front = null;
    this.rear = null;
}
function deque() {
    this.front = null;
    this.rear = null;
}
function linkList() {
    this.head = null;
}

linkList.prototype.addData = function (value) {
    
    var node = new Node(value)

    //if list is empty then make new node as head
    if (this.head === null) {
        this.head = node;
    }
    else {
        //Make current as head
        var current = this.head;

        //traverse through the list
        while (current.next != null) {
            current = current.next;
        }

        //add new node
        current.next = node;
    }
}

linkList.prototype.removeElement = function (value) {

    //if the head node holds the value to be deleted
    if (this.head.value == value) {
        this.head = this.head.next;   //change head
        return true;
    }
    else {

        current = this.head;
        prev = null;

        //traverse through the list and search the value to be deleted
        while (current != null) {
            if (value == current.value) {

                //unlink the node from linked list 
                prev.next = current.next;
                return true;
            }
            prev = current;
            current = current.next;
        }
    }
    return false;
}
linkList.prototype.print = function () {
    var temp = this.head;
    var str = "";
    while (temp != null) {
        //append values to str
        str += " " + temp.value;
        temp = temp.next;

    }
     var str1 = str.toString().trim(" ");
     console.log("LinkedList:" +str1);

    try {

        //write into the file
        fs.writeFile('unorderedList.txt', str1, 'utf8');
        console.log("File is updated.");

    }
    catch (err) {
        console.log("Error");
    }
}

linkList.prototype.printValue = function () {
    var temp = this.head;
    var str = "";
    while (temp != null) {
        //append values to str
        str += " " + temp.value;
        temp = temp.next;

    }
     var str1 = str.toString().trim(" ");
     console.log("LinkedList:" + str1);
}
linkList.prototype.searchElement = function (data) {
    var current = this.head;
    var position = 0;
    while (current != null) {

        //search the data in the list
        if (current.value == data) {
            return position;
        }
        current = current.next;
        position++;
    }
    return -1;
}

queue.prototype.enqueue = function (element) {
    let node = new Node(element);

    ////if queue is empty, then make node as front and rear
    if (this.front == null) {
        this.front = node;
        this.rear = node;
    }
    else {
        //next of the node points to the rear of the queue then make node as a rear 
        node.next = this.rear;
        this.rear = node;
    }
}

queue.prototype.dequeue = function () {

    //if queue is empty
    if (this.rear == null) {
        return false;
    }

    //If queue has only one value
    if (this.rear == this.front) {
        let data = this.front.value;
        this.rear = null;
        this.front = null;
        return data;
    }
    else {

        let data = this.front.value;
        let temp = this.rear;

        //iterate through the queue
        while (temp.next != this.front) {
            temp = temp.next;
        }
        
        //Make front as a temp and next of front null
        this.front = temp;
        this.front.next = null;
        return data;
    }
}

queue.prototype.print = function () {
    let temp = this.rear;

    //Print the value
    while (temp != null) {
        console.log(temp.value);
        temp = temp.next;
    }
}
queue.prototype.isEmpty=function(){
    if(this.front==null)
    {
        return true;
    }
    return false;
}

deque.prototype.addFront = function (data) {
    let node = new Node(data);

    //If deque id empty make node as front and rear 
    if (this.front == null) {
        this.front = node;
        this.rear = node;
    }
    else {
        //Add new node from front
        this.front.next = node;
        this.front = node;
    }
}

deque.prototype.addRear = function (data) {
    let node = new Node(data);

    //If deque id empty make node as front and rear 
    if (this.front == null) {
        this.front = node;
        this.rear = node;
    }
    else {

        //Add new node from rear
        node.next = this.rear;
        this.rear = node;
    }
}

deque.prototype.removeRear = function () {

    //if deque is empty
    if (this.rear == null) {
        return false;
    }

    //If deque holds only one element
    if (this.rear == this.front) {
        let data = this.rear.value;
        this.rear = null;
        this.front = null;
        console.log(data);
        return data;
    }
    else {

        //Remove from rear
        let data = this.rear.value;
        this.rear = this.rear.next;
        return data;
    }
}

deque.prototype.removeFront = function () {

    //If deque is empty
    if (this.front == null) {
        return false;
    }

    //If deque holds only one value
    if (this.rear == this.front) {
        let data = this.rear.value;
        this.rear = null;
        this.front = null;
        return data;
    }
    else {

        let data = this.front.value;
        let temp = this.rear;

        //traverse through the deque
        while (temp.next != this.front) {
            temp = temp.next;
        }

        //Make front as a temp and next of front null
        this.front = temp;
        this.front.next = null;
        return data;
    }
}

deque.prototype.isEmpty = function () {
    if (this.front == this.rear == null) {
        return true;
    }
    return false;
}
deque.prototype.print = function () {
    let temp = this.rear;

    //Print values
    while (temp != null) {
        console.log(temp.value);
        temp = temp.next;
    }
}


module.exports = {
    Node,
    linkList,
    queue,
    deque
}
