import { Odd } from "../model/odd";


export class OddsConverter {
    constructor() {
        
    }
   
   public async fromProbability(prob: number): Promise<Odd>{
    // Decimal - 1 divided by (the percentage divided by 100) e.g. a probability of 50% = 1 / (50 / 100) = 2.
    // Fraction - (1 divided by (the percentage divided by 100)) minus 1 e.g. a probability of 25% = (1 / (25 / 100)) - 1 = 3 = 3/1.
    // American:
    // Positive odds - (100 divided by (the percentage divided by 100)) minus 100 e.g. a probability of 10% = (100 / (10 / 100)) - 100 = 900.
    // Negative odds - The probability divided by (1 minus (the probability divided by 100)) then multiply by -1 to convert into a negative e.g. a probability of 20% = (20 / (1 - (20/100))) * -1 = -25.
    const decimal = 1 / (prob / 100);
    let american = 0;
    if(prob <= 50){
        american = 100 / (prob / 100) - 100;
    }else{
        american = prob / ( 1- (prob/100)) * -1;
    }

    return new Odd(decimal, 0, american, prob);
   }

   public async fromDecimal(decimalOdd: number){
    // Positive american odds - (The decimal value minus one) multiplied by 100 e.g. a decimal value of 3 = (3 - 1) * 100 = 200.
    // Negative american odds - Negative 100 divided by (the decimal odds minus one) e.g. a decimal value of 1.2 = -100 / (1.2 - 1) = -500.
     const positiveAmerican = (decimalOdd - 1) * 100;
     const negativeAmerican = -100 / (decimalOdd - 1);
   }

}