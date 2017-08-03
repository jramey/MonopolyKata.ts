class Turn {
    private token: Token;
    private dice: Dice;
    private movement: Movement;
    private board: Board;

    constructor(token: Token, dice: Dice, movement: Movement, board: Board) {
        this.token = token;
        this.dice = dice;
        this.movement = movement;
        this.board = board;
    }

    public take(): void {
        const spacesToMove = this.dice.roll();
        this.movement.movePlayer(this.token, spacesToMove);

        // tslint:disable-next-line:max-line-length
        const currentSpace = this.board.getSpaceAtLocation(this.movement.getLocationOfToken(this.token)) as Space;
        currentSpace.landOn(this.token);
    }

    public getTokenName(): string {
        return this.token.getName();
    }
}