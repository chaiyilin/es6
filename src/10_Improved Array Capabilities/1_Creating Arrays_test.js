//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Creating Arrays', () => {
    it('Array.of()', () => {
        let items = new Array(2);
        expect(items.length === 2).toEqual(true);

        let items1 = Array.of(2);
        expect(items1.length === 1).toEqual(true);
    });

    it('Array.from()', () => {
        function doSomething() {
            var args = Array.from(arguments);
// use args
        }
    });

    it('Mapping Conversion', () => {
        function translate() {
            return Array.from(arguments, (value) => value + 1);
        }

        let numbers = translate(1, 2, 3);
        expect(numbers[0] === 2).toEqual(true);
    });

    it('third argument', () => {
        let helper = {
            diff: 1,
            add(value) {
                return value + this.diff;
            }
        };

        function translate() {
            return Array.from(arguments, helper.add, helper);
        }

        let numbers = translate(1, 2, 3);
        expect(numbers[0] === 2).toEqual(true);
    });

    it('Use on Iterables', () => {
        let numbers = {
            *[Symbol.iterator]() {
                yield 1;
                yield 2;
                yield 3;
            }
        };
        let numbers2 = Array.from(numbers, (value) => value + 1);
        expect(numbers2[0] === 2).toEqual(true);
    });
});

