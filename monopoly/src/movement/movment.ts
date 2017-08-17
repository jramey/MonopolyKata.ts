class Movement {
    private movementRules: Rule[];
    private tokenLocations: TokenLocation[];
    private jailor: Jailor;

    constructor(tokens: Token[], movementRules: Rule[], jailor: Jailor) {
        this.movementRules = movementRules;
        this.tokenLocations = new Array<TokenLocation>();
        this.jailor = jailor;
        this.setupLocationsForTokens(tokens);
    }

    public movePlayer(token: Token, numberOfSpace: number): void {
        const tokenLocation = this.getLocationForToken(token);
        const currentPosition = tokenLocation.getLocation();
        const nextPosition = (currentPosition + numberOfSpace) % 40;

        tokenLocation.setLocation(nextPosition);

        this.movementRules.forEach(rule => {
            rule.evaluate(token, currentPosition, nextPosition);
        });
    }

    public takeToJail(token: Token): void {
        const tokenLocation = this.getLocationForToken(token);
        tokenLocation.setLocation(10);
        this.jailor.book(token);
    }

    public getLocationOfToken(token: Token): number {
        return this.getLocationForToken(token).getLocation();
    }

    private getLocationForToken(token: Token): TokenLocation {
        const matchingAccount = this.tokenLocations.filter(location => location.getTokenName() === token.getName());

        if (matchingAccount.length === 0)
            throw new Error("Location not found for for token");

        return matchingAccount[0];
    }

    private setupLocationsForTokens(tokens: Token[]) {
        tokens.forEach(token => {
            this.tokenLocations.push(new TokenLocation(token, 0));
        });
    }
}