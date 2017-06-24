class Game {
    public turns: Turn[];

    private players: Player[];
    private dice: Dice;
    private shuffle: Shuffle;

    constructor(players: Player[], dice: Dice, shuffle: Shuffle) {
        this.players = players;
        this.dice = dice;
        this.turns = new Array<Turn>();
        this.shuffle = shuffle;
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
        const turn = new Turn(player, this.dice);
        this.turns.push(turn);
        turn.take();
    }
}