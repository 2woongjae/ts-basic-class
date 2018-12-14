class Parent8 {
  constructor(protected _name: string, protected _age: number) {}

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

class Child8 extends Parent8 {
  _name = 'Mark Jr.';
}

// const p: Child8 = new Child8(); // (X)
const child8: Child8 = new Child8('', 5);
child8.print(); // 이름은 Son 이고, 나이는 5 살 입니다.
console.log(child8._name);
