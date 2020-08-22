function* generatorFunction() {
  try {
    yield 'Neo'
    yield 'Morpheus'
  } catch (error) {
    console.log(error)
  }
}
  
const generator = generatorFunction()
console.log(generator.next())
console.log(generator.throw(new Error('Agent Smith!')))
//console.log(generator.next())
