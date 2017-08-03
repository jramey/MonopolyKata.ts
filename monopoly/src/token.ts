class Token {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public equals(token: Token) {
        return this.getName() === token.getName();
    }
}