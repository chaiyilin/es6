
// Manually assigning indexed values from an array or properties from an object can be thought of as structured assignment.
// ES6 adds a dedicated syntax for destructuring, specifically array destructuring and object destructuring.
// This syntax eliminates the need for the tmp variable
function foo() {
    return [1,2,3];
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var [ a, b, c ] = foo();
var { x: x, y: y, z: z } = bar();

console.log( a, b, c );             // 1 2 3
console.log( x, y, z );             // 4 5 6

//Object Property Assignment Pattern
//invert that target: source pattern
var { x: bam, y: baz, z: bap } = bar();

console.log( bam, baz, bap );       // 4 5 6
console.log( x, y, z );             // ReferenceError

//There's another way to think about this syntax
var aa = 10, bb = 20;

var o = { x: aa, y: bb };
var     { x: AA, y: BB } = o;

console.log( AA, BB );              // 10 20

//Not Just Declarations
//The variables can already be declared, and then the destructuring only does assignments

//Note: For the object destructuring form specifically, when leaving off a var/let/const declarator,
// we had to surround the whole assignment expression in ( ),
// because otherwise the { .. } on the lefthand side as the first element in the statement is taken to be a block statement instead of an object.
var a, b, c, x, y, z;

[a,b,c] = foo();
( { x, y, z } = bar() );

console.log( a, b, c );             // 1 2 3
console.log( x, y, z );             // 4 5 6

//In fact, the assignment expressions (a, y, etc.) don't actually need to be just variable identifiers.
// Anything that's a valid assignment expression is allowed
var o = {};

[o.a, o.b, o.c] = foo();
( { x: o.x, y: o.y, z: o.z } = bar() );

console.log( o.a, o.b, o.c );       // 1 2 3
console.log( o.x, o.y, o.z );       // 4 5 6

//You can even use computed property expressions in the destructuring
var which = "x",
    o = {};

( { [which]: o[which] } = bar() );

console.log( o.x );                 // 4


//use the general assignments to create object mappings/transformations

var o1 = { a: 1, b: 2, c: 3 },
    o2 = {};

( { a: o2.x, b: o2.y, c: o2.z } = o1 );

console.log( o2.x, o2.y, o2.z );    // 1 2 3


//map an object to an array
var o1 = { a: 1, b: 2, c: 3 },
    a2 = [];

( { a: a2[0], b: a2[1], c: a2[2] } = o1 );

console.log( a2 );                  // [1,2,3]


//Or the other way around
var a1 = [ 1, 2, 3 ],
    o2 = {};

[ o2.a, o2.b, o2.c ] = a1;

console.log( o2.a, o2.b, o2.c );    // 1 2 3


//reorder one array to another
var a1 = [ 1, 2, 3 ],
    a2 = [];

[ a2[2], a2[0], a2[1] ] = a1;

console.log( a2 );                  // [2,3,1]


//solve the traditional "swap two variables" task without a temporary variable
var x = 10, y = 20;

[ y, x ] = [ x, y ];

console.log( x, y );                // 20 10

//Warning: Be careful: you shouldn't mix in declaration with assignment
// unless you want all of the assignment expressions also to be treated as declarations


//Repeated Assignments
var { a: X, a: Y } = { a: 1 };

X;  // 1
Y;  // 1


//both destructure a sub-object/array property and also capture the sub-object/array's value itself
var { a: { x: X, x: Y }, a } = { a: { x: 1 } };

X;  // 1
Y;  // 1
a;  // { x: 1 }

( { a: X, a: Y, a: [ Z ] } = { a: [ 1 ] } );

X.push( 2 );
Y[0] = 10;

X;  // [10,2]
Y;  // [10,2]
Z;  // 1


// it's a much better idea to spread destructuring assignment patterns over multiple lines, using proper indentation --
// much like you would in JSON or with an object literal value
// harder to read:
var { a: { b: [ c, d ], e: { f } }, g } = obj;

// better:
var {
    a: {
        b: [ c, d ],
        e: { f }
    },
    g
} = obj;


//Destructuring Assignment Expressions
var o = { a:1, b:2, c:3 },
    a, b, c, p;

p = { a, b, c } = o;

console.log( a, b, c );         // 1 2 3
p === o;                        // true


//chain destructuring assignment expressions together
var o = { a:1, b:2, c:3 },
    p = [4,5,6],
    a, b, c, x, y, z;

( {a} = {b,c} = o );
[x,y] = [z] = p;

console.log( a, b, c );         // 1 2 3
console.log( x, y, z );         // 4 5 4


//with destructuring
var a = [2,3,4];
var [ b, ...c ] = a;

console.log( b, c );                // 2 [3,4]

//Note: We've seen how ... works with arrays, but what about with objects?
// It's not an ES6 feature, but see Chapter 8 for discussion of a possible "beyond ES6" feature where ... works with spreading or gathering objects.


//Default Value Assignment
var [ a = 3, b = 6, c = 9, d = 12 ] = foo();
var { x = 5, y = 10, z = 15, w = 20 } = bar();

console.log( a, b, c, d );          // 1 2 3 12
console.log( x, y, z, w );          // 4 5 6 20