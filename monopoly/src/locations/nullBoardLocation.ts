class NullBoardLocation extends BoardLocation {
    constructor() {
        super(-1);
    }

    // tslint:disable-next-line:no-empty
    public landOn(player: Token): void { }
}
