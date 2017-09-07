class AdvanceToGo implements Card {
    private movement: Movement;
    private banker: Banker;

    constructor(movement: Movement, banker: Banker) {
        this.movement = movement;
        this.banker = banker;
    }

    public play(token: Token): void {
        this.movement.movePlayer(token, 40 - this.movement.getLocationOfToken(token));
        this.banker.increaseBalance(token, 200);
    }
}