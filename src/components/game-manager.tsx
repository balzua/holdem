// This is (intended) as a temporary component for now, to provide controls to manage the game state
// Later on, will move various functionalities into their own components & describe when to display the relevant controls using GameState

import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {addPlayer} from '../store/actions';

interface GameManagerProps {
    dispatch: Dispatch
}

export class GameManager extends React.Component<GameManagerProps, any> {
    submitAddPlayer(e: any) {
        e.preventDefault();
        this.props.dispatch(addPlayer(e.target.playerName.value));
    }
    render() {
        return (
            <form name="addPlayer" onSubmit={(e) => this.submitAddPlayer(e)}>
                <input name="playerName" type="text" />
                <input type="submit" value="Add Player" />
            </form>
        );
    } 
}

export default connect()(GameManager);