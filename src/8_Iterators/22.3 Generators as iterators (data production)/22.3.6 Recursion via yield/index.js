function* foo() {
  yield "a";
  yield "b";
}

function* bar() {
  yield "x";
  yield* foo();
  yield "y";
}

const arr = [...bar()];
// ['x', 'a', 'b', 'y']
