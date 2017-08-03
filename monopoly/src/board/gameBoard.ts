class GameBoard implements Board {
    private locations: BoardLocation[];

    constructor(locations: BoardLocation[]) {
        this.locations = locations;
    }

    public getSpaceAtLocation(index: number): BoardLocation {
        const matchingLocation = this.locations.filter(location => location.location === index);

        if (matchingLocation.length > 0)
            return matchingLocation[0];

        return new NullBoardLocation();
    }
}