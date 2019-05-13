import {Hand} from './hand';
import {Card} from './card';

export class Player {
    public hand: Hand;
    public money: number;
    constructor(public name: string) {
        this.hand = new Hand();
        this.money = 0;
    }
    public drawCard(card: Card) {
        this.hand.addCard(card);
    }
}