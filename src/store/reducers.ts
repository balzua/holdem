import {GameState, ActionTypes, NEW_GAME, ADD_PLAYER, NEW_ROUND} from './types';
import { Player } from '../components/player';

const initialState: GameState = {
    players: [],
    roundNumber: 0
};

export function reducer(state = initialState, action: ActionTypes): GameState {
    switch (action.type) {
        case NEW_ROUND:
            const newRoundNumber: number = state.roundNumber;
            return Object.assign({}, state, {roundNumber: newRoundNumber});
        case NEW_GAME:
            return initialState;
        case ADD_PLAYER:
            const newPlayer = new Player(action.name);
            return Object.assign({}, state, {players: [...state.players, newPlayer]})
        default:
            return state;
    }
}