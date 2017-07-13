class Player {
    public name: string;
    public location: number;
    public balance: number;

    constructor(name: string) {
        this.name = name;
        this.location = 0;
        this.balance = 0;
    }

    public movePlayer(position: number): void {
        this.location = position;
    }
}