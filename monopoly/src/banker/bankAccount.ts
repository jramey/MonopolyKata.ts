class BankAccount {
    private token: Token;
    private balance: number;

    constructor(token: Token, balance: number) {
        this.token = token;
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getTokenName() {
        return this.token.getName();
    }

    public increaseBalance(amount: number): void {
        this.balance += amount;
    }

    public decreaseBalance(amount: number): void {
        this.balance -= amount;
    }
}