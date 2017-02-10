//https://medium.com/@mikaelbrevik/javascript-proxy-for-functions-as-object-property-accessors-ac623dd9bb39#.p489853pr
const pa = new Proxy({}, {
    // Intercept get semantics on empty object
    // target is empty object
    // property is name if the property we try to access
    get (target, property) {
        // If no property, just return a noop function.
        if (!property) return noop;
        // Return a function for accessing given property on
        // an arbitrary object passed as argument.
        return obj => obj && obj[property];
    }
});

const {name, age, foo} = pa;

let bill = {name: 'Gates', age: 57};
console.log(pa.name(bill)); //=> val 'Gates' : string
console.log(pa.age(bill)); //=> val '57' : number

const people = [
    {name: 'Jobs'},
    {name: 'Gates'}
];
console.log(people.map(pa.name)); //=> ['Jobs', 'Gates']

bill = {name: {name: 'Gates'}};
const nameOfName = compose(pa.name, ra.name);
console.log(nameOfName(bill)); //=> val 'Gates' : string
