var privateMethod = ()=> {
    console.log('foo');
};
var publicMethod = ()=> {
    privateMethod()
};
module.exports = {publicMethod};
