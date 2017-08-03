class IncomeTax extends BoardLocation {
    private banker: Banker;

    constructor(banker: Banker) {
        super(4);
        this.banker = banker;
    }

    public landOn(token: Token): void {
        const tenPercentOfTotalWorth = this.banker.getBalance(token) * .1;

        if (tenPercentOfTotalWorth > 200)
            this.banker.decreaseBalance(token, 200);
        else
            this.banker.decreaseBalance(token, tenPercentOfTotalWorth);
    }
}