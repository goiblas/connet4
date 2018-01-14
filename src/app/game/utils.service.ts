import { Injectable } from '@angular/core';
import { P } from '../../redux/board/chip.model';

@Injectable()
export class UtilsService {

directions = [
    { h: 0, v: 1},
    { h: 0, v: -1},
    { h: 1, v: 0},
    { h: 1, v: 1},
    { h: 1, v: -1},
    { h: -1, v: 0},
    { h: -1, v: 1},
    { h: -1, v: -1}
];
amount = 4;

  constructor() { }

  public getHorizontal(matriz: Array<Array<P>>, col: number): number {

    const getColumn = matriz.map( horizontal => horizontal[col]).reverse();
    let position = getColumn.findIndex( c => c.symbol === 'e');
    if ( position >= 0) {
      position = (getColumn.length - 1) - position;
    }
    return position;

  }

  public isWin(matriz: Array<Array<P>>, lastPoint) {

    for ( const dir of this.directions) {
      const check = [];
      for (let i = 0; i < this.amount; i++) {
      let point = null;
      matriz.map( (v, indexV) => {
        // vertical
        if (indexV === lastPoint.h + (dir.v * i)) {
            v.map( (h, indexH) => {
              // horizontal
                if ( indexH === lastPoint.v + (dir.h * i)) {
                  point = {
                    h: indexH,
                    v: indexV,
                    symbol: h.symbol
                  };
                }
            });
        }
        });
        check.push(point);
      }
     if (check.length === this.amount && check.every( obj => obj && obj.symbol === check[0].symbol) ) {
          return check;
     }
  }
  return false;
  }

  enlighten (matriz: Array<Array<P>>, points: Array<any>) {
    for (const point of points) {
      matriz[point.v][point.h].isWin = true;
    }
    return matriz;
  }

  public isTied(board: Array<Array<P>>, lastPoint): boolean {
    const boardFill = board.map((h, ih) => {
      return h.map( (c, ic) => {
        if ( ih === lastPoint.h && ic === lastPoint.v) {
          return {...c, symbol: lastPoint.symbol };
        }
        return c;
      });
    });

    return boardFill.every( h => {
      return h.every( cell => cell.symbol !== 'e');
    });
  }
}
