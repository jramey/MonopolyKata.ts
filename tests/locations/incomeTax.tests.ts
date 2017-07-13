import { } from "jasmine";

describe("Income Tax", () => {
    it("landing on income tax decrease players balance by 200 dollars when ten percent is greater than 200", () => {
        const incomeTaxSpace = new IncomeTax();
        const player = new Player("Car");
        player.balance = 4000;

        incomeTaxSpace.landOn(player);

        expect(player.balance).toBe(3800);
    });

    it("landing on income tax decrease players balance by ten percent when greater than 200", () => {
        const incomeTaxSpace = new IncomeTax();
        const player = new Player("Car");
        player.balance = 100;

        incomeTaxSpace.landOn(player);

        expect(player.balance).toBe(90);
    });
});