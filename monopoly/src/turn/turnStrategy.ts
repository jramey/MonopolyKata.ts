class TurnStrategy {
    private token: Token;
    private movement: Movement;
    private board: Board;

    constructor(token: Token, movement: Movement, board: Board) {
        this.token = token;
        this.movement = movement;
        this.board = board;
    }

    public take(numberOfSpaces: number): void {
        this.movement.movePlayer(this.token, numberOfSpaces);

        const currentSpace =
            this.board.getSpaceAtLocation(this.movement.getLocationOfToken(this.token)) as Space;
        currentSpace.landOn(this.token);
    }
}