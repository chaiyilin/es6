function* fibonacci() {
    let prev = 0
    let next = 1
  
    yield prev
    yield next
  
    // Add previous and next values and yield them forever
    while (true) {
      const newVal = next + prev
  
      yield newVal
  
      prev = next
      next = newVal
    }
  }

  const fib = fibonacci()

for (let i = 0; i < 10; i++) {
  console.log(fib.next().value)
}

