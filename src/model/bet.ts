export interface Bet{
    betSide: BetSide;
    amount: number;
}

export enum BetSide {
    Over,
    Under
}