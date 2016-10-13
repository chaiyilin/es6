//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('iterator', () => {
    it('for-of loop', () => {
        let values = [1, 2, 3];
        //This for-of loop first calls the Symbol.iterator method on the values array to retrieve an iterator
        for (let num of values) {
            console.log(num);
        }
    });

    it('Accessing the Default Iterator', () => {
        let values = [1, 2, 3];
        let iterator = values[Symbol.iterator]();
        expect(iterator.next().value === 1).toEqual(true);
    });

    it('detect whether an object is iterable', () => {
        function isIterable(object) {
            return typeof object[Symbol.iterator] === "function";
        }

        expect(isIterable([1, 2, 3]) === true).toEqual(true);
        expect(isIterable(new WeakSet()) === false).toEqual(true);
    });

    //frequently be when defining your own objects or classes
    it('Creating Iterables', () => {
        let collection = {
            items: [],
            *[Symbol.iterator]() {
                for (let item of this.items) {
                    yield item;
                }
            }
        };
        collection.items.push(1);
        collection.items.push(2);
        collection.items.push(3);
        for (let x of collection) {
            console.log(x);
        }
    });

});

