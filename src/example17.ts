class Person17 {
  private readonly _name: string;
  public readonly age: number = 36;

  constructor(name: string) {
    this._name = name;
  }

  public setName(name: string) {
    // this._name = name; (X)
  }
}

const person17: Person17 = new Person17('Mark');
console.log(person17.age);
// person17.age = 37; // (X)
