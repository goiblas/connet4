import { Action } from '@ngrx/store';
import { Chip } from './chip.model';

export const ADD_CHIP = '[Board] add';
export const RESET_BOARD = '[Board] reset';

export class BoardAdd implements Action {
    readonly type = ADD_CHIP;

    constructor(
      public chip: Chip
    ) {}
}

export class BoardReset implements Action {
    readonly type = RESET_BOARD;
  }

