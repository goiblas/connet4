export interface Chip {
    v: number;
    h: number;
    symbol: string;
}

export class P {
    constructor(
        public symbol: string = 'e',
        public isNew: boolean = false,
        public isWin: boolean = false
    ) {}
}
