function* genFunc() {
  throw new Error("Problem!");
}
const genObj = genFunc();
genObj.next();

// next() can produce three different “results”
// 1.{ value: x, done: false }
// 2.{ value: z, done: true }
// 3. exception
