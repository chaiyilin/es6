//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('New Methods', () => {
    it('find()', () => {
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

    it('find() and findIndex()', () => {
        let numbers = [25, 30, 35, 40, 45];
        expect(numbers.find(n => n > 33) === 35).toEqual(true);
        expect(numbers.findIndex(n => n > 33) === 2).toEqual(true);
    });

    it('fill()', () => {
        let numbers = [1, 2, 3, 4];
        numbers.fill(1);
        expect(numbers.toString() === '1,1,1,1').toEqual(true);

        let numbers1 = [1, 2, 3, 4];
        numbers1.fill(1, 2);
        expect(numbers1.toString() === '1,2,1,1').toEqual(true);
        numbers1.fill(0, 1, 3);
        expect(numbers1.toString() === '1,0,0,1').toEqual(true);
    });

    it('copyWithin()', () => {
        let numbers = [1, 2, 3, 4];
// paste values into array starting at index 2
// copy values from array starting at index 0
        numbers.copyWithin(2, 0);
        expect(numbers.toString() === '1,2,1,2').toEqual(true);
    });

});