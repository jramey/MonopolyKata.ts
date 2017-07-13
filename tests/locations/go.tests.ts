import { } from "jasmine";

describe("Game", () => {
    it("landing on go increases players balance by two hundred dollars", () => {
        const goSpace = new Go();
        const player = new Player("Car");

        goSpace.landOn(player);

        expect(player.balance).toBe(200);
    });
});