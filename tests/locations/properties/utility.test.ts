import { } from "jasmine";

describe("Railroad", () => {
    let owner: Token;
    let renter: Token;
    let banker: Banker;
    let board: Board;
    let electric: Utility;
    let water: Utility;

    beforeEach(() => {
        owner = new Token("Car");
        renter = new Token("Horse");
        banker = new Banker([owner, renter]);
        const realEstateManger = new RealEstateManger();
        const dice = new FakeDice();
        electric = new Utility("Electric Company", 1, 150, banker, realEstateManger, dice);
        water = new Utility("Water Works", 2, 150, banker, realEstateManger, dice);
        const utilities = [electric, water];
        realEstateManger.setProperties(utilities);
        board = new GameBoard(utilities);

        dice.loadDice([new DiceRoll(1, 1)]);
        banker.increaseBalance(owner, 1000);
    });

    it("landing on a utility with one owned rent is four times roll", () => {
        water.landOn(owner);

        const ownerStartingBalance = banker.getBalance(owner);
        const renterStartingBalance = banker.getBalance(renter);

        water.landOn(renter);

        expect(renterStartingBalance - banker.getBalance(renter)).toBe(4 * 2);
        expect(banker.getBalance(owner) - ownerStartingBalance).toBe(4 * 2);
    });

    it("landing on a utility with both owned rent is ten times roll", () => {
        water.landOn(owner);
        electric.landOn(owner);

        const ownerStartingBalance = banker.getBalance(owner);
        const renterStartingBalance = banker.getBalance(renter);

        water.landOn(renter);

        expect(renterStartingBalance - banker.getBalance(renter)).toBe(10 * 2);
        expect(banker.getBalance(owner) - ownerStartingBalance).toBe(10 * 2);
    });
});