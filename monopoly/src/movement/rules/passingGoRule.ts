class PassingGoRule implements Rule {
    private banker: Banker;

    constructor(banker: Banker) {
        this.banker = banker;
    }

    public evaluate(token: Token, startingPosition: number, landingPosition: number): void {
        if (startingPosition > landingPosition)
            this.banker.increaseBalance(token, 200);
    }
}