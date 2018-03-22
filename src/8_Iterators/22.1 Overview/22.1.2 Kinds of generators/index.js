// Generator function declarations:
 function* genFunc() { ··· }
 const genObj = genFunc();

// Generator function expressions:
 const genFunc = function* () { ··· };
 const genObj = genFunc();

// Generator method definitions in object literals:
 const obj = {
     * generatorMethod() {
         ···
     }
 };
 const genObj = obj.generatorMethod();

// Generator method definitions in class definitions (class declarations or class expressions):
 class MyClass {
     * generatorMethod() {
         ···
     }
 }
 const myInst = new MyClass();
 const genObj = myInst.generatorMethod();