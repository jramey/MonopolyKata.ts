class Railroad extends Property {
    private realEstateManger: RealEstateManger;

    constructor(name: string, location: number, buyingPrice: number, rent: number,
                banker: Banker, realEstateManger: RealEstateManger) {
        super(name, location, buyingPrice, rent, banker, PropertyGrouping.Railroad);
        this.realEstateManger = realEstateManger;
    }

    public landOn(token: Token): void {
        if (!this.isOwned())
            this.buyProperty(token);
        else if (this.shouldPayRent(token))
            this.payOwnerRent(token);
    }

    private payOwnerRent(token: Token): void {
        const railroadsOwned = this.realEstateManger.numberOfGroupingOwned(token, this.grouping);
        const amount = this.rent * Math.pow(2, railroadsOwned - 1);
        this.banker.transferRent(token, this.owner, amount);
    }
}