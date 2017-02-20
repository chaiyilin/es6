//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('object basic', () => {
    it('Default Parameter Values', () => {
        function createPerson(name, age) {
            return {
                name,
                age
            };
        }

        const person = createPerson('aaa', 10);
        expect(person.name === 'aaa').toEqual(true);

        const name = 'aaa';
        const age = 10;
        const person1 = {
            name,
            age
        };
        expect(person1.name === 'aaa').toEqual(true);
    });

});

