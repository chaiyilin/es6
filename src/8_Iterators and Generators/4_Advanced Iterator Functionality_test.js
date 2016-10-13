//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Advanced Iterator Functionality', () => {
    it('Passing Arguments to Iterators', () => {
        function *createIterator() {
            let first = yield 1;
            let second = yield first + 2; // 4 + 2
            yield second + 3; // 5 + 3
        }

        let iterator = createIterator();
        //The first call to next() is a special case where any argument passed to it is lost
        expect(iterator.next().value === 1).toEqual(true);
        //The 4 ends up assigned to the variable first
        //In a yield statement including an assignment,
        // the right side of the expression is evaluated on the first call to next() and
        // the left side is evaluated on the second call to next() before the function continues executing
        expect(iterator.next(4).value === 6).toEqual(true);
        expect(iterator.next(5).value === 8).toEqual(true);
        expect(iterator.next().value === undefined).toEqual(true);
    });

    it('Throwing Errors in Iterators', () => {
        function *createIterator() {
            let first = yield 1;
            let second = yield first + 2; // 4 + 2
            yield second + 3; // 5 + 3
        }

        let iterator = createIterator();
        console.log(iterator.next()); // "{ value: 1, done: false }"
        console.log(iterator.next(4)); // "{ value: 6, done: false }"
        //console.log(iterator.throw(new Error("Boom"))); // error thrown from generator
    });

    /*    it('Generator Return Statements', () => {

     });*/

    it('Delegating Generators', () => {
        function *createNumberIterator() {
            yield 1;
            yield 2;
        }

        function *createColorIterator() {
            yield "red";
            yield "green";
        }

        function *createCombinedIterator() {
            yield *createNumberIterator();
            yield *createColorIterator();
            yield true;
        }

        var iterator = createCombinedIterator();
        console.log(iterator.next()); // "{ value: 1, done: false }"
        console.log(iterator.next()); // "{ value: 2, done: false }"
        console.log(iterator.next()); // "{ value: "red", done: false }"
        console.log(iterator.next()); // "{ value: "green", done: false }"
        console.log(iterator.next()); // "{ value: true, done: false }"
        console.log(iterator.next()); // "{ value: undefined, done: true }"
    });

});

