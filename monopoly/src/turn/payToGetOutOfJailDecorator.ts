class PayToGetOutOfJailDecorator implements Turn {
    private innerTurn: Turn;
    private token: Token;
    private banker: Banker;
    private jailor: Jailor;

    constructor(innerTurn: Turn, token: Token, banker: Banker, jailor: Jailor) {
        this.innerTurn = innerTurn;
        this.token = token;
        this.banker = banker;
        this.jailor = jailor;
    }

    public take(): void {
        if (this.banker.getBalance(this.token) > 50) {
            this.banker.decreaseBalance(this.token, 50);
            this.jailor.free(this.token);
        }

        this.innerTurn.take();
    }
}