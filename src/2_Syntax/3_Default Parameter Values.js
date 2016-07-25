//1. Default Parameter Values
 function foo(x = 11, y = 31) {
    console.log( x + y );
}

foo();                  // 42
foo( 5, 6 );            // 11
foo( 0, 42 );           // 42

foo( 5 );               // 36
foo( 5, undefined );    // 36 <-- `undefined` is missing
foo( 5, null );         // 5  <-- null coerces to `0`

foo( undefined, 6 );    // 17 <-- `undefined` is missing
foo( null, 6 );         // 6  <-- null coerces to `0`

//Note: A rest/gather parameter (see "Spread/Rest") cannot have a default value.
// So, while function foo(...vals=[1,2,3]) { might seem an intriguing capability, it's not valid syntax.
// You'll need to continue to apply that sort of logic manually if necessary.

//2. 4_Default Value Expressions