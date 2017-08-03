interface Rule {
    evaluate(token: Token, startingPosition: number, currentPosition: number): void;
}