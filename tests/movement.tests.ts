import { } from "jasmine";

describe("Movement", () => {
    it("token balance increases by 200 when passing go", () => {
        const token = new Token("Car");
        const tokens = new Array<Token>(token);
        const banker = new Banker(tokens);
        const jailor = new Jailor();
        const movement = new Movement(tokens, [new PassingGoRule(banker)], jailor);
        const boardFactory = new BoardFactory();
        const board = boardFactory.createBoard(banker, movement);

        movement.movePlayer(token, 39);

        expect(banker.getBalance(token)).toBe(200);

        movement.movePlayer(token, 2);

        expect(movement.getLocationOfToken(token)).toBe(1);
        expect(banker.getBalance(token)).toBe(400);
    });
});