//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('map', () => {
    it('map key is different from object properties', () => {
//object properties always coerce values into strings
    });

    it('basic', () => {
        let map = new Map();
        map.set("title", "Understanding ECMAScript 6");
        map.set("year", 2016);
        expect(map.get('year') === 2016).toEqual(true);
    });

    it('Map Methods', () => {
        let map = new Map();
        map.set("name", "Nicholas");
        map.set("age", 25);
        expect(map.size === 2).toEqual(true);
        expect(map.has("name") === true).toEqual(true);
        expect(map.get("name") === 'Nicholas').toEqual(true);

        map.delete("name");
        expect(map.size === 1).toEqual(true);

        map.clear();
        expect(map.size === 0).toEqual(true);
    });

    it('Map Initialization', () => {
        let map = new Map([["name", "Nicholas"], ["age", 25]]);
        expect(map.size === 2).toEqual(true);
    });

    it('forEach', () => {
        let map = new Map([["name", "Nicholas"], ["age", 25]]);
        map.forEach(function (value, key, ownerMap) {

        });
    });

    it('Weak Maps', () => {
    });


});

