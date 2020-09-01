export interface Bet{
    betSide: BetSide;
    amount: number;
}

export enum BetSide {
    //Over is the favorite to win
    Over,
    //Under is the underdog
    Under
}