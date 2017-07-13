class GoToJail extends BoardLocation {
    private board: Board;

    constructor(board: Board) {
        super(30);
        this.board = board;
    }

    public landOn(player: Player): void {
        player.movePlayer(this.board.JailLocation);
    }
}