var u = require('./Utility');
var que = require('../Data Structure/QueueUsingLinkedList');
/** 
 * @Aim     : Deck of cards in a queue implemented using Linked list 
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 08/03/2019
 */


class DeckOfCards {
    constructor() {
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

    }
}
class ShuffleCards extends DeckOfCards {
    cardsQ() {
        var deck = [];

        var p = 0;
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                deck[p] = this.suits[i] + " - " + this.ranks[j];
                p++;
            }
        }

        for (let k = 0; k < deck.length; k++) {
            console.log(deck[k]);
        }

        //Random cards
        for (let i = 0; i < deck.length; i++) {
            var random = Math.floor(Math.random() * deck.length);
            var temp = deck[random];
            deck[random] = deck[i];
            deck[i] = temp;
        }

        console.log();

        //Queue
        //enqueue cards in the queue
        var queue = new que.QueueUsingLinkedList();
        for (var k = 0; k < deck.length; k++) {
            queue.enqueue(deck[k]);
        }

        //Distribute 9 cards to 4 players
        console.log("Distributing 9 cards to palyers");
        var k = 0;
        for (let i = 1; i <= 4; i++) {
            console.log("\nPlayer number " + i + " have cards:");
            for (let j = 0; j < 9; j++) {
                console.log(queue.dequeue());
                k++;
            }
        }
    }
}
var shQ = new ShuffleCards();
shQ.cardsQ();

