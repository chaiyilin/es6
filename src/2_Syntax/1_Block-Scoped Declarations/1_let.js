//in es5 function
// a. regular function declaration
// b. immediately invoked function expression (IIFE)
var a = 2;

(function IIFE(){
    var a = 3;
    console.log( a );   // 3
})();

console.log( a );       // 2

//in es6 block
//let Declarations
var a = 2;

{
    let a = 3;
    console.log( a );   // 3
}

console.log( a );       // 2

// let in loop: i isn't added to the enclosing if statement scope
let a = 2;

if (a > 1) {
    let b = a * 3;
    console.log( b );       // 6

    for (let i = a; i <= b; i++) {
        let j = i + 10;
        console.log( j );
    }
    // 12 13 14 15 16

    let c = a + b;
    console.log( c );       // 8
}

//hoist
{
    console.log( a );   // undefined
    console.log( b );   // ReferenceError!

    var a;
    let b; //same as let b = undefined;
}

//typeof behaves differently with TDZ variables than it does with undeclared (or declared!) variables
{
    // `a` is not declared
    if (typeof a === "undefined") {
        console.log( "cool" );
    }

    // `b` is declared, but in its TDZ
    if (typeof b === "undefined") {     // ReferenceError!
        // ..
    }

    // ..

    let b;
}

//let declarations should all be at the top of their scope


//let + for
var funcs = [];

for (let i = 0; i < 5; i++) {
    funcs.push( function(){
        console.log( i );
    } );
}

funcs[3]();     // 3

