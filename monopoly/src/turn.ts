class Turn {
    private player: Player;
    private dice: Dice;
    private playerMovement: PlayerMovement;

    constructor(player: Player, dice: Dice, playerMovement: PlayerMovement) {
        this.player = player;
        this.dice = dice;
        this.playerMovement = playerMovement;
    }

    public take(): void {
        const spacesToMove = this.dice.roll();
        this.playerMovement.movePlayer(this.player, spacesToMove);
    }

    public getPlayerName(): string {
        return this.player.name;
    }
}