import { } from "jasmine";

describe("Game", () => {
    it("landing on go increases players balance by two hundred dollars", () => {
        const token = new Token("Car");
        const banker = new Banker([token]);
        const goSpace = new Go(banker);
        const beginningBalance = banker.getBalance(token);

        goSpace.landOn(token);

        expect(banker.getBalance(token)).toBe(beginningBalance + 200);
    });
});