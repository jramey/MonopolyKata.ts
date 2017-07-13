class Game {
    public turns: Turn[];

    private players: Player[];
    private dice: Dice;
    private shuffle: Shuffle;
    private board: Board;
    private playerMovement: PlayerMovement;

    constructor(players: Player[], dice: Dice, shuffle: Shuffle) {
        this.players = players;
        this.dice = dice;
        this.turns = new Array<Turn>();
        this.shuffle = shuffle;
        this.board = new GameBoard();
        this.playerMovement = new PlayerMovement(this.board);
    }

    public startGame(): void {
        this.verifyNumberOfPlayers();
        this.players = this.shuffle.shuffle(this.players);
    }

    public verifyNumberOfPlayers(): void {
        if (this.players.length < 2 || this.players.length > 8)
            throw new RangeError("Invalid number of players");
    }

    public playRound(): void {
        this.players.forEach(player => {
            this.takeTurn(player);
        });
    }

    private takeTurn(player: Player): void {
        const turn = new Turn(player, this.dice, this.playerMovement);
        this.turns.push(turn);
        turn.take();
    }
}