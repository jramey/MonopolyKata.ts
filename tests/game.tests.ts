import { } from "jasmine";

describe("Game", () => {
    let car: Token;
    let horse: Token;
    let gameFactory: GameFactory;
    let banker: Banker;
    let movement: Movement;

    beforeEach(() => {
        car = new Token("Car");
        horse = new Token("Horse");
        banker = new Banker([car, horse]);
        const jailor = new Jailor();
        movement = new Movement([car, horse], [new PassingGoRule(banker)], jailor);
        gameFactory = new GameFactory();
    });

    it("is invalid with just one player", () => {
        const game = gameFactory.createGame([car], new GameDice(), movement, banker, new Jailor());
        expect(() => { game.startGame(); }).toThrow(new RangeError("Invalid number of tokens"));
    });

    it("is invalid with over eight players", () => {
        const game = gameFactory.createGame([car, car, car, car, car, car, car, car, car],
            new GameDice(), movement, banker, new Jailor());

        expect(() => { game.startGame(); }).toThrow(new RangeError("Invalid number of tokens"));
    });
});