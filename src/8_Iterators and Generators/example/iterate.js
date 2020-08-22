function* generatorFunction() {
    yield 'Neo'
    yield 'Morpheus'
    yield 'Trinity'
  
    return 'The Oracle'
  }
  
  const generator = generatorFunction()

  for (const value of generator) {
    console.log(value)
  }

  console.log('generator:',...generator)
