function* genFunc() {
  // (A)
  console.log("First");
  yield;
  console.log("Second");
}

const genObj = genFunc();
genObj.next();
genObj.next();
