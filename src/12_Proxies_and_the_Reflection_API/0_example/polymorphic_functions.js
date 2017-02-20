//https://medium.com/@gchudnov/using-es6-proxies-for-polymorphic-functions-54a7e04eb009#.o318559aw
function createMultimethod(dispatch, noMatch) {
    if (typeof dispatch !== 'function') {
        throw new TypeError('dispatch must be a function');
    }

    const dict = {};
    if (typeof noMatch == 'function') {
        dict.noMatch = noMatch;
    }

    return new Proxy(() => {
        throw new Error('No match');
    }, {
        set(target, property, value) {
            dict[property] = value;
            return true;
        },
        apply(target, thisArg, args) {
            const value = dispatch.apply(null, args);
            const func = (value && dict.hasOwnProperty(value)
                ? dict[value]
                : (dict.hasOwnProperty('noMatch')
                ? dict['noMatch']
                : target));
            return func.apply(thisArg, args);
        }
    });
}

// maps a person to her manners
let dispatchFunc = person => person && person.manners;
// returns the default price
let noMatchFunc = () => {
    return 3.0;
};
let coffeePrice2 = createMultimethod(dispatchFunc, noMatchFunc);

coffeePrice2.polite = (person) => {
    return 2.00;
};

coffeePrice2.rude = (person) => {
    return 6.00;
};

let alice = { name: 'Alice', manners: 'polite' };
let bob = { name: 'Bob', manners: 'rude' };

console.log('$' + coffeePrice2(alice)); // $2
console.log('$' + coffeePrice2(bob));   // $6
console.log('$' + coffeePrice2({})); // $3
