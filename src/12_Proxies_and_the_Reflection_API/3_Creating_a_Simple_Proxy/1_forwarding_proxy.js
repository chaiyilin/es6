let target = {};
let proxy = new Proxy(target, {});
proxy.name = "proxy";
console.log(proxy.name); // "proxy"
console.log(target.name); // "proxy"
target.name = "target";
console.log(proxy.name); // "target"
console.log(target.name); // "target"