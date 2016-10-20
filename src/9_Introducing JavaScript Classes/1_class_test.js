//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('class', () => {
    it('Class-Like Structures in ECMAScript 5', () => {
        function PersonType(name) {
            this.name = name;
        }

        PersonType.prototype.sayName = function () {
            return this.name;
        };
        var person = new PersonType("Nicholas");
        expect(person.sayName() === 'Nicholas').toEqual(true);
    });

    //just syntactic sugar on top of the prototype 
    it('Class Declarations', () => {
//Class declarations, unlike function declarations, are not hoisted. Class declarations act like let declarations
            class PersonClass {
// equivalent of the PersonType constructor
                constructor(name) {
                    //Own properties, properties that occur on the instance rather than the prototype,
                    // can only be created inside a class constructor or method.
                    // I recommend creating all possible own properties inside the constructor function
                    // so a single place in the class is responsible for all of them
                    this.name = name;
                }

// equivalent of PersonType.prototype.sayName
                //All methods are nonenumerable. This is a significant change from custom types,
                // where you need to use Object.defineProperty() to make a method nonenumerable.
                sayName() {
                    return this.name;
                }
            }

            expect(PersonClass.name === 'PersonClass').toEqual(true);
            //Calling the class constructor without new throws an error.
            let person = new PersonClass("Nicholas");
            expect(person.sayName() === 'Nicholas').toEqual(true);
            expect(person.name === 'Nicholas').toEqual(true);
            person.name = 'others';
            expect(person.name === 'others').toEqual(true);
            expect(typeof PersonClass === 'function').toEqual(true);

        }
    );

    it('geter and setter', () => {
        class Person {
            constructor(name) {
                this._name = name;
            }

            get name() {
                return this._name
            }

            set name(name) {
                this._name = name
            }
        }

        var person = new Person("Nicholas");
        expect(person.name === 'Nicholas').toEqual(true);
        person.name = 'bbb';
        expect(person.name === 'bbb').toEqual(true);
        //not private
        expect(person._name === 'bbb').toEqual(true);
    });

    it('function without new', () => {
        function Person(name) {
            let _name = name;
            return {
                get name() {
                    return _name
                },

                set name(name) {
                    _name = name
                }
            }

        }

        var person = Person("Nicholas");
        expect(person.name === 'Nicholas').toEqual(true);
        person.name = 'bbb';
        expect(person.name === 'bbb').toEqual(true);
    });

    //designed to be used in variable declarations or passed into functions as arguments
    it('Class Expressions', () => {
            let PersonClass = class {
// equivalent of the PersonType constructor
                constructor(name) {
                    this.name = name;
                }

                // equivalent of PersonType.prototype.sayName
                sayName() {
                    return this.name;
                }
            };

            expect(PersonClass.name === '').toEqual(true);
            let person = new PersonClass("Nicholas");
            expect(person.sayName() === 'Nicholas').toEqual(true);
            expect(person.name === 'Nicholas').toEqual(true);
            expect(person instanceof PersonClass).toEqual(true);
            expect(person instanceof Object).toEqual(true);
            expect(typeof PersonClass === 'function').toEqual(true);
            expect(typeof PersonClass.prototype.sayName === 'function').toEqual(true);
        }
    );

    it('Named Class Expressions', () => {
        let PersonClass = class PersonClass2 {
// equivalent of the PersonType constructor
            constructor(name) {
                this.name = name;
            }

// equivalent of PersonType.prototype.sayName
            sayName() {
                console.log(this.name);
            }
        };
    });

    //In programming, a first-class citizen is a value that can be passed into a function,
    // returned from a function, and assigned to a variable
    it('Classes as First-Class Citizens', () => {
        function createObject(classDef) {
            return new classDef();
        }

        let obj = createObject(class {
            sayHi() {
                return "Hi!";
            }
        });

        expect(obj.sayHi() === "Hi!").toEqual(true);
    });

    it('immediately invoking the class constructor', () => {
        let person = new class {
            constructor(name) {
                this.name = name;
            }

            sayName() {
                return this.name;
            }
        }("Nicholas");

        expect(person.sayName() === "Nicholas").toEqual(true);
    });

    it('Accessor Properties', () => {
        class CustomHTMLElement {
            constructor(element) {
                this.element = element;
            }

            get html() {
                return this.element.innerHTML;
            }

            set html(value) {
                this.element.innerHTML = value;
            }
        }

        var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");
        //expect("enumerable" in descriptor).toEqual(true);
        expect("get" in descriptor).toEqual(true);
        expect("set" in descriptor).toEqual(true);
        expect(descriptor.enumerable).toEqual(false);
    });

    it('Computed Member Names', () => {
        let methodName = "sayName";
        class PersonClass {
            constructor(name) {
                this.name = name;
            }

            [methodName]() {
                return this.name;
            }
        }
        ;
        let me = new PersonClass("Nicholas");
        expect(me.sayName() === "Nicholas").toEqual(true);
    });

    it('Accessor properties can use computed names', () => {
        let propertyName = "html";
        class CustomHTMLElement {
            constructor(element) {
                this.element = element;
            }

            get [propertyName]() {
                return this.element.innerHTML;
            }

            set [propertyName](value) {
                this.element.innerHTML = value;
            }
        }

    });

});

