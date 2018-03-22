var foo = {
  a: 5,
  b: 6,
  // arrow function not allowed
  //
  get c() {
    return this.a + this.b;
  }
};
