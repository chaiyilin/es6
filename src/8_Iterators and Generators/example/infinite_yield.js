function* incrementer() {
    let i = 0
  
    while (true) {
      yield i++
    }
  }
  
  const counter = incrementer()

console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())