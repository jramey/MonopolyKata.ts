class TokenLocation {
    private token: Token;
    private location: number;

    constructor(token: Token, location: number) {
        this.token = token;
        this.location = location;
    }

    public getLocation() {
        return this.location;
    }

    public setLocation(location: number) {
        this.location = location;
    }

    public getTokenName() {
        return this.token.getName();
    }
}