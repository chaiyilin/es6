// class
class ClassCar {
    drive () {
        console.log('Vroom!');
    }
}

const car1 = new ClassCar();//if without `new`, it will throw an error.
console.log(typeof ClassCar); // function
console.log(car1.drive());
/*Drawbacks:
1. Required `new`.
2. Details of instantiation get leaked into the calling API (via the `new` requirement).
3. Constructors break the Open / Closed Principle, switching from a constructor or class to a factory is a breaking change
4. Using Constructors Enables the Deceptive `instanceof` (avoid `instanceof`)
*/

// constructor
function ConstructorCar (name) {
    if (!(this instanceof ConstructorCar)) {
        //this.constructor.name
        throw new Error(arguments.callee.name+" should be created with `new`")
    }
    this.name = name;
}

ConstructorCar.prototype.drive = function () {
    console.log(this.name);

};

const car2 = new ConstructorCar('ConstructorCar');
console.log(car2.drive());


// factory
const proto = {
    drive () {
        console.log('Vroom!');
    }
};

function factoryCar () {
    return Object.create(proto);
}

const car3 = factoryCar();
console.log(car3.drive());
/*Benefits of Using Factories
1. Return any arbitrary object and use any arbitrary prototype
2. No refactoring worries
3. No `new`
4. Standard `this` behavior
5. No deceptive `instanceof`
6. Some people like the way `myFoo = createFoo()` reads
* */
