import merge from "../src/merge";

describe("test merge function", () => {
    it("case 1: All collections have same length", () => {
        const collection_1 = [1, 4, 7, 9];
        const collection_2 = [2, 3, 5, 10];
        const collection_3 = [12, 11, 8, 6];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        expect(mergeResult).toStrictEqual(ans);
    });
    it("case 2: collection_1 has different length", () => {
        const collection_1 = [1, 4, 7, 9, 13];
        const collection_2 = [2, 3, 5, 10];
        const collection_3 = [12, 11, 8, 6];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        expect(mergeResult).toStrictEqual(ans);
    });
    it("case 3: collection_2 has different length", () => {
        const collection_1 = [1, 4, 7, 9];
        const collection_2 = [2, 3, 5, 10, 13];
        const collection_3 = [12, 11, 8, 6];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        expect(mergeResult).toStrictEqual(ans);
    });
    it("case 4: collection_3 has different length", () => {
        const collection_1 = [1, 4, 7, 9];
        const collection_2 = [2, 3, 5, 10];
        const collection_3 = [13, 12, 11, 8, 6];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        expect(mergeResult).toStrictEqual(ans);
    });
    it("case 5: All collections have different length", () => {
        const collection_1 = [1, 4, 7];
        const collection_2 = [2, 3, 5, 9];
        const collection_3 = [12, 11, 10, 8, 6];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        expect(mergeResult).toStrictEqual(ans);
    });
    it("case 6: collection_1 is empty", () => {
        const collection_1: number[] = [];
        const collection_2 = [1, 3, 5, 7];
        const collection_3 = [8, 6, 4, 2];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [1, 2, 3, 4, 5, 6, 7, 8];

        expect(mergeResult).toStrictEqual(ans);
    });
    it("case 7: collection_2 is empty", () => {
        const collection_1 = [1, 3, 5, 7];
        const collection_2: number[] = [];
        const collection_3 = [8, 6, 4, 2];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [1, 2, 3, 4, 5, 6, 7, 8];

        expect(mergeResult).toStrictEqual(ans);
    });
    it("case 8: collection_3 is empty", () => {
        const collection_1 = [1, 3, 5, 7];
        const collection_2 = [2, 4, 6, 8];
        const collection_3: number[] = [];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [1, 2, 3, 4, 5, 6, 7, 8];

        expect(mergeResult).toStrictEqual(ans);
    });
    it("case 9: Mix with negative number", () => {
        const collection_1 = [-1, 1, 5];
        const collection_2 = [-3, -2, 3, 6];
        const collection_3 = [7, 4, 2, 0, -4];

        const mergeResult = merge(collection_1, collection_2, collection_3);
        const ans = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];

        expect(mergeResult).toStrictEqual(ans);
    });
});