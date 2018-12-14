class Person4 {
  public name!: string;
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }
}

const person4: Person4 = new Person4(36);
person4.name = 'Mark';
// person._age (X)
console.log(person4); // Person {name: 'Mark', _age: 36}
