import { } from "jasmine";

describe("Token", () => {
    let car: Token;
    let horse: Token;

    beforeEach(() => {
        car = new Token("Car");
        horse = new Token("Horse");
    });

    it("is created with name", () => {
        expect(car.getName()).toBe("Car");
        expect(horse.getName()).toBe("Horse");
    });
});