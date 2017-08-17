class ThirdRollTurnDecorator implements Turn {
    private token: Token;
    private dice: Dice;
    private movement: Movement;
    private turnStrategy: TurnStrategy;

    constructor(token: Token, dice: Dice, movement: Movement, turnStrategy: TurnStrategy) {
        this.token = token;
        this.dice = dice;
        this.movement = movement;
        this.turnStrategy = turnStrategy;
    }

    public take(): void {
        this.dice.roll();

        if (this.dice.isDoubles()) {
            this.movement.takeToJail(this.token);
            return;
        }

        this.turnStrategy.take(this.dice.value());
    }
}