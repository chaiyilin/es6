function* generatorFunction() {
    yield 'Neo'
    yield 'Morpheus'
    yield 'Trinity'
  
    return 'The Oracle'
  }
  
  const generator = generatorFunction()

// suspended
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
// running
// closed