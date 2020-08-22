function* generatorFunction() {
    return 'Hello, Generator!'
  }

const generated=generatorFunction()
//only in browser, can see the state
console.log(generated)
