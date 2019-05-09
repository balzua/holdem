import React from 'react';

import {Hand} from './hand';
import {Deck} from './deck';

export default class GameBoard extends React.Component {
    render() {
        const cardDeck: Deck = new Deck();
        const hand1: Hand = new Hand();
        cardDeck.shuffle();
        for (let i = 0; i <= 5; i++) {
            hand1.addCard(cardDeck.dealCard());
        }
        console.log(hand1);
        console.log(hand1.scoreHand());
        return (
            <div className="gameBoard">
            </div>
        )
    }
}