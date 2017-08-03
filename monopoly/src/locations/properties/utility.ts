class Utility extends Property {
    private dice: Dice;
    private realEstateManger: RealEstateManger;

    constructor(name: string, location: number, buyingPrice: number,
                banker: Banker, realEstateManger: RealEstateManger, dice: Dice) {
        super(name, location, buyingPrice, 0, banker, PropertyGrouping.Utility);
        this.dice = dice;
        this.realEstateManger = realEstateManger;
    }

    public landOn(token: Token): void {
        if (!this.isOwned())
            this.buyProperty(token);
        else if (this.shouldPayRent(token))
            this.payOwnerRent(token);
    }

    private payOwnerRent(token: Token): void {
        const diceValue = this.dice.roll();
        let amount = diceValue * 4;

        if (this.realEstateManger.allPropertiesInGroupingAreOwned(this.grouping))
            amount = diceValue * 10;

        this.banker.transferRent(token, this.owner, amount);
    }
}