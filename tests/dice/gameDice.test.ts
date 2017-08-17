import {} from "jasmine";

describe("Game Dice", () => {
    it("max value is twelve", () => {
        const dice = new GameDice();

        for (let i = 0; i < 1000; i++) {
            dice.roll();
            const roll = dice.value();
            expect(roll).toBeLessThanOrEqual(12);
        }
    });

    it("min value is one", () => {
        const dice = new GameDice();

        for (let i = 0; i < 1000; i++) {
            dice.roll();
            const roll = dice.value();
            expect(roll).toBeGreaterThanOrEqual(1);
        }
    });
});