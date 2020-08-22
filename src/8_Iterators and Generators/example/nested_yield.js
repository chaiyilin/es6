function* delegate() {
    yield 3
    yield 4
  }
  
  // Outer generator function
  function* begin() {
    yield 1
    yield 2
    yield* delegate()
  }

  const generator = begin()

for (const value of generator) {
  console.log(value)
}