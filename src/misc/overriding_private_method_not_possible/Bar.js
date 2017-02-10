var foo = require('./foo');
foo.__proto__.privateMethod=()=>{
    console.log('bar');
};

foo.publicMethod();

function getMethods(obj) {
    var result = [];
    for (var id in obj) {
        try {
            if (typeof(obj[id]) == "function") {
                result.push(id + ": " + obj[id].toString());
            }
        } catch (err) {
            result.push(id + ": inaccessible");
        }
    }
    return result;
}

console.log(getMethods(foo).join("\n"));