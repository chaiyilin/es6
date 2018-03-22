var foo = {
  a: 5,
  b: 6,
  // arrow function not allowed
  // https://stackoverflow.com/questions/33827519/es6-getter-setter-with-arrow-function
  get c() {
    return this.a + this.b;
  }
};
