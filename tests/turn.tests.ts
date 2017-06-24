import { } from "jasmine";

describe("Turn", () => {
    let car: Player;
    let horse: Player;
    let game: Game;
    let fakeDice: FakeDice;

    beforeEach(() => {
        car = new Player("Car");
        horse = new Player("Horse");
        fakeDice = new FakeDice();
        game = new Game([car, horse], fakeDice, new Shuffle());
    });

    it("player lands on space seven after rolling a seven", () => {
        fakeDice.loadDice(3, 4);

        game.startGame();
        game.playRound();

        expect(car.location).toBe(7);
    });

    it("player lands on space five after rolling a six from space 39", () => {
        car.location = 39;
        fakeDice.loadDice(5, 1);

        game.startGame();
        game.playRound();

        expect(car.location).toBe(5);
    });
});