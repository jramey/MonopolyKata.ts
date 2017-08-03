class Banker {
    public accounts: BankAccount[];

    constructor(tokens: Token[]) {
        this.accounts = new Array<BankAccount>();
        this.setupBankAccountsForPlayers(tokens);
    }

    public getBalance(token: Token) {
        const bankAccount = this.getBankAccountForToken(token);
        return bankAccount.getBalance();
    }

    public transferRent(token: Token, owner: Token, amount: number): void {
        this.decreaseBalance(token, amount);
        this.increaseBalance(owner, amount);
    }

    public increaseBalance(token: Token, amount: number): void {
        const bankAccount = this.getBankAccountForToken(token);
        bankAccount.increaseBalance(amount);
    }

    public decreaseBalance(token: Token, amount: number): void {
        const bankAccount = this.getBankAccountForToken(token);
        bankAccount.decreaseBalance(amount);
    }

    private setupBankAccountsForPlayers(tokens: Token[]) {
        tokens.forEach(token => {
            this.accounts.push(new BankAccount(token, 200));
        });
    }

    private getBankAccountForToken(token: Token): BankAccount {
        const matchingAccount = this.accounts.filter(account => account.getTokenName() === token.getName());

        if (matchingAccount.length === 0)
            throw new Error("Bank account found not for for token");

        return matchingAccount[0];
    }
}