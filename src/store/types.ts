import {Player} from '../components/player';

export const NEW_GAME = 'NEW_GAME';
export const ADD_PLAYER = 'ADD_PLAYER'
export const NEW_ROUND = 'NEW_ROUND';

export interface NewGameAction {
    type: typeof NEW_GAME
}

export interface AddPlayerAction {
    type: typeof ADD_PLAYER,
    name: string
}

export interface NewRoundAction {
    type: typeof NEW_ROUND
}

export interface GameState {
    players: Player[]
    roundNumber: number
}

export type ActionTypes = NewGameAction | AddPlayerAction | NewRoundAction;