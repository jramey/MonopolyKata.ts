class GameDice implements Dice {
    private minValue: number = 1;
    private maxValue: number = 6;

    private diOne: number;
    private diTwo: number;

    public roll(): number {
        this.diOne = (Math.floor(Math.random()
            * (this.maxValue - this.minValue + 1)) + this.minValue);

        this.diTwo = (Math.floor(Math.random()
            * (this.maxValue - this.minValue + 1)) + this.minValue);

        return this.diOne + this.diTwo;
    }

    public isDoubles(): boolean {
        return this.diOne === this.diTwo;
    }
}