import React from 'react';
import {connect} from 'react-redux';
import {GameState} from '../store/types';

import {Player} from './player';
import GameManager from './game-manager';

interface GameBoardProps {
    roundNumber: number,
    players: Player[]
}

export class GameBoard extends React.Component<GameBoardProps, any> {
    render() {
        const playerListItems = this.props.players.map(player => 
            <li className="list-group-item d-flex d-flex-row justify-content-between">
                <span>{player.name}</span>
                <span>${player.money}</span>
            </li>
        );
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h4 className="text-left">Players</h4>
                        <ul className="playerList list-group list-group-flush mb-4">
                            {playerListItems}
                        </ul>
                        <h4 className="text-left">Game Info</h4>
                        <div className="text-left">
                            <b>Round: </b> {this.props.roundNumber}<br />
                            <b>Big Blind: </b> Placeholder<br />
                            <b>Winnings: </b> Placeholder<br />
                            <b>Best Hand: </b> Placeholder<br />
                        </div>
                    </div>
                    <div className="col-9">
                        Game Board here
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <GameManager />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: GameState) => ({
    roundNumber: state.roundNumber,
    players: state.players
});

export default connect(mapStateToProps)(GameBoard);