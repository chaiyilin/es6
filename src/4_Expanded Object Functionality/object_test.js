//jest.unmock('./sum'); // unmock to use the actual implementation of sum

//for module.exports etc.
describe('property initializer shorthand', () => {
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

    it('Concise Methods', () => {
        var person = {
            name: "Nicholas",
            sayName() {
                return this.name;
            }
        };
        expect(person.sayName() === 'Nicholas').toEqual(true);
    });

    it('Computed Property Names', () => {
        let lastName = "last name";
        let person = {
            "first name": "Nicholas",
            [lastName]: "Zakas"
        };
        expect(person[lastName] === 'Zakas').toEqual(true);
    });

    //http://clubmate.fi/self-referencing-object-literal-in-javascript/
    it('Self referencing', () => {
        //getter
        let person = {
            firstName: "Nicholas",
            get lastName() {
                return this.firstName
            }

        };
        expect(person.lastName === 'Nicholas').toEqual(true);

        //function
        let person1 = {
            firstName: "Nicholas",
            lastName: function () {
                return this.firstName
            }

        };
        expect(person1.lastName() === 'Nicholas').toEqual(true);

    });

    it('The Object.assign() Method', () => {
        var receiver = {};
        //accepts any number of suppliers
        Object.assign(receiver,
            {
                type: "js",
                name: "file.js"
            },
            {
                type: "css"
            }
        );
        //the second supplier might overwrite a value from the first supplier
        expect(receiver.type === 'css').toEqual(true);

        /*        Keep in mind that Object.assign() doesn’t create accessor properties on the
         receiver when a supplier has accessor properties. Because Object.assign() uses
         the assignment operator, an accessor property on a supplier will become a
         data property on the receiver;*/
    })

    it('Changing an Object’s Prototype', () => {
        let person = {
            getGreeting() {
                return "Hello";
            }
        };
        let dog = {
            getGreeting() {
                return "Woof";
            }
        };

        let friend = Object.create(person);
        expect(friend.getGreeting() === 'Hello').toEqual(true);
        expect(Object.getPrototypeOf(friend) === person).toEqual(true);

        // getPrototypeOf vs setPrototypeOf
        Object.setPrototypeOf(friend, dog);
        expect(friend.getGreeting() === 'Woof').toEqual(true);
        expect(Object.getPrototypeOf(friend) === dog).toEqual(true);
    });

    it('Easy Prototype Access with Super References', () => {
        let person = {
            getGreeting() {
                return "Hello";
            }
        };
        let dog = {
            getGreeting() {
                return "Woof";
            }
        };

        let friend = {
            getGreeting() {
                // involved version
                // does not work on multiple levels of inheritance. check out p79
                return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
            }
        };

        let friend1 = {
            getGreeting() {
                // easy version: super=Object.getPrototypeOf(this)
                // only works in concise method
                return super.getGreeting() + ", hi!";
            }
        };

        Object.setPrototypeOf(friend, person);
        Object.setPrototypeOf(friend1, person);
        expect(friend.getGreeting() === 'Hello, hi!').toEqual(true);
        expect(friend1.getGreeting() === 'Hello, hi!').toEqual(true);
        expect(Object.getPrototypeOf(friend) === person).toEqual(true);

        // getPrototypeOf vs setPrototypeOf
        Object.setPrototypeOf(friend, dog);
        expect(friend.getGreeting() === 'Woof, hi!').toEqual(true);
        expect(Object.getPrototypeOf(friend) === dog).toEqual(true);

        //multiple levels of inheritance
        let relative = Object.create(friend1);
        expect(relative.getGreeting() === 'Hello, hi!').toEqual(true);
    });
});

