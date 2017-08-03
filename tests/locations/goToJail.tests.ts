import { } from "jasmine";

describe("Go to Jail", () => {
    it("landing on go to jail moves player to jail location", () => {
        const token = new Token("Car");
        const movement = new Movement([token], [new PassingGoRule(new Banker([token]))]);
        const goToJailSpace = new GoToJail(movement);

        goToJailSpace.landOn(token);

        expect(movement.getLocationOfToken(token)).toBe(10);
    });
});