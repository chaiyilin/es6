function* genFuncWithReturn() {
  yield "a";
  yield "b";
  return "result";
}
const genObjWithReturn = genFuncWithReturn();
genObjWithReturn.next();
genObjWithReturn.next();
genObjWithReturn.next();
// most constructs that work with iterables ignore the value inside the done object
// yield*, an operator for making recursive generator calls, does consider values inside done objects
