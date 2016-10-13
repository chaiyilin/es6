//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Generator Methods', () => {
    it('basic', () => {
        class MyClass {
            *createIterator() {
                yield 1;
                yield 2;
                yield 3;
            }
        }
        let instance = new MyClass();
        let iterator = instance.createIterator();

    });

    it('iterator for class', () => {
        class Collection {
            constructor() {
                this.items = [];
            }

            *[Symbol.iterator]() {
                yield *this.items.values();
            }
        }
        var collection = new Collection();
        collection.items.push(1);
        collection.items.push(2);
        collection.items.push(3);
        for (let x of collection) {
            console.log(x);
        }
// Output:
// 1
// 2
// 3

    });

    it('iterator for class', () => {
        class Collection {
            constructor() {
                this.items = [];
            }

            *[Symbol.iterator]() {
                yield *this.items.values();
            }
        }
        var collection = new Collection();
        collection.items.push(1);
        collection.items.push(2);
        collection.items.push(3);
        for (let x of collection) {
            console.log(x);
        }
// Output:
// 1
// 2
// 3

    });
});

