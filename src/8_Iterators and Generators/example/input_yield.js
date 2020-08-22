function* generatorFunction() {
    console.log(yield)
    console.log(yield)
  
    return 'The end'
  }
  
  const generator = generatorFunction()
  
  generator.next()
  generator.next(100)
  generator.next(200)