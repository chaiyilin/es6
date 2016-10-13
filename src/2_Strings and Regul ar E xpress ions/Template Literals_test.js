//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Template Literals', () => {
    it('Basic Syntax (backticks)', () => {
        let message = `Hello world!`;
        expect(message === 'Hello world!').toEqual(true);
        expect(typeof message === 'string').toEqual(true);
        expect(message.length === 12).toEqual(true);
    });

    it('Multiline Strings', () => {
        let message = `Multiline
string`;
        expect(message.length === 16).toEqual(true);

        let message1 = `Multiline string`;
        expect(message1.length === 16).toEqual(true);
    });

    it('Making Substitutions', () => {
        let name = "Nicholas",
            message = `Hello, ${name}.`;
        expect(message === 'Hello, Nicholas.').toEqual(true);
    });

    it('expressions', () => {
        let count = 10,
            price = 0.25,
            message = `${count} items cost $${(count * price).toFixed(2)}.`;
        expect(message === '10 items cost $2.50.').toEqual(true);
    });

    it('nested Template literals', () => {
        let name = "Nicholas",
            message = `Hello, ${
                `my name is ${ name }`
                }.`;
        expect(message === 'Hello, my name is Nicholas.').toEqual(true);
    });

    it('Tagged Templates', () => {
//todo: http://www.benmvp.com/learning-es6-template-literals-tagged-templates/
        //expect(message === 'Hello, my name is Nicholas.').toEqual(true);
    });
});

