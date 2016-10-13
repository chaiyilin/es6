//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Set', () => {
    it('basic', () => {
        let set = new Set();
        set.add(5);
        set.add("5");
        expect(set.size === 2).toEqual(true);
    });

    it('vale ignored', () => {
        let set = new Set();
        set.add(5);
        set.add("5");
        set.add(5);
        expect(set.size === 2).toEqual(true);
    });

    it('initialize a set using an array with duplicated value', () => {
        //The Set constructor actually accepts any iterable object as an argument
        let set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
        expect(set.size === 5).toEqual(true);
    });

    it('check', () => {
        let set = new Set();
        set.add(5);
        expect(set.has(5) === true).toEqual(true);
    });

    it('delete and clear', () => {
        let set = new Set();
        set.add(5);
        set.add("5");
        set.delete(5);
        expect(set.size === 1).toEqual(true);

        set.clear();
        expect(set.size === 0).toEqual(true);
    })

    it('forEach', () => {
        let set = new Set([1, 2]);
        //The strange difference between the set version of forEach() and the array version
        // is that the first and second arguments to the callback function are the same value in the set version
        set.forEach(function (value, key, ownerSet) {
            expect(key === value).toEqual(true);
            expect(ownerSet === set).toEqual(true);

        });
    });

    it('Converting a Set to an Array', () => {
        let set = new Set([1, 2, 3, 3, 3, 4, 5]),
            array = [...set];
        expect(set.size).toEqual(5);
        expect(array.length).toEqual(5);
    });

    it('strong set', () => {
        let set = new Set(),
            key = {};
        set.add(key);
        console.log(set.size); // 1
// eliminate original reference
        key = null;
        console.log(set.size); // 1
// get the original reference back
        key = [...set][0];
        expect(key !== null).toEqual(true);
    });

    it('Weak Sets', () => {
        //WeakSet can’t accept primitive values
        let set = new WeakSet(),
            key = {};
// add the object to the set
        set.add(key);
        expect(set.has(key)).toEqual(true);
        set.delete(key);
        expect(set.has(key) === false).toEqual(true);
    });

    it('Key Differences Between Set Types', () => {
        //the weak reference is held to the object value
        //• In a WeakSet instance, the add() method, has() method, and delete()
        //         method all throw an error when passed a nonobject.
        // • Weak sets aren’t iterables and therefore cannot be used in a for-of loop.
        // • Weak sets don’t expose any iterators (such as the keys() and values()
        //         methods), so there is no way to programmatically determine the contents
        //         of a weak set.
        // • Weak sets don’t have a forEach() method.
        // • Weak sets don’t have a size property = no way to verify that a weak set is empty
    });
});

