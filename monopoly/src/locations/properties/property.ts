class Property extends BoardLocation {
    public location: number;
    public owner: Token;
    public grouping: PropertyGrouping;
    protected buyingPrice: number;
    protected rent: number;
    protected banker: Banker;
    private name: string;

    constructor(name: string, location: number, buyingPrice: number, rent: number,
                banker: Banker, grouping: PropertyGrouping) {
        super(location);
        this.name = name;
        this.buyingPrice = buyingPrice;
        this.rent = rent;
        this.banker = banker;
        this.grouping = grouping;
    }

    public landOn(token: Token): void {
        if (!this.isOwned())
            this.buyProperty(token);
        else if (this.shouldPayRent(token))
            this.payRent(token);
    }

    public isOwned(): boolean {
        return this.owner !== undefined;
    }

    protected buyProperty(token: Token): void {
        if (this.banker.getBalance(token) > this.buyingPrice) {
            this.owner = token;
            this.banker.decreaseBalance(token, this.buyingPrice);
        }
    }

    protected shouldPayRent(token: Token): boolean {
        return this.owner.equals(token) === false;
    }

    protected payRent(token: Token) {
        this.banker.transferRent(token, this.owner, this.rent);
    }
}