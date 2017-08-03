class FakeBoard implements Board {
    private space: BoardLocation;

    constructor(space: BoardLocation) {
        this.space = space;
    }

    public getSpaceAtLocation(index: number): BoardLocation {
        return this.space;
    }

}