class Jailor {
    private jailRecords: JailRecord[];

    constructor() {
        this.jailRecords = new Array<JailRecord>();
    }

    public book(token: Token): void {
        this.jailRecords.push(new JailRecord(token));
    }

    public free(token: Token): void {
        this.jailRecords =
            this.jailRecords.filter(jailRecord => jailRecord.getToken().equals(token) === false);
    }

    public isInJail(token: Token): boolean {
        return this.jailRecords
            .filter(record => record.getToken().equals(token)).length > 0;
    }

    public incrementTurn(token: Token) {
        const jailRecord = this.getJailRecord(token);

        jailRecord.incrementTurn();
    }

    public shouldGetOutOfJail(token: Token): boolean {
        const jailRecord = this.getJailRecord(token);

        return jailRecord.getNumberOfTurns() === 3;
    }

    private getJailRecord(token: Token): JailRecord {
        return this.jailRecords
            .filter(record => record.getToken().equals(token))[0];
    }
}