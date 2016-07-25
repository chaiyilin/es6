//In pre-ES6 environments, foo() would print "2" regardless of the value of something, because both function declarations were hoisted out of the blocks, and the second one always wins.
//In ES6, that last line throws a ReferenceError.
if (something) {
    function foo() {
        console.log( "1" );
    }
}
else {
    function foo() {
        console.log( "2" );
    }
}

foo();      // ??

