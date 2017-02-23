let a = {a:1};
let b = {a:2};

let array1 = [a, b];
console.log('native');
let array2=array1.sort((a,b)=>(a.a-b.a));
console.log(array2);
console.log(array1===array2);//change the orginal array
console.log(array1[0]===array2[0]);//object inside is the same one

console.log('lodash');
const _ = require('lodash');
array2=_.sortBy(array1,item=>item.a);
console.log(array2);
console.log(array1===array2);//not changing the orginal array
console.log(array1[0]===array2[0]);//object inside is the same one



