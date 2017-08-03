class FakeDice implements Dice {
    public rollOne: number;
    public rollTwo: number;

    public roll(): number {
        return this.rollOne + this.rollTwo;
    }

    public loadDice(rollOne: number, rollTwo: number): void {
        this.rollOne = rollOne;
        this.rollTwo = rollTwo;
    }

    public isDoubles(): boolean {
        return this.rollOne === this.rollTwo;
    }
}