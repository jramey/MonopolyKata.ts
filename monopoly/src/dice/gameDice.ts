class GameDice implements Dice {
    private minValue: number = 1;
    private maxValue: number = 6;

    public roll(): number {
        const diOne = (Math.floor(Math.random()
            * (this.maxValue - this.minValue + 1)) + this.minValue);

        const diTwo = (Math.floor(Math.random()
            * (this.maxValue - this.minValue + 1)) + this.minValue);

        return diOne + diTwo;
    }
}