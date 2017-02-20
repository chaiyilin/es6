//The ES6 arrow function syntax uses “lexical scoping” to figure out what the value of “this” should be.
// Lexical scoping is fancy way of saying it uses “this” from the surrounding code… the code that contains the code in question.
const a = ()=> {
    this.b
};
a.b = 'property on function';
console.log(a());

const c = function () {
    this.d
};
c.d = 'property on function';
console.log(c());