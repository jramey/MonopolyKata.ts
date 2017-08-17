import { } from "jasmine";

describe("Turn Factory", () => {
    let token: Token;
    let dice: GameDice;
    let banker: Banker;
    let jailor: Jailor;
    let movement: Movement;
    let board: Board;
    let turnFactory: TurnFactory;

    beforeEach(() => {
        token = new Token("Car");
        const tokens = new Array<Token>(token);
        banker = new Banker(tokens);
        jailor = new Jailor();
        dice = new GameDice();
        movement = new Movement(tokens, [new PassingGoRule(banker)], jailor);
        const boardFactory = new BoardFactory();
        board = boardFactory.createBoard(banker, movement);
        turnFactory = new TurnFactory();
    });

    it("turn is not decorated with jail options when note in jail", () => {
        const turn = turnFactory.create(token, dice, movement,
            board, banker, jailor, new TurnStrategy(token, movement, board));

        expect(turn).toEqual(jasmine.any(FirstTurnDecorator));
    });

    it("turn is decorated with jail options when in jail", () => {
        jailor.book(token);
        const turn = turnFactory.create(token, dice, movement,
            board, banker, jailor, new TurnStrategy(token, movement, board));

        expect(turn).toEqual(jasmine.any(PayToGetOutOfJailDecorator));
    });
});