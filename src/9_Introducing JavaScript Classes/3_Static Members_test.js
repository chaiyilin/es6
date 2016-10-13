//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Static Members', () => {

    it('common pattern in ECMAScript 5 and earlier', () => {
        function PersonType(name) {
            this.name = name;
        }

        // static method
        PersonType.create = function (name) {
            return new PersonType(name);
        };
// instance method
        PersonType.prototype.sayName = function () {
            return this.name;
        };
        var person = PersonType.create("Nicholas");
        expect(person.sayName() === "Nicholas").toEqual(true);
    });

    it('common pattern in ECMAScript 5 and earlier', () => {
        class PersonClass {
// equivalent of the PersonType constructor
            constructor(name) {
                this.name = name;
            }

// equivalent of PersonType.prototype.sayName
            sayName() {
                return this.name;
            }

// equivalent of PersonType.create
            static create(name) {
                return new PersonClass(name);
            }
        }
        let person = PersonClass.create("Nicholas");
        expect(person.sayName() === "Nicholas").toEqual(true);
    });
});

