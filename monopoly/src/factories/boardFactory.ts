class BoardFactory {
    public createBoard(banker: Banker, movement: Movement, tokens: Token[]): Board {
        const realEstateManger = new RealEstateManger();
        const chanceDeck = new Array<Card>();
        const communityChestDeck = new Array<Card>();

        this.setupChanceDeck(chanceDeck, tokens, banker, movement);
        this.setupCommunityChestDeck(communityChestDeck, movement, banker);

        const spaces = [
            new Go(banker),
            new IncomeTax(banker),
            new GoToJail(movement),
            new LuxuryTax(banker),
            new DrawCardLocation(7, chanceDeck),
            new DrawCardLocation(20, chanceDeck),
            new DrawCardLocation(36, chanceDeck),
            new DrawCardLocation(2, communityChestDeck),
            new DrawCardLocation(17, communityChestDeck),
            new DrawCardLocation(33, communityChestDeck)];

        const properties = [
            new Property("Mediterranean Ave.", 1, 100, 12, banker, PropertyGrouping.DarkPurple),
            new Property("Baltic Ave.", 3, 100, 12, banker, PropertyGrouping.DarkPurple),
            new Railroad("Reading Railroad", 5, 100, 25, banker, realEstateManger),
            new Property("Oriental Ave.", 6, 100, 12, banker, PropertyGrouping.LightBlue),
            new Property("Vermont Ave.", 8, 100, 12, banker, PropertyGrouping.LightBlue),
            new Property("Connecticut Ave.", 9, 100, 12, banker, PropertyGrouping.LightBlue),
            new Property("St. Charles Place", 11, 100, 12, banker, PropertyGrouping.LightPurple),
            new Property("States Ave", 13, 100, 12, banker, PropertyGrouping.LightPurple),
            new Property("Virginia Ave.", 14, 100, 12, banker, PropertyGrouping.LightPurple),
            new Railroad("Pennsylvania RR", 15, 100, 25, banker, realEstateManger),
            new Property("St. James Place", 16, 100, 12, banker, PropertyGrouping.Orange),
            new Property("Tennessee Ave.", 18, 100, 12, banker, PropertyGrouping.Orange),
            new Property("New York Ave.", 19, 100, 12, banker, PropertyGrouping.Orange),
            new Property("Kentucky Ave.", 21, 100, 12, banker, PropertyGrouping.Red),
            new Property("Indiana Ave.", 23, 100, 12, banker, PropertyGrouping.Red),
            new Property("Illinois Ave.", 24, 100, 12, banker, PropertyGrouping.Red),
            new Railroad("B. & O. RR)", 25, 100, 25, banker, realEstateManger),
            new Property("Atlantic Ave.", 26, 100, 12, banker, PropertyGrouping.Yellow),
            new Property("Ventnor Ave.", 27, 100, 12, banker, PropertyGrouping.Yellow),
            new Property("Marvin Gardens", 29, 100, 12, banker, PropertyGrouping.Yellow),
            new Property("Pacific Ave.", 31, 100, 12, banker, PropertyGrouping.Green),
            new Property("North Carolina Ave.", 32, 100, 12, banker, PropertyGrouping.Green),
            new Property("Pennsylvania Ave.", 34, 100, 12, banker, PropertyGrouping.Green),
            new Railroad("Shortline RR", 35, 100, 25, banker, realEstateManger),
            new Property("Park Place", 37, 100, 12, banker, PropertyGrouping.DarkBlue),
            new Property("Boardwalk", 39, 100, 12, banker, PropertyGrouping.DarkBlue)];

        realEstateManger.setProperties(properties);
        let locations = new Array<BoardLocation>();
        locations = locations.concat(properties).concat(spaces);

        return new GameBoard(locations);
    }

    private setupChanceDeck(chanceDeck: Card[], tokens: Token[], banker: Banker, movement: Movement): void {
        chanceDeck.push(new ChairmanOfTheBoard(tokens, banker));
        chanceDeck.push(new IncreaseBalance(100, banker)); // You have won a crossword competition
        chanceDeck.push(new DecreaseBalance(15, banker)); // Pay poor tax of $15
        chanceDeck.push(new GoDirectlyToJail(movement));
        chanceDeck.push(new IncreaseBalance(50, banker)); // Bank pays you dividend of $50
    }

    private setupCommunityChestDeck(communityChestDeck: Card[], movement: Movement, banker: Banker): void {
        communityChestDeck.push(new AdvanceToGo(movement, banker));
        communityChestDeck.push(new GoDirectlyToJail(movement));
        communityChestDeck.push(new DecreaseBalance(50, banker)); // Doctor's fees
    }
}