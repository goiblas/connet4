import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { TOGGLE_PLAYER, SetPlayerAction, WinPlayerAction } from './../../redux/player/player.action';
import { Chip, P } from '../../redux/board/chip.model';
import { BoardAdd, BoardReset } from '../../redux/board/board.actions';
import { Player } from '../../redux/player/player.model';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  board: Array<Array<P>>;
  players: Array<Player>;
  columns: Array<Number>;
  currentPlayer: Player;
  locked = false;

  constructor( private store: Store<AppState>, private utils: UtilsService ) { }

  ngOnInit() {

    this.store.select('board').subscribe( stateBoard => {
      this.board = stateBoard;
      this.columns = stateBoard[0].map( (cell, index) => index );
    });

    this.store.select('player').subscribe( players => {
      this.players = players;
      this.currentPlayer = players.filter( p =>  p.actived )[0];
    });
  }


  columnSeleted(v) {
    const h = this.utils.getHorizontal(this.board, v);

    if (h >= 0 && !this.locked) {
      const chip: Chip = {
        v: v,
        h: h,
        symbol: this.currentPlayer.symbol
      };
      const action = new BoardAdd(chip);
      this.store.dispatch(action);

      const win = this.utils.isWin( this.board, chip);
      if (win) {
        this.board = this.utils.enlighten(this.board, win);
        this.locked = true;
        const actionAddWin = new WinPlayerAction( this.currentPlayer.name);
        this.store.dispatch(actionAddWin);
        setTimeout( () => this.restart(), 3000);
      } else if ( this.utils.isTied(this.board, chip)) {
        this.restart();
      } else {
        this.store.dispatch({ type: TOGGLE_PLAYER});
      }

    }
  }

  restart () {
    this.locked = false;
    const action_reset = new BoardReset();
    this.store.dispatch({ type: TOGGLE_PLAYER});
    this.store.dispatch(action_reset);
  }
}
