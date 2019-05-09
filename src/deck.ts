import {Card} from './card';

export class Deck {
    private _cards: Card[] = [];
    constructor() {
        let suits = { 'H': 0, 'D': 0, 'C': 0, 'S': 0 }
        for (let suit in suits) {
            for (let i = 2; i <= 14; i++) {
                this._cards.push(new Card(i, suit));
            }
        }
    }
    public listCards() {
        this._cards.forEach(card => {
            console.log(card.stringName);
        })
    }
    public dealCard(): Card {
        if (this._cards.length == 0) {
            // TO DO: Throw an error here, as deck is empty.
            return new Card(4, 'S');
        } else {
            const dealtCard: Card = this._cards[0];
            this._cards.shift();
            return dealtCard;
        }
    }
    public shuffle() {
        let i = this._cards.length;
        while (i > 0) {
            let j = Math.floor(Math.random() * i--);
            [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
        }
    }
}