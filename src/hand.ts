import {Card} from './card';
const HAND_TIERS = {
    ROYAL_FLUSH: 9,
    STRAIGHT_FLUSH: 8,
    FOUR_KIND: 7,
    FULL_HOUSE: 6,
    FLUSH: 5,
    STRAIGHT: 4,
    THREE_KIND: 3,
    TWO_PAIR: 2,
    PAIR: 1,
    HIGH_CARD: 0
}

class Hand {
    public cards: Card[] = [];
    public handTier: number = 0;
    private _ranks: number[][] = [];
    private _handValues: number[] = [];
    public addCard(card: Card) {
        this.cards.push(card);
        this._countRanks();
    }
    private _countRanks() {
        for (let i = 2; i <= 14; i++) {
            let r = this.cards.filter(card => card.value == i);
            this._ranks[r.length].push(r[0].value);
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
    private _determineHandMode() {
        if (this._ranks[4].length > 0) {
            return HAND_TIERS.FOUR_KIND;
        } else if (this._ranks[3].length > 0) {
            return (this._ranks[2].length > 0) ? HAND_TIERS.FULL_HOUSE : HAND_TIERS.THREE_KIND;
        } else if (this._ranks[2].length > 1) {
            return HAND_TIERS.TWO_PAIR;
        } else if (this._ranks[2].length > 0) {
            return HAND_TIERS.PAIR;
        } else {
            return HAND_TIERS.HIGH_CARD;
        }
    }
    private _isStraight(): boolean {
        // Immediately return false if any value is repeated more than once, since we can't have a straight in that case. 
        if (this._ranks[1].length !== 5) {
            return false;
        }
        for (let i = 0; i < this.cards.length; i++) {
            this._handValues.push(this.cards[0].value);
        }
        this._handValues.sort();
        // Since ace can be high or low, and is treated as high in the Card class, check for the following: 
        // Difference between highest card and lowest card is 4, or it is 3 and the highest card is an ace (indicating a straight A, 2, 3, 4, 5)
        if (this._handValues[4] - this._handValues[0] === 4 || (this._handValues[3] - this._handValues[0] === 3 && this._handValues[4] === 14)) {
            return true;
        } else {
            return false;
        }
    }

    public scoreHand(): number {
        let isStraight = this._isStraight();
        let isFlush = this._isFlush();
        if (isFlush && isStraight) {
            return (Math.max(...this._handValues) === 14) ? HAND_TIERS.ROYAL_FLUSH : HAND_TIERS.STRAIGHT_FLUSH;
        } else if (isFlush) {
            return HAND_TIERS.FLUSH;
        } else if (isStraight) {
            return HAND_TIERS.STRAIGHT;
        } else {
            return this._determineHandMode();
        }
    }
}