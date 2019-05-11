var w = require('util');
/** 
 * @Aim     : Queue using Linked list
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 04/03/2019
 */


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class QueueUsingLinkedList {
    constructor(head) {
        this.head = head;
    }

    enqueue(data) 
	{
		var temp = this.head;
		var newNode = new Node(data);

		//If queue is empty
		if(this.head == null)
		{
			this.head = newNode;
		}
		else
		{
			//Iterate through queue
			while(temp.next != null) 
			{
				temp = temp.next;
			}
			temp.next = newNode;
		}
		return true;
	}
	
	
	dequeue()
	{
		var temp = this.head;

		//IF queue is empty
		if(this.head == null) 
		{
			console.log("Queue is empty");
			return null;
		}
		else 
		{
			//Make next of temp as head 
			this.head = temp.next;
			temp.next = null;
			return temp.data;
		}
	}
	
	
	toString() 
	{
		var temp = this.head;
		var string = "";

		//Traverse through the queue
		while(temp != null) 
		{
			//Add data to the string
			string = string + temp.data;
			if(temp.next != null)
			{
				string = string + ",";
			}
			temp = temp.next;
		}
		return string;
	}
	
	size() 
	{
		var temp = this.head;
		var count = 0;

		//Iterate through queue
		while(temp != null) 
		{
			//Increment count
			count++;
			temp = temp.next;
		}
		return count;
	}

	print() {
        var pnode = this.head;
        var str = "";
        while (pnode) {

            str += pnode.data + " ";
            pnode = pnode.next;

        }
		console.log(str);
	}
}
module.exports = {
    QueueUsingLinkedList
}