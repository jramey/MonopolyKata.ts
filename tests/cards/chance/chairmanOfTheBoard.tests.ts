import { } from "jasmine";

describe("Chairman of the Board ", () => {
    it("increase other accounts by 50 dollars", () => {
        const car = new Token("car");
        const horse = new Token("horse");
        const dog = new Token("Dog");
        const tokens = [car, horse, dog];
        const banker = new Banker(tokens);
        const card = new ChairmanOfTheBoard(tokens, banker);
        const carStartingBalance = banker.getBalance(car);
        const horseStartingBalance = banker.getBalance(car);
        const dogStartingBalance = banker.getBalance(car);

        card.play(car);

        expect(banker.getBalance(car)).toBe(carStartingBalance - 50 * (tokens.length - 1));
        expect(banker.getBalance(horse)).toBe(horseStartingBalance + 50);
        expect(banker.getBalance(dog)).toBe(dogStartingBalance + 50);
    });
});