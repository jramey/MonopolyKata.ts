class LuxuryTax extends BoardLocation {
    constructor() {
        super(38);
    }

    public landOn(player: Player): void {
        player.balance -= 75;
    }
}