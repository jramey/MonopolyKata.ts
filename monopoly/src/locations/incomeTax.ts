class IncomeTax extends BoardLocation {
    constructor() {
        super(4);
    }

    public landOn(player: Player): void {
        const tenPercentOfTotalWorth = player.balance * .1;

        if (tenPercentOfTotalWorth > 200)
            player.balance -= 200;
        else
            player.balance -= tenPercentOfTotalWorth;
    }
}