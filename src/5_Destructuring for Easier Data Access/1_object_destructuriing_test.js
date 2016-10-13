//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('object destructuring', () => {
    it('Object Destructuring', () => {
        let node = {
            type: "Identifier",
            name: "foo"
        };
        let { type, name } = node;

        expect(type === 'Identifier').toEqual(true);
    });

    it('Destructuring Assignment', () => {
        let node = {
                type: "Identifier",
                name: "foo"
            },
            type = "Literal",
            name = 5;

        //must put parentheses around a destructuring assignment statement
        //reason p85
        ({ type, name } = node);

        expect(type === 'Identifier').toEqual(true);
    });

    it('Default Values', () => {
        let node = {
            type: "Identifier",
            name: "foo"
        };
        let { name,type, value } = node;

        expect(value === undefined).toEqual(true);
        //driven by variable name
        expect(name === 'foo').toEqual(true);

        ({ type, name, value = true } = node);
        expect(value === true).toEqual(true);
    });

    it('Assigning to Different Local Variable Names', () => {
        let node = {
            type: "Identifier",
            name: "foo"
        };
        let { type: localType, name: localName } = node;
        expect(localType === 'Identifier').toEqual(true);

        //with extra separated assignment, co-exist with destructuring assignment
        ({ type: localType, name: localName,localValue = "bar" } = node);
        expect(localValue === 'bar').toEqual(true);
    });

    it('Nested Object Destructuring', () => {
        let node = {
            type: "Identifier",
            name: "foo",
            loc: {
                start: {
                    line: 1,
                    column: 1
                },
                end: {
                    line: 1,
                    column: 4
                }
            }
        };
        let { loc: { start }} = node;
        expect(start.line === 1 && start.column ===1).toEqual(true);
    });
});

