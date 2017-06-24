import { } from "jasmine";

describe("Shuffle", () => {
    it("randomizes order", () => {
        const array = [1, 2];
        let oneIsFirst = false;
        let twoIsFirst = false;
        const shuffle = new Shuffle();

        for (let i = 0; i < 100; i++) {
            const shuffledArray = shuffle.shuffle(array);

            if (shuffledArray[0] === 1)
                oneIsFirst = true;
            else
                twoIsFirst = true;
        }

        expect(oneIsFirst).toBe(true);
        expect(twoIsFirst).toBe(true);
    });
});