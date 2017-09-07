import { } from "jasmine";

describe("Board", () => {
    let board: Board;

    beforeEach(() => {
        const tokens = new Array<Token>(new Token("Car"));
        const banker = new Banker(tokens);
        const jailor = new Jailor();
        const movement = new Movement(tokens, [new PassingGoRule(banker)], jailor);
        const boardFactory = new BoardFactory();
        board = boardFactory.createBoard(banker, movement, tokens);
    });

    it("go is at index zero", () => {
        const space = board.getSpaceAtLocation(0);
        expect(space).toEqual(jasmine.any(Go));
    });

    it("income tax is at index four", () => {
        const space = board.getSpaceAtLocation(4);
        expect(space).toEqual(jasmine.any(IncomeTax));
    });

    it("go to jail is at index thirty", () => {
        const space = board.getSpaceAtLocation(30);
        expect(space).toEqual(jasmine.any(GoToJail));
    });

    it("luxury tax is at index thirty eight", () => {
        const space = board.getSpaceAtLocation(38);
        expect(space).toEqual(jasmine.any(LuxuryTax));
    });

    it("property space is returned", () => {
        const space = board.getSpaceAtLocation(1);
        expect(space).toEqual(jasmine.any(Property));
    });
});