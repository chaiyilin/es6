//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('let', () => {
    it('basic support', () => {
        let foo = 123;
        expect(foo === 123).toEqual(true);
    });

    it('is block-scoped', () => {
        let bar = 123;
        {
            let bar = 456;
        }
        expect(bar === 123).toEqual(true);
    });

    it('cannot be in statements', () => {
        let bar = 1;
        try {
            Function("if(true) let baz = 1;")();
        } catch (e) {
            //return true;
        }
        expect(typeof baz === "undefined").toEqual(true);
    });

    it('No Redeclaration', () => {
        var bar = 1, result;
        //let bar=2; //error
        try {
            let bar = 2; // block scope, works 
        } catch (e) {
            result = true;
        }
        expect(result === undefined).toEqual(true);
    });

    it('for loop statement scope', () => {
        let baz = 1;
        for (let baz = 0; false;) {
        }
        expect(baz === 1).toEqual(true);
    });

    it('temporal dead zone', () => {
        let result;
        try {
            console.log(typeof value);
        } catch (e) {
            result = true;
        }

        let value = "blue";
        expect(result === true).toEqual(true);
    });

    it('no temporal dead zone', () => {
        let result = typeof value;
        {
            let value = "blue";
        }

        expect(result === 'undefined').toEqual(true);
    });

    it('Block Bindings in Loops - var', () => {
        for (var i = 0; i < 10; i++) {
        }
        expect(i === 10).toEqual(true);
    });

    it('Block Bindings in Loops - let', () => {
        for (let i = 0; i < 10; i++) {
        }

        let result;
        try {
            i;
        } catch (e) {
            result = true
        }
        expect(result === true).toEqual(true);
    });

    it('Functions in Loops - var', () => {
        var funcs = [];
        // i is shared
        for (var i = 0; i < 10; i++) {
            funcs.push(function () {
                return i;
            });
        }

        expect(funcs[0]() === 10).toEqual(true);
    });

    it('Functions in Loops - var fix', () => {
        var funcs = [];
        for (var i = 0; i < 10; i++) {
            funcs.push(
                function (value) {
                    return function () {
                        return value;
                    }
                }(i)
            );
        }

        expect(funcs[0]() === 0).toEqual(true);
    });

    it('Functions in Loops - let', () => {
        var funcs = [];
        //each iteration, the loop creates a new variable
        for (let i = 0; i < 10; i++) {
            funcs.push(function () {
                return i;
            });
        }

        expect(funcs[0]() === 0).toEqual(true);
    });
});

