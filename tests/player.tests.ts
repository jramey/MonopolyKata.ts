import { } from "jasmine";

describe("Player", () => {
    let car: Player;
    let horse: Player;
    let game: Game;

    beforeEach(() => {
        car = new Player("Car");
        horse = new Player("Horse");
        game = new Game([car, horse], new GameDice(), new Shuffle());
    });

    it("is created with name", () => {
        expect(car.name).toBe("Car");
        expect(horse.name).toBe("Horse");
    });

    it("is created with location of zero", () => {
        expect(car.location).toBe(0);
        expect(horse.location).toBe(0);
    });

    it("is created with balance of zero", () => {
        expect(car.balance).toBe(0);
        expect(horse.balance).toBe(0);
    });
});