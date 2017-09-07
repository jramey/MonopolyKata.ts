class GoDirectlyToJail implements Card {
    private movement: Movement;

    constructor(movement: Movement) {
        this.movement = movement;
    }

    public play(token: Token): void {
      this.movement.takeToJail(token);
    }
}