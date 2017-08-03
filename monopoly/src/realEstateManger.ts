class RealEstateManger {
    private properties: Property[];

    public setProperties(properties: Property[]): void {
        this.properties = properties;
    }

    public numberOfGroupingOwned(token: Token, grouping: PropertyGrouping): number {
        const properties = this.properties.filter(property => property.grouping === grouping);
        const numberOfPropertiesOwned = properties.filter(property => property.isOwned() &&
            property.isOwned);

        return numberOfPropertiesOwned.length;
    }

    public allPropertiesInGroupingAreOwned(grouping: PropertyGrouping): boolean {
        const propertiesInGrouping = this.properties.filter(property => property.grouping === grouping);
        return propertiesInGrouping.every(property => property.isOwned());
    }
}