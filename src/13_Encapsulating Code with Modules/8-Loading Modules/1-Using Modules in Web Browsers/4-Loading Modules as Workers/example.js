// load script.js as a script
let worker = new Worker("script.js");

// load module.js as a module
let worker1 = new Worker("module.js", {type: "module"});

//a couple of exceptions: p296