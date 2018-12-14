class Person10 {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    // 작업
    this._name = `${name} Lee`;
  }
}

const person10: Person10 = new Person10('Mark', 36);

console.log(person10.name);
person10.name = 'Woongjae';
console.log(person10.name);
