function* objectEntries(obj) {
  // In ES6, you can use strings or symbols as property keys,
  // Reflect.ownKeys() retrieves both
  const propKeys = Reflect.ownKeys(obj);

  for (const propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

const jane = { first: "Jane", last: "Doe" };
for (const [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
