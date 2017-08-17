class FakeDice implements Dice {
    public rolls: DiceRoll[];
    private diOne: number;
    private diTwo: number;

    public roll(): void {
        if (this.rolls.length > 0) {
            const nextRoll = this.rolls.shift();
            this.diOne = nextRoll.diOne;
            this.diTwo = nextRoll.diTwo;
        }
    }

    public loadDice(rolls: DiceRoll[]): void {
        this.rolls = rolls;
    }

    public isDoubles(): boolean {
        return this.diOne === this.diTwo;
    }

    public value(): number {
        return this.diOne + this.diTwo;
    }
}