import { Player} from './player/player.model';
import { P } from './board/chip.model';

export interface AppState {
    board: Array<Array<P>>;
    player: Array<Player>;
}
