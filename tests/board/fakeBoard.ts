class FakeBoard implements Board {
    public NumberOfSpaces: number;
    public JailLocation: number;
    private space: BoardLocation;

    constructor(space: BoardLocation) {
        this.space = space;
    }

    public getSpaceAtLocation(index: number): BoardLocation {
        return this.space;
    }

}