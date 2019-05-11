var u = require('./Utility');

/** 
 * @Aim     : Deck of cards
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
class Shuffle extends DeckOfCards {

    cards() {

        var deck = [];

        //Deck of card
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                deck.push(this.suits[i] + " - " + this.ranks[j]);
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

        //Distribute 9 cards to 4 players
        for (let i = 1; i <= 4; i++) {

            console.log("\nPlayer number " + i + " have cards:");
            for (let j = 0; j < 9; j++) {
                console.log(deck.pop());
            }
        }
    }
}


var sh = new Shuffle();
sh.cards();

