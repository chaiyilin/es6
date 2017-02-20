let number = 1;
console.log(typeof number);

console.log(typeof Number.prototype);
Number.prototype.addto = function (x) {
    return this + x;
};

let array = [1];
console.log(typeof array);//object
console.log(Object.prototype.toString.call(array));
console.log(array[0]);

// array indexOf primitive
console.log(array.indexOf(1));

let object1 = {a: 1};
console.log('using object reference is fine');
let array1 = [object1];
console.log(array1.indexOf(object1));

console.log('otherwise is not fine');
let array2 = [{a: 1}];
console.log(array2.indexOf(object1));

console.log('what about use toString');
let object3 = {
    a: 1
};
//by default, not meaningful
console.log(object3.toString());

let object4 = {
    a: 'object4',
    //can not use fat arrow
    toString: function () {
        return this.a
    }
};
console.log('now meaningful');
console.log(object4.toString());

let array4 = [
    {
        a: 'object4',
        //can not use fat arrow
        toString: function () {
            return this.a
        }
    }
];
console.log('indexOf with toString, not fine');
console.log(array4.indexOf(object4));

console.log('with es6 findIndex(), fine');
console.log(array4.findIndex(item=>item.toString() === object4.toString()));


let object = {a: 1};
console.log(typeof object);
//the only difference is that objects use a string while arrays use a number
console.log(object['a']);
//however
let keys = Object.keys(object);
//become similar again
console.log(object[keys[0]]);

