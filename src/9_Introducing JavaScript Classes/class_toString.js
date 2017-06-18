class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return this.name;
  }

  toString() {
    return this.sayName()
  }
}

let person=new PersonClass('aaa')
console.log('a'+person)