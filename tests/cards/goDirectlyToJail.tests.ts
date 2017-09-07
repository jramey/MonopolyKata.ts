import { } from "jasmine";

describe("Go Directly To Jail", () => {
    it("moves you to jail", () => {
        const token = new Token("car");
        const movement = new Movement([token], [], new Jailor());
        const banker = new Banker([token]);
        const card = new GoDirectlyToJail(movement);

        card.play(token);

        expect(movement.getLocationOfToken(token)).toBe(10);
    });
});