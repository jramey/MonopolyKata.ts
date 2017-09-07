class DrawCardLocation extends BoardLocation {
    private cards: Card[];

    constructor(location: number, cards: Card[]) {
        super(location);
        this.cards = cards;
    }

    public landOn(token: Token): void {
        const card = this.cards.shift();
        card.play(token);
        this.cards.push(card);
    }
}