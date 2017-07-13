interface Board {
    readonly NumberOfSpaces: number;
    readonly JailLocation: number;
    getSpaceAtLocation(index: number): BoardLocation;
}