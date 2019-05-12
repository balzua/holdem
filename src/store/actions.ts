import {ActionTypes, NEW_GAME, NEW_ROUND, ADD_PLAYER} from './types';
import { Player } from '../components/player';

export function newGame(): ActionTypes {
    return {
        type: NEW_GAME
    };
}

export function addPlayer(name: string): ActionTypes {
    return {
        type: ADD_PLAYER,
        name
    }
}

export function newRound(): ActionTypes {
    return {
        type: NEW_ROUND
    }
}
