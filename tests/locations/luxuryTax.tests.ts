import { } from "jasmine";

describe("Luxury Tax", () => {
    it("landing luxury tax decrease players balance by seventy five dollars", () => {
        const luxuryTaxSpace = new LuxuryTax();
        const player = new Player("Car");
        player.balance = 100;

        luxuryTaxSpace.landOn(player);

        expect(player.balance).toBe(25);
    });
});