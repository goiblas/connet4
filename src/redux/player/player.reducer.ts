import { SetPlayerAction, WinPlayerAction, TOGGLE_PLAYER, ADD_WIN } from './player.action';
import { Player } from './player.model';

const initialPlayer: Array<Player> = [
    {
        name: 'Jugador 1',
        actived: true,
        symbol: 'x',
        wins: 0
    },
    {
        name: 'Jugador 2',
        actived: false,
        symbol: 'o',
        wins: 0
    }
];

export function playerReducer( oldState: Array<Player> = initialPlayer, action: (SetPlayerAction | WinPlayerAction)): Array<Player> {
    switch (action.type) {
        case TOGGLE_PLAYER: {
            return oldState.map( player => {
                return {
                    ...player,
                    actived: !player.actived
                };
            });
        }
        case ADD_WIN: {
            return oldState.map( player => {
                if (player.name === action.name) {
                    return { ...player, wins: ++player.wins};
                }
                return player;
            });
        }
        default: {
            return oldState;
        }
    }
}
