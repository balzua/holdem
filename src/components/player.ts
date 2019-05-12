import {Hand} from './hand';
import {Card} from './card';

export class Player {
    public hand: Hand;
    constructor(public name: string) {
        this.hand = new Hand();
    }
    public drawCard(card: Card) {
        this.hand.addCard(card);
    }
}