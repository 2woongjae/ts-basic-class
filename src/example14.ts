abstract class AbstractPerson14 {
  protected _name: string = 'Mark';
  abstract setName(name: string): void;
}

class Person14 extends AbstractPerson14 {
  setName(name: string): void {
    this._name = name;
  }
}

// const person14 = new AbstractPerson14(); // (X)
const person14 = new Person14();
