import { BoardAdd, BoardReset, ADD_CHIP, RESET_BOARD } from './board.actions';
import { P } from './chip.model';


// 6 x 7
const initial  = [[new P(), new P(), new P(), new P(), new P(), new P(), new P()],
                  [new P(), new P(), new P(), new P(), new P(), new P(), new P()],
                  [new P(), new P(), new P(), new P(), new P(), new P(), new P()],
                  [new P(), new P(), new P(), new P(), new P(), new P(), new P()],
                  [new P(), new P(), new P(), new P(), new P(), new P(), new P()],
                  [new P(), new P(), new P(), new P(), new P(), new P(), new P()]];

function removeNews(board) {
    return board.map( h => {
        return h.map( v => {
            if ( v.isNew) {
                return {...v, isNew: false };
            } else {
                return v;
            }
        });
    });
}

export function boardReducer( oldState: Array<Array<P>> = initial, action: (BoardAdd | BoardReset)) {
    switch (action.type) {
        case ADD_CHIP: {
            return removeNews(oldState).map( (h, indexH) => {
                if (indexH === action.chip.h) {
                    return h.map( (v, indexV) => {
                        if ( indexV === action.chip.v) {
                            return {...v, isNew: true, symbol: action.chip.symbol};
                        }
                        return v;
                    });
                }
                return h;
            });
        }
        case RESET_BOARD: {
            return initial;
        }
        default: {
            return oldState;
        }
    }
}
