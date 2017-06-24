class Turn {
    private player: Player;
    private dice: Dice;

    constructor(player: Player, dice: Dice) {
        this.player = player;
        this.dice = dice;
    }

    public take(): void {
        const spacesToMove = this.dice.roll();
        this.movePlayer(spacesToMove);
    }

    public getPlayerName(): string {
        return this.player.name;
    }

    private movePlayer(spacesToMove: number): void {
        this.player.location = (spacesToMove + this.player.location) % 40;
    }
}