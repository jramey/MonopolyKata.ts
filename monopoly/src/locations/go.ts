class Go extends BoardLocation {
    private banker: Banker;

    constructor(banker: Banker) {
        super(0);
        this.banker = banker;
    }

    public landOn(token: Token): void {
       this.banker.increaseBalance(token, 200);
    }
}