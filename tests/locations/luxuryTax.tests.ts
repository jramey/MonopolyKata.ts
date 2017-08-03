import { } from "jasmine";

describe("Luxury Tax", () => {
    it("landing luxury tax decrease players balance by seventy five dollars", () => {
        const token = new Token("Car");
        const banker = new Banker([token]);
        const luxuryTaxSpace = new LuxuryTax(banker);

        luxuryTaxSpace.landOn(token);

        expect(banker.getBalance(token)).toBe(125);
    });
});