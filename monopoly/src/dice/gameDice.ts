class GameDice implements Dice {
    private minValue: number = 1;
    private maxValue: number = 6;

    private diOne: number;
    private diTwo: number;

    public roll(): void {
        this.diOne = (Math.floor(Math.random()
            * (this.maxValue - this.minValue + 1)) + this.minValue);

        this.diTwo = (Math.floor(Math.random()
            * (this.maxValue - this.minValue + 1)) + this.minValue);
    }

    public isDoubles(): boolean {
        return this.diOne === this.diTwo;
    }

    public value(): number {
        if (this.diOne === undefined || this.diTwo === undefined)
            this.roll();

        return this.diOne + this.diTwo;
    }
}