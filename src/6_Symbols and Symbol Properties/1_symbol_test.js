//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('symbol', () => {
    it('basic', () => {
        let firstName = Symbol();// not new Symbol()
        let person = {};
        person[firstName] = "Nicholas";

        expect(person[firstName] === 'Nicholas').toEqual(true);
    });

    it('description', () => {
        let firstName = Symbol("first name");

        expect(firstName.toString() === 'Symbol(first name)').toEqual(true);
    });

    it('typeof', () => {
        let symbol = Symbol("test symbol");

        expect(typeof symbol === 'symbol').toEqual(true);
    });

    it('Using Symbols', () => {
        let firstName = Symbol("first name");
        // use a computed object literal property
        let person = {
            [firstName]: "Nicholas"
        };
        // make the property read only
        //non-enumerable
        Object.defineProperty(person, firstName, {writable: false});
        let lastName = Symbol("last name");
        Object.defineProperties(person, {
            [lastName]: {
                value: "Zakas",
                writable: false
            }
        });
        expect(person[firstName] === 'Nicholas').toEqual(true);
        expect(person[lastName] === 'Zakas').toEqual(true);
    });

    it('Sharing Symbols', () => {
        //global symbol registry: use the Symbol.for() method : search or create
        let uid = Symbol.for("uid");
        let object = {};
        object[uid] = "12345";
        expect(object[uid] === "12345").toEqual(true);

        let uid2 = Symbol.for("uid");
        expect(object[uid2] === '12345').toEqual(true);
    });

    it('keyFor', () => {
        let uid = Symbol.for("uid");
        expect(Symbol.keyFor(uid) === 'uid').toEqual(true);

        let uid3 = Symbol("uid");
        expect(Symbol.keyFor(uid3) === undefined).toEqual(true);
    });

    it('namespacing', () => {
        let element = Symbol.for("jquery.element");
        expect(Symbol.keyFor(element) === 'jquery.element').toEqual(true);
    });

    it('Symbol Coercion', () => {
        let uid = Symbol.for("uid"),
            desc = String(uid),
            desc1 = uid.toString();

        expect(desc === 'Symbol(uid)').toEqual(true);
        expect(desc1 === 'Symbol(uid)').toEqual(true);
    });

    it('Retrieving Symbol Properties', () => {
        let uid = Symbol.for("uid");
        let object = {
            enumerable:'enumerable',
            [uid]: "12345"
        };
        Object.defineProperty(object, 'nonEnumerable', { value: 'nonEnumerable', enumerable: false });

        //Object.keys
        let enumerableProperties=Object.keys(object);
        expect(enumerableProperties.length === 1).toEqual(true);
        expect(object[enumerableProperties[0]] === 'enumerable').toEqual(true);

        //Object.getOwnPropertyNames
        let includingNonEnumerableProperties=Object.getOwnPropertyNames(object);
        expect(includingNonEnumerableProperties.length === 2).toEqual(true);
        
        //Object.getOwnPropertySymbols
        let symbols = Object.getOwnPropertySymbols(object);
        expect(symbols.length === 1).toEqual(true);
        expect(object[symbols[0]] === '12345').toEqual(true);
    });

});

