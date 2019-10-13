const proxy = new Proxy({ a: 1 }, {
    get: (obj, prop) => {
        return prop in obj ? obj[prop] : null;
    }
});

console.log(proxy.a);