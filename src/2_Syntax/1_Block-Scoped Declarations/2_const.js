//If the value is complex, such as an object or array, the contents of the value can still be modified:

{
    const a = [1,2,3];
    a.push( 4 );
    console.log( a );       // [1,2,3,4]

    a = 42;                 // TypeError!
}

//Warning: Assigning an object or array as a constant means that value will not be able to be garbage collected
// until that constant's lexical scope goes away, as the reference to the value can never be unset.

//My advice: to avoid potentially confusing code, only use const for variables
// that you're intentionally and obviously signaling will not change.
// In other words, don't rely on const for code behavior, but instead use it as a tool for signaling intent,
// when intent can be signaled clearly.