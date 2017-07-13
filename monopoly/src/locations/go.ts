class Go extends BoardLocation {
    constructor() {
        super(0);
    }

    public landOn(player: Player): void {
        player.balance += 200;
    }
}