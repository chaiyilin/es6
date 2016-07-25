//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('destructuring_declarations', () => {
    it('with arrays', () => {
        var [a, , [b], c] = [5, null, [6]];
        expect(a === 5 && b === 6 && c === undefined).toEqual(true);
    });

    it('with sparse arrays', () => {
        var [a, , b] = [,,,];
        expect(a === undefined && b === undefined).toEqual(true);
    });

    it('with strings', () => {
        var [a, b, c] = "ab";
        expect(a === "a" && b === "b" && c === undefined).toEqual(true);
    });

    it('with astral plane strings', () => {
        var [c] = "𠮷𠮶";
        expect(c === "𠮷").toEqual(true);
    });

    it('with generator instances', () => {
        var [a, b, c] = (function*(){ yield 1; yield 2; }());
        expect( a === 1 && b === 2 && c === undefined).toEqual(true);
    });

    it('with generic iterables', () => {
        var [a, b, c] = global.__createIterableObject([1, 2]);
        expect( a === 1 && b === 2 && c === undefined).toEqual(true);
    });
});

