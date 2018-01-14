import { TestBed, inject } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { P, Chip } from '../../redux/board/chip.model';

const board: Array<Array<P>> = [[new P(), new P(), new P(), new P(), new P(), new P(), new P()],
              [new P(), new P(), new P(), new P(), new P(), new P(), new P()],
              [new P(), new P(), new P(), new P(), new P(), new P(), new P()],
              [new P(), new P(), new P(), new P(), new P(), new P(), new P()],
              [new P(), new P(), new P(), new P(), new P(), new P(), new P()],
              [new P(), new P(), new P(), new P(), new P(), new P(), new P()]];

describe('UtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService]
    });
  });

  it('should be created', inject([UtilsService], (service: UtilsService) => {
    expect(service).toBeTruthy();
  }));


  it('should return toggle win position', inject([UtilsService], (service: UtilsService) => {
    const arrayWin = [{
      v: 1,
      h: 2
    }];
    const newBoard = service.enlighten(board, arrayWin);
    expect(newBoard[arrayWin[0].v][arrayWin[0].h].isWin).toBeTruthy();
    expect(newBoard[0][1].isWin).toBeFalsy();
  }));

  it('should get vertical position', inject([UtilsService], (service: UtilsService) => {
    const pos = service.getHorizontal(board, 0);
    expect(pos).toEqual(board.length - 1);
  }));

  it('should get win', inject([UtilsService], (service: UtilsService) => {
    // FALSE
    const boardFalse = service.isWin(board, {});
    expect(boardFalse).toBeFalsy();

    // TRULY
    const SYMBOL = 'x';
    const lastPosition = {
      h: 0,
      v: 4,
      symbol: SYMBOL
    };

    board[0][1].symbol = SYMBOL;
    board[0][2].symbol = SYMBOL;
    board[0][3].symbol = SYMBOL;

    const boardWin = service.isWin(board, lastPosition);
    expect(boardWin).toBeTruthy();
  }));

  it('should be tied', inject([UtilsService], (service: UtilsService) => {

    const chip: Chip = {
      v: 0,
      h: 0,
      symbol: 'x'
    };

    const noTied = service.isTied(board, chip);
    expect(noTied).toBeFalsy();

    const boardTied = board.map( (h, ih) => {
      return h.map( (cell, iCell) => {
        if ( ih !== 0 || iCell !== 0) {
          return { ...cell, symbol: 'x'};
        }
        return cell;
      });
    });

    const isTied = service.isTied(boardTied, chip);
    expect(isTied).toBeTruthy();
  }));
});
