class GameFactory {
    public createGame(tokens: Token[], dice: Dice, movement: Movement) {
        const shuffle = new Shuffle();
        const banker = new Banker(tokens);
        const board = new BoardFactory().createBoard(banker, movement);

        return new Game(tokens, dice, shuffle, banker, movement, board);
    }
}