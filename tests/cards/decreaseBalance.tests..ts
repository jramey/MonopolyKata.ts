import { } from "jasmine";

describe("Crossword Competition ", () => {
    it("increase account by 100 dollars", () => {
        const token = new Token("car");
        const banker = new Banker([token]);
        const card = new DecreaseBalance(100, banker);
        const startingBalance = banker.getBalance(token);

        card.play(token);

        expect(banker.getBalance(token)).toBe(startingBalance - 100);
    });
});