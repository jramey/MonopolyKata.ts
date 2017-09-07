import { } from "jasmine";

describe("Advance To Go", () => {
    it("moves you to go", () => {
        const token = new Token("car");
        const movement = new Movement([token], [], new Jailor());
        const banker = new Banker([token]);
        const card = new AdvanceToGo(movement, banker);
        const startingBalance = banker.getBalance(token);

        card.play(token);

        expect(movement.getLocationOfToken(token)).toBe(0);
        expect(banker.getBalance(token)).toBe(startingBalance + 200);
    });
});