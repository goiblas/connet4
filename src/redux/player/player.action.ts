import { Action } from '@ngrx/store';

export const TOGGLE_PLAYER = '[Player] toggle';
export const ADD_WIN = '[Player] add win';

export class SetPlayerAction implements Action {
    readonly type = TOGGLE_PLAYER;
    constructor() {}
}

export class WinPlayerAction implements Action {
    readonly type = ADD_WIN;
    constructor( public name: string) {}
}
