class Game {
    public turns: Turn[];

    private tokens: Token[];
    private dice: Dice;
    private shuffle: Shuffle;
    private board: Board;
    private movement: Movement;

    constructor(tokens: Token[], dice: Dice, shuffle: Shuffle, banker: Banker, movement: Movement, board: Board) {
        this.tokens = tokens;
        this.dice = dice;
        this.turns = new Array<Turn>();
        this.shuffle = shuffle;
        this.movement = movement;
        this.board = board;
    }

    public startGame(): void {
        this.verifyNumberOfTokens();
        this.tokens = this.shuffle.shuffle(this.tokens);
    }

    public verifyNumberOfTokens(): void {
        if (this.tokens.length < 2 || this.tokens.length > 8)
            throw new RangeError("Invalid number of tokens");
    }

    public playRound(): void {
        this.tokens.forEach(token => {
            this.takeTurn(token);
        });
    }

    private takeTurn(token: Token): void {
        const turn = new Turn(token, this.dice, this.movement, this.board);
        this.turns.push(turn);
        turn.take();
    }
}