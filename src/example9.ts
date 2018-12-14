class Parent9 {
  constructor(protected _name: string, private _age: number) {}

  print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 살 입니다.`);
  }

  protected printName = (): void => {
    console.log(`이름은 ${this._name} 입니다.`);
  };

  protected printAge(): void {
    console.log(`나이는 ${this._age} 살 입니다.`);
  }
}

class Child9 extends Parent9 {
  constructor(age: number) {
    super('Mark Jr.', age);

    this.printName();
    this.printAge();
  }
}

const child9: Child9 = new Child9(1);
// 이름은 Son 입니다.
// 나이는 1 살 입니다.
