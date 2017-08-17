class JailRecord {
    private token: Token;
    private numberOfTurns: number;

    constructor(token: Token) {
        this.token = token;
        this.numberOfTurns = 0;
    }

    public getToken(): Token {
        return this.token;
    }

    public incrementTurn(): void {
        this.numberOfTurns++;
    }

    public getNumberOfTurns(): number {
        return this.numberOfTurns;
    }
}