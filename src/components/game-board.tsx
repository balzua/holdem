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
        const playerListItems = this.props.players.map(player => <li>{player.name}</li>);
        return (
            <div className="gameBoard">
                <div className="playerList">
                    <h2>Players</h2>
                    <ul className="playerList">
                        {playerListItems}
                    </ul>
                </div>
                <span className="roundNumber">{this.props.roundNumber}</span>
                <GameManager />
            </div>
        )
    }
}

const mapStateToProps = (state: GameState) => ({
    roundNumber: state.roundNumber,
    players: state.players
});

export default connect(mapStateToProps)(GameBoard);