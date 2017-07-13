class BoardLocation implements Space {
    public location: number;

    constructor(location: number) {
        this.location = location;
    }

    // tslint:disable-next-line:no-empty
    public landOn(player: Player): void { }
}