export class Odd {
    constructor(private decimal: number,
                private fractional: number,
                private american: number,
                private impliedProbability: number) {
        
    }
    
    public get getDecimal(): number{
        return this.decimal;
    }

    public get getfractional(): number{
        return this.fractional;
    }

    public get getAmerican(): number{
        return this.american;
    }

    public get getImpliedProbability(): number{
        return this.impliedProbability;
    }

}