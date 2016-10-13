//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('symbol buildin', () => {
    it('Symbol.hasInstance', () => {
        //obj instanceof Array;
        // is equivalent to
        //Array[Symbol.hasInstance](obj);
        
    });

    it('Symbol.hasInstance: can not overwrite', () => {
        function MyObject() {
        }
        // 1. The Symbol.hasInstance property is defined as nonwritable and nonconfigurable as well as nonenumerable
        // to ensure it doesn’t get overwritten by mistake
        // 2, must use Object.defineProperty() to overwrite a nonwritable property
        //Overwriting a method defined with a well-known symbol
        // 3. changes an ordinary object to an exotic object
        // because some internal default behavior is changed
        // 4. Configurable: no
        Object.defineProperty(MyObject, Symbol.hasInstance, {
            value: function(v) {
                return false;
            }
        });

        let obj = new MyObject();
        expect(obj instanceof MyObject ===true).toEqual(true);
    });

    it('Symbol.hasInstance: can mask', () => {
        class MyArray {
            static [Symbol.hasInstance](instance) {
                return Array.isArray(instance);
            }
        }

        //todo : should be true
        expect([] instanceof MyArray ===false).toEqual(true);
    });

    //http://www.2ality.com/2015/09/well-known-symbols-es6.html
    it('Overriding inherited properties', () => {
        //read-only
        let proto = Object.defineProperty({}, 'prop', {
            writable: false,
            configurable: true,
            value: 123,
        });
        let obj = Object.create(proto);
        let result;
        obj.prop = 456;
        expect(obj.prop ===123).toEqual(true);

    });

    it('can still Overriding inherited properties', () => {
        let proto = Object.defineProperty({}, 'prop', {
            writable: false,
            configurable: true,
            value: 123,
        });
        let obj = Object.create(proto);
        Object.defineProperty(obj, 'prop', {value: 456});
        expect(obj.prop ===456).toEqual(true);
    });

    it('define any type to behave like arrays do in a concat() call', () => {
        // look like an array
        let collection = {
            0: "Hello",
            1: "world",
            length: 2,
            [Symbol.isConcatSpreadable]: true 
        };
        let messages = [ "Hi" ].concat(collection);
        expect(messages.length ===3).toEqual(true); 
    });
});

