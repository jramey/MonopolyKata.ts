class RollToGetOutOfJailDecorator implements Turn {
    private innerTurn: Turn;
    private token: Token;
    private dice: Dice;
    private jailor: Jailor;

    constructor(innerTurn: Turn, token: Token, dice: Dice, jailor: Jailor) {
        this.innerTurn = innerTurn;
        this.token = token;
        this.dice = dice;
        this.jailor = jailor;
    }

    public take(): void {
        if (this.jailor.isInJail(this.token)) {
            if (this.dice.isDoubles() === false)
                return;

            this.jailor.free(this.token);
        }

        this.innerTurn.take();
    }
}