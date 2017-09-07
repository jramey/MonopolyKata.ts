class DecreaseBalance implements Card {
    private amount: number;
    private banker: Banker;

    constructor(amount: number, banker: Banker) {
        this.amount = amount;
        this.banker = banker;
    }

    public play(token: Token): void {
        this.banker.decreaseBalance(token, this.amount);
    }
}