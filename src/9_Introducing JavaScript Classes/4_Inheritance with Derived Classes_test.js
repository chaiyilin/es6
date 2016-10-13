//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Inheritance with Derived Classes', () => {

    it('Inheritance with Derived Classes', () => {
            class Rectangle {
                constructor(length, width) {
                    this.length = length;
                    this.width = width;
                }

                getArea() {
                    return this.length * this.width;
                }
            }
            class Square extends Rectangle {
                //If you choose not to use a constructor, super() is automatically called for you 
                // with all arguments upon creating a new instance of the class
                constructor(length) {
// equivalent of Rectangle.call(this, length, length)

                    //You must call super() before accessing this in the constructor.
                    // Because super() is responsible for initializing this,
                    // attempting to access this before calling super() results in an error
                    super(length, length);
                }
            }
            var square = new Square(3);
            expect(square.getArea() === 9).toEqual(true);
            expect(square instanceof Square).toEqual(true);
            expect(square instanceof Rectangle).toEqual(true);
        }
    );

    it('Shadowing Class Methods', () => {

            class Rectangle {
                constructor(length, width) {
                    this.length = length;
                    this.width = width;
                }

                getArea() {
                    return this.length * this.width;
                }
            }

            class Square extends Rectangle {
                constructor(length) {
                    super(length, length);
                }

                //The methods on derived classes always shadow methods of the same name on the base class
                // override and shadow Rectangle.prototype.getArea()
                getArea() {
                    return this.length * this.length;
                }

                // or override, shadow, and call Rectangle.prototype.getArea()
                //The this value is automatically set correctly so you can make a simple method call
                /*                getArea() {
                 return super.getArea();
                 }*/
            }
        }
    );

    //If a base class has static members, those static members are also available on the derived class
    it('Inherited Static Members', () => {

            class Rectangle {
                constructor(length, width) {
                    this.length = length;
                    this.width = width;
                }

                getArea() {
                    return this.length * this.width;
                }

                static create(length, width) {
                    return new Rectangle(length, width);
                }
            }
            class Square extends Rectangle {
                constructor(length) {
// equivalent of Rectangle.call(this, length, length)
                    super(length, length);
                }
            }
            var rect = Square.create(3, 4);
            expect(rect.getArea() === 12).toEqual(true);
            expect(rect instanceof Rectangle).toEqual(true);
            expect(rect instanceof Square).toEqual(false);
        }
    );

    //You can use extends with any expression as long as the expression resolves to
    // a function with [[Construct]] and a prototype
    it('Derived Classes from Expressions', () => {

            function Rectangle(length, width) {
                this.length = length;

                this.width = width;
            }

            Rectangle.prototype.getArea = function () {
                return this.length * this.width;
            };
            class Square extends Rectangle {
                constructor(length) {
                    super(length, length);
                }
            }
            var x = new Square(3);
        }
    );

    //powerful possibilities, such as dynamically determining what to inherit from
    it('dynamically determining what to inherit from', () => {

            function Rectangle(length, width) {
                this.length = length;
                this.width = width;
            }

            Rectangle.prototype.getArea = function () {
                return this.length * this.width;
            };
            function getBase() {
                return Rectangle;
            }

            class Square extends getBase() {
                constructor(length) {
                    super(length, length);
                }
            }
            var x = new Square(3);
        }
    );

    //uses mixins instead of classical inheritance
    //Keep in mind that if multiple mixins have the same property, only the last property added will remain
    it('create mixins', () => {

            let SerializableMixin = {
                serialize() {
                    return JSON.stringify(this);
                }
            };
            let AreaMixin = {
                getArea() {
                    return this.length * this.width;
                }
            };

            function mixin(...mixins) {
                var base = function () {
                };
                Object.assign(base.prototype, ...mixins);
                return base;
            }

            class Square extends mixin(AreaMixin, SerializableMixin) {
                constructor(length) {
                    super();
                    this.length = length;
                    this.width = length;
                }
            }
            var x = new Square(3);
        }
    );

    it('Inheriting from Built-Ins', () => {
            class MyArray extends Array {
// empty
            }
            var colors = new MyArray();
            colors[0] = "red";
            expect(colors.length === 1).toEqual(true);
        }
    );

    //A convenient aspect of inheriting from built-ins is that any method that
    //returns an instance of the built-in will automatically return a derived class instance instead
    it('The Symbol.species Property', () => {
            class MyArray extends Array {
// empty
            }
            let items = new MyArray(1, 2, 3, 4),
                subitems = items.slice(1, 3);

            expect(items instanceof MyArray).toEqual(true);
            //todo
            expect(subitems instanceof Array).toEqual(true);
        }
    );

    it('clone', () => {
            class MyClass {
                static get [Symbol.species]() {
                    return this;
                }

                constructor(value) {
                    this.value = value;
                }

                clone() {
                    return new this.constructor[Symbol.species](this.value);
                }
            }
            class MyDerivedClass1 extends MyClass {
// empty
            }
            class MyDerivedClass2 extends MyClass {
                static get [Symbol.species]() {
                    return MyClass;
                }
            }
            let instance1 = new MyDerivedClass1("foo"),
                clone1 = instance1.clone(),
                instance2 = new MyDerivedClass2("bar"),
                clone2 = instance2.clone();
            expect(clone1 instanceof MyClass).toEqual(true);
            expect(clone1 instanceof MyDerivedClass1).toEqual(true);
            expect(clone2 instanceof MyClass).toEqual(true);
            expect(clone2 instanceof MyDerivedClass2).toEqual(false);
        }
    );

    it('new.target', () => {
            class Rectangle {
                constructor(length, width) {
                    console.log(new.target === Rectangle);
                    this.length = length;
                    this.width = width;
                }
            }
// new.target is Rectangle
            var obj = new Rectangle(3, 4); // outputs true
        }
    );

    it('not always be the same', () => {
            class Rectangle {
                constructor(length, width) {
                    console.log(new.target === Rectangle);
                    this.length = length;
                    this.width = width;
                }
            }
            class Square extends Rectangle {
                constructor(length) {
                    super(length, length)
                }
            }
// new.target is Square
            var obj = new Square(3); // outputs false
        }
    );

    it('abstract class', () => {
// abstract base class
            class Shape {
                constructor() {
                    if (new.target === Shape) {
                        throw new Error("This class cannot be instantiated directly.")
                    }
                }
            }
            class Rectangle extends Shape {
                constructor(length, width) {
                    super();
                    this.length = length;
                    this.width = width;
                }
            }
            //var x = new Shape(); // throws an error
            var y = new Rectangle(3, 4); // no error
            console.log(y instanceof Shape); // true
        }
    );
});

