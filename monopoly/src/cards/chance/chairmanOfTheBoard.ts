class ChairmanOfTheBoard implements Card {
    private tokens: Token[];
    private banker: Banker;

    constructor(tokens: Token[], banker: Banker) {
        this.tokens = tokens;
        this.banker = banker;
    }

    public play(token: Token): void {
        this.tokens.forEach(targetToken => {
            if (!targetToken.equals(token))
                this.banker.increaseBalance(targetToken, 50);
        });

        this.banker.decreaseBalance(token, 50 * (this.tokens.length - 1));
    }
}