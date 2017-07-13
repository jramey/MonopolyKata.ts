import { } from "jasmine";

describe("Player Movement", () => {
    let player: Player;

    beforeEach(() => {
        player = new Player("Car");
    });

    it("calls land on for given location", () => {
        const fakeSpace = new BoardLocation(1);
        const fakeBoard = new FakeBoard(fakeSpace);
        const playerMovement = new PlayerMovement(fakeBoard);
        spyOn(fakeSpace, "landOn");

        playerMovement.movePlayer(player, 1);

        expect(fakeSpace.landOn).toHaveBeenCalledWith(player);
    });

    it("player balance increases by 200 when passing go", () => {
        const board = new GameBoard();
        const playerMovement = new PlayerMovement(board);
        player.location = 39;
        expect(player.balance).toBe(0);

        playerMovement.movePlayer(player, 2);

        expect(player.location).toBe(1);
        expect(player.balance).toBe(200);
    });
});