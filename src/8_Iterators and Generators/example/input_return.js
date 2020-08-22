function* generatorFunction() {
    yield 'Neo'
    yield 'Morpheus'
    yield 'Trinity'
  
    return 'The Oracle'
  }
  
const generator = generatorFunction()
console.log(generator.next())
console.log(generator.return('There is no spoon!'))
console.log(generator.next())
