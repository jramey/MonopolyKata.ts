import { } from "jasmine";

describe("Go to Jail", () => {
    it("landing on go to jail moves player to jail location", () => {
        const board = new GameBoard();
        const goToJailSpace = new GoToJail(board);
        const player = new Player("Car");

        goToJailSpace.landOn(player);

        expect(player.location).toBe(board.JailLocation);
    });
});