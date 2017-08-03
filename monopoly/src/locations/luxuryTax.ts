class LuxuryTax extends BoardLocation {
    private banker: Banker;

    constructor(banker: Banker) {
        super(38);
        this.banker = banker;
    }

    public landOn(token: Token): void {
        this.banker.decreaseBalance(token, 75);
    }
}