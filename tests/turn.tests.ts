import { } from "jasmine";

describe("Turn", () => {
    let car: Token;
    let horse: Token;
    let game: Game;
    let fakeDice: FakeDice;
    let banker: Banker;
    let movement: Movement;

    beforeEach(() => {
        car = new Token("Car");
        horse = new Token("Horse");
        fakeDice = new FakeDice();
        banker = new Banker([car, horse]);
        movement = new Movement([car, horse], [new PassingGoRule(banker)]);
        const gameFactory = new GameFactory();
        game = gameFactory.createGame([car, horse], fakeDice, movement);
    });

    it("player lands on space seven after rolling a seven", () => {
        fakeDice.loadDice(3, 4);

        game.startGame();
        game.playRound();

        expect(movement.getLocationOfToken(car)).toBe(7);
    });

    it("player lands on space five after rolling a six from space 39", () => {
        movement.movePlayer(car, 39);
        fakeDice.loadDice(5, 1);
        banker.increaseBalance(car, 5000);
        banker.increaseBalance(horse, 5000);

        game.startGame();
        game.playRound();

        expect(movement.getLocationOfToken(car)).toBe(5);
    });
});