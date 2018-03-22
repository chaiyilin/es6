function* genFuncWithReturn() {
  yield "a";
  yield "b";
  return "result";
}
const genObjWithReturn = genFuncWithReturn();
console.log(genObjWithReturn.next());
console.log(genObjWithReturn.next());
console.log(genObjWithReturn.next());
// most constructs that work with iterables ignore the value inside the done object
// yield*, an operator for making recursive generator calls, does consider values inside done objects
