function* objectEntries(obj) {
  const propKeys = Reflect.ownKeys(obj);

  for (const propKey of propKeys) {
    // `yield` returns a value and then pauses
    // the generator. Later, execution continues
    // where it was previously paused.
    yield [propKey, obj[propKey]];
  }
}
const jane = { first: "Jane", last: "Doe" };
for (const [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
