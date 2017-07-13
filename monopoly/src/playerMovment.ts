class PlayerMovement {
    private board: Board;

    constructor(board: Board) {
        this.board = board;
    }

    public movePlayer(player: Player, numberOfSpace: number): void {
        const currentPosition = player.location;
        const nextPosition = (currentPosition + numberOfSpace) % this.board.NumberOfSpaces;
        player.movePlayer(nextPosition);

        if (currentPosition > 0 && currentPosition >= nextPosition)
            player.balance += 200;

        const currentSpace = this.board.getSpaceAtLocation(player.location) as Space;
        currentSpace.landOn(player);
    }
}