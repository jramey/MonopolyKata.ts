import { } from "jasmine";

describe("Property", () => {
    let owner: Token;
    let renter: Token;
    let banker: Banker;
    let property: Property;

    beforeEach(() => {
        owner = new Token("Car");
        renter = new Token("Horse");
        banker = new Banker([owner, renter]);
        const realEstateManger = new RealEstateManger();
        property = new Property("Boardwalk", 39, 100, 12, banker, PropertyGrouping.DarkBlue);
    });

    it("landing on a property results in the token becoming the owner", () => {
        const ownerStartingBalance = banker.getBalance(owner);
        const renterStartingBalance = banker.getBalance(renter);

        property.landOn(owner);

        expect(banker.getBalance(owner)).toBe(ownerStartingBalance - 100);
        const ownerBalanceAfterPurchase = banker.getBalance(owner);

        property.landOn(renter);

        expect(banker.getBalance(owner)).toBe(ownerBalanceAfterPurchase + 12);
        expect(property.owner.equals(owner)).toBeTruthy();
    });
});