//bad, should make sure you have a single default export.
// import everything, namespace import
import * as example from "./example.js";
console.log(example.sum(1,
    example.magicNumber)); // 8
console.log(example.multiply(1, 2)); // 2