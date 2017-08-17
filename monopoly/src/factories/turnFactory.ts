class TurnFactory {
    public create(token: Token, dice: Dice, movement: Movement,
                  board: Board, banker: Banker, jailor: Jailor, turnStrategy: TurnStrategy) {
        const thirdRoll = new ThirdRollTurnDecorator(token, dice, movement, turnStrategy);
        const secondRoll = new SecondTurnDecorator(thirdRoll, token, dice, movement, board, turnStrategy);
        const firstRoll = new FirstTurnDecorator(secondRoll, token, dice, movement, board, turnStrategy);

        if (jailor.isInJail(token)) {
            const rollToGetOutOfJailDecorator = new RollToGetOutOfJailDecorator(firstRoll, token, dice, jailor);
            return new PayToGetOutOfJailDecorator(rollToGetOutOfJailDecorator, token, banker, jailor);
        }

        return firstRoll;
    }
}