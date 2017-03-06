class A {

    a() {
        this.b = 'b'
    };
}

let a = new A();
a.a();
console.log(a.b);

const _ = require('lodash');
function c() {
    this.d = 'd';
}
_.assign(a, {c: c});
a.c();
console.log(a.d);