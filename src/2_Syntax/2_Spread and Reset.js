//When ... is used in front of an array (actually, any iterable, which we cover in Chapter 3),
// it acts to "spread" it out into its individual values.
function foo(x,y,z) {
    console.log( x, y, z );
}

foo( ...[1,2,3] );              // 1 2 3

//give us a simpler syntactic replacement for the apply(..) method, which we would typically have used pre-ES6 as:

foo.apply( null, [1,2,3] );     // 1 2 3

//spread out/expand a value in other contexts
var a = [2,3,4];
var b = [ 1, ...a, 5 ];

console.log( b );                   // [1,2,3,4,5]

//opposite
//solid alternative to using the long-since-deprecated arguments array
// -- actually, it's not really an array, but an array-like object
function foo(x, y, ...z) {
    console.log( x, y, z );
}

foo( 1, 2, 3, 4, 5 );           // 1 2 [3,4,5]

