//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Template Literals', () => {
    it('Default Parameter Values', () => {
        const timeout = function makeRequest(timeout = 2000, callback = function () {
        }) {
            return timeout
        }();
        expect(timeout === 2000).toEqual(true);
    });

    it('arguments Object', () => {
        function mixArgs(first, second = "b") {
            expect(arguments.length === 1).toEqual(true);
            expect(first === arguments[0]).toEqual(true);
            expect(second === arguments[1]).toEqual(true);
            first = "c";
            second = "d";
            expect(first !== arguments[0]).toEqual(true);
            expect(second !== arguments[1]).toEqual(true);
        }

        ("a")
        //rely on arguments to always reflect the initial call state
    });

    it('Rest Parameters', () => {
        function checkArgs(...args) {
            expect(args.length === 2).toEqual(true);
            expect(arguments.length === 2).toEqual(true);
            expect(args[0] === arguments[0]).toEqual(true);
            expect(args[1] === arguments[1]).toEqual(true);
        }

        ("a", "b");
    });

    it('Spread Operator', () => {
        let values = [25, 50, 75, 100];
        expect(Math.max(...values) === 100).toEqual(true);
    });

    it('mix and match', () => {
        let values = [25, 50, 75, 100];
        expect(Math.max(1, ...values, 200) === 200).toEqual(true);
    });

    it('name', () => {
        function doSomething() {
        }

        let doAnotherThing = function () {
        };

        var doThing1 = function doThing1Else() {
        };

        var person = {
            get firstName() {
                return "Nicholas"
            },
            sayName: function() {
                console.log(this.name);
            }
        }
        expect(doSomething.name === 'doSomething').toEqual(true);
        //todo
        expect(doAnotherThing.name === '').toEqual(true);
        expect(doThing1.name === 'doThing1Else').toEqual(true);

        //todo
        expect(person.sayName.name === '').toEqual(true);
        expect(person.firstName.name === undefined).toEqual(true);

        var doSomething2 = function() {
        };
        expect(doSomething2.bind().name === 'bound ').toEqual(true); 
        expect((new Function()).name === 'anonymous').toEqual(true);

        var comparator = (a, b) => a - b;
        expect(comparator.name === '').toEqual(true);
    });
 
    it('The new.target Metaproperty', () => {
        let result;
        function Person(name) {
            if (typeof new.target !== "undefined") {
                this.name = name;
            } else {
                //throw new Error("You must use new with Person.")
                result="You must use new with Person."
            }
        }

        const person = new Person("Nicholas");
        expect(person.name === 'Nicholas').toEqual(true);
        const person1 = Person("Nicholas");
        expect(result === 'You must use new with Person.').toEqual(true);
        
    });

    it('Block-Level Functions with hoist', () => {
        if (true) {
            expect(doSomething() === 1).toEqual(true);
            function doSomething() {
                return 1
            };
        }

    });

    it('Block-Level Functions with let', () => {
        if (true) {
            let result;
            try{
                console.log(typeof doSomething); // throws an error
            }catch(error){
                result=1
            }

            let doSomething = function () {
            }
            expect(result === 1).toEqual(true);
        }
        
    });
});

