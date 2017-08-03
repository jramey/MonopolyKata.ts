import { } from "jasmine";

describe("Income Tax", () => {
    it("landing on income tax decrease players balance by 200 dollars when ten percent is greater than 200", () => {
        const token = new Token("Car");
        const banker = new Banker([token]);
        banker.increaseBalance(token, 4000);
        const incomeTaxSpace = new IncomeTax(banker);
        const beginningBalance = banker.getBalance(token);

        incomeTaxSpace.landOn(token);

        expect(banker.getBalance(token)).toBe(beginningBalance - 200);
    });

    it("landing on income tax decrease players balance by ten percent when less than 200", () => {
        const token = new Token("Car");
        const banker = new Banker([token]);
        banker.decreaseBalance(token, 100);
        const incomeTaxSpace = new IncomeTax(banker);
        const beginningBalance = banker.getBalance(token);

        incomeTaxSpace.landOn(token);

        expect(banker.getBalance(token)).toBe(beginningBalance - 10);
    });
});