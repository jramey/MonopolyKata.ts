import { } from "jasmine";

describe("Railroad", () => {
    let owner: Token;
    let renter: Token;
    let banker: Banker;
    let board: Board;
    let reading: Railroad;
    let pennsylvania: Railroad;
    let shortline: Railroad;
    let bo: Railroad;

    beforeEach(() => {
        owner = new Token("Car");
        renter = new Token("Horse");
        banker = new Banker([owner, renter]);
        const realEstateManger = new RealEstateManger();
        reading = new Railroad("Reading Railroad", 5, 100, 25, banker, realEstateManger);
        pennsylvania = new Railroad("Pennsylvania RR", 15, 100, 25, banker, realEstateManger);
        shortline = new Railroad("Shortline RR", 35, 100, 25, banker, realEstateManger);
        bo = new Railroad("B. & O. RR)", 25, 100, 25, banker, realEstateManger);

        const railroads = [reading, pennsylvania, shortline, bo];
        realEstateManger.setProperties(railroads);
        board = new GameBoard(railroads);

        banker.increaseBalance(owner, 1000);
    });

    it("landing on when owner owns one railroad rent is twenty five", () => {
        reading.landOn(owner);

        const ownerStartingBalance = banker.getBalance(owner);
        const renterStartingBalance = banker.getBalance(renter);

        reading.landOn(renter);

        expect(renterStartingBalance - banker.getBalance(renter)).toBe(25);
        expect(banker.getBalance(owner) - ownerStartingBalance).toBe(25);
    });

    it("landing on when owner owns two railroads rent is fifty", () => {
        reading.landOn(owner);
        shortline.landOn(owner);

        const ownerStartingBalance = banker.getBalance(owner);
        const renterStartingBalance = banker.getBalance(renter);

        reading.landOn(renter);

        expect(renterStartingBalance - banker.getBalance(renter)).toBe(50);
        expect(banker.getBalance(owner) - ownerStartingBalance).toBe(50);
    });

    it("landing on when owner owns three railroads rent is seventy five", () => {
        reading.landOn(owner);
        shortline.landOn(owner);
        pennsylvania.landOn(owner);

        const ownerStartingBalance = banker.getBalance(owner);
        const renterStartingBalance = banker.getBalance(renter);

        reading.landOn(renter);

        expect(renterStartingBalance - banker.getBalance(renter)).toBe(100);
        expect(banker.getBalance(owner) - ownerStartingBalance).toBe(100);
    });

    it("landing on when owner owns all railroads rent is a hundy", () => {
        reading.landOn(owner);
        shortline.landOn(owner);
        pennsylvania.landOn(owner);
        bo.landOn(owner);

        const ownerStartingBalance = banker.getBalance(owner);
        const renterStartingBalance = banker.getBalance(renter);

        reading.landOn(renter);

        expect(renterStartingBalance - banker.getBalance(renter)).toBe(200);
        expect(banker.getBalance(owner) - ownerStartingBalance).toBe(200);
    });
});