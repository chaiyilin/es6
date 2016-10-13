//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('generator', () => {
    it('basic', () => {
        function *createIterator() {
            yield 1;
            yield 2;
            yield 3;
        }

        let iterator = createIterator();
        //the most interesting aspect of generator functions is that they stop execution after each yield statement
        expect(iterator.next().value === 1).toEqual(true);
    });

    it('use yield inside a for loop', () => {
        function *createIterator(items) {
            for (let i = 0; i < items.length; i++) {
                yield items[i];
            }
        }

        let iterator = createIterator([1, 2, 3]);
        //Each time yield is encountered, the loop stops
        let item = iterator.next()
        expect(item.value === 1).toEqual(true);
        expect(item.done === false).toEqual(true);
        // end: { value: undefined, done: true }
    });

    //Creating an arrow function that is also a generator is not possible
    it('Generator Function Expressions', () => {
        let createIterator = function *(items) {
            for (let i = 0; i < items.length; i++) {
                yield items[i];
            }
        };
        let iterator = createIterator([1]);
        expect(iterator.next().value === 1).toEqual(true);
    });

    it('Generator Object Methods', () => {
        let o = {
            *createIterator(items) {
                for (let i = 0; i < items.length; i++) {
                    yield items[i];
                }
            }
        };
        let iterator = o.createIterator([1, 2, 3]);
        expect(iterator.next().value === 1).toEqual(true);
    });

});

