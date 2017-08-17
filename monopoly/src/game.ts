class Game {
    public turns: Turn[];

    private tokens: Token[];
    private dice: Dice;
    private shuffle: Shuffle;
    private board: Board;
    private movement: Movement;
    private banker: Banker;
    private jailor: Jailor;

    constructor(tokens: Token[], dice: Dice, shuffle: Shuffle,
                banker: Banker, movement: Movement, board: Board, jailor: Jailor) {
        this.tokens = tokens;
        this.dice = dice;
        this.turns = new Array<Turn>();
        this.shuffle = shuffle;
        this.movement = movement;
        this.board = board;
        this.banker = banker;
        this.jailor = jailor;
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
        const turnFactory = new TurnFactory();
        const turnStrategy = new TurnStrategy(token, this.movement, this.board);
        const turn = turnFactory.create(token, this.dice,
            this.movement, this.board, this.banker, this.jailor, turnStrategy);
        this.dice.roll();
        turn.take();
        this.turns.push(turn);
    }
}