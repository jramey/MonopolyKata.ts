class GoToJail extends BoardLocation {
    private movement: Movement;

    constructor(movement: Movement) {
        super(30);
        this.movement = movement;
    }

    public landOn(token: Token): void {
        this.movement.takeToJail(token);
    }
}