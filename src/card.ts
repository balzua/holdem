export class Card {
    public stringName: string
    constructor(public value: number, public suit: string) {
        const suitNames = { 'H': 'Hearts', 'D': 'Diamonds', 'S': 'Spades', 'C': 'Clubs' };
        const suitStr = suitNames[this.suit];
        const valNames = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
        const valueStr = valNames[this.value - 2];
        this.stringName = `${valueStr} of ${suitStr}`;
    }
}