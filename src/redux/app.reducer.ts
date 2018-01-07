import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { playerReducer } from './player/player.reducer';
import { boardReducer } from './board/board.reducer';

export const AppReducer: ActionReducerMap<AppState> = {
   board: boardReducer ,
   player: playerReducer
};
