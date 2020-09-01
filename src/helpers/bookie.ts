import { OddsConverter } from './oddsConverter';
import {Bet} from '../model/bet'
import { Odd } from '../model/odd';
import {MatchOdd} from '../model/match'
import {BetSide} from '../model/bet'

export class Bookie {
   
    private _oddsConverter: OddsConverter;
    private VIGORISH: number = 0.15;
    private INITIAL_PROB_WEIGHT: number = 50;
   
    constructor() {
        this._oddsConverter = new OddsConverter();
    }
    
    public async setOdds(bets: Array<Bet>, calculatedProbs: MatchOdd): Promise<Array<Bet>>
    {
        if (calculatedProbs !== undefined)
        {
            let player1Prob = calculatedProbs.firstPlayerOdd.odd.getImpliedProbability;
            let player2Prob = calculatedProbs.secondPlayerOdd.odd.getImpliedProbability;

            let player1Amount = (player1Prob / 100) * this.INITIAL_PROB_WEIGHT;
            let player2Amount = (player2Prob / 100) * this.INITIAL_PROB_WEIGHT;
            
            let stubBets: Bet[] = [];

            if(player1Prob > player2Prob){
                stubBets.push({betSide: BetSide.Over, amount: player1Amount});
                stubBets.push({betSide: BetSide.Under, amount: player2Amount});
            }else{
                stubBets.push({betSide: BetSide.Over, amount: player2Amount});
                stubBets.push({betSide: BetSide.Under, amount: player1Amount});
            }
            
            bets = stubBets.concat(bets);
        }

        let probs = this.balanceProbFromBets(bets);

        let impliedOdds = {};
        let numOutcomes = 2; //only two possible outcomes (over and under)
        
        for (let k in probs)
        {
            let p = probs[k] + this.VIGORISH / numOutcomes;
            impliedOdds[k] = (await this._oddsConverter.fromProbability(p)).getAmerican;
        }

        return bets;
    }

    public async balanceProbFromBets(bets: Array<Bet>): Promise<any>
    {
        let total = 0; 
        let outcomes = {};

        bets.forEach(function(betTuple)
        {
            let outcome = betTuple.betSide;
            let amount = betTuple.amount;
            
            // increment total bet and outcome specific amount
            total += amount;		
            outcomes[outcome] = outcomes[outcome] + amount || amount;
        });

        for (let k in outcomes)
        {
            outcomes[k] /= total;
        }
        return outcomes;
    }
}