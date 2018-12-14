class Person7 {
  constructor(private _name: string, private _age: number) {}

  print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 살 입니다.`);
  }

  printName = (): void => {
    console.log(`이름은 ${this._name} 입니다.`);
  };

  private printAge(): void {
    console.log(`나이는 ${this._age} 살 입니다.`);
  }
}

const person: Person7 = new Person7('Mark', 36);
person.print(); // 이름은 Mark 이고, 나이는 36 살 입니다.
person.printName(); // 이름은 Mark 입니다.
// person.printAge(); // (X)
