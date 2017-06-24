import { } from "jasmine";

describe("Game", () => {
    let car: Player;
    let horse: Player;

    beforeEach(() => {
        car = new Player("Car");
        horse = new Player("Horse");
    });

    it("is invalid with just one player", () => {
        const game = new Game([car], new GameDice(), new Shuffle());
        expect(() => { game.startGame(); }).toThrow(new RangeError("Invalid number of players"));
    });

    it("is invalid with over eight players", () => {
        const game = new Game([car, car, car, car, car, car, car, car, car], new GameDice(), new Shuffle());
        expect(() => { game.startGame(); }).toThrow(new RangeError("Invalid number of players"));
    });

    it("shuffles players", () => {
        const shuffle = new Shuffle();
        spyOn(shuffle, "shuffle").and.returnValue([car, horse]);

        const game = new Game([car, horse], new GameDice(), shuffle);
        game.startGame();

        expect(shuffle.shuffle).toHaveBeenCalledWith([car, horse]);
    });

    it("players take 20 turns in the same order", () => {
        const game = new Game([car, horse], new GameDice(), new Shuffle());
        game.startGame();

        for (let i = 0; i < 20; i++)
            game.playRound();

        const carTurns = game.turns.filter(turn => {
            return turn.getPlayerName() === car.name;
        });

        const horseTurns = game.turns.filter(turn => {
            return turn.getPlayerName() === horse.name;
        });

        expect(carTurns.length).toBe(20);
        expect(horseTurns.length).toBe(20);
    });

    it("players are in same order", () => {
        const shuffle = new Shuffle();
        spyOn(shuffle, "shuffle").and.returnValue([car, horse]);
        const game = new Game([car, horse], new GameDice(), shuffle);
        game.startGame();

        for (let i = 0; i < 20; i++)
            game.playRound();

        for (const turn in game.turns) {
            const counter = 0;

            if (counter % 2 === 0)
                expect(game.turns[counter].getPlayerName()).toBe(car.name);
            else
                expect(game.turns[counter].getPlayerName()).toBe(horse.name);
        }
    });
});