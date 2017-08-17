class GameFactory {
    public createGame(tokens: Token[], dice: Dice, movement: Movement, banker: Banker, jailor: Jailor) {
        const shuffle = new Shuffle();
        const board = new BoardFactory().createBoard(banker, movement);

        return new Game(tokens, dice, shuffle, banker, movement, board, jailor);
    }
}