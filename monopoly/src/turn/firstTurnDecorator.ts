class FirstTurnDecorator implements Turn {
    private innerTurn: Turn;
    private token: Token;
    private dice: Dice;
    private movement: Movement;
    private board: Board;
    private turnStrategy: TurnStrategy;

    constructor(innerTurn: Turn, token: Token, dice: Dice, movement: Movement,
                board: Board, turnStrategy: TurnStrategy) {
        this.innerTurn = innerTurn;
        this.token = token;
        this.dice = dice;
        this.movement = movement;
        this.board = board;
        this.turnStrategy = turnStrategy;
    }

    public take(): void {
        this.turnStrategy.take(this.dice.value());

        if (this.dice.isDoubles())
            this.innerTurn.take();
    }
}