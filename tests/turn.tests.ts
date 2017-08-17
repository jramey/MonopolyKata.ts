import { } from "jasmine";

describe("Turn", () => {
    let car: Token;
    let horse: Token;
    let game: Game;
    let fakeDice: FakeDice;
    let banker: Banker;
    let movement: Movement;
    let jailor: Jailor;

    beforeEach(() => {
        car = new Token("Car");
        horse = new Token("Horse");
        fakeDice = new FakeDice();
        banker = new Banker([car, horse]);
        jailor = new Jailor();
        movement = new Movement([car, horse], [new PassingGoRule(banker)], jailor);
        const gameFactory = new GameFactory();
        game = gameFactory.createGame([car, horse], fakeDice, movement, banker, jailor);
    });

    it("player lands on space seven after rolling a seven", () => {
        fakeDice.loadDice([new DiceRoll(3, 4)]);

        game.startGame();
        game.playRound();

        expect(movement.getLocationOfToken(car)).toBe(7);
    });

    it("player lands on space five after rolling a six from space 39", () => {
        movement.movePlayer(car, 39);
        fakeDice.loadDice([new DiceRoll(5, 1)]);
        banker.increaseBalance(car, 5000);
        banker.increaseBalance(horse, 5000);

        game.startGame();
        game.playRound();

        expect(movement.getLocationOfToken(car)).toBe(5);
    });

    it("player pays to get out of jail", () => {
        const startingBalance = banker.getBalance(car);
        movement.takeToJail(car);
        expect(jailor.isInJail(car)).toBe(true);

        fakeDice.loadDice([new DiceRoll(5, 1)]);
        game.startGame();
        game.playRound();

        expect(banker.getBalance(car)).toBe(50);
        expect(jailor.isInJail(car)).toBe(false);
        expect(movement.getLocationOfToken(car)).toBe(16);
    });

    it("player rolls doubles to get out of jail", () => {
        banker.decreaseBalance(car, 175);
        movement.takeToJail(car);
        expect(jailor.isInJail(car)).toBe(true);

        fakeDice.loadDice([new DiceRoll(2, 2),
        new DiceRoll(1, 2),
        new DiceRoll(2, 2),
        new DiceRoll(1, 2)]);

        game.startGame();
        game.playRound();

        expect(jailor.isInJail(car)).toBe(false);
        expect(movement.getLocationOfToken(car)).toBe(17);
    });

    it("player does not get out of jail without doubles", () => {
        banker.decreaseBalance(car, 175);
        movement.takeToJail(car);
        expect(jailor.isInJail(car)).toBe(true);

        fakeDice.loadDice([new DiceRoll(1, 2),
        new DiceRoll(1, 2)]);
        game.startGame();
        game.playRound();

        expect(jailor.isInJail(car)).toBe(true);
        expect(movement.getLocationOfToken(car)).toBe(10);
    });

    it("player rolls doubles three times they are taken to jail", () => {
        expect(jailor.isInJail(car)).toBe(false);

        fakeDice.loadDice([new DiceRoll(2, 2)]);
        game.startGame();
        game.playRound();

        expect(jailor.isInJail(car)).toBe(true);
        expect(movement.getLocationOfToken(car)).toBe(10);
    });
});