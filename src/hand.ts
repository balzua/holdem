import {Card} from './card';

class Hand {
    public cards: Card[] = [];
    private ranks: number[][] = [];
    public addCard(card: Card) {
        this.cards.push(card);
    }
    private _countRanks() {
        for (let i = 2; i <= 14; i++) {
            let r = this.cards.filter(card => card.value == i);
            this.ranks[r.length].push(r[0].value);
        }
    }
    private _isFlush(): boolean {
        for (let i = 1; i < this.cards.length; i++) {
            if (this.cards[0].suit != this.cards[i].suit) {
                return false;
            }
        }
        return true;
    }
    private _isFourOfAKind(): number {
        if (this.ranks[4].length == 0) {
            return 0;
        }
        return this.ranks[4][0];
    }
    public scoreHand(): number {
        
        // Check for straight
        let isStraight = true;
        return 0;
    }
}