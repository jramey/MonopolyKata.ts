class GameBoard implements Board {
    public readonly NumberOfSpaces = 40;
    public readonly JailLocation = 10;

    private locations: BoardLocation[];

    constructor() {
        this.locations = [new Go(), new IncomeTax(),
        new LuxuryTax(), new GoToJail(this)];
    }

    public getSpaceAtLocation(index: number): BoardLocation {
        const matchingLocation = this.locations.filter(location => location.location === index);

        if (matchingLocation.length > 0)
            return matchingLocation[0];

        return new NullBoardLocation();
    }
}